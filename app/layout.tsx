import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartKash Financial Services Limited",
  description:
    "Innovative solutions for the unbanked and underserved communities. Empowering small businesses and individuals with access to financial services.",
  keywords: "fintech, financial services, loans, investments, digital banking, Nigeria, microfinance",
  authors: [{ name: "SmartKash Financial Services Limited" }],
  openGraph: {
    title: "SmartKash Financial Services Limited",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
