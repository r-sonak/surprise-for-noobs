# Surprise App 🎉

A minimal, fun web app that displays a surprise after clicking a button with confetti animation.

## Features

- ✨ Confetti animation on button click
- 🎨 Beautiful gradient background with TailwindCSS
- 📱 Responsive design
- ⚡ Fast and lightweight with Vite
- 🚀 Easy deployment to Vercel

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **canvas-confetti** - Confetti animation library

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment to Vercel

### Step-by-Step Guide

#### 1. Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

#### 2. Push to GitHub

**Create a new repository on GitHub:**
- Go to [github.com](https://github.com) and create a new repository
- Don't initialize it with README, .gitignore, or license (we already have these)

**Push your code:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 3. Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub to connect)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
5. Click **"Deploy"**
6. Wait 1-2 minutes for deployment
7. Your app will be live at `https://your-app-name.vercel.app`

**Option B: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
vercel --prod  # Deploy to production
```

### Vercel Settings (Auto-detected, but verify)

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** 18.x or higher (auto-selected)

### After Deployment

- Your site will be live immediately
- Every push to `main` branch will auto-deploy
- You'll get a custom URL: `https://your-app-name.vercel.app`
- You can add a custom domain in Vercel dashboard under "Settings" → "Domains"

## Project Structure

```
surprise-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── index.css
└── README.md
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT


