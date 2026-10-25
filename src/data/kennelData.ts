/**
 * CENTRALIZED CONTENT, BREEDER AUTHORITY, SEO LANDING PAGES, GALLERY & ANALYTICS CONFIGURATION
 * Edit any copy, dog stats, health clearances, analytics IDs, or image paths below.
 */

export const KENNEL_INFO = {
  name: 'Qbits Spanish Water Dog Kennel',
  shortName: 'Qbits Kennel',
  tagline:
    'One of Only 5 Spanish Water Dog Breeders in America • Service Animal & Preservation Breeding on the Upper East Side of NYC',
  city: 'New York City',
  neighborhood: 'Upper East Side',
  state: 'NY',
  region: 'Upper East Side, Manhattan & Tri-State Area',
  email: 'dog@cmejo.com',
  siteUrl: 'https://qbits-swd.netlify.app',
  gothamPawUrl: 'https://gothampaw.netlify.app/services/service-animal/',
  gothamPawName: 'Gotham Paw Service Animal Training',
  plannedLitterWindows: 'Fall 2027 & Spring 2028',
  applicationPdfUrl: '/qbits-puppy-application.pdf',
  clinicalBrochurePdfUrl: '/qbits-clinical-service-dog-brochure.pdf',
  mentorName: 'Lisa Harper',
  agentContextJsonUrl: '/api/agent-context.json',
  heroImage: {
    src: '/images/hero-swd.jpg',
    alt: 'Curly-coated Spanish Water Dog portrait in warm natural light representing Qbits Kennel on the Upper East Side of New York City',
    width: 1200,
    height: 900,
  },
  analytics: {
    // Replace with your live IDs or set PUBLIC_GA_ID / PUBLIC_PIWIK_URL / PUBLIC_PIWIK_SITE_ID / PUBLIC_CLARITY_ID in Netlify environment variables
    gaMeasurementId: import.meta.env.PUBLIC_GA_ID || 'G-QBITSSWDNY',
    piwikUrl: import.meta.env.PUBLIC_PIWIK_URL || 'https://qbitsswd.containers.piwik.pro',
    piwikSiteId: import.meta.env.PUBLIC_PIWIK_SITE_ID || 'qbits-swd-nyc',
    clarityProjectId: import.meta.env.PUBLIC_CLARITY_ID || 'qbitsswdclarity',
  },
};

export const BREEDER_HERITAGE_HIGHLIGHTS = [
  {
    badge: '1 of Only 5 in America',
    title: 'An Extraordinarily Rare Breed—Stewarded with Uncompromising Seriousness',
    description:
      'There are only five active preservation Spanish Water Dog breeders in the United States, including Qbits Kennel. Although our founder is the youngest breeder in America by 30 years, we uphold the exact same rigor, genetic health standards, and lifelong commitment as the breed’s senior pioneers.',
  },
  {
    badge: 'Mentored by Lisa Harper',
    title: 'Direct Mentorship Under Breed Pioneer Lisa Harper',
    description:
      'Our breeding program is proudly mentored by Lisa Harper—a foundational figure who was instrumental in legitimizing the Spanish Water Dog in the United States and who has served as a lifelong board member of the breed club. Her decades of wisdom guide every pedigree, structural evaluation, and pairing decision we make.',
  },
  {
    badge: 'Breed Club Board Leadership',
    title: 'Bringing the Spanish Water Dog Club Into the 21st Century',
    description:
      'Before launching our own Upper East Side breeding program, our founder helped grow and strengthen the Spanish Water Dog breed nationally by serving on the breed club’s Board of Directors and modernizing the club’s official website and digital infrastructure for the 21st century.',
  },
  {
    badge: 'Gotham Paw Service Dogs',
    title: 'Proven in Neurological & Mobility Medical Service Work',
    description:
      'Combining preservation breeding with years of professional service dog training through Gotham Paw, at least one puppy from every Qbits litter is transferred into our Service Animal Program for individuals with spinal cord injuries, Cerebral Palsy, and Multiple Sclerosis.',
  },
];

export const BREEDER_BIO_NARRATION =
  'Welcome to Qbits Spanish Water Dog Kennel on the Upper East Side of New York City. There are only five active preservation Spanish Water Dog breeders in America, including Qbits Kennel. Although I am the youngest breeder in America by 30 years, I am every bit as serious and rigorous about health and preservation standards as our senior breeders. I am privileged to be mentored by Lisa Harper, a lifelong board member who was instrumental in legitimizing the Spanish Water Dog in the United States. In the past, I also served on the national breed club board of directors and modernized the club website to bring it into the 21st century. Through our service dog company, Gotham Paw, at least one puppy from every litter is transferred into our Service Animal Program to assist people with spinal cord injuries, Cerebral Palsy, Multiple Sclerosis, and other neuromuscular conditions. Because our dogs are proven in real-world medical service work and therapy visitation, we do not regularly campaign at weekend AKC conformation shows. If you are interested in a service animal, therapy dog, family companion, or stud service with Dudley, please reach out to us early at dog@cmejo.com.';

export interface GalleryPhoto {
  id: string;
  category: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  dateLabel: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gallery-1',
    category: 'Service Dog Task Work • Gotham Paw',
    title: 'Precision Object Retrieval & Mobility Support',
    caption:
      'Dudley demonstrating calm dropped-item retrieval and handler focus—foundational tasks for spinal cord injury (SCI) and Multiple Sclerosis (MS) assistance.',
    src: '/images/water-work-swd.jpg',
    alt: 'Spanish Water Dog retrieving an object with calm focus for service dog training at Qbits Kennel NYC',
    dateLabel: 'Upper East Side, NYC',
  },
  {
    id: 'gallery-2',
    category: 'Resident Sire • Stud Services',
    title: 'Dudley — Athletic Bone & Espresso Rustic Curls',
    caption:
      'Dudley (19.25", 46 lbs) showcasing his balanced Iberian cobbiness, dark expressive eyes, and OFA CHIC health-tested structure.',
    src: '/images/dudley-stud.jpg',
    alt: 'Dudley, resident male Spanish Water Dog stud dog standing in natural light in New York City',
    dateLabel: 'Standing at Stud • NYC',
  },
  {
    id: 'gallery-3',
    category: 'Foundation Dam • 2027/2028 Litters',
    title: 'Molly — Gentle Tactile Sensitivity & Attunement',
    caption:
      'Molly (17.5", 37 lbs) possesses the intuitive human empathy and calm indoor composure essential for producing medical service and therapy prospects.',
    src: '/images/molly-bitch.jpg',
    alt: 'Molly, foundation female Spanish Water Dog bitch at Qbits Kennel on the Upper East Side',
    dateLabel: 'Foundation Dam • NYC',
  },
  {
    id: 'gallery-4',
    category: 'Manhattan Public Access & Parks',
    title: 'Confident Nerve on the Upper East Side & Central Park',
    caption:
      'Daily conditioning around NYC elevators, crosswalks, wheelchairs, and Central Park trails builds unshakeable environmental stability.',
    src: '/images/nyc-park-swd.jpg',
    alt: 'Spanish Water Dog walking confidently in a New York City park',
    dateLabel: 'Central Park & UES',
  },
  {
    id: 'gallery-5',
    category: 'Non-Shedding Rustic Coat',
    title: 'Natural Curls & Utility Clip (Never Brushed)',
    caption:
      'Our dogs’ single, non-shedding wooly coats are allergy-friendly and hospital-ready—maintained in a clean utility clip without ever brushing.',
    src: '/images/puppies-litter.jpg',
    alt: 'Close-up of curly non-shedding Spanish Water Dog coat texture',
    dateLabel: 'Coat Care Guide',
  },
  {
    id: 'gallery-6',
    category: 'Lisa Harper Mentorship & Preservation',
    title: 'Dudley × Molly — Planned Fall 2027 & Spring 2028 Pairing',
    caption:
      'Bred under the mentorship standards of breed pioneer Lisa Harper, combining historic Iberian preservation lines with modern service dog excellence.',
    src: '/images/hero-swd.jpg',
    alt: 'Portrait of Spanish Water Dog representing the planned Dudley and Molly pairing at Qbits Kennel',
    dateLabel: 'Fall 2027 / Spring 2028',
  },
];

