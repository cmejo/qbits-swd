import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'node:fs/promises';
import path from 'node:path';

async function generateClinicalBrochurePDF() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle('Qbits Spanish Water Dog Kennel & Gotham Paw — Large-Print Clinical & Family Service Dog Brochure');
  pdfDoc.setAuthor('Qbits Spanish Water Dog Kennel & Gotham Paw (dog@cmejo.com)');
  pdfDoc.setSubject('Task-Trained Service Animals for Spinal Cord Injuries (SCI), Cerebral Palsy, Multiple Sclerosis & Neuromuscular Disorders');
  pdfDoc.setKeywords([
    'Spanish Water Dog Service Dog',
    'Gotham Paw Service Animal Training',
    'Spinal Cord Injury Service Dog',
    'Multiple Sclerosis Service Dog',
    'Cerebral Palsy Service Dog',
    'Lisa Harper Mentor',
    'Qbits Kennel NYC',
  ]);

  const serifBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const serifItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const sansFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const sansBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const espresso = rgb(0.09, 0.08, 0.07);
  const forest = rgb(0.08, 0.21, 0.16);
  const terracotta = rgb(0.66, 0.31, 0.18);
  const sandBg = rgb(0.96, 0.94, 0.91);
  const borderStone = rgb(0.75, 0.7, 0.63);
  const white = rgb(1, 1, 1);

  // =========================================================================
  // PAGE 1: Large-Print Clinical & Family Overview (Service Dog Specialization)
  // =========================================================================
  const page1 = pdfDoc.addPage([612, 792]);

  page1.drawRectangle({ x: 36, y: 684, width: 540, height: 72, color: forest });
  page1.drawText('QBITS SPANISH WATER DOG KENNEL & GOTHAM PAW', {
    x: 50,
    y: 730,
    size: 16,
    font: serifBold,
    color: white,
  });
  page1.drawText('LARGE-PRINT CLINICAL, PATIENT & FAMILY OVERVIEW  |  UPPER EAST SIDE, NEW YORK CITY', {
    x: 50,
    y: 713,
    size: 8.5,
    font: sansBold,
    color: rgb(0.95, 0.75, 0.65),
  });
  page1.drawText('1 of Only 5 Spanish Water Dog Breeders in America  •  Mentored by Breed Pioneer Lisa Harper', {
    x: 50,
    y: 696,
    size: 9.5,
    font: serifItalic,
    color: rgb(0.95, 0.93, 0.89),
  });

  let y = 660;
  const drawBlock = (p, title, lines, boxHeight) => {
    p.drawRectangle({
      x: 36,
      y: y - boxHeight,
      width: 540,
      height: boxHeight,
      color: sandBg,
      borderColor: borderStone,
      borderWidth: 1,
    });
    p.drawText(title, { x: 48, y: y - 20, size: 11.5, font: sansBold, color: forest });
    let lineY = y - 38;
    for (const l of lines) {
      p.drawText(l, { x: 48, y: lineY, size: 10, font: sansFont, color: espresso });
      lineY -= 15;
    }
    y -= boxHeight + 14;
  };

  drawBlock(
    page1,
    '1. OUR CLINICAL & PRESERVATION MISSION ON THE UPPER EAST SIDE OF NYC',
    [
      '• 1 of Only 5 Breeders in America: Qbits Kennel is one of only five active preservation Spanish Water Dog',
      '  (Perro de Agua Espanol) breeders in the United States. Our founder is the youngest breeder by 30 years,',
      '  operating with the exact same rigor and health standards as the senior pioneers.',
      '• Mentored by Lisa Harper: Guided directly by Lisa Harper—lifelong board member and foundational figure',
      '  who helped legitimize the Spanish Water Dog in America. Our founder also served on the national breed',
      '  club Board of Directors and modernized the club’s official website for the 21st century.',
      '• Guaranteed Service Allocation: At least ONE puppy from every Qbits litter is transferred directly into',
      '  our Service Animal Program at Gotham Paw (https://gothampaw.netlify.app/services/service-animal/).',
    ],
    158
  );

  drawBlock(
    page1,
    '2. SPINAL CORD INJURY (SCI) & NEUROMUSCULAR TASK SPECIALIZATION',
    [
      '• Why We Prove Dogs in Service Work Instead of AKC Conformation Shows: Rather than chasing weekend',
      '  beauty ribbons, our bloodlines are proven as real-world medical equipment for handlers with disabilities.',
      '• Conditions Served: Spinal Cord Injuries (paraplegia, tetraplegia, incomplete SCI), Cerebral Palsy (CP),',
      '  Multiple Sclerosis (MS), ALS, post-stroke mobility deficits, and peripheral neuropathies.',
      '• Core Trained Tasks: Dropped-object retrieval (medication, keys, phones, canes, orthotics) delivered to lap',
      '  or hand; wheelchair/walker side-heeling; ADA push-plate button activation; door/drawer tugging; and',
      '  calming Deep Pressure Therapy (DPT) to interrupt neuromuscular spasticity and clonus.',
    ],
    144
  );

  drawBlock(
    page1,
    '3. WHY PHYSICIANS, OTs, PTs & SENIORS PREFER THE SPANISH WATER DOG',
    [
      '• Ideal Mobility Size (35–48 lbs, 15.75"–19.75"): Compact enough to turn effortlessly beside power wheelchairs',
      '  and fit inside Manhattan elevators or under hospital beds, yet muscular enough for heavy retrieval.',
      '• Single, Non-Shedding Coat (Never Brushed): Leaves zero shedding hair on wheelchair cushions, catheters,',
      '  transfer boards, or hospital floors. Maintained in a clean utility clip 2–4 times per year.',
      '• Full OFA CHIC Health Clearances: Sire Dudley & Dam Molly hold passing OFA Hips, OFA Elbows, annual',
      '  board-certified ophthalmologist (CAER) Eye clearances, and Clear DNA for prcd-PRA, NAD, and CHG.',
    ],
    130
  );

  page1.drawRectangle({
    x: 36,
    y: 56,
    width: 540,
    height: 112,
    color: rgb(0.99, 0.96, 0.94),
    borderColor: terracotta,
    borderWidth: 1.5,
  });
  page1.drawText('URGENT NOTICE FOR PROSPECTIVE SERVICE DOG CLIENTS & CLINICIANS:', {
    x: 48,
    y: 146,
    size: 10.5,
    font: sansBold,
    color: terracotta,
  });
  const urgentLines = [
    'Evaluating, matching, and custom task-training a neurological or mobility service dog to our standards is a',
    'thorough, multi-stage process. If you, your patient, or your family member are interested in a service dog',
    'prospect from our Fall 2027 / Spring 2028 litters (Dudley x Molly), please reach out to us ASAP:',
    '• Email: dog@cmejo.com   |   Kennel Website: https://qbits-swd.netlify.app',
    '• Gotham Paw Service Animal Program: https://gothampaw.netlify.app/services/service-animal/',
  ];
  let uY = 128;
  for (const ul of urgentLines) {
    page1.drawText(ul, { x: 48, y: uY, size: 9.8, font: sansFont, color: espresso });
    uY -= 14;
  }

  page1.drawText('Qbits Spanish Water Dog Kennel & Gotham Paw • Upper East Side, New York City • dog@cmejo.com • Page 1 of 2', {
    x: 36,
    y: 28,
    size: 8.5,
    font: sansFont,
    color: espresso,
  });

  // =========================================================================
  // PAGE 2: Legal Guide (Service Dog vs. Therapy Dog vs. ESA) & Next Steps
  // =========================================================================
  const page2 = pdfDoc.addPage([612, 792]);

  page2.drawRectangle({ x: 36, y: 716, width: 540, height: 40, color: forest });
  page2.drawText('LEGAL & CLINICAL COMPARISON: SERVICE DOG vs. THERAPY DOG vs. ESA (PAGE 2)', {
    x: 50,
    y: 731,
    size: 11.5,
    font: serifBold,
    color: white,
  });

  y = 696;
  drawBlock(
    page2,
    'A. TASK-TRAINED SERVICE DOG = LEGAL MEDICAL EQUIPMENT (FEDERAL ADA)',
    [
      '• Legal Status: Under the federal Americans with Disabilities Act (ADA, 28 CFR § 36.104), a task-trained',
      '  service dog is legally classified as a piece of MEDICAL EQUIPMENT (like a wheelchair or medical device).',
      '• Training Standard: Individually trained to perform specific physical or neurological tasks that directly',
      '  mitigate a handler’s diagnosed disability (e.g., SCI, Cerebral Palsy, MS), plus public-access proofing.',
      '• Full Rights: Full federal public-access rights everywhere the public goes (hospitals, restaurants, stores,',
      '  transit, workplaces) AND full housing exemption in no-pet NYC co-ops/rentals under the Fair Housing Act.',
    ],
    132
  );

  drawBlock(
    page2,
    'B. FACILITY / VISITATION THERAPY DOG = COMFORTING OTHERS BY INVITATION',
    [
      '• Legal Status: A certified volunteer or clinical visitation dog that brings comfort to many people.',
      '• Training Standard: Certified (e.g., AKC Therapy Dog, Pet Partners, Alliance of Therapy Dogs) for calm,',
      '  gentle stability around hospital beds, nursing homes, rehabilitation clinics, and schools.',
      '• Rights: Permitted inside hospitals, nursing homes, and schools BY INVITATION ONLY. Does not have',
      '  personal ADA public-access rights in non-pet restaurants or stores. Many Qbits dogs serve as Therapy Dogs.',
    ],
    118
  );

  drawBlock(
    page2,
    'C. EMOTIONAL SUPPORT ANIMAL (ESA) = RENTER HOUSING PROTECTION ONLY (FHA)',
    [
      '• Legal Status: A companion pet supported by a licensed healthcare provider’s letter that provides comfort',
      '  through companionship alone, without disability task training. It is NOT medical equipment under the ADA.',
      '• Rights & Limitations: An ESA has ZERO public-access rights in restaurants, stores, or public venues.',
      '  Legally, an ESA designation under the federal Fair Housing Act (FHA) ONLY protects renters from being',
      '  evicted or denied housing by a landlord whose building does not allow pets.',
    ],
    118
  );

  drawBlock(
    page2,
    'HOW TO APPLY OR SCHEDULE A CLINICAL / FAMILY CONSULTATION',
    [
      '1. Online Interactive Application: Visit https://qbits-swd.netlify.app/#puppy-application to submit your',
      '   Service Dog, Therapy Dog, or Companion application directly online.',
      '2. Fillable & Printable 2-Page Application PDF: Download https://qbits-swd.netlify.app/qbits-puppy-application.pdf',
      '   to type into the form fields on your computer or print and mail it in.',
      '3. Direct Breeder & Trainer Contact: Email dog@cmejo.com anytime to request a 10-minute introductory',
      '   phone consultation (patients, seniors, caregivers, and OTs/PTs are warmly welcomed).',
    ],
    132
  );

  page2.drawText('Qbits Spanish Water Dog Kennel & Gotham Paw • Upper East Side, New York City • dog@cmejo.com • Page 2 of 2', {
    x: 36,
    y: 28,
    size: 8.5,
    font: sansFont,
    color: espresso,
  });

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve('public');
  await fs.mkdir(outDir, { recursive: true });
  const outFile = path.join(outDir, 'qbits-clinical-service-dog-brochure.pdf');
  await fs.writeFile(outFile, pdfBytes);
  console.log(`Generated Large-Print Clinical Brochure PDF at: ${outFile} (${pdfBytes.length} bytes)`);
}

generateClinicalBrochurePDF().catch((err) => {
  console.error('Failed to generate Clinical Brochure PDF:', err);
  process.exit(1);
});
