import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/materiaux', label: 'Matériaux' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/devis', label: 'Demande de devis' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/perfectamenagement?igsh=MWVuMmEzbjQzcmZndA%3D%3D&utm_source=qr',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
        <circle cx='12' cy='12' r='4' />
        <circle cx='17.5' cy='6.5' r='0.5' fill='currentColor' stroke='none' />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100094024481335',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/frederic-sauvage-011150162',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' />
        <circle cx='4' cy='4' r='2' />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className='bg-bark text-white/70'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16'>

          {/* Identité + réseaux */}
          <div className='md:col-span-1'>
            <div className='flex flex-col leading-none mb-6'>
              <span className='font-serif text-2xl text-sand'>Perfect</span>
              <span className='font-serif text-2xl text-white -mt-1'>Aménagement</span>
            </div>
            <p className='text-sm leading-relaxed text-white/60 max-w-xs mb-8'>
              Fabrication de mobilier et d'aménagements intérieurs sur mesure, portée par 25 ans d'expérience dans le métier.
            </p>
            {/* Réseaux sociaux */}
            <div className='flex gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='text-white/40 hover:text-sand transition-colors duration-200'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className='text-xs tracking-widest uppercase text-sand mb-6 font-sans'>
              Navigation
            </h3>
            <ul className='flex flex-col gap-3'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/60 hover:text-white transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-xs tracking-widest uppercase text-sand mb-6 font-sans'>
              Contact
            </h3>
            <ul className='flex flex-col gap-3 text-sm text-white/60'>
              <li>
                <span className='block text-white/40 text-xs uppercase tracking-wider mb-1'>Téléphone</span>
                <a href='tel:+33783238319' className='hover:text-white transition-colors'>
                  +33 7 83 23 83 19
                </a>
              </li>
              <li>
                <span className='block text-white/40 text-xs uppercase tracking-wider mb-1'>Email</span>
                <a href='mailto:contact@perfect-amenagement.fr' className='hover:text-white transition-colors'>
                  contact@perfect-amenagement.fr
                </a>
              </li>
              <li>
                <span className='block text-white/40 text-xs uppercase tracking-wider mb-1'>Localisation</span>
                <span>Montigny-en-Gohelle, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className='mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40'>
          <p>© {new Date().getFullYear()} Perfect Aménagement. Tous droits réservés.</p>
          <div className='flex gap-6'>
            <Link href='/mentions-legales' className='hover:text-white/70 transition-colors'>
              Mentions légales
            </Link>
            <Link href='/confidentialite' className='hover:text-white/70 transition-colors'>
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