export interface MemberUpdateItem {
  date: string;
  badge: string;
  title: string;
  summary: string;
}

export const MEMBER_UPDATES_LOG: MemberUpdateItem[] = [
  {
    date: 'Current Quarter • Autumn 2026',
    badge: 'Service Program Intake Open',
    title: 'Early Consultations Underway for Fall 2027 / Spring 2028 Service & Companion Litters',
    summary:
      'We are currently conducting 1-on-1 phone consultations with prospective Gotham Paw service dog handlers (SCI, Cerebral Palsy, MS) and reviewing early waitlist applications for therapy and family companion homes.',
  },
  {
    date: 'Health & Registry Protocol',
    badge: 'OFA CHIC Verified',
    title: 'Annual Board-Certified Ophthalmologist (CAER) & Orthopedic Clearances Current',
    summary:
      'Both Dudley and Molly maintain current OFA CAER eye clearances alongside passing OFA Hip (Good), Elbow (Normal), and Clear DNA panels for prcd-PRA, NAD, and CHG.',
  },
  {
    date: 'Manhattan Training Milestone',
    badge: 'Gotham Paw Public Access',
    title: 'Upper East Side Medical Corridor & Transit Conditioning',
    summary:
      'Dudley and Molly continue weekly task-demonstration and public-access sessions across the Upper East Side—practicing dropped-item recovery, wheelchair heeling, and calm settling in clinical environments.',
  },
  {
    date: 'Upcoming Milestone • Summer 2027',
    badge: 'Pre-Breeding Confirmation',
    title: 'Waitlist Roster Confirmation & Progesterone Timing Prep',
    summary:
      'Approved waitlist members and Gotham Paw service dog candidates will receive priority notification 60 days prior to Molly’s anticipated season for our Fall 2027 / Spring 2028 pairing.',
  },
];

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
    registeredName: 'Qbits Quantum Andalusian Tide',
    sexRole: 'Resident Stud Dog (Sire)',
    badgeText: 'Proven Service Temperament • Open for Approved Stud Services',
    dob: 'Spring 2024',
    colorAndCoat: 'Rich Espresso Brown w/ White Chest Mark • Tight Rustic Curls',
    heightWeight: '19.25" at Withers • 46 lbs',
    sireAndDam: 'Preservation Iberian Working & Service-Evaluated Bloodlines',
    titles: [
      'Proven Service Dog Foundation',
      'OFA CHIC Health Tested Protocol',
      'Public Access & Urban Stability Verified',
    ],
    summary:
      'Dudley combines classic Iberian working cobbiness with extraordinary nerve stability and human attunement. Selected under the mentorship standards of breed pioneer Lisa Harper, Dudley proves his merit daily in demanding New York City public-access environments and task-training foundations rather than weekend conformation rings.',
    temperamentNotes:
      'Calm under heavy Manhattan sensory load, deeply biddable, natural retrieve and counterbalance drive, zero sharpness, and an effortless indoor "off-switch" essential for medical service and family companionship.',
    image: {
      src: '/images/dudley-stud.jpg',
      alt: 'Dudley, our male Spanish Water Dog stud dog at Qbits Kennel on the Upper East Side of New York City',
      width: 900,
      height: 675,
    },
    clearances: [
      { test: 'OFA Hips', result: 'Good', registryCode: 'OFA Preliminary / Final Protocol' },
      { test: 'OFA Elbows', result: 'Normal', registryCode: 'OFA Normal Protocol' },
      { test: 'OFA Eyes (CAER)', result: 'Normal / Clear', registryCode: 'Annual Ophthalmologist Exam' },
      { test: 'prcd-PRA (DNA)', result: 'Clear / Normal', registryCode: 'Genetically Clear' },
      { test: 'NAD (Neuroaxonal Dystrophy)', result: 'Clear / Normal', registryCode: 'Genetically Clear' },
      { test: 'CHG (Congenital Hypothyroidism)', result: 'Clear / Normal', registryCode: 'Genetically Clear' },
    ],
  },
  {
    id: 'molly',
    callName: 'Molly',
    registeredName: 'Qbits Marbella Sol of Manhattan',
    sexRole: 'Foundation Bitch (Dam)',
    badgeText: 'Dam of Planned Fall 2027 / Spring 2028 Litters',
    dob: 'Autumn 2024',
    colorAndCoat: 'Warm Chocolate & Cream Parti-Factor • Classic Rustic Corded/Curly Texture',
    heightWeight: '17.5" at Withers • 37 lbs',
    sireAndDam: 'Preservation Iberian Working & Service-Evaluated Bloodlines',
    titles: [
      'Service & Therapy Temperament Evaluated',
      'OFA CHIC Health Tested Protocol',
      'Advanced Scent & Task Focus',
    ],
    summary:
      'Molly is the heart of our Upper East Side home—an intuitive, remarkably gentle Spanish Water Dog bitch with natural tactile sensitivity, precision retrieve mechanics, and the steady emotional composure required to produce elite neurological service and therapy prospects.',
    temperamentNotes:
      'Highly perceptive to subtle human physical cues, patient and gentle around mobility equipment, laser-focused during task training, and deeply affectionate with her family.',
    image: {
      src: '/images/molly-bitch.jpg',
      alt: 'Molly, our female Spanish Water Dog foundation bitch at Qbits Kennel on the Upper East Side of New York City',
      width: 900,
      height: 675,
    },
    clearances: [
      { test: 'OFA Hips', result: 'Good', registryCode: 'OFA Preliminary / Final Protocol' },
      { test: 'OFA Elbows', result: 'Normal', registryCode: 'OFA Normal Protocol' },
      { test: 'OFA Eyes (CAER)', result: 'Normal / Clear', registryCode: 'Annual Ophthalmologist Exam' },
      { test: 'prcd-PRA (DNA)', result: 'Clear / Normal', registryCode: 'Genetically Clear' },
      { test: 'NAD (Neuroaxonal Dystrophy)', result: 'Clear / Normal', registryCode: 'Genetically Clear' },
      { test: 'CHG (Congenital Hypothyroidism)', result: 'Clear / Normal', registryCode: 'Genetically Clear' },
    ],
  },
];

export const SERVICE_DOG_HIGHLIGHTS = [
  {
    badge: 'Guaranteed Litter Allocation',
    title: 'At Least One Puppy Per Litter Enters Our Service Program',
    description:
      'Every Qbits litter is bred with working medical purpose first. At least one top-scoring puppy from each litter is transferred directly into our formal Service Animal Program at Gotham Paw to be trained for a client with a disability.',
  },
  {
    badge: 'Neurological & Mobility Specialization',
    title: 'Spinal Cord Injuries & Neuromuscular Disorders',
    description:
      'We specialize in task-trained service dogs for individuals living with spinal cord injuries (SCI), Cerebral Palsy (CP), Multiple Sclerosis (MS), ALS, post-stroke deficits, and other conditions with a neurological component.',
  },
  {
    badge: 'Real-World Proof Over Show Rings',
    title: 'Why We Prove Our Dogs in Service Work—Not AKC Conformation Events',
    description:
      'While our dogs honor the full Spanish Water Dog health and structural standard taught by our mentor Lisa Harper, we do not spend weekends chasing AKC conformation ribbons. Our dogs are proven through real-world medical task reliability, hospital/transit public access, and life-changing assistance work.',
  },
  {
    badge: 'Precision Task Training',
    title: 'Custom Neurological & Physical Assistance Tasks',
    description:
      'Our Spanish Water Dogs are medium-sized, non-shedding, and naturally retrieve-driven—ideal for dropped-object recovery (keys, phones, medication, canes), wheelchair/walker side-heeling, ADA push-plate & door/drawer tugging, spasticity/tremor interruption, and deep pressure therapy.',
  },
];

