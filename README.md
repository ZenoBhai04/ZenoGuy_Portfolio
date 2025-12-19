
# ZenoGuy Portfolio

A modern, interactive developer portfolio built with **Next.js App Router**, featuring animated UI sections and a **mouse-responsive RippleGrid background** rendered at the layout level.

Live focus:

* Clean architecture
* Smooth UX
* Experimental visuals without breaking layout or accessibility

---

## ✨ Features

* ⚡ **Next.js App Router** based architecture
* 🎨 **Interactive RippleGrid background** (mouse-responsive, non-blocking)
* 🧠 **ClientLayout system** with hydration-safe loading screen
* 🎬 Subtle **Framer Motion** transitions
* 🧩 Modular, reusable components
* 🌗 Theme support (via `ThemeProvider`)
* 🧱 Footer & navigation preserved across all pages
* 📱 Responsive and scroll-safe

---

## 🛠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript / TSX
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **UI Components:** shadcn/ui
* **Background Effects:** Custom `RippleGrid` WebGL / Canvas layer
* **Icons:** Lucide React

---

## 📁 Project Structure

```
app/
├── layout.tsx           # Root layout (navigation, footer, providers)
├── page.tsx             # Home page
├── contact/
│   └── page.tsx
├── projects/
│   └── page.tsx

components/
├── client-layout.tsx    # Handles loading screen + background effects
├── navigation.tsx
├── footer.tsx
├── loading-screen.tsx
├── home/
│   ├── hero-section.tsx
│   ├── featured-projects.tsx
│   ├── skills-overview.tsx
│   └── cta-section.tsx
└── ui/
    ├── RippleGrid.tsx
    ├── button.tsx
    ├── card.tsx
    └── ...
```

---

## 🧠 ClientLayout Architecture

The **ClientLayout** is responsible for:

* Preventing hydration mismatch
* Showing an animated loading screen
* Mounting a global interactive background
* Keeping layout (footer, content flow) intact

### Background layering strategy

```text
[ RippleGrid (fixed, z-0) ]
[ Page Content (relative, z-10) ]
```

This ensures:

* Background is interactive
* Content remains clickable
* Footer is never hidden or overlapped

---



Designed to:

* Work fullscreen
* Avoid geometry-based hover dead zones
* Not interfere with layout or scrolling

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧪 Notes & Gotchas

* Components under `components/ui` are **TSX**, not JSX
* Path alias `@/*` is configured in `tsconfig.json`
* Background effects live in **ClientLayout**, not per-page
* No `pointer-events` hacks required for RippleGrid

---

## 📌 Future Ideas

* Scroll-based ripple decay
* Theme-adaptive grid colors
* Mobile-optimized interaction
* Reduced motion fallback

---

## 👤 Author

**Shreyan Ghosh**
aka **Zenoguy**

* 🌐 [https://zenoguy.dev](https://zenoguy.dev)
* 🐙 [https://github.com/zenoguy](https://github.com/zenoguy)
* 💼 [https://linkedin.com/in/shreyanghosh](https://linkedin.com/in/shreyanghosh)


