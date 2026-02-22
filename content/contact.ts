import type { Locale } from '@/lib/constants';

export type ContactContent = {
  heading: string;
  description: string;
  buttons: {
    whatsapp: string;
    call: string;
    openMap: string;
    loadMap: string;
  };
  labels: {
    hours: string;
    address: string;
    social: string;
  };
  socials: { label: string; href: string }[];
  hours: string[];
  addressText: string;
  mapQuery: string;
};

export const contactContentByLocale: Record<Locale, ContactContent> = {
  ar: {
    heading: 'اتصل بنا',
    description: 'نحن جاهزون للرد على استفساراتك وترتيب زيارة قياس للموقع.',
    buttons: { whatsapp: 'تواصل واتساب', call: 'اتصال مباشر', openMap: 'فتح في خرائط Google', loadMap: 'عرض الخريطة' },
    labels: { hours: 'ساعات العمل', address: 'العنوان', social: 'حسابات التواصل' },
    socials: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' }
    ],
    hours: ['السبت - الخميس: 8:00 ص - 6:00 م', 'الجمعة: مواعيد خاصة حسب التنسيق'],
    addressText: 'المنطقة الصناعية، المدينة',
    mapQuery: 'Industrial Zone, Riyadh'
  },
  en: {
    heading: 'Contact Us',
    description: 'We are ready to answer your questions and schedule an on-site measurement.',
    buttons: { whatsapp: 'WhatsApp Now', call: 'Call Now', openMap: 'Open in Google Maps', loadMap: 'Load Map' },
    labels: { hours: 'Working Hours', address: 'Address', social: 'Social Links' },
    socials: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' }
    ],
    hours: ['Sat - Thu: 8:00 AM - 6:00 PM', 'Friday: by appointment'],
    addressText: 'Industrial Zone, City',
    mapQuery: 'Industrial Zone, Riyadh'
  },
  he: {
    heading: 'צור קשר',
    description: 'נשמח לענות על שאלות ולתאם מדידה בשטח.',
    buttons: { whatsapp: 'וואטסאפ עכשיו', call: 'התקשרו עכשיו', openMap: 'פתח ב-Google Maps', loadMap: 'טען מפה' },
    labels: { hours: 'שעות פעילות', address: 'כתובת', social: 'רשתות חברתיות' },
    socials: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' }
    ],
    hours: ['שבת - חמישי: 8:00 - 18:00', 'שישי: בתיאום מראש'],
    addressText: 'אזור תעשייה, עיר',
    mapQuery: 'Industrial Zone, Riyadh'
  }
};
