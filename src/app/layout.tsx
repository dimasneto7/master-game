import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Master Games - Se torne um mestre dos jogos',
  description: 'Mais de 10 mil jogos separados e organizados',
  keywords: ['games', 'jogos', 'play'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
