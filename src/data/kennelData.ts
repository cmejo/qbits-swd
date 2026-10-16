/**
 * CENTRALIZED CONTENT & PHOTOGRAPHY CONFIGURATION
 * Edit any copy, dog stats, health clearances, or image paths below.
 * To swap stock photography: replace files in `/public/images/` OR update the `image` paths here.
 */

export const KENNEL_INFO = {
  name: 'Qbits Spanish Water Dog Kennel',
  shortName: 'Qbits Kennel',
  tagline: 'Preservation-Bred Perro de Agua Español in the Heart of New York City',
  city: 'New York City',
  state: 'NY',
  region: 'Manhattan & Tri-State Area',
  email: 'dog@cmejo.com',
  siteUrl: 'https://qbitsswd.com',
  plannedLitterWindows: 'Fall 2027 & Spring 2028',
  applicationPdfUrl: '/qbits-puppy-application.pdf',
  heroImage: {
    src: '/images/hero-swd.jpg',
    alt: 'Curly-coated Spanish Water Dog portrait in warm natural light representing Qbits Kennel in New York City',
    width: 1200,
    height: 900,
  },
};

export interface HealthClearance {
  test: string;
  result: string;
  registryCode: string;
}

export interface DogProfile {
  id: 'dudley' | 'molly';
  callName: string;
  registeredName: string;
  sexRole: string;
  badgeText: string;
  dob: string;
  colorAndCoat: string;
  heightWeight: string;
  sireAndDam: string;
  titles: string[];
  summary: string;
  temperamentNotes: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  clearances: HealthClearance[];
}

export const DOGS: DogProfile[] = [
  {
    id: 'dudley',
    callName: 'Dudley',
    registeredName: 'CH Qbits Quantum Andalusian Tide, CGC, TKN (Placeholder)',
    sexRole: 'Resident Stud Dog (Sire)',
    badgeText: 'Available for Approved Stud Services',
    dob: 'Spring 2024 (Edit DOB)',
    colorAndCoat: 'Rich Espresso Brown w/ White Chest Mark • Tight Rustic Curls',
    heightWeight: '19.25" at Withers • 46 lbs',
    sireAndDam: 'Sire: GCH Iberian Watermark (Placeholder) × Dam: CH Sierra Morena Brisa (Placeholder)',
    titles: ['AKC Champion (Placeholder)', 'OFA CHIC Certified', 'AKC Canine Good Citizen'],
    summary:
      'Dudley combines classic Iberian working cobbiness with effortless athletic reach and drive. With a rock-steady New York City temperament, he transitions seamlessly from bustling Manhattan avenues to off-leash water retrieves and agility courses.',
    temperamentNotes:
      'Confident, deeply biddable, clear-headed guardian instinct without sharpness, high toy and water motivation, and an affectionate "velcro" off-switch indoors.',
    image: {
      src: '/images/dudley-stud.jpg',
      alt: 'Dudley, our male Spanish Water Dog stud dog at Qbits Kennel in New York City',
      width: 900,
      height: 675,
    },
    clearances: [
      { test: 'OFA Hips', result: 'Good', registryCode: 'SWD-HD-001 (Edit ID)' },
      { test: 'OFA Elbows', result: 'Normal', registryCode: 'SWD-EL-001 (Edit ID)' },
      { test: 'OFA Eyes (CAER)', result: 'Normal / Clear', registryCode: 'SWD-EYE-2026' },
      { test: 'prcd-PRA (DNA)', result: 'Clear / Normal', registryCode: 'OFA-PRA-CLEAR' },
      { test: 'NAD (Neuroaxonal Dystrophy)', result: 'Clear / Normal', registryCode: 'OFA-NAD-CLEAR' },
      { test: 'CHG (Congenital Hypothyroidism)', result: 'Clear / Normal', registryCode: 'OFA-CHG-CLEAR' },
    ],
  },
  {
    id: 'molly',
    callName: 'Molly',
    registeredName: 'CH Qbits Marbella Sol of Manhattan, CGC, SWN (Placeholder)',
    sexRole: 'Foundation Bitch (Dam)',
    badgeText: 'Dam of Planned Fall 2027 / Spring 2028 Litters',
    dob: 'Autumn 2024 (Edit DOB)',
    colorAndCoat: 'Warm Chocolate & Cream Parti-Factor • Classic Rustic Corded/Curly Texture',
    heightWeight: '17.5" at Withers • 37 lbs',
    sireAndDam: 'Sire: GCH Costa del Sol Navegante (Placeholder) × Dam: CH Guadalquivir Perla (Placeholder)',
    titles: ['AKC Pointed / Champion (Placeholder)', 'OFA CHIC Certified', 'AKC Scent Work Novice'],
    summary:
      'Molly is the heart of our home—an intuitive, whip-smart Spanish Water Dog bitch with extraordinary natural scenting ability, balanced angulation, and the signature velvety-turned-corded coat texture prized in the breed standard.',
    temperamentNotes:
      'Gentle and perceptive with family, laser-focused during nosework and training sessions, socially poised in urban environments, and a natural nurturer.',
    image: {
      src: '/images/molly-bitch.jpg',
      alt: 'Molly, our female Spanish Water Dog foundation bitch at Qbits Kennel in New York City',
      width: 900,
      height: 675,
    },
    clearances: [
      { test: 'OFA Hips', result: 'Good', registryCode: 'SWD-HD-002 (Edit ID)' },
      { test: 'OFA Elbows', result: 'Normal', registryCode: 'SWD-EL-002 (Edit ID)' },
      { test: 'OFA Eyes (CAER)', result: 'Normal / Clear', registryCode: 'SWD-EYE-2026' },
      { test: 'prcd-PRA (DNA)', result: 'Clear / Normal', registryCode: 'OFA-PRA-CLEAR' },
      { test: 'NAD (Neuroaxonal Dystrophy)', result: 'Clear / Normal', registryCode: 'OFA-NAD-CLEAR' },
      { test: 'CHG (Congenital Hypothyroidism)', result: 'Clear / Normal', registryCode: 'OFA-CHG-CLEAR' },
    ],
  },
];

