import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Streamline | 1:1 Livestream Coaching Program',
  description: 'Streamline is a 1:1 livestream coaching program designed to turn creators into consistent revenue generators through personalized coaching on high-converting livestreams.',
  keywords: ['TikTok Shop', '1:1 coaching', 'livestream coaching', 'creator', 'e-commerce', 'livestreams', 'product research'],
  openGraph: {
    title: 'Streamline | 1:1 Livestream Coaching Program',
    description: 'Everything you need to win on TikTok Shop through livestreams — with 1:1 coaching and real support.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Streamline | 1:1 Livestream Coaching Program',
    description: 'Everything you need to win on TikTok Shop through livestreams — with 1:1 coaching and real support.',
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
