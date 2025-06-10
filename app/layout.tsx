 import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartKash Financial Services",
  description:
    "Innovative solutions for the unbanked and underserved communities. Empowering small businesses and individuals with access to financial services.",
  keywords: "fintech, financial services, loans, investments, digital banking, Nigeria, microfinance",
  authors: [{ name: "SmartKash Financial Services" }],
  openGraph: {
    title: "SmartKash Financial Services",
    description: "Innovative solutions for the unbanked and underserved communities",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartKash Financial Services Limited",
    description: "Innovative solutions for the unbanked and underserved communities",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  generator: '',
  // Favicon and app icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#667eea',
      },
    ],
  },
  manifest: '/site.webmanifest',
  // Theme colors for mobile browsers
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#667eea' },
    { media: '(prefers-color-scheme: dark)', color: '#764ba2' },
  ],
  // Additional meta tags
  applicationName: 'SmartKash',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SmartKash',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional favicon links for broader compatibility */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}