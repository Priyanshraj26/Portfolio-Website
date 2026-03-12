# Portfolio Website - Complete Reference

## Tech Stack

- **Framework:** React 19.1.0
- **Build Tool:** Vite 7.0.0
- **Styling:** Tailwind CSS v4 (with `@tailwindcss/vite` plugin)
- **Routing:** React Router DOM v7 (client-side, single-page)
- **Animations:** Framer Motion, custom CSS keyframes, Canvas API
- **Icons:** lucide-react
- **Email:** @emailjs/browser (contact form submissions without a backend)
- **Heatmap:** react-calendar-heatmap (LeetCode activity visualization)
- **Typing Effect:** typed.js
- **Toasts:** @radix-ui/react-toast
- **CSS Utilities:** class-variance-authority, clsx, tailwind-merge
- **Date Handling:** date-fns

---

## Project Structure

```
src/
├── pages/
│   └── Home.jsx                # Main single-page layout, renders all sections
├── components/
│   ├── NavBar.jsx              # Fixed navigation bar with glass-morphism
│   ├── HeroSection.jsx         # Full-viewport hero with animated text
│   ├── AboutSection.jsx        # About me + skill cards
│   ├── ExperienceSection.jsx   # Work experience timeline
│   ├── Heatmap.jsx             # LeetCode activity calendar heatmap
│   ├── LeetcodeStats.jsx       # LeetCode stats cards (Total, Easy, Medium, Hard)
│   ├── SkillsSection.jsx       # Skills with category filter + progress bars
│   ├── ProjectsSection.jsx     # Featured project cards grid
│   ├── Design.jsx              # Designer portfolio showcase with PixelCard
│   ├── PixelCard.jsx           # Animated pixel border card component (Canvas API)
│   ├── ContactSection.jsx      # Contact form (EmailJS) + contact info
│   ├── WaveEmbed.jsx           # 3D particle wave background (Canvas API)
│   ├── Footer.jsx              # Copyright + back-to-top button
│   ├── StarBackground.jsx      # Alternative background (not currently used)
│   ├── ThemeToggle.jsx         # Dark/light mode toggle (not currently used)
│   ├── customHeatmap.css       # Purple-themed heatmap cell styles
│   └── ui/
│       ├── toast.jsx           # Toast notification component
│       └── toaster.jsx         # Toast provider
├── hooks/
│   └── use-toast.js            # Toast hook
├── lib/
│   └── utils.js                # Utility: cn() for classname merging
├── index.css                   # Global styles, Tailwind theme, custom utilities
└── main.jsx                    # App entry point
```

---

## Page Layout Order (Home.jsx)

The sections render in this order inside `<main>`:

1. **WaveCanvas** (fixed background, z-index 0) - particle star field
2. **NavBar** (fixed, z-index 40)
3. **HeroSection**
4. **AboutSection**
5. **ExperienceSection**
6. **Heatmap** (LeetCode Activity)
7. **SkillsSection**
8. **ProjectsSection**
9. **Design** (Designer Portfolio)
10. **ContactSection**
11. **Footer**

---

## Design System

### Color Scheme (Dark Theme Only)

| Token               | HSL Value            | Description             |
|----------------------|----------------------|-------------------------|
| `--background`       | `222 47% 4%`        | Deep blue-black         |
| `--foreground`       | `213 31% 91%`       | Light gray-blue text    |
| `--primary`          | `250 65% 65%`       | Vibrant purple          |
| `--primary-foreground` | `213 31% 91%`     | Light text on primary   |
| `--card`             | `222 47% 8%`        | Slightly lighter bg     |
| `--border`           | `217 33% 20%`       | Subtle border           |

### Custom Tailwind Utilities

| Utility           | Effect                                                       |
|--------------------|--------------------------------------------------------------|
| `text-glow`        | Purple text shadow glow (`rgba(167, 139, 250, 0.5)`)        |
| `card-hover`       | Scale to 1.02 + shadow on hover, 300ms transition           |
| `gradient-border`  | Card background with transparent 1px border + rounded-md    |
| `cosmic-button`    | Purple rounded-full button with glow on hover, scale effect |
| `container`        | Custom max-width responsive container with auto margins     |

### Custom Animations

| Animation          | Description                                     |
|--------------------|-------------------------------------------------|
| `fade-in`          | Opacity 0 -> 1 + translateY(20px) -> 0, 0.7s   |
| `fade-in-delay-1`  | Same as fade-in but with 0.2s delay             |
| `fade-in-delay-2`  | Same as fade-in but with 0.4s delay             |
| `fade-in-delay-3`  | Same as fade-in but with 0.6s delay             |
| `fade-in-delay-4`  | Same as fade-in but with 0.8s delay             |
| `float`            | translateY(0) -> -10px -> 0, 6s infinite        |
| `pulse-subtle`     | Opacity 1 -> 0.8 -> 1, 4s infinite             |
| `meteor`           | Diagonal movement with opacity fade, 5s         |

