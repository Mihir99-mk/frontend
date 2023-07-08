import './globals.css'
import { Inter } from 'next/font/google'
import Providers  from './providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mangas',
  description: 'Mangas',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"w-full h-screen bg-slate-200"}><Providers>{children}</Providers></body>
    </html>
  )
}
