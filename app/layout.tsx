import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Frank Li',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'yz Frank Li Portfolio',
    description: 'Frank Li personal portfolio website.',
    url: baseUrl,
    siteName: 'Frank Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'scroll-smooth',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body>
        <main className="flex min-h-screen flex-col lg:flex-row">
          <Navbar />

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </div>

          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}