# Behailu Berhanu — Personal Portfolio

A component-based single-page portfolio built with **React + Vite**, matching the dark-themed design mockup. Built as **Project 2** for the Nexus Front-End Boot Camp.

> No `useState`, no `useEffect`, no hooks — pure props and `.map()` rendering.

---

## Live Preview

Run locally:

```bash
npm install --legacy-peer-deps
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite 8 | Build tool & dev server |
| Plain CSS | Styling (per component CSS files) |
| Inter + Space Grotesk | Google Fonts |

---

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Fixed nav with logo + links + CTA
│   │   ├── Hero.jsx            ← Name, tagline, stat cards, socials
│   │   ├── About.jsx           ← Bio + info cards grid
│   │   ├── Skills.jsx          ← Tech stack section (uses SkillCard)
│   │   ├── SkillCard.jsx       ← Reusable skill card with SVG icon
│   │   ├── Projects.jsx        ← Featured projects (uses ProjectCard)
│   │   ├── ProjectCard.jsx     ← Reusable project card with hover overlay
│   │   ├── Experience.jsx      ← Timeline of roles & achievements
│   │   ├── Contact.jsx         ← Contact details + static form
│   │   └── Footer.jsx          ← Logo, quote, copyright, back-to-top
│   ├── styles/
│   │   ├── global.css          ← CSS variables, reset, shared utilities
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Experience.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── data.js                 ← All hardcoded data (passed as props)
│   ├── App.jsx                 ← Root — imports data, assembles sections
│   └── main.jsx                ← ReactDOM entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Fixed top bar with smooth-scroll links and "Let's Talk" CTA |
| **Hero** | Bold heading, tagline, meta info, action buttons, social icons, stat cards |
| **About** | Headline, bio paragraph, 6-card info grid (age, location, focus, etc.) |
| **Projects** | 5 project cards with thumbnail, description, tech badges, live/code links |
| **Experience** | 5 experience/achievement cards in a responsive grid |
| **Skills** | 12 tech skill cards with SVG logos and hover color accent |
| **Contact** | Email/phone/location details + social links + static message form |
| **Footer** | Logo, inspirational quote, copyright, back-to-top button |

---

## Requirements Checklist

| # | Requirement | Status |
|---|-------------|--------|
| 1 | Created with Vite | ✅ |
| 2 | 9+ components (Navbar, Hero, About, Skills, SkillCard, Projects, ProjectCard, Experience, Contact, Footer) | ✅ |
| 3 | All data in `data.js`, passed as props | ✅ |
| 4 | Skills rendered with `.map()` + `key` | ✅ |
| 5 | Projects rendered with `.map()` + `key` | ✅ |
| 6 | Consistent dark design, no default styles | ✅ |
| 7 | Responsive on mobile & desktop | ✅ |
| 8 | No `useState` or hooks used | ✅ |
| 9 | Deploy to Vercel / Netlify | ⬜ (run `npm run build`) |
| 10 | GitHub repo with commits | ⬜ |

---

## Deployment

```bash
npm run build
```

Upload the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop) or run:

```bash
npx vercel dist
```

---

## Design Notes

- Color scheme: `#0a0a0a` background, `#c8f560` lime-green accent
- Fonts: Space Grotesk (headings) + Inter (body)
- All icons are inline SVG — zero icon library dependencies
- CSS custom properties (`var()`) used throughout for easy theming
