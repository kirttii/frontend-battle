import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Data Automation Platform | Frontend Battle R1',
  description: 'Premium AI-driven data automation platform with matrix-driven pricing and responsive bento features.',
  openGraph: {
    title: 'AI Data Automation Platform',
    description: 'High-converting SaaS landing page for AI automation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-oceanic text-arctic font-inter">{children}</body>
    </html>
  )
}