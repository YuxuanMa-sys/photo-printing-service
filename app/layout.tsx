import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Photo Printing Laguna Beach | Same Day Photo Prints | Laguna Digital",
  description:
    "Professional photo printing in Laguna Beach & Irvine, CA. Same-day service, premium quality prints from $2.45. Upload photos online or visit our store. 15+ paper options available.",
  keywords:
    "photo printing Laguna Beach, same day photo prints, digital photo printing, photo lab Laguna Beach, professional photo printing Orange County, print shop Irvine, affordable prints",
  openGraph: {
    title: "Photo Printing Laguna Beach | Same Day Photo Prints | Laguna Digital",
    description:
      "Professional photo printing in Laguna Beach & Irvine, CA. Same-day service, premium quality prints from $2.45.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div id="skip-link">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
            Skip to main content
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