export const STUD_SERVICE_HIGHLIGHTS = [
  {
    title: 'Breeding Options & Logistics',
    description:
      'Dudley is available for natural cover in the New York City / Tri-State area, as well as fresh-chilled overnight courier shipments across North America and frozen semen storage.',
  },
  {
    title: 'Approved Bitch Requirements',
    description:
      'We welcome inquiries from preservation breeders whose bitches hold AKC/FCI registration, passing OFA Hips, current CAER Eye exams, and DNA results for prcd-PRA, NAD, and CHG.',
  },
  {
    title: 'Conformation, Drive & Traits Dudley Imparts',
    description:
      'Dudley consistently passes on substantial bone without coarseness, dark expressive eyes, an effortless ground-covering side gait, tight rustic curl formation, and an unshakeable, people-oriented working temperament.',
  },
];

export const LITTER_ROADMAP = [
  {
    phase: 'Phase 01 • Now – Summer 2027',
    title: 'Waitlist Curation & Pre-Breeding Health Renewals',
    description:
      'Reviewing prospective puppy applications, conducting virtual and NYC in-person meet-and-greets with Dudley and Molly, and completing annual OFA eye (CAER) and brucellosis renewals.',
  },
  {
    phase: 'Phase 02 • Fall 2027 or Spring 2028',
    title: 'Dudley × Molly Pairing & Whelping in NYC',
    description:
      'Progesterone-timed pairing between Dudley and Molly. Puppies are whelped in our quiet, climate-controlled nursery right inside our New York City home under 24/7 supervision.',
  },
  {
    phase: 'Phase 03 • Weeks 1 – 7',
    title: 'Puppy Culture, ENS & Urban Socialization',
    description:
      'Early Neurological Stimulation (Days 3–16), Early Scent Introduction (ESI), daily surface & sound enrichment, crate conditioning, and controlled exposure to household and city sights.',
  },
  {
    phase: 'Phase 04 • Weeks 7 – 9',
    title: 'Volhard Temperament Testing, Structure Eval & Go-Home',
    description:
      'At 7–8 weeks, each puppy undergoes structural assessment and temperament evaluation so we can match every family with the individual puppy suited to their home and goals.',
  },
];