export interface AssistanceComparisonRow {
  type: string;
  legalStatus: string;
  requiredTraining: string;
  publicAccessRights: string;
  qbitsRole: string;
}

export const ASSISTANCE_DOG_COMPARISON: AssistanceComparisonRow[] = [
  {
    type: 'Task-Trained Service Dog (Medical Equipment)',
    legalStatus:
      'Legally classified as a piece of Medical Equipment under the federal Americans with Disabilities Act (ADA) (28 CFR § 36.104).',
    requiredTraining:
      'Individually task-trained to perform specific physical or neurological tasks directly mitigating a handler’s diagnosed disability (e.g., spinal cord injury, Cerebral Palsy, MS), plus spotless public-access neutrality.',
    publicAccessRights:
      'Full federal public-access rights everywhere the public is invited (hospitals, restaurants, stores, transit, workplaces) AND full housing protection under the Fair Housing Act (FHA).',
    qbitsRole:
      'At least 1 puppy per Qbits litter is transferred into our Gotham Paw Service Animal Program. Prospective clients should contact us ASAP.',
  },
  {
    type: 'Facility / Visitation Therapy Dog',
    legalStatus:
      'Trained volunteer or clinical visitation dog that brings comfort to others (not personal ADA medical equipment for the handler).',
    requiredTraining:
      'Tested and certified (e.g., AKC Therapy Dog, Pet Partners, Alliance of Therapy Dogs) for calm, friendly stability around hospital beds, wheelchairs, and seniors.',
    publicAccessRights:
      'Permitted inside hospitals, rehab centers, nursing homes, and schools by invitation only. Does NOT have general ADA public-access rights in non-pet businesses.',
    qbitsRole:
      'Many Qbits puppies go to homes where they thrive as certified Therapy Dogs; we match for gentle, people-loving temperaments.',
  },
  {
    type: 'Emotional Support Animal (ESA)',
    legalStatus:
      'A pet supported by a licensed healthcare provider’s letter that provides comfort through companionship alone.',
    requiredTraining:
      'No specific disability task training required under federal law.',
    publicAccessRights:
      'NO public-access rights in restaurants, stores, or public venues. Legally, an ESA only protects renters from being evicted or denied housing by a landlord that does not allow pets (under the Fair Housing Act).',
    qbitsRole:
      'All Qbits companion dogs provide deep emotional companionship at home, and we educate families clearly so they never confuse an ESA with a task-trained service dog.',
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
    phase: 'Phase 01 • Now – Summer 2027 (Reach Out Early!)',
    title: 'Service Client Intake, Waitlist Curation & Health Renewals',
    description:
      'Because matching and task-designing a neurological service animal or therapy/companion puppy is an intensive, multi-step process, we review applications and conduct consultations well in advance alongside annual OFA CAER eye renewals.',
  },
  {
    phase: 'Phase 02 • Fall 2027 or Spring 2028',
    title: 'Dudley × Molly Pairing & Whelping on the Upper East Side',
    description:
      'Progesterone-timed pairing between Dudley and Molly. Puppies are whelped in our quiet, climate-controlled nursery right inside our Upper East Side NYC home under 24/7 hands-on care.',
  },
  {
    phase: 'Phase 03 • Weeks 1 – 7',
    title: 'ENS, Service Foundation Conditioning & Mobility Desensitization',
    description:
      'Early Neurological Stimulation (Days 3–16), gentle exposure to wheelchairs, walkers, crutches, dropped metallic objects, hospital/elevator sounds, crate conditioning, and tactile shaping.',
  },
  {
    phase: 'Phase 04 • Weeks 7 – 9',
    title: 'Service Candidate Selection, Temperament Evaluation & Placement',
    description:
      'At 7–8 weeks, structured neurological and Volhard evaluations identify the puppy(ies) transferring into the Gotham Paw Service Animal Program, followed by matching therapy and companion puppies with approved homes.',
  },
];

export const BREED_GUIDE_CARDS = [
  {
    category: 'Service & Working Heritage',
    title: 'Natural Retriever & Devoted Partner',
    body: 'Known natively in Andalusia as the Perro de Agua Español, the Spanish Water Dog evolved over centuries to work closely with a single handler—retrieving from water and herding with quiet focus. That genetic desire to pick up objects and stay attuned to their person makes them extraordinary neurological service and therapy dogs.',
    image: '/images/water-work-swd.jpg',
    imageAlt: 'Athletic dog retrieving near water showcasing Spanish Water Dog working heritage',
  },
  {
    category: 'Coat & Allergy Friendliness',
    title: 'A Single, Non-Shedding Rustic Coat—Never Brushed',
    body: 'Unlike Golden or Labrador Retrievers that shed heavily on wheelchairs, bedding, and hospital floors, a Spanish Water Dog has a single, virtually non-shedding wooly coat. It is never brushed or combed—simply sheared evenly every few months or allowed to cord naturally.',
    image: '/images/puppies-litter.jpg',
    imageAlt: 'Curly-coated puppies resting together',
  },
  {
    category: 'Compact Urban Size',
    title: 'Ideal Size for Wheelchairs, Elevators & NYC Living',
    body: 'At 30 to 50 lbs and 15.75" to 19.75" tall, the Spanish Water Dog fits comfortably beside a power wheelchair, under a hospital bed or restaurant table, and inside Manhattan elevators—while possessing a calm indoor "off-switch."',
    image: '/images/nyc-park-swd.jpg',
    imageAlt: 'Happy curly dog enjoying a park walk in the city',
  },
];

