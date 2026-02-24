import type { Locale } from '@/lib/constants';

export type HomeContent = {
  hero: {
    title: string;
    trustLine: string;
  };
  beforeAfter: {
    title: string;
    items: { title: string; imageSrc: string; imageAlt: string }[];
  };
  services: {
    title: string;
    items: { id: string; title: string; description: string }[];
  };
  whyUs: {
    title: string;
    points: string[];
  };
  testimonials: {
    title: string;
    items: { name: string; quote: string }[];
  };
};

export const homeContentByLocale: Record<Locale, HomeContent> = {
  ar: {
    hero: {
      title: 'تصنيع وتركيب أبواب حديد / درابزين / شبك / شبابيك + صيانة',
      trustLine: 'تركيب سريع • ضمان على التنفيذ • قياسات دقيقة'
    },
    beforeAfter: {
      title: 'قبل / بعد',
      items: [
        { title: 'قبل التنفيذ', imageSrc: '/images/before-work.svg', imageAlt: 'واجهة قبل تركيب الحديد' },
        { title: 'بعد التنفيذ', imageSrc: '/images/after-work.svg', imageAlt: 'واجهة بعد تركيب الحديد' }
      ]
    },
    services: {
      title: 'خدمات سريعة',
      items: [
        { id: 'doors', title: 'أبواب حديد', description: 'أبواب آمنة بتشطيب متين' },
        { id: 'railings', title: 'درابزين', description: 'تصميمات داخلية وخارجية' },
        { id: 'grills', title: 'شبك حديد', description: 'حماية مع مظهر أنيق' },
        { id: 'windows', title: 'شبابيك حديد', description: 'تصنيع وتركيب حسب المقاس' },
        { id: 'maintenance', title: 'صيانة', description: 'صيانة ودهان واستبدال قطع' }
      ]
    },
    whyUs: {
      title: 'لماذا نحن؟',
      points: ['زيارة قياس مجانية داخل المدينة', 'فريق تنفيذ محترف', 'تسليم في الوقت المتفق عليه', 'خامات موثوقة ومعالجة ضد الصدأ']
    },
    testimonials: {
      title: 'آراء العملاء',
      items: [
        { name: 'أبو عمر', quote: 'الشغل مرتب والتسليم كان أسرع من المتوقع.' },
        { name: 'سارة', quote: 'تم تنفيذ الدرابزين بدقة عالية.' },
        { name: 'مؤسسة الواجهة', quote: 'تعاون احترافي وأسعار مناسبة.' },
        { name: 'محمد', quote: 'قياسات ممتازة بدون أي أخطاء.' },
        { name: 'ريم', quote: 'خدمة صيانة ممتازة وسريعة.' },
        { name: 'شركة البناء الحديث', quote: 'نعتمد عليهم في أغلب مشاريعنا.' }
      ]
    }
  },
  en: {
    hero: {
      title: 'Fabrication & Installation of Iron Doors / Railings / Grilles / Windows + Maintenance',
      trustLine: 'Fast installation • Work warranty • Accurate site measurements'
    },
    beforeAfter: {
      title: 'Before / After',
      items: [
        { title: 'Before', imageSrc: '/images/before-work.svg', imageAlt: 'Facade before ironwork installation' },
        { title: 'After', imageSrc: '/images/after-work.svg', imageAlt: 'Facade after ironwork installation' }
      ]
    },
    services: {
      title: 'Quick Services',
      items: [
        { id: 'doors', title: 'Iron Doors', description: 'Secure doors with durable finish' },
        { id: 'railings', title: 'Railings', description: 'Interior and exterior systems' },
        { id: 'grills', title: 'Iron Grills', description: 'Protection with clean style' },
        { id: 'windows', title: 'Iron Windows', description: 'Custom-sized window fabrication' },
        { id: 'maintenance', title: 'Maintenance', description: 'Repair, coating, and replacement' }
      ]
    },
    whyUs: {
      title: 'Why Choose Us',
      points: ['Free on-site measurement in city limits', 'Skilled fabrication and installation team', 'On-time delivery and clear scheduling', 'Reliable anti-rust treated materials']
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        { name: 'Omar A.', quote: 'Clean execution and faster-than-expected delivery.' },
        { name: 'Sara K.', quote: 'Railing quality and finishing were excellent.' },
        { name: 'Facade Co.', quote: 'Professional communication and fair pricing.' },
        { name: 'Mohammed R.', quote: 'Measurement accuracy was spot on.' },
        { name: 'Reem H.', quote: 'Maintenance service was quick and effective.' },
        { name: 'Modern Build LLC', quote: 'We rely on them for repeated projects.' }
      ]
    }
  },
  he: {
    hero: {
      title: 'ייצור והתקנה של דלתות ברזל / מעקות / סורגים / חלונות + תחזוקה',
      trustLine: 'התקנה מהירה • אחריות על העבודה • מדידות מדויקות'
    },
    beforeAfter: {
      title: 'לפני / אחרי',
      items: [
        { title: 'לפני', imageSrc: '/images/before-work.svg', imageAlt: 'חזית לפני התקנת ברזל' },
        { title: 'אחרי', imageSrc: '/images/after-work.svg', imageAlt: 'חזית אחרי התקנת ברזל' }
      ]
    },
    services: {
      title: 'שירותים מהירים',
      items: [
        { id: 'doors', title: 'דלתות ברזל', description: 'דלתות בטוחות עם גימור עמיד' },
        { id: 'railings', title: 'מעקות', description: 'פתרונות פנים וחוץ' },
        { id: 'grills', title: 'סורגים', description: 'הגנה עם מראה נקי' },
        { id: 'windows', title: 'חלונות ברזל', description: 'ייצור חלונות לפי מידה' },
        { id: 'maintenance', title: 'תחזוקה', description: 'תיקון, צבע והחלפת חלקים' }
      ]
    },
    whyUs: {
      title: 'למה לבחור בנו?',
      points: ['מדידה חינם בשטח בתוך העיר', 'צוות ייצור והתקנה מיומן', 'אספקה בזמן ותיאום ברור', 'חומרים אמינים עם טיפול נגד חלודה']
    },
    testimonials: {
      title: 'לקוחות ממליצים',
      items: [
        { name: 'עומר', quote: 'ביצוע נקי ומסירה מהירה מהצפוי.' },
        { name: 'שרה', quote: 'המעקה יצא איכותי ומדויק.' },
        { name: 'חברת פאסאד', quote: 'שירות מקצועי ומחיר הוגן.' },
        { name: 'מוחמד', quote: 'המדידות היו מדויקות מאוד.' },
        { name: 'רים', quote: 'תחזוקה מהירה ואיכותית.' },
        { name: 'מודרן בילד', quote: 'עובדים איתם בפרויקטים חוזרים.' }
      ]
    }
  }
};
