import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const _manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'Abduselam Jibril | Full-Stack & Flutter Developer',
  description: 'Portfolio of Abduselam Jibril Ahmed, a Full-Stack Software Engineer and Flutter Mobile Developer specializing in scalable web, mobile, and AI solutions.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_manrope.variable} dark`}>
      <body className="font-sans antialiased bg-slate-950 text-slate-50 min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
