import type { Locale } from '@/lib/constants';

export type AboutContent = {
  heading: string;
  intro: string;
  storyTitle: string;
  storyBody: string;
  experienceLabel: string;
  yearsExperience: number;
  areasTitle: string;
  areas: string[];
  workshopTitle: string;
  workshopImages: { src: string; alt: string }[];
  warrantyTitle: string;
  warrantyBody: string;
};

export const aboutContentByLocale: Record<Locale, AboutContent> = {
  ar: {
    heading: 'من نحن',
    intro: 'نحن ورشة متخصصة في تصنيع وتركيب الحديد للمنازل والمشاريع التجارية.',
    storyTitle: 'قصتنا',
    storyBody: 'بدأنا كفريق صغير يهتم بالدقة وجودة التشطيب، وتوسعنا تدريجيًا لنخدم مشاريع متعددة مع نفس معايير الالتزام.',
    experienceLabel: 'سنوات الخبرة',
    yearsExperience: 12,
    areasTitle: 'المناطق التي نخدمها',
    areas: ['الرياض', 'الخرج', 'الدرعية', 'المزاحمية'],
    workshopTitle: 'صور من الورشة',
    workshopImages: [
      { src: '/images/workshop-1.svg', alt: 'تجهيز الحديد داخل الورشة' },
      { src: '/images/workshop-2.svg', alt: 'عملية لحام في الورشة' },
      { src: '/images/workshop-3.svg', alt: 'فحص جودة المنتج النهائي' }
    ],
    warrantyTitle: 'الضمان والالتزام',
    warrantyBody: 'نلتزم بخامات جيدة، تنفيذ دقيق، وجدول واضح. ونقدم ضمانًا على جودة التنفيذ بحسب نوع المشروع.'
  },
  en: {
    heading: 'About Us',
    intro: 'We are a specialized ironwork workshop serving residential and commercial projects.',
    storyTitle: 'Who We Are',
    storyBody: 'We started as a small team focused on precision and finishing quality, then expanded while maintaining the same standards of delivery and commitment.',
    experienceLabel: 'Years of Experience',
    yearsExperience: 12,
    areasTitle: 'Areas We Serve',
    areas: ['Riyadh', 'Al Kharj', 'Diriyah', 'Al Muzahimiyah'],
    workshopTitle: 'Workshop Photos',
    workshopImages: [
      { src: '/images/workshop-1.svg', alt: 'Iron preparation inside workshop' },
      { src: '/images/workshop-2.svg', alt: 'Welding process in workshop' },
      { src: '/images/workshop-3.svg', alt: 'Final product quality inspection' }
    ],
    warrantyTitle: 'Warranty & Commitment',
    warrantyBody: 'We commit to reliable materials, precise execution, and clear timelines. We also provide workmanship warranty based on project type.'
  },
  he: {
    heading: 'אודותינו',
    intro: 'אנחנו סדנת ברזל מקצועית לפרויקטים פרטיים ומסחריים.',
    storyTitle: 'מי אנחנו',
    storyBody: 'התחלנו כצוות קטן שהתמקד בדיוק ובגימור איכותי, והתרחבנו תוך שמירה על אותם סטנדרטים של ביצוע והתחייבות.',
    experienceLabel: 'שנות ניסיון',
    yearsExperience: 12,
    areasTitle: 'אזורי שירות',
    areas: ['ריאד', 'אל-ח׳רג׳', 'דרעיה', 'אל-מוזחמיה'],
    workshopTitle: 'תמונות מהסדנה',
    workshopImages: [
      { src: '/images/workshop-1.svg', alt: 'הכנת ברזל בתוך הסדנה' },
      { src: '/images/workshop-2.svg', alt: 'תהליך ריתוך בסדנה' },
      { src: '/images/workshop-3.svg', alt: 'בדיקת איכות למוצר מוגמר' }
    ],
    warrantyTitle: 'אחריות ומחויבות',
    warrantyBody: 'אנו מתחייבים לחומרים אמינים, ביצוע מדויק ולוחות זמנים ברורים. קיימת אחריות על איכות העבודה לפי סוג הפרויקט.'
  }
};
