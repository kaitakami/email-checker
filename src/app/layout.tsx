import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Email Checker',
  description: 'Improve your emails with a better word usage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='relative max-w-5xl mx-auto'>
          <h1 className='absolute p-4 text-2xl font-bold'>Email Checker</h1>
          <Link className='absolute right-0 p-5 opacity-80' href="https://github.com/kaitakami/email-checker" target='_blank'>GitHub</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
