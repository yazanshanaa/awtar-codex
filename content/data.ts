export type PortfolioCategory = 'doors' | 'railings' | 'grills' | 'windows' | 'beforeAfter';

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  titleKey: string;
  summaryKey: string;
  city: string;
  paintType: string;
  durationDays: number;
  images: { src: string; altKey: string }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'door-villa-01',
    category: 'doors',
    titleKey: 'villaSecurityDoor',
    summaryKey: 'villaSecurityDoorSummary',
    city: 'Riyadh',
    paintType: 'Powder Coating',
    durationDays: 3,
    images: [
      { src: '/images/portfolio-door.svg', altKey: 'doorAlt' },
      { src: '/images/after-work.svg', altKey: 'afterAlt' }
    ]
  },
  {
    id: 'railing-stair-01',
    category: 'railings',
    titleKey: 'stairRailing',
    summaryKey: 'stairRailingSummary',
    city: 'Jeddah',
    paintType: 'Epoxy',
    durationDays: 2,
    images: [{ src: '/images/portfolio-railing.svg', altKey: 'railingAlt' }]
  },
  {
    id: 'grill-residential-01',
    category: 'grills',
    titleKey: 'windowGrillSet',
    summaryKey: 'windowGrillSetSummary',
    city: 'Dammam',
    paintType: 'Powder Coating',
    durationDays: 2,
    images: [{ src: '/images/portfolio-grill.svg', altKey: 'grillAlt' }]
  },
  {
    id: 'window-shop-01',
    category: 'windows',
    titleKey: 'shopWindowFrame',
    summaryKey: 'shopWindowFrameSummary',
    city: 'Riyadh',
    paintType: 'Galvanized + Paint',
    durationDays: 4,
    images: [{ src: '/images/portfolio-window.svg', altKey: 'windowAlt' }]
  },
  {
    id: 'before-after-gate-01',
    category: 'beforeAfter',
    titleKey: 'beforeAfterGate',
    summaryKey: 'beforeAfterGateSummary',
    city: 'Khobar',
    paintType: 'Powder Coating',
    durationDays: 3,
    images: [
      { src: '/images/before-work.svg', altKey: 'beforeAlt' },
      { src: '/images/after-work.svg', altKey: 'afterAlt' }
    ]
  },
  {
    id: 'door-compound-02',
    category: 'doors',
    titleKey: 'compoundDoor',
    summaryKey: 'compoundDoorSummary',
    city: 'Medina',
    paintType: 'Epoxy',
    durationDays: 3,
    images: [{ src: '/images/portfolio-door-2.svg', altKey: 'doorAlt' }]
  }
];
