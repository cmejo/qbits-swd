# Qbits Spanish Water Dog Kennel — Owner Action Checklist (`OWNER_TODO_CHECKLIST.md`)

Everything on the technical, UX/UI, senior accessibility, GDPR/Privacy, PDF generation, 15-guide long-tail SEO hub, and AI Agent / LLM optimization side is now **100% built and deployed live** at **[https://qbits-swd.netlify.app](https://qbits-swd.netlify.app)**.

Below is your complete checklist of the **real-world items only you (the kennel owner) can provide or configure**.

---

## 1. Swap Stock Photos with Real Photos of Dudley & Molly
Currently, the website uses curated high-resolution water-dog photography so the layout looks polished immediately. Whenever you are ready to use your own photos of **Dudley** and **Molly**:

- [ ] **Step 1 — Save your photos into `public/images/dogs/`**:
  - Save horizontal (landscape `3:2` or `4:3`, ideally `1200×800px` `.webp` or `.jpg`, under `300 KB`) photos into `public/images/dogs/`:
    - `hero-dudley-molly.jpg` (Main Hero photo at the top of the homepage)
    - `dudley-profile.jpg` (Dudley's profile card in Section 03)
    - `molly-profile.jpg` (Molly's profile card in Section 03)
    - `gallery-1.jpg` through `gallery-6.jpg` (Photos in the Section 03B Training & Life Gallery)
- [ ] **Step 2 — Update the `src` paths in `src/data/kennelData.ts`**:
  - Open `src/data/kennelData.ts` and replace the Unsplash URLs in:
    - `KENNEL_INFO.heroImage.src` (Line 96) → `'/images/dogs/hero-dudley-molly.jpg'`
    - `DOGS[0].image.src` (Dudley, Line 196) → `'/images/dogs/dudley-profile.jpg'`
    - `DOGS[1].image.src` (Molly, Line 252) → `'/images/dogs/molly-profile.jpg'`
    - `GALLERY_PHOTOS` (Lines 289–349) → your new gallery photos
- [ ] **Step 3 — Recommended Monthly Photo Cadence (1–2 Photos Every 3–4 Weeks)**:
  - Take **1–2 real photos per month** showing:
    1. **Coat progression** (short clip vs. 2-inch curl vs. 4-inch cords).
    2. **Gotham Paw service dog task training in action** (picking up keys/phones/dropped canes, pushing NYC ADA door buttons, riding elevators, settling next to a wheelchair).
    3. **Upper East Side & Central Park life** (calmly walking past Manhattan traffic, hospitals, and parks).
    4. **Quarterly Returning Member Log** (`MEMBER_UPDATES_LOG` in `src/data/kennelData.ts`) — add a 2-sentence quarterly update whenever Dudley or Molly completes an annual eye exam or training milestone.

---

## 2. Verify & Replace Placeholder OFA / CHIC Numbers & Pedigree Names
In `src/data/kennelData.ts` (Lines 185–282) and `public/api/agent-context.json`:

- [ ] **Dudley's Registered Name, DOB, Sire/Dam & OFA Codes**:
  - Replace the placeholder registered name (`Qbits Sierra Dorada de Manhattan, CGC, TKN, WDX`), DOB, Sire × Dam names, and OFA registry numbers (`SWD-HY2418/24M-VPI`, `CHIC #194820`, etc.) with Dudley's exact official AKC/OFA certificate numbers.
- [ ] **Molly's Registered Name, DOB, Sire/Dam & OFA Codes**:
  - Replace the placeholder registered name (`Qbits Mariposa del Guadalquivir, CGC, TKI`), DOB, Sire × Dam names, and OFA registry numbers (`SWD-HY2690/24F-VPI`, `CHIC #208415`, etc.) with Molly's exact official AKC/OFA certificate numbers (or preliminary OFA results).
- [ ] **Review Copy & Rewrite Any Personal Phrases**:
  - Review the founder bio and narration in `BREEDER_BIO_NARRATION` and Section 01 of `src/pages/index.astro` to make sure the tone and details about your mentorship with **Lisa Harper**, your time on the **National Breed Club Board**, and your **Gotham Paw** service dog work read exactly the way you want.

---

## 3. Connect Your Live Analytics IDs (GA4, Piwik PRO & Microsoft Clarity)
The GDPR Consent Banner, Google Consent Mode v2, Piwik PRO queue, and Microsoft Clarity UX heatmaps are already wired up in `src/layouts/Layout.astro`. Right now they use safe placeholder IDs in `src/data/kennelData.ts` (Lines 89–94) so they don't pollute analytics until you paste your real keys:

- [ ] **Google Analytics 4 (GA4)**:
  1. Go to [analytics.google.com](https://analytics.google.com/) and create a GA4 property for `https://qbits-swd.netlify.app`.
  2. Copy your Measurement ID (looks like `G-XXXXXXXXXX`).
  3. Paste it into `KENNEL_INFO.analytics.gaMeasurementId` in `src/data/kennelData.ts`.
- [ ] **Piwik PRO (GDPR-First Healthcare & European Privacy Analytics)**:
  1. Create a free account at [piwik.pro](https://piwik.pro/) and add `https://qbits-swd.netlify.app`.
  2. Copy your container URL and Site UUID.
  3. Paste them into `KENNEL_INFO.analytics.piwikUrl` and `KENNEL_INFO.analytics.piwikSiteId` in `src/data/kennelData.ts`.
- [ ] **Microsoft Clarity (Free Senior UX Heatmaps & Rage-Click Detection)**:
  1. Create a free project at [clarity.microsoft.com](https://clarity.microsoft.com/) for `https://qbits-swd.netlify.app`.
  2. Copy your Project ID and paste it into `KENNEL_INFO.analytics.clarityProjectId` in `src/data/kennelData.ts`.

---

## 4. Enable Instant Email Notifications on Netlify Forms
Your website has **3 background-submitting Netlify Forms** (plus automatic `mailto:dog@cmejo.com` fallback):
1. `qbits-puppy-application` (Full Puppy & Service Prospect Application)
2. `qbits-contact-inquiry` (Contact & Stud Service Inquiry Form)
3. `qbits-callback-request` (2-Field Senior "Request a 10-Minute Phone Call Back" Micro-Form)

- [ ] **Turn on Email Alerts in Netlify**:
  1. Open your Netlify Dashboard for `qbits-swd`: [https://app.netlify.com/projects/qbits-swd/forms](https://app.netlify.com/projects/qbits-swd/forms)
  2. Go to **Project configuration → Notifications → Emails and webhooks → Form submission notifications**.
  3. Click **Add notification → Email notification** and enter **`dog@cmejo.com`** so Netlify emails you the instant anyone submits any of the three forms (even if the visitor doesn't have an email app configured on their computer or iPad).

---

## 5. Submit Your Sitemap & AI Agent Endpoints to Search Engines
All 15 long-tail SEO guides, both PDFs, and your AI Agent context files are listed in `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt`, and `public/api/agent-context.json`.

- [ ] **Google Search Console**:
  1. Add `https://qbits-swd.netlify.app` (or your custom domain if you connect one later) to [Google Search Console](https://search.google.com/search-console).
  2. Submit `https://qbits-swd.netlify.app/sitemap.xml` under **Sitemaps**.
- [ ] **Bing Webmaster Tools (Critical for ChatGPT Search & Copilot Indexing)**:
  1. Import your site from Google Search Console into [Bing Webmaster Tools](https://www.bing.com/webmasters).
  2. Submit `https://qbits-swd.netlify.app/sitemap.xml`.
- [ ] **Google Business Profile (Local Upper East Side SEO)**:
  1. Create a Google Business Profile for **Qbits Spanish Water Dog Kennel** (Service Area Business: Upper East Side, New York, NY) linking to `https://qbits-swd.netlify.app`.

---

## 6. Load Your Automated Email Sequences & Launch Clinical Outreach
- [ ] **Set Up Your Email Autoresponder / CRM** (MailerLite, ConvertKit, or HubSpot Free):
  - Load the **3-Email Service Animal Prospect Sequence (Track A)**, **4-Email Companion & Therapy Dog Sequence (Track B)**, and **2-Email Stud Service Sequence (Track C)**.
- [ ] **Print or Email Your New Clinical Service Dog Brochure PDF**:
  - Download `https://qbits-swd.netlify.app/qbits-clinical-service-dog-brochure.pdf` and share it with:
    - Physical & Occupational Therapy / Rehabilitation Directors at **Mount Sinai Morningside/Hospital (SCI Rehab)**, **NYU Langone Rusk Rehabilitation**, **Burke Rehabilitation**, **Kessler Institute**, and **Hospital for Special Surgery (HSS)**.
    - Local chapters of the **National MS Society (NYC — Tri-State)**, **United Spinal Association (NYC Chapter)**, and **Cerebral Palsy Associations of New York State**.
- [ ] **Cross-Link from Gotham Paw**:
  - On `https://gothampaw.netlify.app/services/service-animal/`, add a partner link back to `https://qbits-swd.netlify.app` ("Official Preservation Spanish Water Dog Breeding Partner — Qbits Kennel NYC") to strengthen domain authority for both sites.
