<p align="center">
  <img src="./src/images/logo_bg_remove.png" alt="Javro Logo" width="120" />
</p>

<h1 align="center">Javro — Instant Ride Booking</h1>

<p align="center">
  <strong>Book Autos, Shared Autos, E-Rickshaws & Bikes in seconds.</strong><br/>
  A sleek, dark-themed landing page for the upcoming Javro ride-booking app.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Coming_Soon-FFC107?style=flat" />
</p>

---

## 📸 Preview

<p align="center">
  <img src="./public/preview.png" alt="Javro Landing Page Preview" width="800" style="border-radius: 12px;" />
</p>

---

## 🚀 About

**Javro** is an upcoming ride-booking platform designed for quick, affordable, and reliable urban transportation. The app connects riders with Autos, Shared Autos, E-Rickshaws, and Bikes — all at their fingertips.

This repository contains the **landing page / marketing website** built to generate early interest and collect waitlist sign-ups before the mobile app launches on iOS and Android.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Dark Premium UI** | Fully dark-themed design with gold (#FFC107) accent colors and subtle glow effects |
| 📱 **Fully Responsive** | Mobile-first layout using Tailwind CSS — works seamlessly on phones, tablets, and desktops |
| ✨ **Shine Animations** | Custom CSS card-shine effect that sweeps across service cards for a premium feel |
| 🧭 **Smooth Scroll Navigation** | Fixed navbar with smooth-scroll anchors to Services, How It Works, and Get the App sections |
| 📋 **Waitlist Form** | Integrated with [Formspree](https://formspree.io) to collect name, phone, and email from early adopters |
| 🍔 **Mobile Hamburger Menu** | Collapsible mobile nav with backdrop blur, powered by Lucide React icons |
| 🏪 **App Store Badges** | "Coming Soon" placeholders for both Apple App Store and Google Play Store |

---

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** — UI library with functional components & hooks
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first CSS framework (via `@tailwindcss/vite` plugin)
- **[Vite 8](https://vitejs.dev/)** — Lightning-fast build tool and dev server
- **[Lucide React](https://lucide.dev/)** — Beautiful, consistent icon set (Zap, Shield, Clock, Car, MapPin, etc.)
- **[Formspree](https://formspree.io/)** — Backend-less form submission for the waitlist

---

## 📁 Project Structure

```
javro/
├── public/
│   ├── favicon.svg              # Browser tab icon
│   └── icons.svg                # SVG icon sprite
├── src/
│   ├── assets/
│   │   └── hero.png             # Hero section asset
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed top navigation with mobile hamburger menu
│   │   ├── LeftContent.jsx      # Hero section — headline, CTAs, trust badges
│   │   ├── RightSide.jsx        # "Coming Soon" logo card with shine effect
│   │   ├── MiddlePage.jsx       # Services grid — Sharing Autos, Book Autos, E-Rickshaws, Bikes
│   │   ├── HowWork.jsx          # 4-step "How Javro Works" timeline cards
│   │   └── Mailus.jsx           # Waitlist signup form + App Store badges
│   ├── images/
│   │   ├── logo_bg_remove.png   # Javro logo (transparent background)
│   │   ├── logo_only.png        # Full-resolution logo
│   │   ├── apple.svg            # Apple App Store icon
│   │   ├── playstore.svg        # Google Play Store icon
│   │   └── im.jpg               # Additional image asset
│   ├── App.jsx                  # Root component — assembles all sections
│   ├── App.css                  # Legacy/utility CSS styles
│   ├── index.css                # Global styles — Tailwind import, shine animation, selection color
│   └── main.jsx                 # React entry point
├── index.html                   # HTML shell
├── vite.config.js               # Vite configuration with React + Tailwind plugins
├── package.json                 # Dependencies and scripts
└── eslint.config.js             # ESLint configuration
```

---

## 📍 Page Sections

### 1. Hero Section
Bold headline — *"Instantly Book Share Autos & Bikes"* — with a "Future of Instant Rides" badge, two CTAs (Download App / Learn More), and three trust indicators: **Safe & Secure**, **Instant Booking**, and **Affordable**.

### 2. Coming Soon Card
A glowing gradient card with the Javro logo, a pulsing "Coming Soon…" label, and a custom shine animation sweeping across the surface.

### 3. Services — "Rides For Every Need"
A responsive 4-column grid showcasing:
- 🚗 **Sharing Autos** — Affordable daily commutes
- 🚕 **Book Autos** — Personal trips on demand
- 🌿 **E-Rickshaws** — Eco-friendly short-distance rides
- 🏍️ **Instant Bikes** — Beat the traffic

Each card features a radial gradient accent, hover lift animation, and the shine overlay.

### 4. How It Works
A 4-step visual guide:
1. **Enter Destination** — Open the app, type your location
2. **Choose Ride** — Pick from Auto, Sharing, E-Rickshaw, or Bike
3. **Instant Booking** — Get matched with a verified driver
4. **Enjoy The Ride** — Real-time tracking, flexible payment

### 5. Waitlist / Get the App
"Your Next Ride is **One Tap Away**" — a newsletter-style form collecting name, phone number, and email via Formspree, plus App Store and Play Store "Coming Soon" badges.

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/javro.git
cd javro

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be live at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` directory, ready for deployment to Vercel, Netlify, or any static hosting provider.

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| Background | `#050505` | Page background |
| Accent Gold | `#FFC107` / `#f0b100` | Buttons, highlights, icons |
| Card BG | `zinc-900` | Service and how-it-works cards |
| Text Primary | `white` | Headlines |
| Text Secondary | `white/60` – `white/80` | Body text, descriptions |
| Text Muted | `#6a6e79` / `#99a1af` | Card descriptions, step details |
| Selection | Gold on black | Text selection highlight |

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the landing page or add new sections:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ for Javro<br/>
  <strong>The Future of Instant Rides</strong>
</p>
