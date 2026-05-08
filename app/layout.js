import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Perfect Aménagement – Menuiserie intérieure sur mesure',
    template: '%s | Perfect Aménagement',
  },
  description:
    'Fabrication de mobilier et aménagements intérieurs sur mesure : meubles de salle de bain, bibliothèques, habillages muraux, claustras. Fondée par un artisan fort de 25 ans d\'expérience.',
  keywords: [
    'menuiserie sur mesure',
    'mobilier intérieur sur mesure',
    'meuble salle de bain sur mesure',
    'bibliothèque sur mesure',
    'habillage mural',
    'claustra bois',
    'aménagement intérieur',
    'menuisier artisan',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Perfect Aménagement',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='fr' className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-CSKF7W1KPF'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CSKF7W1KPF');
          `}
        </Script>
      </head>
      <body className='bg-cream text-bark antialiased'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
