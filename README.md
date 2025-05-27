# SmartKash Financial Services Website

A modern, responsive fintech website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations and scroll effects
- 📱 Mobile-first approach
- 🔒 Security-focused design
- 💼 Professional fintech aesthetic

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS animations with Tailwind

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd smartkash
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...config files
\`\`\`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Customization

### Colors
The website uses a blue and purple color scheme. You can customize colors in `tailwind.config.js`.

### Content
Update the content in `app/page.tsx` to match your specific business needs.

### Animations
Scroll animations and transitions are defined in `app/globals.css` and can be customized.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `out` folder:
\`\`\`bash
npm run build
\`\`\`

## License

© 2025 SmartKash Financial Services Limited. All Rights Reserved.
\`\`\`

```txt file=".env.example"
# Environment variables for SmartKash Financial Services Website

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact Form (optional)
# NEXT_PUBLIC_CONTACT_EMAIL=contact@SmartKash.com

# API Keys (if needed)
# API_KEY=your_api_key