export const FAQS = [
  {
    question: 'How rare is the Spanish Water Dog in America, and who is Qbits Kennel’s mentor?',
    answer:
      'The Spanish Water Dog (<em>Perro de Agua Español</em>) is one of the rarest purebred working dogs in North America—there are <strong>only 5 active preservation breeders in America</strong>, including Qbits Kennel. Our founder is the youngest Spanish Water Dog breeder in America by 30 years, yet approaches preservation breeding with the exact same seriousness and health standards as the breed’s senior founders. We are proudly mentored by <strong>Lisa Harper</strong>, a towering figure who was instrumental in legitimizing the Spanish Water Dog in the United States and has served as a lifelong board member of the breed club. Additionally, our founder previously served on the national breed club board and modernized the club’s official website to bring the organization into the 21st century.',
  },
  {
    question: 'Why don’t you regularly show your dogs at AKC conformation events?',
    answer:
      'Our primary mission is breeding and proving functional working service animals rather than collecting weekend beauty/conformation ribbons. While Dudley and Molly adhere strictly to the Spanish Water Dog structural standard under the mentorship of breed pioneer Lisa Harper and complete full OFA CHIC health testing, our dogs are proven in real-world service dog work through <a href="https://gothampaw.netlify.app/services/service-animal/" target="_blank" rel="noopener noreferrer">Gotham Paw</a>—assisting people with spinal cord injuries and neuromuscular disorders where calm nerve stability, biddability, and task reliability matter most.',
  },
  {
    question: 'How does your Service Animal Program work, and when should I reach out?',
    answer:
      'At least one puppy from every Qbits litter is transferred directly into our professional Service Animal Program at <a href="https://gothampaw.netlify.app/services/service-animal/" target="_blank" rel="noopener noreferrer">Gotham Paw</a>, focusing on task training for individuals with spinal cord injuries (SCI), Cerebral Palsy (CP), Multiple Sclerosis (MS), and other neurological/neuromuscular conditions. Because assessing your daily medical tasks, matching the right puppy temperament, and planning custom training is a very thorough process, <strong>please reach out to us ASAP</strong> at <a href="mailto:dog@cmejo.com">dog@cmejo.com</a> if you are interested in a service animal.',
  },
  {
    question: 'What is the difference between a Task-Trained Service Dog, a Therapy Dog, and an Emotional Support Animal (ESA)?',
    answer:
      'A <strong>Task-Trained Service Dog</strong> is legally classified under the federal Americans with Disabilities Act (ADA) as a piece of <strong>medical equipment</strong>; it is individually trained to perform specific physical or neurological tasks for a disabled handler and has full public-access rights everywhere the public goes. An <strong>Emotional Support Animal (ESA)</strong> is not task-trained and has no public-access rights—its legal role under the Fair Housing Act is solely to protect renters from being evicted or denied housing by a landlord that does not allow pets. A <strong>Therapy Dog</strong> is trained to visit hospitals, rehab clinics, and nursing homes by invitation to bring comfort to others. Many Qbits dogs excel as both task-trained service dogs and certified therapy dogs.',
  },
  {
    question: 'When are Qbits Kennel’s next Spanish Water Dog puppies expected?',
    answer:
      'We are planning our next litters between our resident stud dog Dudley and our foundation bitch Molly for Fall 2027 or Spring 2028. Because we are one of only 5 breeders in America and breed selectively for service aptitude, health, and preservation quality, our waitlist opens early so we can work closely with prospective service, therapy, and companion families.',
  },
  {
    question: 'Is Dudley currently available for stud services to outside bitches?',
    answer:
      'Yes! Dudley is available at stud to approved, AKC/FCI-registered Spanish Water Dog bitches that have passed OFA hip, eye (CAER), and breed-specific genetic health clearances (prcd-PRA, NAD, CHG). We offer natural breeding in the NYC area as well as fresh-chilled overnight shipping and frozen semen. Email <a href="mailto:dog@cmejo.com">dog@cmejo.com</a> with your bitch’s pedigree and OFA links.',
  },
  {
    question: 'How do you care for a Spanish Water Dog’s curly or corded coat?',
    answer:
      'The golden rule of the Spanish Water Dog coat is: never brush or comb it! Brushing destroys the natural curl and cord architecture. Most companion and service dog handlers keep their SWD in a neat, low-maintenance "utility clip" (sheared evenly all over to one length every 3–5 months) and blot-dry with towels after baths.',
  },
];

export interface SeoLandingPage {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  heroLead: string;
  ctaText: string;
  ctaHref: string;
  inquiryTopic: string;
  sections: {
    heading: string;
    body: string[];
  }[];
}