### Common Section Patterns

- **Section wrapper:** `<section className="py-24 px-4 relative">`
- **Alternating background:** Some sections add `bg-secondary/30` (Skills, Contact)
- **Container:** `<div className="container mx-auto max-w-5xl">`
- **Section heading:** `<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">` with a `<span className="text-primary">` for the accent word
- **Card base:** `bg-card p-6 rounded-lg shadow-xs` or `gradient-border p-6 card-hover`
- **Icon containers:** `<div className="p-3 rounded-full bg-primary/10">` with lucide icon `className="h-6 w-6 text-primary"`

---

## Section-by-Section Content

---

### 1. WaveCanvas (Background)

**File:** `src/components/WaveEmbed.jsx`

A full-viewport, fixed-position Canvas element rendering a 3D star/particle field effect. White particles move toward the viewer creating a warp-speed effect.

- **500 particles** with 3D perspective (focal length = 500)
- Responds to **mouse movement** (parallax effect)
- **Click and hold** boosts particle speed (2 -> 20)
- Background color: `hsl(256, 100%, 5%)` (deep purple-black)
- Set to `pointerEvents: "none"` so it doesn't block interactions

---

### 2. NavBar

**File:** `src/components/NavBar.jsx`

Fixed navigation bar centered on screen with glass-morphism effect.

**Nav Items:**
- Home (`#hero`)
- About (`#about`)
- Leetcode (`#leetcode`)
- Skills (`#skills`)
- Projects (`#projects`)
- Design (`#design`)
- Contact (`#contact`)

**Desktop:** Horizontal link bar with `bg-white/30 dark:bg-neutral-800/30 backdrop-blur-lg rounded-xl` glass effect. Links have hover-to-purple transition.

**Mobile:** Hamburger menu (Menu/X icons) that opens a full-screen overlay with vertical link list.

**Scroll behavior:** On scroll, navbar compresses padding (`py-10` -> `py-3`) and adds `bg-background/80 backdrop-blur-md shadow-xs`.

**Note:** The logo/name link is commented out; only navigation links are shown.

---

### 3. HeroSection

**File:** `src/components/HeroSection.jsx`

Full viewport height (`min-h-screen`) centered content.

**Content:**
- **Title:** "Hi, I'm **Priyansh** Raj Gupta" - each part fades in with staggered delays (0s, 0.2s, 0.4s). "Priyansh" is in `text-primary` (purple), "Raj Gupta" has `text-gradient`.
- **Tagline:** "I build intelligent systems using Machine Learning and Data Science. While my focus is backend and model development, I also enjoy front-end and visual design as a creative hobby." (fades in at 0.6s delay)
- **CTA Button:** "View My Work" (`cosmic-button`) linking to `#projects`
- **Scroll Indicator:** Bouncing arrow at bottom with "Scroll" text, scrolls down one viewport height on click.

---

### 4. AboutSection

**File:** `src/components/AboutSection.jsx`

**Heading:** "About **Me**"

**Layout:** 2-column grid (`md:grid-cols-2`) with text on left, cards on right.

**Left Column:**
- **Subheading:** "Passionate Developer & ML Engineer"
- **Paragraph 1:** "With a deep interest in solving real-world problems through elegant code and intelligent systems, I specialize in Applied Machine Learning and Full-Stack Development. From crafting interactive UIs with React to deploying ML models with Flask and TensorFlow, I build performant, scalable, and accessible applications."
- **Paragraph 2:** "I'm experienced in leveraging Python for backend development and machine learning, working with libraries like scikit-learn, TensorFlow/Keras, and integrating APIs and tools like Hugging Face to bring AI to production."
- **Buttons:**
  - "Get In Touch" (`cosmic-button`) -> `#contact`
  - "Download CV" (outlined purple button) -> Google Drive link: `https://drive.google.com/file/d/1ziDQIvs-dTyLuRilkcsGUmkJu0W13F-P/view?usp=sharing`

**Right Column - 3 Cards** (each with `gradient-border` + `card-hover`):

| Icon | Title | Description |
|------|-------|-------------|
| Code | Machine Learning | Creating models solving real-world issues with modern techniques |
| User | Data Science + Algorithms | Ranging from writing Data Science code in Python to writing algorithms in C++ |
| Book | UI/UX + Graphical Design | Minding the space between the elements and creating some unique and elegant designs |

---

### 5. ExperienceSection

**File:** `src/components/ExperienceSection.jsx`

**Heading:** "Work **Experience**"

