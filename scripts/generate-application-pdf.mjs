import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'node:fs/promises';
import path from 'node:path';

async function generateApplicationPDF() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle('Qbits Spanish Water Dog Kennel - Service, Therapy & Puppy Application Form (NYC)');
  pdfDoc.setAuthor('Qbits Spanish Water Dog Kennel & Gotham Paw (dog@cmejo.com)');
  pdfDoc.setSubject('Prospective Service Dog, Therapy Dog & Family Puppy Questionnaire (Fall 2027 / Spring 2028)');
  pdfDoc.setKeywords([
    'Spanish Water Dog',
    'Perro de Agua Espanol',
    'Qbits Kennel',
    'Gotham Paw Service Dogs',
    'Spinal Cord Injury Service Dog',
    'Neuromuscular Service Dog',
    'NYC Dog Breeder',
    'Dudley',
    'Molly',
    'Puppy Application',
  ]);

  const serifFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const serifBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const serifItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const sansFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const sansBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Boutique NYC Editorial Palette
  const espresso = rgb(0.11, 0.098, 0.09);      // #1C1917
  const forest = rgb(0.118, 0.247, 0.196);      // #1E3F32
  const terracotta = rgb(0.722, 0.365, 0.231);  // #B85D3B
  const warmSlate = rgb(0.34, 0.32, 0.3);       // #57534E
  const sandBg = rgb(0.965, 0.95, 0.925);       // #F6F2EC
  const borderStone = rgb(0.82, 0.78, 0.72);    // #D1C7B7
  const fieldBg = rgb(0.99, 0.985, 0.975);      // #FCFBF9

  const form = pdfDoc.getForm();

  // Helper to draw a section banner
  function drawSectionHeader(page, y, numberStr, title) {
    page.drawRectangle({
      x: 42,
      y: y - 4,
      width: 528,
      height: 22,
      color: sandBg,
      borderColor: borderStone,
      borderWidth: 0.75,
    });
    page.drawText(`${numberStr}. ${title.toUpperCase()}`, {
      x: 50,
      y: y + 3,
      size: 9.5,
      font: sansBold,
      color: forest,
    });
    return y - 22;
  }

  // Helper to create a labeled single-line or multi-line text field
  function addTextField(page, { name, label, x, y, width, height = 20, multiline = false, defaultValue = '' }) {
    page.drawText(label, {
      x,
      y: y + height + 4,
      size: 8.5,
      font: sansBold,
      color: espresso,
    });
    const tf = form.createTextField(name);
    if (multiline) {
      tf.enableMultiline();
    }
    if (defaultValue) {
      tf.setText(defaultValue);
    }
    tf.addToPage(page, {
      x,
      y,
      width,
      height,
      textColor: espresso,
      backgroundColor: fieldBg,
      borderColor: borderStone,
      borderWidth: 0.8,
      font: sansFont,
    });
    tf.setFontSize(9.5);
  }

  // Helper to create a labeled checkbox
  function addCheckBox(page, { name, label, x, y, checked = false }) {
    const cb = form.createCheckBox(name);
    cb.addToPage(page, {
      x,
      y,
      width: 12,
      height: 12,
      textColor: forest,
      backgroundColor: fieldBg,
      borderColor: borderStone,
      borderWidth: 0.8,
    });
    if (checked) cb.check();
    page.drawText(label, {
      x: x + 17,
      y: y + 2,
      size: 8.5,
      font: sansFont,
      color: espresso,
    });
  }

  // =========================================================================
  // PAGE 1: Header, Applicant Info, Living Environment & Daily Routine
  // =========================================================================
  const page1 = pdfDoc.addPage([612, 792]); // US Letter

  // Top Editorial Header Box
  page1.drawRectangle({
    x: 42,
    y: 696,
    width: 528,
    height: 64,
    color: forest,
  });

  page1.drawText('QBITS SPANISH WATER DOG KENNEL', {
    x: 56,
    y: 736,
    size: 16,
    font: serifBold,
    color: rgb(0.98, 0.97, 0.95),
  });

  page1.drawText('UPPER EAST SIDE, NYC  |  GOTHAM PAW SERVICE DOG PARTNER  |  EMAIL: DOG@CMEJO.COM', {
    x: 56,
    y: 721,
    size: 8,
    font: sansBold,
    color: rgb(0.85, 0.82, 0.76),
  });

  page1.drawText('Service Animal, Therapy Dog & Family Puppy Application — Dudley (Sire) x Molly (Dam) | Fall 2027 / Spring 2028', {
    x: 56,
    y: 706,
    size: 8.5,
    font: serifItalic,
    color: rgb(0.95, 0.93, 0.89),
  });

  // Instructions bar
  page1.drawText(
    'INSTRUCTIONS: Type directly into the fields on your computer and email to dog@cmejo.com, OR print, fill by hand, and mail/scan to us.',
    {
      x: 42,
      y: 680,
      size: 8,
      font: sansFont,
      color: terracotta,
    }
  );

  // SECTION 1: APPLICANT INFORMATION
  let curY = drawSectionHeader(page1, 654, '01', 'Applicant & Household Contact Information');

  curY -= 24;
  addTextField(page1, {
    name: 'applicant_name',
    label: 'Primary Applicant Full Name *',
    x: 42,
    y: curY,
    width: 256,
  });
  addTextField(page1, {
    name: 'co_applicant_name',
    label: 'Co-Applicant / Caregiver / Partner Name (if applicable)',
    x: 314,
    y: curY,
    width: 256,
  });

  curY -= 42;
  addTextField(page1, {
    name: 'email_address',
    label: 'Email Address *',
    x: 42,
    y: curY,
    width: 256,
  });
  addTextField(page1, {
    name: 'phone_number',
    label: 'Mobile / Preferred Phone Number *',
    x: 314,
    y: curY,
    width: 256,
  });

  curY -= 42;
  addTextField(page1, {
    name: 'street_address',
    label: 'Street Address & Apartment / Unit # *',
    x: 42,
    y: curY,
    width: 256,
  });
  addTextField(page1, {
    name: 'city_state_zip',
    label: 'City, State, ZIP Code (and NYC Neighborhood if local) *',
    x: 314,
    y: curY,
    width: 256,
  });

  curY -= 42;
  addTextField(page1, {
    name: 'household_members',
    label: 'Occupations & Ages of All Household Members (including children or support caregivers)',
    x: 42,
    y: curY,
    width: 528,
  });

  // SECTION 2: LIVING ENVIRONMENT & ROUTINE
  curY -= 30;
  curY = drawSectionHeader(page1, curY, '02', 'Living Environment, NYC / Home Setup & Daily Routine');

  curY -= 16;
  page1.drawText('Residence Type (check one):', {
    x: 42,
    y: curY + 2,
    size: 8.5,
    font: sansBold,
    color: espresso,
  });
  addCheckBox(page1, { name: 'home_house', label: 'Single-Family House', x: 175, y: curY });
  addCheckBox(page1, { name: 'home_townhouse', label: 'Townhouse / Brownstone', x: 285, y: curY });
  addCheckBox(page1, { name: 'home_apt', label: 'Apartment / Condo / Co-op', x: 415, y: curY });

  curY -= 22;
  page1.drawText('Ownership Status:', {
    x: 42,
    y: curY + 2,
    size: 8.5,
    font: sansBold,
    color: espresso,
  });
  addCheckBox(page1, { name: 'own_home', label: 'Own Residence', x: 175, y: curY });
  addCheckBox(page1, { name: 'rent_home', label: 'Rent (Dog Approved or ADA/FHA Service Dog Exempt)', x: 285, y: curY });

  curY -= 44;
  addTextField(page1, {
    name: 'yard_and_outdoor_access',
    label: 'Describe your yard/fencing OR nearby parks/green spaces for daily exercise & enrichment *',
    x: 42,
    y: curY,
    width: 528,
    height: 30,
    multiline: true,
  });

  curY -= 48;
  addTextField(page1, {
    name: 'hours_alone_and_care',
    label: 'How many hours per day will the dog be alone? What arrangements will be made for daily walks/care? *',
    x: 42,
    y: curY,
    width: 528,
    height: 30,
    multiline: true,
  });

  // SECTION 3: BREED EXPERIENCE & COAT CARE
  curY -= 30;
  curY = drawSectionHeader(page1, curY, '03', 'Spanish Water Dog Experience, Temperament & Coat Care');

  curY -= 54;
  addTextField(page1, {
    name: 'previous_dog_experience',
    label: 'Describe your previous dog experience (breeds owned, service/therapy dog history, working dog familiarity) *',
    x: 42,
    y: curY,
    width: 528,
    height: 38,
    multiline: true,
  });

  curY -= 54;
  addTextField(page1, {
    name: 'swd_attraction_and_coat',
    label: 'Why a Spanish Water Dog? Are you prepared for SWD rustic coat care (never brushed/combed, sheared evenly or corded)? *',
    x: 42,
    y: curY,
    width: 528,
    height: 38,
    multiline: true,
  });

  curY -= 44;
  addTextField(page1, {
    name: 'current_pets_allergies',
    label: 'List any current pets in the home AND confirm whether anyone in the household has dog allergies:',
    x: 42,
    y: curY,
    width: 528,
    height: 28,
    multiline: true,
  });

  // Footer Page 1
  page1.drawLine({
    start: { x: 42, y: 42 },
    end: { x: 570, y: 42 },
    thickness: 0.5,
    color: borderStone,
  });
  page1.drawText('Qbits Spanish Water Dog Kennel • Upper East Side, New York City, NY • dog@cmejo.com • Page 1 of 2', {
    x: 42,
    y: 28,
    size: 8,
    font: sansFont,
    color: warmSlate,
  });

  // =========================================================================
  // PAGE 2: Litter Preferences, References, Commitments & Signature
  // =========================================================================
  const page2 = pdfDoc.addPage([612, 792]);

  // Mini Header Page 2
  page2.drawRectangle({
    x: 42,
    y: 726,
    width: 528,
    height: 34,
    color: forest,
  });
  page2.drawText('QBITS SPANISH WATER DOG KENNEL — SERVICE, THERAPY & PUPPY APPLICATION (PAGE 2)', {
    x: 56,
    y: 739,
    size: 10.5,
    font: serifBold,
    color: rgb(0.98, 0.97, 0.95),
  });

  // SECTION 4: LITTER TIMING & PUPPY PREFERENCES
  let p2Y = drawSectionHeader(page2, 694, '04', 'Dudley x Molly Placement Pathway & Litter Preferences (Fall 2027 / Spring 2028)');

  p2Y -= 18;
  page2.drawText('Preferred Litter Window:', {
    x: 42,
    y: p2Y + 2,
    size: 8.5,
    font: sansBold,
    color: espresso,
  });
  addCheckBox(page2, { name: 'timing_fall_2027', label: 'Fall 2027 Litter', x: 175, y: p2Y });
  addCheckBox(page2, { name: 'timing_spring_2028', label: 'Spring 2028 Litter', x: 285, y: p2Y });
  addCheckBox(page2, { name: 'timing_either', label: 'Either / First Available Match', x: 400, y: p2Y, checked: true });

  p2Y -= 22;
  page2.drawText('Sex Preference:', {
    x: 42,
    y: p2Y + 2,
    size: 8.5,
    font: sansBold,
    color: espresso,
  });
  addCheckBox(page2, { name: 'sex_male', label: 'Male', x: 175, y: p2Y });
  addCheckBox(page2, { name: 'sex_female', label: 'Female', x: 285, y: p2Y });
  addCheckBox(page2, { name: 'sex_open', label: 'No Preference (Best Temperament/Task Fit)', x: 400, y: p2Y, checked: true });

  p2Y -= 22;
  page2.drawText('Primary Pathway (check all):', {
    x: 42,
    y: p2Y + 2,
    size: 8.5,
    font: sansBold,
    color: espresso,
  });
  addCheckBox(page2, { name: 'goal_service', label: 'Service Dog (SCI / Neuromuscular via Gotham Paw)', x: 175, y: p2Y });
  addCheckBox(page2, { name: 'goal_therapy', label: 'Therapy Dog', x: 410, y: p2Y });
  addCheckBox(page2, { name: 'goal_companion', label: 'Companion', x: 495, y: p2Y, checked: true });

  p2Y -= 52;
  addTextField(page2, {
    name: 'ideal_temperament_notes',
    label: 'If applying for a Service Animal, describe any specific neurological/mobility tasks needed (or describe companion/therapy goals) *',
    x: 42,
    y: p2Y,
    width: 528,
    height: 36,
    multiline: true,
  });

  // SECTION 5: REFERENCES
  p2Y -= 30;
  p2Y = drawSectionHeader(page2, p2Y, '05', 'Veterinary, Clinical or Personal References');

  p2Y -= 42;
  addTextField(page2, {
    name: 'vet_reference',
    label: 'Current or Past Veterinarian Clinic Name, Doctor & Phone Number',
    x: 42,
    y: p2Y,
    width: 256,
  });
  addTextField(page2, {
    name: 'personal_reference',
    label: 'Personal, Physician/OT, or Trainer Reference (Name & Phone/Email) *',
    x: 314,
    y: p2Y,
    width: 256,
  });

  // SECTION 6: HEALTH, ETHICS & LIFETIME COMMITMENTS
  p2Y -= 30;
  p2Y = drawSectionHeader(page2, p2Y, '06', 'Qbits Kennel Ethical Placement Acknowledgments & Signature');

  p2Y -= 20;
  addCheckBox(page2, {
    name: 'ack_temperament_matching',
    label: 'I understand Qbits places puppies based on structured 7-8 week temperament & service aptitude evaluations rather than color picks.',
    x: 42,
    y: p2Y,
  });

  p2Y -= 20;
  addCheckBox(page2, {
    name: 'ack_spay_neuter',
    label: 'I agree to Qbits Kennel’s AKC Limited Registration & age-appropriate spay/neuter contract.',
    x: 42,
    y: p2Y,
  });

  p2Y -= 20;
  addCheckBox(page2, {
    name: 'ack_lifetime_return',
    label: 'I understand and agree that a Qbits dog must NEVER be surrendered to a shelter or rehomed without returning to Qbits Kennel.',
    x: 42,
    y: p2Y,
  });

  p2Y -= 20;
  addCheckBox(page2, {
    name: 'ack_puppy_training',
    label: 'I commit to continuing positive socialization, crate training, and formal puppy/service training after bringing our puppy home.',
    x: 42,
    y: p2Y,
  });

  p2Y -= 54;
  addTextField(page2, {
    name: 'additional_questions_notes',
    label: 'Any additional comments, questions for Qbits Kennel / Gotham Paw, or notes about your timeline?',
    x: 42,
    y: p2Y,
    width: 528,
    height: 36,
    multiline: true,
  });

  p2Y -= 44;
  addTextField(page2, {
    name: 'applicant_signature',
    label: 'Applicant Signature (Type Full Legal Name or Sign After Printing) *',
    x: 42,
    y: p2Y,
    width: 340,
  });
  addTextField(page2, {
    name: 'application_date',
    label: 'Date (MM/DD/YYYY) *',
    x: 398,
    y: p2Y,
    width: 172,
  });

  // Submission Box at Bottom of Page 2
  p2Y -= 78;
  page2.drawRectangle({
    x: 42,
    y: p2Y,
    width: 528,
    height: 62,
    color: sandBg,
    borderColor: terracotta,
    borderWidth: 1,
  });

  page2.drawText('HOW TO SUBMIT YOUR COMPLETED APPLICATION (EMAIL OR POSTAL MAIL):', {
    x: 54,
    y: p2Y + 44,
    size: 9,
    font: sansBold,
    color: terracotta,
  });

  page2.drawText(
    '1. BY EMAIL (Fastest): Save your completed PDF and attach it in an email to dog@cmejo.com with subject "Qbits Puppy Application".',
    {
      x: 54,
      y: p2Y + 28,
      size: 8.5,
      font: sansFont,
      color: espresso,
    }
  );

  page2.drawText(
    '2. BY PRINT & MAIL: Print this 2-page application, complete in ink, and email dog@cmejo.com for our current NYC mailing address',
    {
      x: 54,
      y: p2Y + 14,
      size: 8.5,
      font: sansFont,
      color: espresso,
    }
  );
  page2.drawText(
    '   (Service Animal applicants: Please also visit https://gothampaw.netlify.app/services/service-animal/ and reach out to us ASAP).',
    {
      x: 54,
      y: p2Y + 4,
      size: 8,
      font: serifItalic,
      color: warmSlate,
    }
  );

  // Footer Page 2
  page2.drawLine({
    start: { x: 42, y: 42 },
    end: { x: 570, y: 42 },
    thickness: 0.5,
    color: borderStone,
  });
  page2.drawText('Qbits Spanish Water Dog Kennel • Upper East Side, New York City, NY • dog@cmejo.com • Page 2 of 2', {
    x: 42,
    y: 28,
    size: 8,
    font: sansFont,
    color: warmSlate,
  });

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve('public');
  await fs.mkdir(outDir, { recursive: true });
  const outFile = path.join(outDir, 'qbits-puppy-application.pdf');
  await fs.writeFile(outFile, pdfBytes);
  console.log(`Generated fillable PDF application at: ${outFile} (${pdfBytes.length} bytes)`);
}

generateApplicationPDF().catch((err) => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
