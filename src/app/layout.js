import './globals.css'
import Wrapper from '@/UI/Wrapper';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/providers/AuthProvider';


export const metadata = {
  title: 'Wyprany z empatii',
  description: 'Weterynaryjny głos z płyty gnojowej- blog o pracy, życiu i pasjach terenowego lekarza weterynarii',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <AuthProvider>
        <body className="bg-primary-100 font-plex text-light-100 w-full">
          <Wrapper>
            <Navbar />
            <main>{children}</main>
          </Wrapper>
          </body>
        </AuthProvider>
    </html>
  )
}
