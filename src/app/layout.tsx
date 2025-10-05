import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranav Eega — Personal Website',
  description: 'Developer portfolio and personal website',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Pranav Eega — Personal Website',
    description: 'Developer portfolio and personal website',
    url: 'https://example.com',
    siteName: 'Pranav Eega',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Pranav Eega' }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav Eega — Personal Website',
    description: 'Developer portfolio and personal website',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} smooth-scroll`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

