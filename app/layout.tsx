import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/ui/globals.css'
import Sidebar from '@/src/ui/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Darkri Cartons',
  description: 'test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex ${inter.className}`}>
        <Sidebar />
        <main className="flex-1 px-8"> 
          {children}
        </main>
      </body>
    </html>
  )
}
