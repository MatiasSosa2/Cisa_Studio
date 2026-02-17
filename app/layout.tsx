export const metadata = {
  title: 'Cisa Studio — Estudio de Diseño y Desarrollo Digital',
  description: 'Estudio de diseño y desarrollo especializado en crear experiencias digitales significativas e impactantes a través de UI/UX, branding y desarrollo web.',
};

import '../styles/globals.css';
import NavbarMinimal from '@/components/navbar-minimal';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400','500','600','700','800'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} bg-[#0A0A0A] text-[#EDEDED] min-h-screen antialiased`}> 
        <NavbarMinimal />
        {children}
      </body>
    </html>
  );
}
