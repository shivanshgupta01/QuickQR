# 🔲 QuickQR

> **Smart, fast, and beautiful QR codes instantly.**

A minimal, lightning-fast web app to generate custom QR codes for URLs, text, and contacts. Customize colors, add your own logo, and download in high resolution — all happening instantly in your browser.

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)
![Styled with Tailwind](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)
![No Login Required](https://img.shields.io/badge/No%20Login-Required-green?style=flat-square)

---

## ✨ Features

- ⚡ **Instant Generation** — The QR code updates in real-time as you type, no loading screens.
- 🔗 **Multiple Data Types** — Support for Website URLs, Plain Text, and Contact Cards (vCard).
- 🎨 **Color Customization** — Choose from beautiful presets or use a custom hex color picker.
- 🖼️ **Custom Logos** — Upload your own logo or image to sit perfectly in the center of your QR code.
- 📥 **High-Res Export** — Download your creation instantly as a high-quality, transparent PNG.
- 🌙 **Dark/Light Mode** — Beautifully styled themes that respect your eyes, saved to local storage.
- 📱 **Mobile First** — Clean, responsive split layout that looks great on any screen size.

---

## 🌐 Live Demo

🔗 **https://quick-qr-cyan.vercel.app**

---

## Screenshot

<img src="https://github.com/user-attachments/assets/509042a6-f9ec-4a5d-9792-bfd0ec622c42" width="14%" alt="Screenshot of project" />
<img src="https://github.com/user-attachments/assets/552b3369-b592-4115-84ab-aedefd679f79" width="14%" alt="Screenshot of project" />
<img src="https://github.com/user-attachments/assets/62409278-49fe-41d3-b9f5-5372642a9f81" width="14%" alt="Screenshot of project" />
<img src="https://github.com/user-attachments/assets/e7c6cb68-ec54-49d9-befd-ec14c4c9f7da" width="14%" alt="Screenshot of project" />

---
## 🚀 How It Works

```text
User opens app
       ↓
Selects Data Type (URL, Text, Contact)
       ↓
Enters content (Updates QR instantly)
       ↓
Selects a custom color
       ↓
Uploads an optional center Logo
       ↓
Clicks Download → Saves High-Res PNG
```

---

## 🎨 Design

- **Style:** Clean, minimal, card-based UI
- **Colors:** Indigo Primary (#6366F1) with crisp Light/Dark modes
- **Typography:** System Sans-Serif for maximum readability and speed
- **Animations:** Smooth hover states and theme transitions

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 19 | Frontend framework |
| Vite | Lightning-fast build tool |
| Tailwind CSS v4 | Utility-first styling |
| qr-code-styling | Advanced canvas QR rendering with logos |
| Lucide React | Clean, scalable UI icons |
| Vercel | Deployment & hosting |

---

## 📁 Project Structure

```text
quick-qr/
├── src/
│   ├── components/
│   │   └── QRCodeGenerator.tsx  ← Core QR canvas rendering logic
│   ├── App.tsx                  ← Main UI, State, & Dark Mode
│   ├── index.css                ← Tailwind v4 configuration
│   └── main.tsx                 ← React entry point
├── index.html
├── vite.config.ts
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/shivanshgupta01/quick-qr.git

# Navigate into the project
cd quick-qr

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) ✅

---

## 🚀 Deployment on Vercel

### Step 1 — Push to GitHub
```bash
git add .
git commit -m "initial commit"
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to **vercel.com** and import your repository
2. Vercel auto-detects Vite and React.
3. Click **Deploy** ✅

### Step 3 — Future Updates
Every time you make changes just run:
```bash
git add .
git commit -m "your update message"
git push origin main
```
Vercel auto-deploys in 30 seconds ✅

---

## 🔐 Privacy Notes

- **100% Client-Side:** QuickQR processes all data directly in your browser. 
- No URLs, text, contacts, or images are ever sent to a server or stored in a database.

---

## 🗺️ Roadmap

- [ ] Add SVG and JPEG download options
- [ ] Add bulk QR code generation
- [ ] Customizable dot styles (Square, Dots, Classy)
- [ ] Pre-built templates for WiFi networks and Crypto addresses

---

## 🏗️ Part of 30 Days Mini Projects

This app is **Day 05** of my **30 Days Mini Projects** challenge — building one web app every day.

| Day | Project | Status |
|---|---|---|
| 01 | Daily Habit Tracker | ✅ Live |
| 02 | Skill Progress Tracker | ✅ Live |
| 03 | Focus Timer (FocusFlow) | ✅ Live |
| 04 | Accountability Board | ✅ Live |
| 05 | QuickQR | ✅ Live |

---

## 👨‍💻 Author

**Shivansh Gupta**
- Instagram: [@flowkraftai](https://www.instagram.com/flowkraftai)
- GitHub: [@shivanshgupta01](https://github.com/shivanshgupta01)

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<p align="center">Built with ❤️ by Shivansh Gupta</p>
<p align="center">⭐ Star this repo if you found it useful!</p>
