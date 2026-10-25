/**
 * CENTRALIZED CONTENT, BREEDER AUTHORITY, SEO LANDING PAGES & ANALYTICS CONFIGURATION
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
  mentorName: 'Lisa Harper',
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
];
