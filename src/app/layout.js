import './globals.css'
import Wrapper from '@/components/Wrapper';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wyprany z empatii',
  description: 'Weterynaryjny głos z piwnicy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-100 text-light-100 w-full">
        <Wrapper><Navbar/><main>{children}</main></Wrapper></body>
    </html>
  )
}
