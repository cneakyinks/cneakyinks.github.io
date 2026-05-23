# Editing Guide

A practical guide to editing this portfolio's content and animations from your code
editor — and how the files fit together.

## Contents
1. [The 30-second mental model](#1-the-30-second-mental-model)
2. [Your edit → live workflow](#2-your-edit--live-workflow)
3. [Where everything lives (the map)](#3-where-everything-lives-the-map)
4. [How a page is assembled](#4-how-a-page-is-assembled)
5. [Common edits (cookbook)](#5-common-edits-cookbook)
6. [Animations explained](#6-animations-explained)
7. [Gotchas — read this before you get confused](#7-gotchas--read-this-before-you-get-confused)

---

## 1. The 30-second mental model

This is a **Next.js (App Router)** site written in **React + TypeScript**, styled with
**Tailwind CSS**, animated with **Framer Motion**. It's published as a *static* site to
GitHub Pages.

Three ideas explain almost everything:

- **A folder in `app/` with a `page.tsx` = a page (URL).** `app/about/page.tsx` → `/about`.
- **A page is built from components** — reusable building blocks in `app/components/`.
  The home page, for example, stacks a header + `FeaturedProjects` + `HomeChatSection`.
- **All your text/data lives either inside a component, or in `app/data/projects.ts`.**
  To change words on the screen, you edit the file that renders them.

`@/` in an import means "from the project root". So `@/components/ui/card` →
`components/ui/card.tsx`, and `@/lib/utils` → `lib/utils.ts`.

---

## 2. Your edit → live workflow

```bash
# 1. Start a live local preview (auto-refreshes as you save). Open http://localhost:3000
npm run dev

# 2. Edit files in your editor. The browser updates instantly.

# 3. (Recommended) Before publishing, confirm the static build still works:
npm run build

# 4. Publish — push to GitHub and the site rebuilds & deploys automatically (~2 min):
git add -A
git commit -m "Describe what you changed"
git push
```

After `git push`, watch the **Actions** tab on GitHub. When it's green, the change is
live at **https://cneakyinks.github.io/**.

> Tip: Always keep `npm run dev` running while editing. You see mistakes immediately
> instead of discovering them after deploy.

---

## 3. Where everything lives (the map)

```
app/                        ← every page + the site's own components
  layout.tsx                ← the global frame: nav, particle background, footer
                              wrap EVERY page. Edit once, affects all pages.
  page.tsx                  ← the HOME page ("/") — hero text, buttons, then sections
  about/page.tsx            ← the /about page (its own data lives inside this file)
  resume/page.tsx           ← the /resume page (content is in app/resume/components/*)
  projects/
    page.tsx                ← /projects — the grid of all projects
    [id]/page.tsx           ← /projects/11, etc. — picks one project, hands it to…
    [id]/ProjectClient.tsx  ← …the actual project detail layout
    random/page.tsx         ← /projects/random — jumps to a random project
  contact/page.tsx          ← /contact — just a placeholder (real contact = popup)

  data/projects.ts          ← ★ ALL project content lives here (the big one to edit)

  components/               ← the portfolio's own building blocks
    desktop-nav.tsx         ← top navigation bar (desktop)
    mobile-nav.tsx          ← navigation (mobile)
    footer.tsx              ← footer on every page
    particle-effect.tsx     ← the floating cyan dots background
    software-carousel.tsx   ← the scrolling row of software logos
    featured-projects.tsx   ← the 3-card carousel on the home page
    home-chat-section.tsx   ← the "Let's Chat" section + drawing canvas
    ContactModal.tsx        ← the contact popup (email + links)
    media-showcase.tsx      ← image viewer used on project detail pages
    floating-works.tsx      ← animated works shown on the About page
    InteractivePaint.tsx    ← the drawing canvas toy

  about/components/
    layered-text.tsx        ← ★ the animated text wrapper used all over the site

components/                  ← shared, generic UI (mostly leave alone)
  ui/*                      ← shadcn/ui primitives: button, card, dialog, accordion…
  theme-provider.tsx

hooks/                       ← small reusable helpers (e.g. use-media-query)
lib/utils.ts                 ← the cn() helper for combining CSS classes
styles/globals.css           ← ★ the ACTIVE global stylesheet + CSS animations
tailwind.config.js           ← Tailwind theme config
public/                      ← static files served as-is (images, icons, video)
next.config.mjs              ← build config (static export is set here)
.github/workflows/deploy.yml ← the auto-deploy pipeline
```

★ = the files you'll touch most often.

---

## 4. How a page is assembled

Every page is wrapped by `app/layout.tsx`:

```tsx
<body>
  <ParticleEffect />     {/* cyan dots, behind everything */}
  <DesktopNav />         {/* top bar */}
  <MobileNav />
  <main>{children}</main>  {/* ← the actual page goes here */}
  <Footer />
</body>
```

So the navbar, footer, and particle background appear on **every** page automatically —
you edit them once in `layout.tsx`/their component files.

The home page (`app/page.tsx`) then fills `{children}` with:
`header text + buttons` → `<FeaturedProjects />` → `<HomeChatSection />` → `<Footer />`.

To **reorder, remove, or add a section** on the home page, rearrange those lines in
`app/page.tsx`.

---

## 5. Common edits (cookbook)

### Edit the home page headline / intro / buttons
File: **`app/page.tsx`**. The visible text is right there as plain strings, e.g.
`"UIUX Designer"`, `I'm Celeste!`, and the `Resume` / `View My Works!` buttons. Change
the text between the tags. The buttons' destinations are the `href="…"` on the
`<Link>` tags.

### Add, edit, or remove a project
File: **`app/data/projects.ts`**. This single array drives the projects grid, every
project detail page, and the featured carousel. Each project is an object:

```ts
{
  id: 12,                          // must be UNIQUE (used in the URL: /projects/12)
  title: "My New Project",
  category: "featured",
  categories: ["development", "interactive"],  // small tags
  image: "https://.../cover.png",  // cover image (URL or /local-file.png)
  additionalImages: ["https://.../2.png"],     // extra images on the detail page
  role: "Interaction Designer",
  subRoles: ["Figma", "Research"],
  description: "One or two sentences shown on the card and detail page.",
  sector: "Interactive Installation",
  year: "2025",                    // used for sorting (newest first)
  challenge: "What problem you solved.",
  process: [                       // becomes the expandable accordion
    { title: "Research", description: "…" },
    { title: "Design",   description: "…" },
  ],
  outcome: "The result.",
  link: "/projects/my-new-project",
  // optional: duration, collaboration, specialMentions, videoLink
}
```

- **To add:** copy an existing object, paste it in the array, give it a new unique `id`,
  and edit the fields. A new page `/projects/<id>` is generated automatically.
- **To remove:** delete its object from the array.
- **To reorder the grid:** it auto-sorts by `year` (newest first) — change the `year`.

### Change which 3 projects are "featured" on the home page
File: **`app/components/featured-projects.tsx`** (near the top). It picks projects
*by title*:

```ts
const latestProjects = [
  projects.find((p) => p.title === "Moments of 間"),
  projects.find((p) => p.title === "Precinct of Good"),
  projects.find((p) => p.title === "Roots to Results"),
].filter(Boolean) as Project[]
```

Swap those titles for other exact titles from `projects.ts`.

### Edit the About page
File: **`app/about/page.tsx`**. Its content (including the `achievements` list) is
defined as arrays/strings near the top of the file — edit them in place.

### Edit the Resume
Files: **`app/resume/components/*`** — `ProfileSection.tsx`, `ExperienceSection.tsx`,
`EducationSection.tsx`, `SkillsSection.tsx`, `AchievementsSection.tsx`,
`HobbiesSection.tsx`. Page 1 vs Page 2 layout is in `ResumePage1.tsx` / `ResumePage2.tsx`.

### Change the navigation links
Files: **`app/components/desktop-nav.tsx`** and **`app/components/mobile-nav.tsx`**.
Each link is a `<Link href="/somewhere">Label</Link>`.

### Change the software logos row
File: **`app/components/software-carousel.tsx`** — edit the `SOFTWARE_LIST` array
(`name` + `icon` URL).

### Change images
- **Hosted images** (most project images) are full `https://…vercel-storage.com/…` URLs
  inside `projects.ts`. Replace the URL with your own hosted image URL.
- **Local images:** drop a file into `public/` (e.g. `public/my-photo.jpg`) and
  reference it as `/my-photo.jpg` (the `public/` part is omitted in the path).

### Change the accent color (the cyan everywhere)
The accent is Tailwind's `cyan-400` / `cyan-500`, used as classes like `text-cyan-400`,
`bg-cyan-400`. To recolor globally, find-and-replace `cyan-400` → e.g. `purple-400`
across the project. (The cursor/particle cyan is the literal `rgba(0,255,255,…)` in
`styles/globals.css` and `particle-effect.tsx`.)

---

## 6. Animations explained

There are **four** animation systems in play. Most of what you see is Framer Motion.

### a) Framer Motion — the main one (90% of animations)
Any element written as `motion.div`, `motion.span`, `motion.button`, etc. is animatable.
The vocabulary you'll see repeatedly:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}    // start state (invisible, 20px down)
  animate={{ opacity: 1, y: 0 }}     // end state (fade up into place)
  transition={{ duration: 0.5, delay: 0.2 }}  // timing
>
```

Other patterns used here:
- `whileInView={{ … }}` — animate when the element scrolls into view (see About/contact).
- `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}` — button feedback.
- `animate={{ y: [0, -5, 0] }}` with `transition={{ repeat: Infinity }}` — looping
  bobbing (the personality tags).
- `<AnimatePresence>` — animates elements when they're added/removed (the project
  carousel cards and grid).

**To tweak any of these:** edit the numbers. Bigger `duration` = slower. Increase `delay`
to make it appear later. Change `y`/`x`/`scale` values to change the motion. Remove the
whole `initial/animate/transition` trio to make something appear instantly with no
animation.

The site's signature **fade-up text** is wrapped in a small reusable component,
`<LayeredText>` (`app/about/components/layered-text.tsx`). Use it anywhere you want that
entrance:

```tsx
<LayeredText className="text-4xl font-bold">My heading</LayeredText>
```

### b) CSS animations — in `styles/globals.css`
Defined as `@keyframes` + a class:
- `.animate-flow-around` — the glowing line that travels around the home page buttons.
- `.float` — a gentle up/down float (`flow-around`/`float` keyframes are at the bottom of
  the file).
- The **custom cursor** styles (`.cursor-dot`, hover-grow) also live here.

To adjust speed, change the duration in the class, e.g.
`animation: flow-around 4s linear infinite;` → `6s` for slower.

### c) The particle background — `app/components/particle-effect.tsx`
A `<canvas>` drawing of cyan dots that drift and react to scrolling. Useful knobs inside:
- `particleCount` (line ~32) — how many dots (`50` mobile / `100` desktop).
- `ctx.fillStyle = "rgba(0, 255, 255, 0.3)"` — dot color/opacity.
- `size: Math.random() * 2 + 0.1` — dot size range.

### d) The software carousel — `app/components/software-carousel.tsx`
Continuously scrolls the logo row using Framer Motion's `useAnimationFrame`.
`const baseVelocity = -0.3` controls speed/direction (more negative = faster left).

---

## 7. Gotchas — read this before you get confused

These will save you from "why isn't my change showing up?":

- **Two `globals.css` files exist, but only one is used.** The site loads
  **`styles/globals.css`** (imported in `app/layout.tsx`). `app/globals.css` is a leftover
  and does nothing — edit `styles/globals.css`.

- **The home page is `app/page.tsx`, NOT `app/components/hero.tsx`.** `hero.tsx` is an
  unused leftover from an earlier version (it references a video reel that isn't there).
  Editing it changes nothing on the live site.

- **Several components are leftovers and are not rendered anywhere.** Don't waste time
  editing these — they won't appear on the site:
  `hero.tsx`, `chat-section.tsx`, `gallery.tsx`, `portfolio.tsx`, `scrapbook.tsx`,
  `skills.tsx`, `skills-grid.tsx`, `featured-works.tsx`, `CustomCursor.tsx`,
  `contact.tsx`, and `app/components/layered-text.tsx` (the *real* one is
  `app/about/components/layered-text.tsx`).

- **`/contact` is just a placeholder page.** The real contact is the **ContactModal**
  popup (opened from the nav and elsewhere) — `app/components/ContactModal.tsx`. It uses a
  `mailto:` link, not a server.

- **The "draw & send" canvas no longer emails anything.** GitHub Pages can't run a server,
  so that feature was disabled — the canvas remains as a toy. (Re-enabling it later means
  wiring a client-side email service like EmailJS.)

- **Anything interactive or animated needs `"use client"` at the top of the file.** Pages
  that use Framer Motion, `useState`, clicks, etc. start with `"use client"`. If you add
  interactivity to a file that doesn't have it, add that line as the first line.

- **The build ignores TypeScript and ESLint errors** (set in `next.config.mjs`). That
  means a typo won't fail `npm run build`, but it can still break a page at runtime — so
  always check it in `npm run dev` before pushing.

- **Don't rename the GitHub repo.** It must stay `cneakyinks.github.io` for the URL to
  work. The site is static, so editing in v0.app no longer syncs here — this repo is now
  the source of truth.

- **Generally don't edit `components/ui/*`.** Those are generic building blocks (buttons,
  cards, dialogs). Edit the portfolio components in `app/components/` instead.

---

Questions while editing? Open the file that renders the thing you want to change (use the
map in section 3), find the visible text or the `motion`/`className` you want, and tweak
it with `npm run dev` running so you see the result live.
