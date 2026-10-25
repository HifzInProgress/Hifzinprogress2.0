# Hifz In Progress — Official Multi-Page Website

> **"A real journey. A deeper connection. One ayah at a time."**

An authentic, production-ready, static multi-page website for **Hifz In Progress**, documenting the sacred journey of Qur'an memorization. Built with plain HTML, semantic structure, responsive CSS, and modular vanilla JavaScript. Ready for instant GitHub Pages deployment from the `main` branch root with **zero build step or server required**.

---

## 🕌 Project Architecture & Multi-Page Structure

Every section is implemented as its own standalone HTML page with dedicated content, matching the visual reference and design system:

```text
/
├── index.html              # Page 1: Home (Hero, Stats, Intro, Timetable Showcase, Featured Guides)
├── journey.html            # Page 2: My Journey (Day 1 onward timeline, reflections, reciter)
├── hifz-guide.html         # Page 3: Hifz Guide (Educational articles, teacher advisory, Tajweed)
├── hifz-planner.html       # Page 4: My Hifz Timetable Planner (Interactive calculator & Canvas PNG)
├── tracker.html            # Page 5: Daily Hifz Tracker (Authentic Quran dropdowns, calendar, localStorage)
├── resources.html          # Page 6: Resources (Printable planners, rotation matrix, text downloads)
├── about.html              # Page 7: About (Creator journey, mission, verified Instagram link)
├── 404.html                # Page 8: Custom 404 Page (Branded error page with return button)
├── quran-data.js           # Authentic Qur'anic metadata (114 canonical Surahs & 30 Juz boundaries)
├── styles.css              # Shared stylesheet (Deep emerald, antique gold, ivory, typography)
├── script.js               # Shared script (Active nav, mobile menu, search, tracker CRUD, planner)
├── README.md               # Documentation & GitHub Pages deployment guide
└── assets/
    ├── images/
    │   ├── hero-character.png      # Faceless reciter holding Quran with Islamic arch
    │   ├── website-reference.png   # Original design collage reference
    │   ├── seated-reciter.png      # Seated reciter reading Quran in arched mosque
    │   ├── quran-rehal.png         # Illuminated Holy Quran on carved wooden rehal
    │   ├── quran-desk.png          # Quran manuscripts on study desk under lantern light
    │   ├── character-standing.png  # Full-body character reference illustration
    │   └── mosque-night.png        # Night mosque landscape with crescent moon
    └── icons/
        └── brand-logo.svg          # Geometric Islamic arch book logo icon
```

---

## 🎨 Design System & Visual Palette

- **Deep Emerald Green**: `#062D24` & `#073B30`
- **Near-Black Green**: `#031C17`
- **Muted Antique Gold**: `#C8A052` (Hover: `#D8B062`)
- **Warm Ivory**: `#F3EBDD`
- **Subtle Sage Green**: `#8EA393`
- **Typography**:
  - Headings: *Playfair Display* (Editorial luxury serif)
  - Body Prose: *Plus Jakarta Sans* (Clean modern sans-serif)
  - Quranic Ayahs: *Amiri* (Sacred Arabic calligraphy)
- **Character Consistency**: The faceless young brother in dark emerald traditional kurta, matching trousers, and dark green prayer cap (kufi) is preserved across all pages without facial features or unwanted distortion.
- **Official Instagram Profile**: `https://www.instagram.com/hifzinprogress?rpxt=dG0ybnVlNmg1OGx1`

---

## 🌟 Key Features

1. **Mobile Homepage Hero**:
   - Balanced vertical spacing engineered for 320px–430px smartphone viewports as well as widescreen desktops.
   - Elegant headline typography, compact aligned statistics, and high-fidelity faceless character placement directly under statistics with `object-fit: contain`.

2. **My Hifz Timetable Planner (`hifz-planner.html`)**:
   - **Progress & Target Parameters**: Completed Paras (0–30), Starting Para, Current Sabaq Surah/Ayah, Lines per Day (5, 8, 10, 15, 20, 30), and Mushaf format.
   - **Salah-Aligned Daily Slots**: Fajr Sabaq block, Asr Sabqi revision, Maghrib teacher recitation, and Isha cumulative Manzil rotation.
   - **Live Calculations**: Estimated completion month/year, active study days remaining, daily study time, and monthly pace.
   - **Editable Live Timetable**: Inline editable cards and 7-day weekly schedule matrix.
   - **High-Resolution PNG Canvas Generator**: Instant client-side generation of a 1080 &times; 1920 portrait wallpaper card for smartphones or home printing, with live preview modal and one-click PNG download.
   - **LocalStorage Persistence**: Form inputs are stored locally in the browser with an instant "Reset Defaults" action.

3. **Authentic Qur'anic Selection System (`quran-data.js`)**:
   - Canonical 114 Surahs with transliterated names, Arabic script, English meanings, and ayah counts.
   - Authentic 30 Juz boundaries with dependent dropdown filtering (selecting Juz populates intersecting Surahs, selecting Surah populates exact Ayah ranges and calculates page estimates).

4. **Daily Hifz Tracker (`tracker.html`)**:
   - Log daily Sabaq, Sabqi, and Manzil revisions with local storage privacy.
   - Interactive mini calendar highlighting active study days and milestone retention progress bars.
   - JSON export and clean record management.

---

## 🚀 GitHub Pages Deployment (Deploy from Root)

This website is designed for static hosting directly from the repository root:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com) and create a new repository (e.g. `hifz-in-progress`).
2. Choose **Public** (required for free GitHub Pages on personal plans).
3. Do not add a default README, .gitignore, or license (these already exist in the project).

### Step 2: Push Files to the `main` Branch
From your local terminal in the project directory:
```bash
git init
git add .
git commit -m "feat: complete multi-page Hifz In Progress website with Timetable Planner"
git branch -M main
git remote add origin https://github.com/<your-username>/hifz-in-progress.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In your GitHub repository, go to **Settings** → **Pages** (under the "Code and automation" section).
2. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main`
   - **Folder**: Select `/(root)`
3. Click **Save**.

### Step 4: Visit Your Live Site
GitHub Pages will deploy your website within 1 to 2 minutes at:
```text
https://<your-username>.github.io/hifz-in-progress/
```
All asset links (`styles.css`, `script.js`, `quran-data.js`, `assets/images/...`) use relative paths, so the website functions under any subpath without broken images or missing styles.
