import { NextResponse, type NextRequest } from 'next/server';
import { quoteSchema } from '@/lib/quote-validation';
import { takeRateLimitToken } from '@/lib/rate-limit';

const MIN_SUBMIT_MS = 4000;
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');
  if (!host) return false;

  try {
    const originHost = origin ? new URL(origin).host : null;
    const refererHost = referer ? new URL(referer).host : null;
    return (originHost === null || originHost === host) && (refererHost === null || refererHost === host);
  } catch {
    return false;
  }
}

async function parsePayload(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      const json = await request.json();
      return {
        input: {
          locale: String(json.locale || 'ar'),
          name: String(json.name || ''),
          phone: String(json.phone || ''),
          area: String(json.area || ''),
          service: String(json.service || ''),
          sizes: String(json.sizes || ''),
          description: String(json.description || ''),
          preferredTime: String(json.preferredTime || ''),
          honeypot: String(json.company || ''),
          startedAt: Number(json.startedAt || 0)
        },
        fileCount: 0
      };
    } catch {
      return null;
    }
  }

  try {
    const form = await request.formData();
    const files = form.getAll('images').filter((entry): entry is File => entry instanceof File);

    return {
      input: {
        locale: String(form.get('locale') || 'ar'),
        name: String(form.get('name') || ''),
        phone: String(form.get('phone') || ''),
        area: String(form.get('area') || ''),
        service: String(form.get('service') || ''),
        sizes: String(form.get('sizes') || ''),
        description: String(form.get('description') || ''),
        preferredTime: String(form.get('preferredTime') || ''),
        honeypot: String(form.get('company') || ''),
        startedAt: Number(form.get('startedAt') || 0)
      },
      fileCount: files.length
    };
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isSameOrigin(request)) {
      return NextResponse.json({ success: false, message: 'Invalid request source.' }, { status: 403 });
    }

    const parsedPayload = await parsePayload(request);
    if (!parsedPayload) {
      return NextResponse.json({ success: false, message: 'Invalid payload.' }, { status: 400 });
    }

    const parsed = quoteSchema.safeParse(parsedPayload.input);
    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'Invalid form data.' }, { status: 400 });
    }

    const now = Date.now();
    if (now - parsed.data.startedAt < MIN_SUBMIT_MS) {
      return NextResponse.json({ success: false, message: 'Please take a moment and try again.' }, { status: 400 });
    }

    const ip = getClientIp(request);
    const tokenAccepted = takeRateLimitToken(`${ip}:/api/quote`, RATE_LIMIT, WINDOW_MS);
    if (!tokenAccepted) {
      return NextResponse.json({ success: false, message: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    // TODO: integrate secure upload provider (S3/Cloudinary) using server-side env vars.

    console.info('[quote_submission]', {
      at: new Date().toISOString(),
      success: true,
      locale: parsed.data.locale,
      service: parsed.data.service,
      fileCount: Math.min(parsedPayload.fileCount, 5)
    });

    return NextResponse.json({ success: true, message: 'Submitted successfully.' }, { status: 200 });
  } catch {
    console.info('[quote_submission]', { at: new Date().toISOString(), success: false });
    return NextResponse.json({ success: false, message: 'Unable to process request.' }, { status: 500 });
  }
}