**Experience Card** (`gradient-border` + `card-hover`):
- **Icon:** Briefcase (purple, circular bg)
- **Company:** VizuaraAI
- **Role:** UI-UX & Full-Stack
- **Duration:** Dec 2025 - Feb 2026 (with Calendar icon)
- **Bullet Points** (purple square bullets):
  1. Designed and developed an industrial website of the company using React and Tailwind CSS, implementing responsive component architecture and integrating custom motion graphics to enhance visual engagement.
  2. Built interactive educational web applications for school students to teach foundational ML and LLM concepts, using React for dynamic visualizations and Python-based modules to demonstrate model workflows and inference logic.
  3. Contributed to the company's primary website by developing custom UI components and implementing design enhancements aligned with the company's visual identity.

---

### 6. LeetCode Activity (Heatmap)

**File:** `src/components/Heatmap.jsx` + `src/components/LeetcodeStats.jsx`

**Heading:** "**LeetCode** Activity" (LeetCode in purple, Activity in white)

**Layout:** 2-column grid (`md:grid-cols-2`, `max-w-3xl`)

**Left - Calendar Heatmap:**
- Date range: June 15 to September 10 of current year
- Fetches data from: `https://alfa-leetcode-api.onrender.com/priyanshrajgupta/calendar`
- Falls back to hardcoded dummy data if API fails
- Custom heatmap cell styles (purple scale in `customHeatmap.css`):
  - Empty: `hsl(250, 20%, 20%)`
  - Scale 1 (1-2): `hsl(250, 65%, 85%)`
  - Scale 2 (3-4): `hsl(250, 65%, 75%)`
  - Scale 3 (5-6): `hsl(250, 65%, 65%)`
  - Scale 4 (7+): `hsl(250, 65%, 55%)`
- Cells are rounded (`rx: 5, ry: 5`)

**Right - LeetCode Stats Cards** (4 cards, each `gradient-border` + `card-hover`):

| Icon | Label | Fallback Value |
|------|-------|----------------|
| Hash | Total Solved | 110 |
| Smile | Easy | 68 |
| ThumbsUp | Medium | 42 |
| BicepsFlexed | Hard | 0 |

- Fetches live data from: `https://leetcode-stats-api.herokuapp.com/priyanshrajgupta`
- Falls back to hardcoded values on failure

**LeetCode Username:** `priyanshrajgupta`

---

### 7. SkillsSection

**File:** `src/components/SkillsSection.jsx`

**Heading:** "My **Skills**"

**Background:** `bg-secondary/30`

**Category Filter Buttons:** Frontend | Backend (default active) | Tools - styled as rounded-full pills, active state uses `bg-primary text-primary-foreground`.

**Skills Data:**

**Frontend:**
| Skill | Level |
|-------|-------|
| JavaScript | 80% |
| React | 80% |
| Streamlit | 90% |
| Matplotlib/Seaborn | 90% |

**Backend:**
| Skill | Level |
|-------|-------|
| Node.js | 80% |
| MongoDB | 70% |
| FlaskAPI | 80% |
| Numpy/Pandas | 90% |
| scikit-learn | 85% |
| Tensorflow/Keras | 75% |

**Tools:**
| Skill | Level |
|-------|-------|
| Git/GitHub | 85% |
| Hugging Face | 95% |
| Figma | 75% |
| VS Code | 95% |
| Adobe Photoshop | 80% |
| Adobe Premiere Pro | 90% |
| Adobe After Effects | 90% |

**Display:** 3-column grid (`lg:grid-cols-3`). Each skill card shows name + animated progress bar (grows from left, 1.5s ease-out) + percentage label.

---

### 8. ProjectsSection

**File:** `src/components/ProjectsSection.jsx`

**Heading:** "Featured **Projects**"
**Subtitle:** "Here are some of my recent projects. Each one showcases my skills and uniqueness!"

**Layout:** 3-column grid (`lg:grid-cols-3`)

**Projects:**

| # | Title | Description | Tags | GitHub URL |
|---|-------|-------------|------|------------|
| 1 | IMPACT | A Dashboard rating performance and improvements for interviews powered with AI | React, Flask, NLP, CV, AI | https://github.com/Priyanshraj26/IMPACT--Interview-Monitoring |
| 2 | Emotion Detection Model | A Deep Learning model recognizing emotions in an audio. Custom made for IMPACT | Python, CNN, NLP | https://github.com/Priyanshraj26/Emotion-Detection |
| 3 | Spotify Scaler | Python based application to determine features of songs | Python, FFmpeg, Streamlit, API | https://github.com/Priyanshraj26/SpotifyScaler |

**Card Structure:** Image (48px height, zoom on hover) -> tags (pill badges) -> title -> description -> GitHub icon link.
**Project images:** Located at `/projects/project1.png`, `/projects/project2.png`, `/projects/project3.png`

**Footer CTA:** "Check My Github" (`cosmic-button` with ArrowRight icon) -> `https://github.com/Priyanshraj26`

