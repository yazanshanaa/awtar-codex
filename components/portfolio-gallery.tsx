'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { PortfolioCategory, PortfolioItem } from '@/content/data';
import type { Locale } from '@/lib/constants';

type PortfolioLocaleData = {
  chips: Record<'all' | PortfolioCategory, string>;
  fields: { city: string; paintType: string; duration: string; days: string };
  actions: { open: string; close: string; next: string; prev: string };
  labels: Record<string, string>;
};

export function PortfolioGallery({
  locale,
  isRtl,
  items,
  content,
  quoteLabel,
  whatsappLabel,
  phone
}: {
  locale: Locale;
  isRtl: boolean;
  items: PortfolioItem[];
  content: PortfolioLocaleData;
  quoteLabel: string;
  whatsappLabel: string;
  phone: string;
}) {
  const [activeFilter, setActiveFilter] = useState<'all' | PortfolioCategory>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const visibleItems = useMemo(
    () => (activeFilter === 'all' ? items : items.filter((item) => item.category === activeFilter)),
    [activeFilter, items]
  );

  const activeItem = activeItemIndex !== null ? visibleItems[activeItemIndex] : null;

  useEffect(() => {
    if (!activeItem) return;

    const previous = document.activeElement as HTMLElement | null;
    triggerRef.current = previous;
    closeBtnRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveItemIndex(null);
        setActiveImageIndex(0);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeItem]);

  return (
    <>
      <div className={`mb-6 flex flex-wrap gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
        {(Object.keys(content.chips) as Array<'all' | PortfolioCategory>).map((key) => {
          const selected = key === activeFilter;
          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveFilter(key);
                setActiveItemIndex(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                selected ? 'border-gold bg-gold text-black' : 'border-border bg-surface hover:border-gold'
              }`}
              aria-pressed={selected}
            >
              {content.chips[key]}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => (
          <article key={item.id} className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <Image
              src={item.images[0].src}
              alt={content.labels[item.images[0].altKey]}
              width={1200}
              height={800}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{content.labels[item.titleKey]}</h2>
              <p className="mt-1 text-sm text-fg/80">{content.labels[item.summaryKey]}</p>
              <button
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveItemIndex(index);
                  setActiveImageIndex(0);
                }}
                className="mt-4 rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {content.actions.open}
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 sm:items-center" role="presentation" onClick={() => setActiveItemIndex(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={content.labels[activeItem.titleKey]}
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-border bg-bg p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{content.labels[activeItem.titleKey]}</h3>
                <p className="text-sm text-fg/80">{content.labels[activeItem.summaryKey]}</p>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setActiveItemIndex(null)}
                className="rounded-lg border border-border px-3 py-2 text-sm transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {content.actions.close}
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src={activeItem.images[activeImageIndex].src}
                alt={content.labels[activeItem.images[activeImageIndex].altKey]}
                width={1200}
                height={800}
                className="h-auto w-full"
                sizes="100vw"
              />
            </div>

            {activeItem.images.length > 1 && (
              <div className={`mt-3 flex gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex((i) => (i - 1 + activeItem.images.length) % activeItem.images.length)}
                  className="rounded border border-border px-3 py-1.5 text-sm hover:border-gold"
                >
                  {content.actions.prev}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex((i) => (i + 1) % activeItem.images.length)}
                  className="rounded border border-border px-3 py-1.5 text-sm hover:border-gold"
                >
                  {content.actions.next}
                </button>
              </div>
            )}

            <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface p-3">
                <dt className="font-medium text-gold">{content.fields.city}</dt>
                <dd>{activeItem.city}</dd>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <dt className="font-medium text-gold">{content.fields.paintType}</dt>
                <dd>{activeItem.paintType}</dd>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <dt className="font-medium text-gold">{content.fields.duration}</dt>
                <dd>{activeItem.durationDays} {content.fields.days}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/${locale}/quote`} className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90">
                {quoteLabel}
              </Link>
              <a href={`https://wa.me/${phone.replace(/[^\d]/g, '')}`} className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:border-gold">
                {whatsappLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
