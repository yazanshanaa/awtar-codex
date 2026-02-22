import type { Locale } from '@/lib/constants';
import type { PortfolioCategory } from '@/content/data';

export type PortfolioLocaleContent = {
  heading: string;
  description: string;
  chips: Record<'all' | PortfolioCategory, string>;
  fields: {
    city: string;
    paintType: string;
    duration: string;
    days: string;
  };
  actions: {
    open: string;
    close: string;
    next: string;
    prev: string;
  };
  labels: Record<string, string>;
};

export const portfolioContentByLocale: Record<Locale, PortfolioLocaleContent> = {
  ar: {
    heading: 'أعمالنا',
    description: 'نماذج مختارة من مشاريع الأبواب والدرابزين والشبك والشبابيك وأعمال قبل/بعد.',
    chips: {
      all: 'الكل',
      doors: 'أبواب',
      railings: 'درابزين',
      grills: 'شبك',
      windows: 'شبابيك',
      beforeAfter: 'قبل/بعد'
    },
    fields: { city: 'المدينة', paintType: 'نوع الدهان', duration: 'المدة', days: 'أيام' },
    actions: { open: 'عرض التفاصيل', close: 'إغلاق', next: 'التالي', prev: 'السابق' },
    labels: {
      villaSecurityDoor: 'باب حماية لفيلا',
      villaSecurityDoorSummary: 'باب رئيسي مع تشطيب ذهبي ودهان مقاوم',
      stairRailing: 'درابزين درج داخلي',
      stairRailingSummary: 'تنفيذ خط مستقيم مع تفاصيل آمنة',
      windowGrillSet: 'شبك حماية للنوافذ',
      windowGrillSetSummary: 'تركيب سريع مع توزيع متناسق',
      shopWindowFrame: 'إطار شبابيك محل',
      shopWindowFrameSummary: 'تصنيع حسب القياس التجاري',
      beforeAfterGate: 'تجديد بوابة قبل/بعد',
      beforeAfterGateSummary: 'إزالة الصدأ وإعادة الطلاء بالكامل',
      compoundDoor: 'باب مجمع سكني',
      compoundDoorSummary: 'باب قوي للاستخدام اليومي',
      doorAlt: 'مشروع باب حديد',
      railingAlt: 'مشروع درابزين',
      grillAlt: 'مشروع شبك حديد',
      windowAlt: 'مشروع شبابيك حديد',
      beforeAlt: 'قبل التنفيذ',
      afterAlt: 'بعد التنفيذ'
    }
  },
  en: {
    heading: 'Our Portfolio',
    description: 'Selected projects for doors, railings, grills, windows, and before/after transformations.',
    chips: {
      all: 'All',
      doors: 'Doors',
      railings: 'Railings',
      grills: 'Grills',
      windows: 'Windows',
      beforeAfter: 'Before/After'
    },
    fields: { city: 'City', paintType: 'Paint Type', duration: 'Duration', days: 'days' },
    actions: { open: 'View Details', close: 'Close', next: 'Next', prev: 'Previous' },
    labels: {
      villaSecurityDoor: 'Villa Security Door',
      villaSecurityDoorSummary: 'Main entry door with durable premium finish',
      stairRailing: 'Interior Stair Railing',
      stairRailingSummary: 'Clean-line execution with safe detailing',
      windowGrillSet: 'Window Grill Set',
      windowGrillSetSummary: 'Fast install with balanced patterning',
      shopWindowFrame: 'Shop Window Frame',
      shopWindowFrameSummary: 'Custom fabrication for retail frontage',
      beforeAfterGate: 'Before/After Gate Renewal',
      beforeAfterGateSummary: 'Rust treatment and full repaint cycle',
      compoundDoor: 'Compound Entry Door',
      compoundDoorSummary: 'Heavy-duty daily-use iron door',
      doorAlt: 'Iron door project',
      railingAlt: 'Iron railing project',
      grillAlt: 'Iron grill project',
      windowAlt: 'Iron window project',
      beforeAlt: 'Before work',
      afterAlt: 'After work'
    }
  },
  he: {
    heading: 'הפרויקטים שלנו',
    description: 'דוגמאות נבחרות של דלתות, מעקות, סורגים, חלונות ופרויקטי לפני/אחרי.',
    chips: {
      all: 'הכל',
      doors: 'דלתות',
      railings: 'מעקות',
      grills: 'סורגים',
      windows: 'חלונות',
      beforeAfter: 'לפני/אחרי'
    },
    fields: { city: 'עיר', paintType: 'סוג צבע', duration: 'משך', days: 'ימים' },
    actions: { open: 'לצפייה בפרטים', close: 'סגור', next: 'הבא', prev: 'הקודם' },
    labels: {
      villaSecurityDoor: 'דלת ביטחון לוילה',
      villaSecurityDoorSummary: 'דלת כניסה בגימור עמיד ואיכותי',
      stairRailing: 'מעקה מדרגות פנימי',
      stairRailingSummary: 'ביצוע נקי עם דגש על בטיחות',
      windowGrillSet: 'סט סורגים לחלונות',
      windowGrillSetSummary: 'התקנה מהירה עם חלוקה מאוזנת',
      shopWindowFrame: 'מסגרת חלון לחנות',
      shopWindowFrameSummary: 'ייצור מותאם לחזית מסחרית',
      beforeAfterGate: 'חידוש שער לפני/אחרי',
      beforeAfterGateSummary: 'טיפול חלודה וצביעה מחדש מלאה',
      compoundDoor: 'דלת כניסה למתחם',
      compoundDoorSummary: 'דלת ברזל חזקה לשימוש יומיומי',
      doorAlt: 'פרויקט דלת ברזל',
      railingAlt: 'פרויקט מעקה ברזל',
      grillAlt: 'פרויקט סורג ברזל',
      windowAlt: 'פרויקט חלון ברזל',
      beforeAlt: 'לפני העבודה',
      afterAlt: 'אחרי העבודה'
    }
  }
};
