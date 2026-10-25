/**
 * CENTRALIZED CONTENT & PHOTOGRAPHY CONFIGURATION
 * Edit any copy, dog stats, health clearances, or image paths below.
 * To swap stock photography: replace files in `/public/images/` OR update the `image` paths here.
 */

export const KENNEL_INFO = {
  name: 'Qbits Spanish Water Dog Kennel',
  shortName: 'Qbits Kennel',
  tagline:
    'Service-Focused & Preservation-Bred Perro de Agua Español on the Upper East Side of New York City',
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
  heroImage: {
    src: '/images/hero-swd.jpg',
    alt: 'Curly-coated Spanish Water Dog portrait in warm natural light representing Qbits Kennel on the Upper East Side of New York City',
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
      'Dudley combines classic Iberian working cobbiness with extraordinary nerve stability and human attunement. Rather than campaigning in weekend AKC conformation rings, Dudley proves his merit daily in demanding New York City public-access environments and task-training foundations.',
    temperamentNotes:
      'Calm under heavy Manhattan sensory load, deeply biddable, natural retrieve and counterbalance drive, zero sharpness, and an effortless indoor "off-switch" essential for medical service and family companionship.',
    image: {
      src: '/images/dudley-stud.jpg',
      alt: 'Dudley, our male Spanish Water Dog stud dog at Qbits Kennel in New York City',
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
      alt: 'Molly, our female Spanish Water Dog foundation bitch at Qbits Kennel in New York City',
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
      'While our dogs honor the full Spanish Water Dog health and structural standard, we do not spend weekends chasing AKC conformation ribbons. Our dogs are proven through real-world medical task reliability, hospital/transit public access, and life-changing assistance work.',
  },
  {
    badge: 'Precision Task Training',
    title: 'Custom Neurological & Physical Assistance Tasks',
    description:
      'Our Spanish Water Dogs aremedium-sized, non-shedding, and naturally retrieve-driven—ideal for dropped-object recovery (keys, phones, medication, canes), wheelchair/walker side-heeling, ADA push-plate & door/drawer tugging, spasticity/tremor interruption, and deep pressure therapy.',
  },
];

export interface AssistanceComparisonRow {
  type: string;
  legalClassification: string;
  trainingStandard: string;
  publicAccessRights: string;
  housingProtections: string;
  qbitsPlacement: string;
}

export const ASSISTANCE_DOG_COMPARISON: AssistanceComparisonRow[] = [
  {
    type: 'Task-Trained Service Dog',
    legalClassification: 'Legally recognized as Medical Equipment under the federal Americans with Disabilities Act (ADA).',
    trainingStandard:
      'Individually trained to perform specific, measurable physical or neurological tasks directly mitigating a handler’s disability (e.g., spinal cord injury, MS, Cerebral Palsy), plus rigorous public-access neutrality.',
    publicAccessRights:
      'Full federal public-access rights—permitted in hospitals, restaurants, grocery stores, airplanes, transit, and workplaces alongside their disabled handler.',
    housingProtections:
      'Protected under the Fair Housing Act (FHA)—exempt from landlord pet bans and pet fees.',
    qbitsPlacement:
      'At least 1 puppy per litter is transferred into our Gotham Paw Service Animal Program. Early application is essential.',
  },
  {
    type: 'Therapy Dog',
    legalClassification: 'Working volunteer/clinical support animal (not personal medical equipment under the ADA).',
    trainingStandard:
      'Trained and certified for exceptional calmness, friendly social engagement, and stability around medical equipment to comfort many different people.',
    publicAccessRights:
      'No general public-access rights; permitted only inside facilities where invited (hospitals, physical rehab centers, nursing homes, schools, libraries).',
    housingProtections:
      'Subject to standard landlord pet policies unless separately prescribed.',
    qbitsPlacement:
      'Many Qbits puppies are placed with families, clinicians, and educators specifically for certified Therapy Dog work.',
  },
  {
    type: 'Emotional Support Animal (ESA)',
    legalClassification: 'Companion animal prescribed by a licensed healthcare provider for emotional/psychiatric comfort.',
    trainingStandard:
      'No specific disability task training required; provides comfort through companionship and presence alone.',
    publicAccessRights:
      'NO public-access rights in restaurants, stores, or non-pet-friendly venues.',
    housingProtections:
      'Primarily protects renters from being evicted or denied housing by a landlord whose building does not allow pets (under the Fair Housing Act).',
    qbitsPlacement:
      'Companion puppies naturally provide deep emotional bond in the home, though ESAs do not have public-access privileges.',
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
    question: 'Why don’t you regularly show your dogs at AKC conformation events?',
    answer:
      'Our primary mission is breeding and proving functional working service animals rather than collecting weekend beauty/conformation ribbons. While Dudley and Molly adhere strictly to the Spanish Water Dog structural standard and complete full OFA CHIC health testing, our dogs are proven in real-world service dog work through <a href="https://gothampaw.netlify.app/services/service-animal/" target="_blank" rel="noopener noreferrer">Gotham Paw</a>—assisting people with spinal cord injuries and neuromuscular disorders where calm nerve stability, biddability, and task reliability matter most.',
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
      'We are planning our next litters between our resident stud dog Dudley and our foundation bitch Molly for Fall 2027 or Spring 2028. Because we breed selectively for service aptitude, health, and preservation quality rather than volume, our waitlist opens early so we can work closely with prospective service, therapy, and companion families.',
  },
  {
    question: 'Is Dudley currently available for stud services to outside bitches?',
    answer:
      'Yes! Dudley is available at stud to approved, AKC/FCI-registered Spanish Water Dog bitches that have passed OFA hip, eye (CAER), and breed-specific genetic health clearances (prcd-PRA, NAD, CHG). We offer natural breeding in the NYC area as well as fresh-chilled overnight shipping and frozen semen. Email <a href="mailto:dog@cmejo.com">dog@cmejo.com</a> with your bitch’s pedigree and OFA links.',
  },
  {
    question: 'How do I apply for a Fall 2027 / Spring 2028 puppy or Service Animal prospect?',
    answer:
      'You can apply in two convenient ways right on this page: (1) Fill out our interactive Online Puppy &amp; Service Prospect Application, which submits directly on our website and via <a href="mailto:dog@cmejo.com">dog@cmejo.com</a>, OR (2) Download our official 2-page Fillable &amp; Printable PDF Application (<a href="/qbits-puppy-application.pdf">/qbits-puppy-application.pdf</a>), fill it out on your computer or print it by hand, and email or mail it to us.',
  },
  {
    question: 'How do you care for a Spanish Water Dog’s curly or corded coat?',
    answer:
      'The golden rule of the Spanish Water Dog coat is: never brush or comb it! Brushing destroys the natural curl and cord architecture. Most companion and service dog handlers keep their SWD in a neat, low-maintenance "utility clip" (sheared evenly all over to one length every 3–5 months) and blot-dry with towels after baths.',
  },
];
