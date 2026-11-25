// Links and details used across the website. Update them here, in one place.
export const APPLY_URL = 'https://calendly.com/d/dwcn-cp2-697';

// The Flodesk checkout link for the $7 Which Daughter Are You? mini quiz.
// Paste it between the quotes. While it is empty, the buy buttons show "Coming soon".
export const QUIZ_CHECKOUT_URL = '';

// The unlocked quiz, for buyers only. It is not linked anywhere on the website.
// Paste this link into Flodesk: as the checkout's after-purchase redirect, and as the
// "Take My Quiz" button in the delivery email. kingdomroe.com/mini-quiz sends people to the sales page.
export const QUIZ_UNLOCKED_URL = 'https://kingdomroe.com/which-daughter-quiz-irwphk9q/';

// The sales page for the mini quiz, here on the website.
export const QUIZ_PAGE = '/which-daughter/';

export const EMAIL = 'naomi@kingdomroe.com';

export const COHORT = {
  name: 'The Called Method™ 6-Month Cohort',
  registrationCloses: 'January 9, 2027',
  begins: 'Tuesday, January 12, 2027',
  time: '5:00 PM Central',
  // The cohort price is shared only after she applies. It is never shown on the website.
  seats: 'An intimate cohort of 7',
};

export const NAV = [
  { label: 'About', href: '/about/' },
  { label: 'Method', href: '/#method' },
  { label: 'Cohort', href: '/#cohort' },
  { label: 'Testimonies', href: '/#testimonies' },
  { label: 'Quiz', href: '/#quiz' },
  { label: 'FAQ', href: '/#faq' },
];

// The 8-Day Purposeful Content Shift™. Its page is kingdomroe.com/8-day-shift (not in the menu).
// `on`: true shows the seasonal pop-up on the website, which opens the 8-Day page.
// `url`: the Flodesk checkout or sign-up link for the Join buttons on the 8-Day page.
// While `url` is empty, the Join buttons say "Save My Seat" and open an email to Naomi.
export const CHALLENGE = {
  on: false,
  name: 'The 8-Day Purposeful Content Shift™',
  tagline: 'Shift Your Content From Encouragement to Attraction.',
  dates: 'December 2 to 9, 2026', // shown on the 8-Day page and the pop-up
  time: '5:00 PM Central',
  price: '$8',
  url: '', // the Flodesk sales or checkout link
  // The participants' portal: private, not linked on the website. Send it in the Flodesk welcome email.
  portal: '/8-day-shift-portal-fok2mhs2/',
  // The Google Form where participants turn in homework and screenshots. Empty: the button says "coming soon".
  homeworkForm: '',
};
