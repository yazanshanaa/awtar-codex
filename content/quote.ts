import type { Locale } from '@/lib/constants';

export type QuoteContent = {
  heading: string;
  description: string;
  fields: {
    name: string;
    phone: string;
    area: string;
    service: string;
    sizes: string;
    description: string;
    images: string;
    preferredTime: string;
  };
  placeholders: {
    name: string;
    phone: string;
    area: string;
    sizes: string;
    description: string;
    preferredTime: string;
  };
  serviceOptions: { value: string; label: string }[];
  actions: {
    whatsapp: string;
    submit: string;
    sending: string;
  };
  states: {
    success: string;
    error: string;
  };
  validation: {
    required: string;
    phone: string;
    descMin: string;
  };
  whatsappTemplate: string;
};

export const quoteContentByLocale: Record<Locale, QuoteContent> = {
  ar: {
    heading: 'اطلب عرض سعر',
    description: 'أرسل تفاصيل المشروع وسنعود لك بتقدير مبدئي سريع.',
    fields: {
      name: 'الاسم',
      phone: 'رقم الجوال',
      area: 'المنطقة / الحي',
      service: 'الخدمة',
      sizes: 'المقاسات التقريبية (اختياري)',
      description: 'وصف الطلب',
      images: 'صور مبدئية (اختياري)',
      preferredTime: 'وقت التواصل المفضل (اختياري)'
    },
    placeholders: {
      name: 'مثال: محمد أحمد',
      phone: '05xxxxxxxx',
      area: 'الرياض - حي النرجس',
      sizes: 'مثال: 2.1م × 1م',
      description: 'اشرح المطلوب باختصار...',
      preferredTime: 'مثال: بعد المغرب'
    },
    serviceOptions: [
      { value: 'doors', label: 'أبواب' },
      { value: 'railings', label: 'درابزين' },
      { value: 'grills', label: 'شبك' },
      { value: 'windows', label: 'شبابيك' },
      { value: 'maintenance', label: 'صيانة' }
    ],
    actions: { whatsapp: 'إرسال عبر واتساب', submit: 'إرسال الطلب', sending: 'جاري الإرسال...' },
    states: { success: 'تم إرسال طلبك بنجاح. سنتواصل معك قريبًا.', error: 'تعذر إرسال الطلب. حاول مرة أخرى.' },
    validation: { required: 'هذا الحقل مطلوب.', phone: 'رقم الجوال غير صحيح.', descMin: 'الوصف قصير جدًا.' },
    whatsappTemplate: 'مرحبًا، أريد عرض سعر.%0Aالاسم: {{name}}%0Aالجوال: {{phone}}%0Aالخدمة: {{service}}%0Aالمنطقة: {{area}}%0Aالوصف: {{description}}'
  },
  en: {
    heading: 'Request a Quote',
    description: 'Share your project details and we will send a quick estimate.',
    fields: {
      name: 'Name',
      phone: 'Phone',
      area: 'Area / District',
      service: 'Service',
      sizes: 'Approximate Sizes (optional)',
      description: 'Project Description',
      images: 'Reference Images (optional)',
      preferredTime: 'Preferred Contact Time (optional)'
    },
    placeholders: {
      name: 'e.g. Omar Khalid',
      phone: '+9665xxxxxxxx',
      area: 'Riyadh - Al Narjis',
      sizes: 'e.g. 2.1m × 1m',
      description: 'Briefly describe your request...',
      preferredTime: 'e.g. Evening'
    },
    serviceOptions: [
      { value: 'doors', label: 'Doors' },
      { value: 'railings', label: 'Railings' },
      { value: 'grills', label: 'Grills' },
      { value: 'windows', label: 'Windows' },
      { value: 'maintenance', label: 'Maintenance' }
    ],
    actions: { whatsapp: 'Send via WhatsApp', submit: 'Submit Request', sending: 'Sending...' },
    states: { success: 'Your request was sent successfully. We will contact you soon.', error: 'Request failed. Please try again.' },
    validation: { required: 'This field is required.', phone: 'Phone format is invalid.', descMin: 'Description is too short.' },
    whatsappTemplate: 'Hello, I need a quote.%0AName: {{name}}%0APhone: {{phone}}%0AService: {{service}}%0AArea: {{area}}%0ADescription: {{description}}'
  },
  he: {
    heading: 'בקשת הצעת מחיר',
    description: 'שלחו פרטי פרויקט ונחזור אליכם עם הערכה מהירה.',
    fields: {
      name: 'שם',
      phone: 'טלפון',
      area: 'אזור / שכונה',
      service: 'שירות',
      sizes: 'מידות משוערות (אופציונלי)',
      description: 'תיאור הבקשה',
      images: 'תמונות לדוגמה (אופציונלי)',
      preferredTime: 'זמן יצירת קשר מועדף (אופציונלי)'
    },
    placeholders: {
      name: 'למשל: עומר כהן',
      phone: '+9725xxxxxxxx',
      area: 'תל אביב - מרכז',
      sizes: 'למשל: 2.1m × 1m',
      description: 'תארו בקצרה את הבקשה...',
      preferredTime: 'למשל: בערב'
    },
    serviceOptions: [
      { value: 'doors', label: 'דלתות' },
      { value: 'railings', label: 'מעקות' },
      { value: 'grills', label: 'סורגים' },
      { value: 'windows', label: 'חלונות' },
      { value: 'maintenance', label: 'תחזוקה' }
    ],
    actions: { whatsapp: 'שליחה בוואטסאפ', submit: 'שליחת בקשה', sending: 'שולח...' },
    states: { success: 'הבקשה נשלחה בהצלחה. נחזור אליכם בהקדם.', error: 'שליחת הבקשה נכשלה. נסו שוב.' },
    validation: { required: 'שדה זה חובה.', phone: 'פורמט הטלפון לא תקין.', descMin: 'התיאור קצר מדי.' },
    whatsappTemplate: 'שלום, אני צריך הצעת מחיר.%0Aשם: {{name}}%0Aטלפון: {{phone}}%0Aשירות: {{service}}%0Aאזור: {{area}}%0Aתיאור: {{description}}'
  }
};
