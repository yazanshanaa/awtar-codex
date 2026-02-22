import type { Locale } from '@/lib/constants';

export type ServiceItem = {
  key: 'doors' | 'railings' | 'grills' | 'windows' | 'maintenance';
  title: string;
  description: string;
  bullets: string[];
  images: { src: string; alt: string }[];
};

export type ServicesPageContent = {
  introTitle: string;
  introBody: string;
  services: ServiceItem[];
};

export const servicesContentByLocale: Record<Locale, ServicesPageContent> = {
  ar: {
    introTitle: 'خدمات الحديد والتصنيع',
    introBody: 'نوفر حلول تصنيع وتركيب وصيانة بتشطيب احترافي للمنازل والمشاريع التجارية.',
    services: [
      {
        key: 'doors',
        title: 'أبواب حديد',
        description: 'أبواب حديد قوية بتصاميم عملية أو ديكورية حسب طلبك.',
        bullets: ['تفصيل حسب المقاس', 'خيارات قفل متعددة', 'دهان مقاوم للعوامل الجوية'],
        images: [
          { src: '/images/after-work.svg', alt: 'باب حديد بعد التنفيذ' },
          { src: '/images/before-work.svg', alt: 'موقع قبل تركيب باب حديد' }
        ]
      },
      {
        key: 'railings',
        title: 'درابزين',
        description: 'درابزين داخلي وخارجي بأمان عالي ولمسة جمالية.',
        bullets: ['درابزين سلالم وبلكونات', 'ارتفاعات آمنة حسب الاستخدام', 'تشطيب ناعم ومتين'],
        images: [{ src: '/images/after-work.svg', alt: 'درابزين حديد حديث' }]
      },
      {
        key: 'grills',
        title: 'شبك حديد',
        description: 'حلول شبك حماية للنوافذ والفتحات مع تصميم مرتب.',
        bullets: ['حماية عملية', 'تركيب سريع', 'ألوان متعددة'],
        images: [{ src: '/images/after-work.svg', alt: 'شبك حديد للحماية' }]
      },
      {
        key: 'windows',
        title: 'شبابيك حديد',
        description: 'شبابيك حديد حسب الطلب للمنازل والمستودعات.',
        bullets: ['تفصيل دقيق للمقاسات', 'خامات مقاومة للصدأ', 'سهولة الصيانة'],
        images: [{ src: '/images/before-work.svg', alt: 'شباك قبل التركيب' }]
      },
      {
        key: 'maintenance',
        title: 'صيانة الحديد',
        description: 'إصلاح وتجديد وصيانة دورية للمشغولات الحديدية.',
        bullets: ['معالجة الصدأ', 'إعادة دهان', 'استبدال القطع التالفة'],
        images: [{ src: '/images/after-work.svg', alt: 'أعمال صيانة حديد' }]
      }
    ]
  },
  en: {
    introTitle: 'Ironwork & Fabrication Services',
    introBody: 'We provide fabrication, installation, and maintenance with durable finishes for homes and commercial projects.',
    services: [
      {
        key: 'doors',
        title: 'Iron Doors',
        description: 'Strong iron doors with practical and decorative options.',
        bullets: ['Custom sizing', 'Multiple lock options', 'Weather-resistant coating'],
        images: [
          { src: '/images/after-work.svg', alt: 'Iron door after installation' },
          { src: '/images/before-work.svg', alt: 'Site before iron door installation' }
        ]
      },
      {
        key: 'railings',
        title: 'Railings',
        description: 'Interior and exterior railings with safety and clean aesthetics.',
        bullets: ['Stair and balcony systems', 'Safe heights by use case', 'Smooth durable finishing'],
        images: [{ src: '/images/after-work.svg', alt: 'Modern iron railing' }]
      },
      {
        key: 'grills',
        title: 'Iron Grills',
        description: 'Protective grill solutions for windows and openings.',
        bullets: ['Practical protection', 'Fast installation', 'Multiple paint colors'],
        images: [{ src: '/images/after-work.svg', alt: 'Protective iron grill' }]
      },
      {
        key: 'windows',
        title: 'Iron Windows',
        description: 'Custom iron windows for homes, shops, and storage spaces.',
        bullets: ['Precise measurements', 'Anti-rust materials', 'Simple maintenance'],
        images: [{ src: '/images/before-work.svg', alt: 'Window area before installation' }]
      },
      {
        key: 'maintenance',
        title: 'Iron Maintenance',
        description: 'Repair, refinishing, and scheduled maintenance for ironwork.',
        bullets: ['Rust treatment', 'Repainting', 'Damaged parts replacement'],
        images: [{ src: '/images/after-work.svg', alt: 'Iron maintenance work' }]
      }
    ]
  },
  he: {
    introTitle: 'שירותי ברזל וייצור',
    introBody: 'אנו מספקים ייצור, התקנה ותחזוקה בגימור עמיד לבתים ולעסקים.',
    services: [
      {
        key: 'doors',
        title: 'דלתות ברזל',
        description: 'דלתות ברזל חזקות בעיצוב פרקטי או דקורטיבי.',
        bullets: ['התאמה אישית לפי מידה', 'אפשרויות נעילה שונות', 'צבע עמיד למזג אוויר'],
        images: [
          { src: '/images/after-work.svg', alt: 'דלת ברזל לאחר התקנה' },
          { src: '/images/before-work.svg', alt: 'אתר לפני התקנת דלת ברזל' }
        ]
      },
      {
        key: 'railings',
        title: 'מעקות',
        description: 'מעקות פנים וחוץ עם בטיחות גבוהה ומראה נקי.',
        bullets: ['למדרגות ומרפסות', 'גובה בטיחותי בהתאם לשימוש', 'גימור חלק ועמיד'],
        images: [{ src: '/images/after-work.svg', alt: 'מעקה ברזל מודרני' }]
      },
      {
        key: 'grills',
        title: 'סורגים',
        description: 'פתרונות סורגים להגנה על חלונות ופתחים.',
        bullets: ['הגנה יעילה', 'התקנה מהירה', 'מבחר צבעים'],
        images: [{ src: '/images/after-work.svg', alt: 'סורג ברזל להגנה' }]
      },
      {
        key: 'windows',
        title: 'חלונות ברזל',
        description: 'חלונות ברזל בהתאמה אישית לבתים, חנויות ומחסנים.',
        bullets: ['מדידה מדויקת', 'חומרים נגד חלודה', 'תחזוקה נוחה'],
        images: [{ src: '/images/before-work.svg', alt: 'פתח חלון לפני התקנה' }]
      },
      {
        key: 'maintenance',
        title: 'תחזוקת ברזל',
        description: 'תיקון, חידוש ותחזוקה תקופתית לעבודות ברזל.',
        bullets: ['טיפול בחלודה', 'צביעה מחדש', 'החלפת חלקים פגומים'],
        images: [{ src: '/images/after-work.svg', alt: 'עבודת תחזוקת ברזל' }]
      }
    ]
  }
};
