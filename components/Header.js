'use client'

import { useState, useEffect } from 'react' // useEffect gardé pour fermer le menu mobile
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/materiaux', label: 'Matériaux' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className='fixed top-0 left-0 right-0 z-50 bg-beige shadow-sm'
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-0 group'>
            <Image
              src='/images/logo_transparent.png'
              alt='Perfect Aménagement'
              width={150}
              height={150}
              className='object-contain'
            />
            <div className='flex flex-col justify-center leading-none -ml-8 h-[150px]'>
              <span className='font-serif text-xl text-wood tracking-wide'>
                Perfect
              </span>
              <span className='font-serif text-xl text-bark tracking-wide -mt-1'>
                Aménagement
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider uppercase font-sans transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-wood'
                    : 'text-bark/70 hover:text-bark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href='/devis'
              className='ml-4 px-5 py-2.5 bg-wood text-white text-sm tracking-wider uppercase font-sans
                         hover:bg-sand hover:text-bark transition-colors duration-200 rounded-sm'
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Burger menu mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5'
            aria-label='Menu'
          >
            <span
              className={`block h-0.5 bg-bark transition-all duration-300 ${
                isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
              }`}
            />
            <span
              className={`block h-0.5 bg-bark transition-all duration-300 ${
                isOpen ? 'opacity-0 w-0' : 'w-4'
              }`}
            />
            <span
              className={`block h-0.5 bg-bark transition-all duration-300 ${
                isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile overlay */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='bg-bark/98 backdrop-blur-md px-6 py-6 flex flex-col gap-4 border-t border-white/10'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base tracking-wider uppercase font-sans py-2 border-b border-white/10 transition-colors ${
                pathname === link.href ? 'text-sand' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/devis'
            className='mt-2 px-5 py-3 bg-wood text-white text-sm tracking-wider uppercase text-center
                       hover:bg-sand hover:text-bark transition-colors duration-200 rounded-sm'
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </header>
  )
}