**Note:** Demo URL links are present in data (`#`) but the ExternalLink icon is commented out; only GitHub links are shown.

---

### 9. Design (Designer Portfolio)

**File:** `src/components/Design.jsx`

**Heading:** "**Designer** Portfolio"

**Layout:** 2-column grid (`md:grid-cols-2`)

**Left Column:**
- **Subheading:** "Creative Designer and Media Manager"
- **Paragraph 1:** "I am a creative professional specializing in visual design and digital media strategy. I focus on crafting clean, expressive visuals that communicate clearly and align with a brand's identity. My work spans graphic design, content planning, and video production, ensuring consistent and engaging storytelling across platforms."
- **Paragraph 2:** "With experience leading creative efforts and managing social media presence for communities and events, I combine design sense with strategic thinking to deliver impactful, audience-focused digital experiences."
- **CTA:** "Designer Portfolio" (`cosmic-button` with ArrowRight) -> `#contact`

**Right Column - PixelCard:**
- Uses the `PixelCard` component with purple color scheme (`#8b5cf6,#a78bfa,#c4b5fd`)
- Contains an iframe preview of: `https://designer-portfolio-gilt.vercel.app/`
- iframe is scaled to 67% (`transform: scale(0.67)`) and non-interactive
- On hover: dark overlay appears with "View Full Portfolio ->" button linking to the same URL
- Pixel animation effect appears on mouse enter, disappears on mouse leave

---

### 10. ContactSection

**File:** `src/components/ContactSection.jsx`

**Heading:** "Get In **Touch**"
**Subtitle:** "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and collaboration."

**Background:** `bg-secondary/30`

**Layout:** 2-column grid (`md:grid-cols-2`)

**Left - Contact Information:**
- **Email:** 26priyanshraj@gmail.com (with Mail icon, mailto link)
- **Location:** Bhopal, Madhya Pradesh, India (with MapPin icon)
- **Social Links:**
  - LinkedIn: https://in.linkedin.com/in/priyanshrajgupta (Linkedin icon)
  - Instagram: https://www.instagram.com/priyanshrajgupta/ (Instagram icon)

**Right - Contact Form** (`bg-card` card):
- **Title:** "Send a Message"
- **Fields:**
  - Your Name (text, required, min 2 / max 100 chars, placeholder: "Priyansh Raj Gupta")
  - Your Email (email, required, placeholder: "priyansh@example.com")
  - Your Message (textarea, required, min 10 / max 1000 chars, 5 rows, placeholder: "Hello, I'd like to talk about...")
- **Submit:** "Send Message" (`cosmic-button` with Send icon), shows "Sending..." with pulse animation while submitting
- **Integration:** EmailJS via environment variables:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- Sends to: `26priyanshraj@gmail.com`
- Success/error feedback via Radix toast notifications

---

### 11. Footer

**File:** `src/components/Footer.jsx`

- **Copyright:** "(c) {current year} Priyansh Raj Gupta"
- **Back to top:** ArrowUp icon button (positioned absolute right) that scrolls to `#hero`
- Styling: `pb-12 px-4 pt-8`, muted foreground text

---

## Additional Components

### PixelCard

**File:** `src/components/PixelCard.jsx`

Reusable animated card component using Canvas API. On hover, pixels appear from center outward and shimmer. On mouse leave, they disappear.

**Props:**
- `variant`: "default" | "blue" | "yellow" | "pink" (preset color/speed configs)
- `gap`: pixel grid spacing (default varies by variant)
- `speed`: animation speed (0-100)
- `colors`: comma-separated hex colors string
- `noFocus`: disable focus animation
- `className`: additional CSS classes
- `children`: content rendered inside the card

Respects `prefers-reduced-motion` media query.

---

## Key Personal Information

- **Name:** Priyansh Raj Gupta
- **Email:** 26priyanshraj@gmail.com
- **Location:** Bhopal, Madhya Pradesh, India
- **GitHub:** https://github.com/Priyanshraj26
- **LinkedIn:** https://in.linkedin.com/in/priyanshrajgupta
- **Instagram:** https://www.instagram.com/priyanshrajgupta/
- **LeetCode:** priyanshrajgupta
- **Designer Portfolio:** https://designer-portfolio-gilt.vercel.app/
- **CV:** https://drive.google.com/file/d/1ziDQIvs-dTyLuRilkcsGUmkJu0W13F-P/view?usp=sharing

---

## Environment Variables Required

```env
VITE_EMAILJS_SERVICE_ID=<your-emailjs-service-id>
VITE_EMAILJS_TEMPLATE_ID=<your-emailjs-template-id>
VITE_EMAILJS_PUBLIC_KEY=<your-emailjs-public-key>
```

---

## Development Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Deployment

Deployed on **Vercel** (indicated by `vercel.json` in the repo).