export const BREED_GUIDE_CARDS = [
  {
    category: 'Heritage & Purpose',
    title: 'The Multi-Talented Iberian Artisan',
    body: 'Known natively in Andalusia as the Perro Turco or Perro de Agua Español, the Spanish Water Dog evolved over centuries as an all-around shepherd’s partner, waterfowl retriever, and fisherman’s deckhand. They are medium-sized, athletic, and deeply devoted to their flock—human or animal.',
    image: '/images/water-work-swd.jpg',
    imageAlt: 'Athletic dog retrieving near water showcasing Spanish Water Dog working heritage',
  },
  {
    category: 'Coat & Grooming',
    title: 'A Single, Non-Shedding Rustic Coat—Never Brushed',
    body: 'Unlike Poodles or Portuguese Water Dogs, a Spanish Water Dog is NEVER brushed, combed, or blow-dried fluffy. Their single wooly coat is either sheared evenly 1–3 times a year or allowed to form natural rustic cords. They are virtually non-shedding and tolerated well by many allergy-sensitive homes.',
    image: '/images/puppies-litter.jpg',
    imageAlt: 'Curly-coated puppies resting together',
  },
  {
    category: 'Urban & Active Living',
    title: 'Thriving with a Spanish Water Dog in NYC',
    body: 'Because SWDs have a natural "off-switch" indoors when given daily mental and physical engagement, they make exceptional companions in New York City apartments and townhouses—excelling in Central Park off-leash hours, scent work in the living room, and weekend hikes upstate.',
    image: '/images/nyc-park-swd.jpg',
    imageAlt: 'Happy curly dog enjoying a park walk in the city',
  },
];

export const FAQS = [
  {
    question: 'When are Qbits Kennel’s next Spanish Water Dog puppies expected?',
    answer:
      'We are planning our next litters between our resident stud dog Dudley and our foundation bitch Molly for Fall 2027 or Spring 2028. Because we breed selectively for preservation and quality rather than volume, our waitlist opens well in advance so we can build relationships with prospective families.',
  },
  {
    question: 'Is Dudley currently available for stud services to outside bitches?',
    answer:
      'Yes! Dudley is available at stud to approved, AKC/FCI-registered Spanish Water Dog bitches that have passed OFA hip, eye (CAER), and breed-specific genetic health clearances (prcd-PRA, NAD, CHG). We offer natural breeding in the NYC area as well as fresh-chilled overnight shipping and frozen semen. Email <a href="mailto:dog@cmejo.com">dog@cmejo.com</a> with your bitch’s pedigree and OFA links.',
  },
  {
    question: 'How do I apply for a Fall 2027 / Spring 2028 puppy?',
    answer:
      'You can apply in two convenient ways right on this page: (1) Fill out our interactive Online Puppy Application, which formats your responses and sends them directly to <a href="mailto:dog@cmejo.com">dog@cmejo.com</a>, OR (2) Download our official 2-page Fillable & Printable PDF Application (<a href="/qbits-puppy-application.pdf">/qbits-puppy-application.pdf</a>), fill it out on your computer or print it by hand, and email or mail it to us.',
  },
  {
    question: 'Do Spanish Water Dogs do well in New York City apartments?',
    answer:
      'Yes, provided their people are committed to daily exercise, mental stimulation, and thoughtful early socialization. Spanish Water Dogs are medium-sized (typically 30–50 lbs), do not shed, and bond closely with their household. Our dogs live full-time in NYC and are raised with urban sound conditioning and confidence protocols from birth.',
  },
  {
    question: 'How do you care for a Spanish Water Dog’s curly or corded coat?',
    answer:
      'The golden rule of the Spanish Water Dog coat is: never brush or comb it! Brushing destroys the natural curl and cord architecture. Most companion families keep their SWD in a neat, athletic "utility clip" (sheared evenly all over to one length every 3–5 months) and blot-dry with towels after baths or swimming.',
  },
  {
    question: 'What health clearances and guarantees come with a Qbits puppy?',
    answer:
      'Both Dudley and Molly are tested in accordance with the Spanish Water Dog Club of America (SWDCA) and OFA CHIC standards (OFA Hips, Elbows, annual CAER Eyes, prcd-PRA, NAD, and CHG). Every puppy goes home with a veterinarian health certificate, initial vaccinations, microchip, AKC registration paperwork, a written genetic health guarantee, and lifetime breeder support.',
  },
  {
    question: 'How are puppies matched with families?',
    answer:
      'Rather than allowing picks based solely on deposit order or coat color at birth, we conduct structured temperament and conformation evaluations at 7 to 8 weeks of age. This ensures that a high-drive agility or show prospect is matched with a performance home, while a calm, adaptable puppy is matched with a family companion home.',
  },
];
