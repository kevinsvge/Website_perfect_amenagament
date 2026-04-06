import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/materiaux', label: 'Matériaux' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/devis', label: 'Demande de devis' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className='bg-bark text-white/70'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16'>

          {/* Identité */}
          <div className='md:col-span-1'>
            <div className='flex flex-col leading-none mb-6'>
              <span className='font-serif text-2xl text-sand'>Perfect</span>
              <span className='font-serif text-2xl text-white -mt-1'>Aménagement</span>
            </div>
            <p className='text-sm leading-relaxed text-white/60 max-w-xs'>
              Fabrication de mobilier et d'aménagements intérieurs sur mesure.
              Artisans menuisiers depuis 25 ans, au service de vos projets.
            </p>
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
                <a href='tel:+33XXXXXXXXX' className='hover:text-white transition-colors'>
                  +33 X XX XX XX XX
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
                <span>Votre ville, France</span>
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