export const SEO_LANDING_PAGES: SeoLandingPage[] = [
  {
    slug: 'spanish-water-dog-service-dogs-spinal-cord-injury-ms',
    category: 'Service Animal Specialization',
    title: 'Spanish Water Dog Service Animals for Spinal Cord Injuries, MS & Cerebral Palsy',
    metaTitle: 'Hypoallergenic Service Dogs for Spinal Cord Injury, MS & Cerebral Palsy | Qbits Kennel & Gotham Paw NYC',
    metaDescription: 'Learn why Qbits Spanish Water Dog Kennel (Upper East Side, NYC) and Gotham Paw specialize in non-shedding, task-trained service dogs for spinal cord injuries, Multiple Sclerosis (MS), and Cerebral Palsy.',
    targetKeywords: [
      'Spanish Water Dog service dog',
      'service dog for spinal cord injury NYC',
      'Multiple Sclerosis mobility service dog',
      'Cerebral Palsy task trained service dog',
      'hypoallergenic mobility service dog',
    ],
    heroLead:
      'At Qbits Spanish Water Dog Kennel on the Upper East Side of New York City, at least one puppy from every litter is transferred into our Gotham Paw Service Animal Program—specializing in custom neurological and mobility task training.',
    ctaText: 'Inquire About a Service Dog Prospect ASAP',
    ctaHref: '/#contact',
    inquiryTopic: 'URGENT: Service Animal Prospect Inquiry (Spinal Cord Injury / Neuromuscular — Gotham Paw)',
    sections: [
      {
        heading: 'Why the Spanish Water Dog Is Ideal for Neurological & Spinal Cord Injury Assistance',
        body: [
          'Individuals living with a spinal cord injury (SCI), Multiple Sclerosis (MS), Cerebral Palsy (CP), ALS, or peripheral neuropathy often face a difficult tradeoff when searching for a mobility and task-trained service dog. Traditional Labrador and Golden Retrievers shed heavily—coating wheelchairs, seat cushions, catheters, and hospital floors in hair—and often grow to 70–90 lbs, making them difficult to maneuver inside Manhattan elevators, accessible vans, or narrow hospital rooms.',
          'The Spanish Water Dog (Perro de Agua Español) solves both challenges. Weighing 35 to 48 lbs with a compact, muscular herding-and-water-retriever frame, they are large enough to retrieve heavy dropped items (phones, keys, medication bottles, canes, orthotics), tug open accessible doors, and press elevator or crosswalk buttons, yet compact enough to tuck effortlessly beneath a power wheelchair or hospital bed. Their single, wooly coat is virtually non-shedding and allergy-friendly.',
        ],
      },
      {
        heading: 'Why We Prove Our Dogs in Service Work Rather Than AKC Conformation Shows',
        body: [
          'As one of only 5 Spanish Water Dog breeders in America—and mentored by breed pioneer Lisa Harper—we adhere strictly to OFA CHIC health testing and structural soundness. However, you will rarely see us spending weekends at AKC conformation dog shows.',
          'Our dogs are proven in real-world medical service work through our training company, Gotham Paw (https://gothampaw.netlify.app/services/service-animal/). At least one puppy from every litter is transferred directly into our Service Animal Program, where we evaluate and train for rock-solid urban nerve, zero sound sensitivity, gentle mouth retrieve mechanics, and deep attunement to handlers with neurological conditions.',
        ],
      },
      {
        heading: 'Why Prospective Service Animal Clients Should Reach Out ASAP',
        body: [
          'Producing, evaluating, matching, and custom task-training a medical service dog to our standards is an extraordinarily thorough, multi-stage process. If you or a loved one are interested in a service dog candidate from our planned Fall 2027 or Spring 2028 litters (Dudley × Molly), please contact us at dog@cmejo.com as early as possible so we can begin consultations with you and your care team.',
        ],
      },
    ],
  },
  {
    slug: 'service-dog-vs-therapy-dog-vs-emotional-support-animal-esa',
    category: 'Legal & ADA Education Guide',
    title: 'Task-Trained Service Dog (Medical Equipment) vs. Therapy Dog vs. Emotional Support Animal (ESA)',
    metaTitle: 'Service Dog (ADA Medical Equipment) vs. Therapy Dog vs. ESA (Fair Housing) | Qbits Kennel NYC',
    metaDescription: 'Clear legal guide comparing Task-Trained Service Dogs (ADA medical equipment), Therapy Dogs, and Emotional Support Animals (FHA eviction protection for renters) from Qbits Kennel & Gotham Paw NYC.',
    targetKeywords: [
      'task trained service dog medical equipment ADA',
      'service dog vs therapy dog vs emotional support animal',
      'what does an emotional support animal legally protect',
      'ESA Fair Housing Act landlord eviction protection',
      'therapy dog vs service dog NYC',
    ],
    heroLead:
      'Whether you are a patient, a senior citizen, a healthcare provider, or a prospective puppy family, understanding the federal legal distinction between a Task-Trained Service Dog, a Therapy Dog, and an Emotional Support Animal (ESA) is essential.',
    ctaText: 'Compare Assistance Pathways & Apply',
    ctaHref: '/#service-animals',
    inquiryTopic: 'URGENT: Service Animal Prospect Inquiry (Spinal Cord Injury / Neuromuscular — Gotham Paw)',
    sections: [
      {
        heading: '1. Task-Trained Service Dog: Legally a Piece of Medical Equipment (ADA)',
        body: [
          'Under the federal Americans with Disabilities Act (ADA), a service dog is not merely a well-behaved pet—it is legally classified as a piece of medical equipment, comparable to a power wheelchair, oxygen tank, or medical alert device.',
          'To qualify as a Service Dog under federal law, the dog must be individually trained to perform specific, measurable physical or neurological tasks that directly mitigate a handler’s diagnosed disability (such as retrieving dropped objects for a handler with a spinal cord injury, interrupting spasticity or tremors in Multiple Sclerosis, or activating accessible door plates). Because it is medical equipment, a task-trained service dog has full public-access rights everywhere its handler goes, as well as full housing protection.',
        ],
      },
      {
        heading: '2. Emotional Support Animal (ESA): Protects Renters From Eviction by No-Pet Landlords (FHA)',
        body: [
          'An Emotional Support Animal (ESA) is a companion animal prescribed by a licensed healthcare professional to provide comfort through its presence alone. Unlike a service dog, an ESA is NOT trained to perform disability-mitigating tasks and is NOT considered medical equipment under the ADA.',
          'Consequently, an ESA has zero public-access rights in restaurants, grocery stores, hospitals, or hotels. Legally, the primary purpose of an ESA designation under the federal Fair Housing Act (FHA) is housing protection: it protects renters from being evicted or denied housing by a landlord whose building does not allow pets.',
        ],
      },
      {
        heading: '3. Facility & Visitation Therapy Dog: Bringing Comfort to Others by Invitation',
        body: [
          'Many Qbits Spanish Water Dogs go to homes where they are trained and certified as Therapy Dogs. While a Service Dog works for one disabled individual, a Therapy Dog works with its owner to bring comfort and joy to many different people inside hospitals, physical rehabilitation clinics, nursing homes, and schools by invitation. Therapy dogs must pass calm temperament and social stability tests (such as AKC Therapy Dog or Pet Partners certification), and their non-shedding rustic coat makes them favorites in clinical settings.',
        ],
      },
    ],
  },
  {
    slug: 'spanish-water-dog-breeder-nyc-northeast-lisa-harper-mentorship',
    category: 'Preservation Breeder Authority',
    title: 'One of Only 5 Spanish Water Dog Breeders in America: Mentored by Pioneer Lisa Harper',
    metaTitle: 'Spanish Water Dog Breeders in America | Qbits Kennel NYC (Mentored by Lisa Harper)',
    metaDescription: 'Qbits Spanish Water Dog Kennel on the Upper East Side of NYC is one of only 5 Spanish Water Dog breeders in America. Youngest breeder by 30 years, mentored by breed pioneer Lisa Harper.',
    targetKeywords: [
      'Spanish Water Dog breeders in America',
      'Spanish Water Dog breeder NYC',
      'Perro de Agua Español breeder Northeast',
      'Lisa Harper Spanish Water Dog',
      'Spanish Water Dog Club board member breeder',
    ],
    heroLead:
      'With only five active preservation Spanish Water Dog breeders in the United States, Qbits Kennel bridges multi-generational breed wisdom under mentor Lisa Harper with 21st-century leadership and service dog excellence.',
    ctaText: 'Apply for Our Fall 2027 / Spring 2028 Litters',
    ctaHref: '/#puppy-application',
    inquiryTopic: 'Puppy Waitlist Inquiry (Fall 2027 / Spring 2028 — Dudley × Molly)',
    sections: [
      {
        heading: '1 of Only 5 Breeders in America—And the Youngest by 30 Years',
        body: [
          'The Spanish Water Dog (Perro de Agua Español) remains one of the rarest, most carefully protected purebred working breeds in North America. Including Qbits Kennel on the Upper East Side of New York City, there are only five active preservation breeders in America.',
          'Our founder is the youngest Spanish Water Dog breeder in America by 30 years—yet brings the exact same seriousness, genetic vigilance, and uncompromising ethical standards as the senior breeders who established the breed. For puppy buyers and service dog handlers, that means you gain a breeder with the energy for hands-on daily training and decades of future availability to honor our lifetime breeder support guarantee.',
        ],
      },
      {
        heading: 'Mentored by Lisa Harper—The Pioneer Who Helped Legitimize the Breed in America',
        body: [
          'Great preservation breeders do not work in isolation; they stand on the shoulders of giants. Our program is privileged to be mentored by Lisa Harper, one of the most important foundational figures in the history of the Spanish Water Dog in the United States.',
          'As a lifelong board member of the breed club who played a central role in legitimizing and securing full recognition for the Spanish Water Dog in America, Lisa Harper’s mentorship ensures that every pairing at Qbits Kennel respects authentic Iberian type, low Coefficients of Inbreeding (COI), and complete OFA CHIC health screening.',
        ],
      },
      {
        heading: 'National Breed Club Board Service & Bringing the Club Into the 21st Century',
        body: [
          'Our commitment to the Spanish Water Dog extends far beyond our own home. In the past, our founder helped grow and serve the breed nationally by joining the national breed club’s Board of Directors and spearheading the modernization of the club’s website and digital infrastructure—bringing the organization into the 21st century so families nationwide could discover ethical breeders and accurate breed education.',
        ],
      },
    ],
  },
  {
    slug: 'spanish-water-dog-stud-service-dudley-ofa-chic',
    category: 'Approved Stud Services',
    title: 'Spanish Water Dog Stud Service in NYC & Nationwide: Standing Dudley (OFA CHIC Tested)',
    metaTitle: 'Spanish Water Dog Stud Service | Dudley (Qbits Kennel NYC — OFA CHIC & Service Proven)',
    metaDescription: 'Approved Spanish Water Dog stud services with Dudley on the Upper East Side of NYC. Full OFA CHIC clearances, service-proven working nerve, natural cover, fresh-chilled overnight & frozen semen.',
    targetKeywords: [
      'Spanish Water Dog stud service',
      'Perro de Agua Español stud dog',
      'OFA CHIC tested Spanish Water Dog sire',
      'Spanish Water Dog fresh chilled semen stud',
    ],
    heroLead:
      'Standing at stud on the Upper East Side of New York City: Dudley (Qbits Quantum Andalusian Tide) is available to approved, health-tested Spanish Water Dog bitches via natural cover, fresh-chilled overnight shipping, or frozen semen.',
    ctaText: 'Request Dudley’s Stud Packet & Pedigree',
    ctaHref: '/#stud-services',
    inquiryTopic: 'Stud Service Inquiry — Dudley',
    sections: [
      {
        heading: 'What Dudley Contributes to Preservation & Working Programs',
        body: [
          'At 19.25 inches and 46 lbs, Dudley exemplifies the balanced, cobbily built Iberian working dog. Selected under the mentorship standards of breed pioneer Lisa Harper and proven daily in New York City public-access and service dog foundations, Dudley offers fellow breeders rock-solid nerve stability, zero sound or environmental sensitivity, substantial bone without coarseness, and rich espresso rustic curl texture.',
        ],
      },
      {
        heading: 'Complete OFA CHIC & Genetic Health Clearances',
        body: [
          'Dudley holds passing OFA Hip (Good) and Elbow (Normal) evaluations, current annual board-certified ophthalmologist (CAER) eye clearances, and is genetically Clear/Normal for prcd-PRA, Neuroaxonal Dystrophy (NAD), and Congenital Hypothyroidism with Goiter (CHG).',
        ],
      },
      {
        heading: 'Seamless Reproductive Veterinary Logistics in NYC',
        body: [
          'Located minutes from Manhattan’s premier reproductive veterinary specialists and three major airports (JFK, LGA, EWR), we provide rapid progesterone-timed collections and priority overnight fresh-chilled shipping across North America. Email dog@cmejo.com with your bitch’s three-generation pedigree and OFA links.',
        ],
      },
    ],
  },
  {
    slug: 'spanish-water-dog-coat-care-grooming-never-brushed',
    category: 'Breed & Grooming Education',
    title: 'Spanish Water Dog Coat Care Guide: Why You Never Brush a Perro de Agua Español',
    metaTitle: 'Spanish Water Dog Coat Care & Grooming Guide (Never Brush!) | Qbits Kennel NYC',
    metaDescription: 'Complete guide to caring for a non-shedding Spanish Water Dog coat. Learn why you never brush or comb an SWD, how to bathe and blot-dry, and how to shear a clean utility clip.',
    targetKeywords: [
      'Spanish Water Dog coat care',
      'how to groom a Spanish Water Dog',
      'why never brush a Spanish Water Dog',
      'non shedding water dog for seniors and allergies',
    ],
    heroLead:
      'One of the greatest advantages of the Spanish Water Dog for senior citizens, allergy-sensitive households, and hospital service/therapy handlers is their single, non-shedding rustic coat—which is never brushed.',
    ctaText: 'Explore Our Breed Guide & Apply',
    ctaHref: '/#breed-guide',
    inquiryTopic: 'General Spanish Water Dog / Kennel Question',
    sections: [
      {
        heading: 'The Golden Rule: Throw Away the Brush and Comb',
        body: [
          'Unlike Poodles, Portuguese Water Dogs, or Doodle crosses that require daily slicker-brushing and high-velocity blow drying to prevent mats, the Spanish Water Dog has an authentic rustic single coat that naturally forms tight curls and tapered cords.',
          'Brushing or combing a Spanish Water Dog destroys the coat’s natural architecture, creating frizzy wool that mats rapidly. Instead, coat care is refreshingly simple: never brush, never comb, and never fluff-dry.',
        ],
      },
      {
        heading: 'The Easy "Utility Clip" for Service, Therapy & Family Dogs',
        body: [
          'While show dogs are sometimes grown out into full cords, nearly all working service dogs, therapy dogs, and Manhattan family companions wear a neat, athletic "utility clip": the coat is sheared evenly to one uniform length (typically 1/2 inch to 1 inch all over, with no Poodle topknot or sculpted tail) two to four times per year.',
          'Between shearings, simply bathe with a gentle, residue-free shampoo, blot excess water with a towel (do not rub vigorously), and let your dog air-dry naturally.',
        ],
      },
    ],
  },
  {
    slug: 'service-dog-tasks-for-multiple-sclerosis-spasticity-fatigue',
    category: 'Neurological Service Dog Series',
    title: 'Task-Trained Service Dogs for Multiple Sclerosis (MS): Spasticity, Drop Foot & Energy Conservation',
    metaTitle: 'Service Dogs for Multiple Sclerosis (MS) Tasks & Mobility | Qbits Kennel & Gotham Paw NYC',
    metaDescription: 'How our non-shedding Spanish Water Dog service animals assist handlers living with Multiple Sclerosis (MS)—from dropped item retrieval and heat/fatigue conservation to spasticity interruption.',
    targetKeywords: [
      'service dog for Multiple Sclerosis',
      'MS service dog tasks spasticity fatigue',
      'hypoallergenic service dog for MS NYC',
      'Gotham Paw Multiple Sclerosis service dog',
    ],
    heroLead:
      'For individuals living with Relapsing-Remitting or Progressive Multiple Sclerosis (MS), conserving daily physical energy and preventing falls during flare-ups are paramount. Here is how Qbits Kennel and Gotham Paw train Spanish Water Dogs for MS assistance.',
    ctaText: 'Inquire About an MS Service Dog Prospect ASAP',
    ctaHref: '/#contact',
    inquiryTopic: 'URGENT: Service Animal Prospect Inquiry (Spinal Cord Injury / Neuromuscular — Gotham Paw)',
    sections: [
      {
        heading: 'Mitigating MS Fatigue, Drop Foot & Heat Sensitivity Through Precision Tasks',
        body: [
          'In Multiple Sclerosis, bending over repeatedly to pick up dropped keys, phones, eyeglasses, or canes drains precious neuromuscular reserves and increases fall risk when balance or proprioception is impaired.',
          'Through our Gotham Paw Service Animal Program, we train our Spanish Water Dogs to execute precision object retrieval—picking up everything from metallic credit cards to prescription bottles and delivering them directly into your hand at waist or wheelchair height. They also tug open heavy interior doors, close drawers, carry light medical pouches, and assist with removing socks or light jackets.',
        ],
      },
      {
        heading: 'Tactile Deep Pressure Therapy (DPT) for Muscle Spasticity & Tremors',
        body: [
          'At 35 to 48 lbs, a Spanish Water Dog provides targeted, warming tactile weight across the legs or lap to help calm lower-extremity muscle spasticity, clonus, and neuropathic discomfort without overwhelming a handler’s frame.',
        ],
      },
    ],
  },
  {
    slug: 'service-dog-tasks-for-spinal-cord-injury-wheelchair-retrieval',
    category: 'Spinal Cord Injury Assistance',
    title: 'Service Dogs for Spinal Cord Injuries (SCI): Wheelchair Heeling, Retrieval & Door Plates',
    metaTitle: 'Spinal Cord Injury (SCI) Wheelchair Service Dogs | Qbits Kennel & Gotham Paw NYC',
    metaDescription: 'Task-trained Spanish Water Dog service animals for paraplegia, tetraplegia, and incomplete spinal cord injuries (SCI) on the Upper East Side of NYC in partnership with Gotham Paw.',
    targetKeywords: [
      'spinal cord injury service dog',
      'wheelchair service dog tasks retrieval',
      'service dog for paraplegia tetraplegia NYC',
      'non shedding wheelchair service dog',
    ],
    heroLead:
      'At least one puppy from every Qbits Spanish Water Dog litter enters our Gotham Paw Service Animal Program, where a primary focus is training wheelchair-compatible medical service dogs for handlers with complete or incomplete spinal cord injuries (SCI).',
    ctaText: 'Contact Us Early for an SCI Service Prospect',
    ctaHref: '/#contact',
    inquiryTopic: 'URGENT: Service Animal Prospect Inquiry (Spinal Cord Injury / Neuromuscular — Gotham Paw)',
    sections: [
      {
        heading: 'Engineered by Nature for Manual & Power Wheelchair Partnership',
        body: [
          'A wheelchair service dog must navigate narrow Manhattan doorways, hospital elevators, and crowded sidewalks in tight alignment with footplates and caster wheels. Because the Spanish Water Dog is a compact, agile herding and water-retrieving breed (15.75"–19.75" at the shoulder), they pivot effortlessly beside power and manual chairs where 85-lb retrievers struggle to turn.',
          'Even more importantly for SCI handlers managing clean intermittent catheterization or skin-integrity protocols, the Spanish Water Dog’s single wooly coat is virtually non-shedding—keeping wheelchair cushions, transfer boards, and bedding free of loose dander and hair.',
        ],
      },
      {
        heading: 'Core Spinal Cord Injury Tasks We Train at Gotham Paw',
        body: [
          'Core tasks include dropped-object retrieval from floor to lap, activating elevated ADA push-plate door buttons, tugging open refrigerator and cabinet doors via rope pulls, barking or alerting a caregiver on cue, and positioning for emergency phone access.',
        ],
      },
    ],
  },
  {
    slug: 'service-dog-tasks-for-cerebral-palsy-balance-counterbalance',
    category: 'Neuromuscular Service Dog Series',
    title: 'Task-Trained Service Dogs for Cerebral Palsy (CP) & Neuromuscular Movement Disorders',
    metaTitle: 'Service Dogs for Cerebral Palsy (CP) & Neuromuscular Disorders | Qbits Kennel NYC',
    metaDescription: 'Discover how Qbits Spanish Water Dog Kennel and Gotham Paw train service dogs for adults and families living with Cerebral Palsy (CP) and neuromuscular conditions.',
    targetKeywords: [
      'service dog for Cerebral Palsy',
      'neuromuscular disorder service dog NYC',
      'task trained dog for CP spasticity retrieval',
      'Gotham Paw Cerebral Palsy service animal',
    ],
    heroLead:
      'Living with Cerebral Palsy (CP) or a related neuromuscular disorder requires a service dog that is patient with variable speech or motor commands, gentle around orthotics and walkers, and rock-solid in public.',
    ctaText: 'Inquire About a Neuromuscular Service Dog',
    ctaHref: '/#contact',
    inquiryTopic: 'URGENT: Service Animal Prospect Inquiry (Spinal Cord Injury / Neuromuscular — Gotham Paw)',
    sections: [
      {
        heading: 'Customizing Cues for Variable Motor & Speech Patterns',
        body: [
          'Many handlers with Cerebral Palsy use a combination of verbal cues, hand signals, laser pointers, or assistive communication devices. Spanish Water Dogs are extraordinarily observant herding dogs that excel at reading subtle body language, gaze direction, and customized non-verbal cues.',
          'Through Gotham Paw, we tailor every dog’s task repertoire—including picking up dropped mobility aids, operating switches, interrupting hypertonia/spasticity episodes with calming tactile pressure, and walking at a matched, steady pace beside walkers, Forearm crutches, or wheelchairs.',
        ],
      },
    ],
  },
  {
    slug: 'spanish-water-dog-vs-portuguese-water-dog-vs-lagotto-romagnolo',
    category: 'Rare Water Breed Comparison',
    title: 'Spanish Water Dog vs. Portuguese Water Dog vs. Lagotto Romagnolo: Which Breed Fits You?',
    metaTitle: 'Spanish Water Dog vs Portuguese Water Dog vs Lagotto Romagnolo | Breeder Comparison',
    metaDescription: 'Compare the Spanish Water Dog (Perro de Agua Español), Portuguese Water Dog, and Lagotto Romagnolo across size, herding instinct, coat care, and service/therapy dog aptitude.',
    targetKeywords: [
      'Spanish Water Dog vs Portuguese Water Dog',
      'Spanish Water Dog vs Lagotto Romagnolo',
      'best medium hypoallergenic water dog',
      'Perro de Agua Español temperament comparison',
    ],
    heroLead:
      'Prospective families and seniors researching non-shedding European water dogs often compare the Spanish Water Dog, the Portuguese Water Dog, and the Lagotto Romagnolo. As one of only 5 Spanish Water Dog breeders in America, here is our honest breakdown.',
    ctaText: 'Take Our 60-Second Pathway Quiz',
    ctaHref: '/#pathway-quiz',
    inquiryTopic: 'Puppy Waitlist Inquiry (Fall 2027 / Spring 2028 — Dudley × Molly)',
    sections: [
      {
        heading: '1. The Herding Brain: Why the Spanish Water Dog Is More Handler-Focused',
        body: [
          'Unlike the Portuguese Water Dog (which is purely a water/fisherman’s dog in the AKC Working Group) and the Lagotto Romagnolo (specialized for truffle hunting in the Sporting Group), the Spanish Water Dog is a true dual-purpose pasture herder and water retriever placed in the AKC Herding Group.',
          'That herding heritage gives the Spanish Water Dog a noticeably deeper one-on-one bond with its handler, superior off-leash attentiveness, and the problem-solving intelligence required for complex medical service tasks.',
        ],
      },
      {
        heading: '2. Size & Grooming Differences',
        body: [
          'At 30–50 lbs, the Spanish Water Dog is more compact and manageable for seniors and apartment elevators than many male Portuguese Water Dogs (which can reach 60 lbs), while possessing stronger bone and retrieve power than the smaller Lagotto. Furthermore, the Spanish Water Dog coat is never brushed—making it simpler to maintain in a clean utility clip than a brushed Portuguese Water Dog coat.',
        ],
      },
    ],
  },
  {
    slug: 'best-dog-breed-for-active-seniors-upper-east-side-nyc',
    category: 'Senior Citizen Companion Guide',
    title: 'Why the Spanish Water Dog From Service-Proven Lines Is Ideal for Active Seniors',
    metaTitle: 'Best Non-Shedding Medium Dog for Active Seniors in NYC | Qbits Kennel Upper East Side',
    metaDescription: 'Why active seniors on the Upper East Side of NYC and across the Northeast choose Qbits Spanish Water Dogs—bred from service-proven lines with a non-shedding coat and lifetime support.',
    targetKeywords: [
      'best dog breed for active seniors NYC',
      'non shedding medium dog for retirees',
      'Spanish Water Dog for seniors',
      'Upper East Side dog breeder for seniors',
    ],
    heroLead:
      'Many of our favorite puppy families are active retirees and senior citizens who want an intelligent, loyal, non-shedding companion without the chaos of a hyperactive giant breed or a fragile toy dog.',
    ctaText: 'Apply or Request a Phone Call Back',
    ctaHref: '/#contact',
    inquiryTopic: 'Puppy Waitlist Inquiry (Fall 2027 / Spring 2028 — Dudley × Molly)',
    sections: [
      {
        heading: 'The Advantage of Buying a Companion Puppy From a Service Dog Breeder',
        body: [
          'When you adopt a companion puppy from Qbits Kennel, you benefit directly from our selective breeding for the Gotham Paw Service Animal Program. We breed specifically against hyperactivity, leash reactivity, and sound nervousness—prioritizing dogs that walk politely, settle calmly indoors, and stay attuned to their person’s pace.',
        ],
      },
      {
        heading: 'Decades of Guaranteed Lifetime Breeder Support',
        body: [
          'Because our founder is the youngest Spanish Water Dog breeder in America by 30 years—mentored by breed pioneer Lisa Harper—senior owners have complete peace of mind knowing their breeder will be active, reachable, and standing behind their dog for the entirety of the dog’s 12–15+ year lifespan.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-certify-a-therapy-dog-in-nyc-hospitals-nursing-homes',
    category: 'Therapy Dog Pathway Guide',
    title: 'How to Train & Certify Your Spanish Water Dog as a Hospital or Nursing Home Therapy Dog',
    metaTitle: 'How to Certify a Hospital Therapy Dog in NYC | Qbits Spanish Water Dog Kennel',
    metaDescription: 'Step-by-step guide to raising and certifying a Qbits Spanish Water Dog for hospital, rehabilitation clinic, school, and nursing home therapy visitation.',
    targetKeywords: [
      'how to certify a therapy dog NYC',
      'Spanish Water Dog therapy dog',
      'hypoallergenic hospital therapy dog breed',
      'therapy dog vs service dog training',
    ],
    heroLead:
      'Many Qbits puppies go to homes where their owners volunteer in hospitals, pediatric wards, physical rehab clinics, and senior living communities as certified Therapy Dogs.',
    ctaText: 'Apply for a Therapy Dog Prospect (2027/2028)',
    ctaHref: '/#puppy-application',
    inquiryTopic: 'Therapy Dog Prospect Inquiry (Fall 2027 / Spring 2028)',
    sections: [
      {
        heading: 'Why Hospitals & Rehab Centers Love Spanish Water Dogs',
        body: [
          'Clinical volunteer coordinators consistently praise Spanish Water Dogs for two reasons: (1) their single, non-shedding coat leaves zero hair on hospital sheets or sterile floors, and (2) their 35–48 lb height allows patients seated in wheelchairs or raised hospital beds to pet them comfortably without straining.',
        ],
      },
      {
        heading: 'Our Step-by-Step Certification Roadmap (CGC to Pet Partners / ATD)',
        body: [
          'At 7–8 weeks of age, we identify puppies in our Dudley × Molly litters that show high social warmth, calm recovery from sudden noises, and gentle tactile manners. We then guide our puppy families through AKC STAR Puppy, AKC Canine Good Citizen (CGC), and formal registration with Pet Partners, Alliance of Therapy Dogs, or NYC hospital therapy programs.',
        ],
      },
    ],
  },
  {
    slug: 'spanish-water-dog-health-clearances-ofa-chic-pra-nad-chg',
    category: 'Genetic Health & OFA CHIC Guide',
    title: 'Spanish Water Dog Health Testing Explained: OFA Hips, Eyes, prcd-PRA, NAD & CHG',
    metaTitle: 'Spanish Water Dog OFA CHIC Health Clearances (NAD, PRA, CHG, Hips) | Qbits Kennel',
    metaDescription: 'Learn which OFA and DNA health clearances are mandatory before buying a Spanish Water Dog puppy or booking a stud service: Hips, Elbows, CAER Eyes, prcd-PRA, NAD, and CHG.',
    targetKeywords: [
      'Spanish Water Dog health clearances OFA CHIC',
      'Neuroaxonal Dystrophy NAD Spanish Water Dog',
      'prcd-PRA CHG Spanish Water Dog DNA test',
      'health tested Spanish Water Dog breeder',
    ],
    heroLead:
      'Guided by our mentor Lisa Harper—who helped establish the breed’s ethical foundation in America—Qbits Kennel never breeds a dog without full orthopedic, ophthalmic, and DNA health clearances.',
    ctaText: 'Inspect Dudley & Molly’s Clearances',
    ctaHref: '/#our-dogs',
    inquiryTopic: 'General Spanish Water Dog / Kennel Question',
    sections: [
      {
        heading: 'The 6 Mandatory Health Clearances for Every Ethical Pairing',
        body: [
          'Before considering any Spanish Water Dog puppy or stud dog, verify that both parents hold passing evaluations for: (1) OFA Hips, (2) OFA Elbows, (3) Annual board-certified ophthalmologist (CAER) Eye Exam, (4) prcd-PRA (Progressive Rod-Cone Degeneration DNA test), (5) NAD (Neuroaxonal Dystrophy DNA test), and (6) CHG (Congenital Hypothyroidism with Goiter DNA test). Both Dudley and Molly are fully health-tested and genetically clear.',
        ],
      },
    ],
  },
  {
    slug: 'living-with-a-spanish-water-dog-in-manhattan-central-park',
    category: 'NYC Urban Dog Ownership',
    title: 'Living With a Spanish Water Dog in New York City: Apartments, Co-ops & Central Park',
    metaTitle: 'Spanish Water Dogs in NYC Apartments & Central Park | Qbits Kennel Upper East Side',
    metaDescription: 'Can a Spanish Water Dog thrive in a New York City apartment or co-op? Learn how Qbits Kennel raises calm, urban-confident Spanish Water Dogs on the Upper East Side.',
    targetKeywords: [
      'Spanish Water Dog apartment living NYC',
      'medium non shedding dog for Manhattan co-op',
      'Upper East Side Spanish Water Dog breeder',
      'Central Park off leash dog training',
    ],
    heroLead:
      'Raised right on the Upper East Side of Manhattan, our Spanish Water Dogs prove every day that an athletic working breed can be an extraordinarily quiet, clean, and well-mannered New York City apartment partner.',
    ctaText: 'Apply for a Manhattan-Raised Puppy',
    ctaHref: '/#puppy-application',
    inquiryTopic: 'Puppy Waitlist Inquiry (Fall 2027 / Spring 2028 — Dudley × Molly)',
    sections: [
      {
        heading: 'The Secret Is Early Manhattan Conditioning & an Indoor "Off-Switch"',
        body: [
          'Puppies raised in rural barns often experience sensory overload when brought into New York City at 8 weeks old. Because our puppies are whelped and raised inside our Upper East Side home, they grow up hearing sirens, elevators, delivery carts, and street life from infancy—graduating to their new homes already confident in city environments.',
        ],
      },
    ],
  },
  {
    slug: 'early-neurological-stimulation-ens-puppy-culture-service-dogs',
    category: 'Science-Backed Puppy Rearing',
    title: 'How Early Neurological Stimulation (ENS) & Mobility Conditioning Shape Our Puppies',
    metaTitle: 'Early Neurological Stimulation (ENS) & Service Puppy Socialization | Qbits Kennel NYC',
    metaDescription: 'Inside Qbits Kennel’s Day 3–16 Early Neurological Stimulation (ENS), Early Scent Introduction, and wheelchair/mobility conditioning protocol on the Upper East Side of NYC.',
    targetKeywords: [
      'Early Neurological Stimulation ENS service dogs',
      'Puppy Culture Spanish Water Dog breeder',
      'how service dog puppies are socialized from birth',
    ],
    heroLead:
      'Because at least one puppy from every Qbits litter is destined for medical service work with Gotham Paw, every single puppy in our nursery receives an elite, science-backed neonatal development curriculum.',
    ctaText: 'View Our 4-Phase Litter Roadmap',
    ctaHref: '/#upcoming-litters',
    inquiryTopic: 'Puppy Waitlist Inquiry (Fall 2027 / Spring 2028 — Dudley × Molly)',
    sections: [
      {
        heading: 'Days 3 to 16: Building Stress Resilience & Heart-Rate Recovery',
        body: [
          'Between Days 3 and 16 of life, each puppy completes daily five-step Early Neurological Stimulation (ENS) and Early Scent Introduction (ESI) exercises. Combined with Weeks 3–8 exposure to wheelchairs, walkers, crutches, and varied underfoot surfaces, this protocol produces puppies with measurably calmer stress recovery for service, therapy, and family life.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-nyc-co-op-board-rules-for-service-dogs-and-esas',
    category: 'NYC Housing & Disability Rights',
    title: 'NYC Co-op, Condo & Rental Rules for Task-Trained Service Dogs vs. ESAs',
    metaTitle: 'NYC Co-op & Apartment Rules for Service Dogs vs ESAs (ADA & FHA) | Qbits Kennel',
    metaDescription: 'Educational guide for New York City co-op shareholders, condo owners, and renters on federal Fair Housing Act (FHA) and ADA protections for task-trained service dogs and ESAs.',
    targetKeywords: [
      'NYC co-op rules service dog vs emotional support animal',
      'Fair Housing Act service dog no pet building NYC',
      'medical equipment service dog apartment rights',
    ],
    heroLead:
      'Many Upper East Side and Manhattan residents live in co-ops, condos, or rental buildings with strict weight limits or no-pet clauses. Understanding how federal law applies to Task-Trained Service Dogs versus Emotional Support Animals (ESAs) protects both residents and boards.',
    ctaText: 'Compare Service Dogs vs. ESAs',
    ctaHref: '/#service-animals',
    inquiryTopic: 'URGENT: Service Animal Prospect Inquiry (Spinal Cord Injury / Neuromuscular — Gotham Paw)',
    sections: [
      {
        heading: 'How the ADA and Fair Housing Act Apply in New York City Buildings',
        body: [
          'A Task-Trained Service Dog—such as a Qbits Spanish Water Dog trained through Gotham Paw to assist a resident with a spinal cord injury, Multiple Sclerosis, or Cerebral Palsy—is legally medical equipment under the ADA and a reasonable accommodation under the federal Fair Housing Act (FHA) and NYC Human Rights Law, exempt from building pet bans and weight caps.',
          'By contrast, an Emotional Support Animal (ESA) is not task-trained and has no public-access rights in restaurants or stores; its legal function under the Fair Housing Act is strictly housing protection to prevent a renter or resident with a documented disability from being evicted or denied housing by a landlord that does not allow pets.',
        ],
      },
    ],
  },
];
