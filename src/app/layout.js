import './globals.css'
import Wrapper from '@/components/Wrapper';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/providers/AuthPrivider';


export const metadata = {
  title: 'Wyprany z empatii',
  description: 'Weterynaryjny głos z płyty gnojowej',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-primary-100 text-light-100 w-full">
          <Wrapper>
            <Navbar />
            <main>{children}</main>
          </Wrapper>
          </body>
        </AuthProvider>
    </html>
  )
}
