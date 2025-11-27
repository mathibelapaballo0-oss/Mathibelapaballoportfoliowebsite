# UX/UI Designer Portfolio

A modern, responsive portfolio website showcasing UX/UI design projects built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Single-Page Application** with client-side routing
- **4 Project Case Studies**:
  - Academia Analytics - Student risk monitoring console
  - Local Lit Finder - Bookstore inventory application
  - Drift - Travel luggage brand design
  - Theachedemy - Learning resource sharing platform
- **Smooth Navigation** with scroll-to-section functionality
- **Responsive Design** optimized for all devices
- **Fast Performance** built with Vite

## 📦 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy using Vercel CLI**:
   ```bash
   vercel
   ```

3. **Or deploy via Vercel Dashboard**:
   - Push your code to GitHub
   - Import your repository on [Vercel](https://vercel.com)
   - Vercel will automatically detect the configuration

### Environment Setup

The project uses the configuration in `vercel.json` which:
- Sets the build command to `npm run build`
- Configures the output directory as `dist`
- Sets up rewrites for client-side routing

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
/
├── App.tsx                 # Main application component with routing
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── vercel.json           # Vercel deployment configuration
├── src/
│   └── main.tsx          # React application entry point
├── styles/
│   └── globals.css       # Global styles and Tailwind configuration
├── imports/
│   ├── Homepage.tsx                    # Homepage component
│   ├── SingleProjectPageCompany1.tsx   # Academia Analytics
│   ├── SingleProjectPageCompany2.tsx   # Local Lit Finder
│   ├── SingleProjectPageCompany3.tsx   # Drift
│   ├── SingleProjectPageCompany4.tsx   # Theachedemy
│   └── svg-*.ts                       # SVG imports
└── components/
    └── figma/
        └── ImageWithFallback.tsx      # Image component
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool
- **Vercel** - Hosting platform

## 📝 Notes

- The portfolio uses client-side routing without external routing libraries
- All project pages maintain the original Figma design specifications
- Smooth scroll navigation implemented throughout
- Images are optimized with fallback handling

## 🤝 Support

For any deployment issues, refer to [Vercel's documentation](https://vercel.com/docs) or [Vite's deployment guide](https://vitejs.dev/guide/static-deploy.html).
