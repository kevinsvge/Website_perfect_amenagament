import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact',
  description:
    "Contactez Perfect Aménagement pour toute question sur vos projets d'aménagement intérieur sur mesure.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className='bg-bark pt-36 pb-16 lg:pt-44 lg:pb-20'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='max-w-2xl'>
            <p className='text-xs tracking-widest uppercase text-sand font-sans mb-5'>
              Contact
            </p>
            <h1 className='font-serif text-4xl lg:text-5xl text-white leading-tight'>
              Une question ? Parlons-en.
            </h1>
            <p className='mt-5 text-lg text-white/60 leading-relaxed'>
              Pour une demande de devis, utilisez plutôt notre formulaire dédié.
              Pour toute autre question, nous sommes disponibles.
            </p>
          </div>
        </div>
      </section>

      <section className='py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>

            {/* Infos de contact */}
            <div className='flex flex-col gap-10'>
              <div>
                <p className='text-xs tracking-widest uppercase text-wood font-sans mb-6'>
                  Coordonnées
                </p>
                <div className='flex flex-col gap-6'>
                  {[
                    {
                      label: 'Téléphone',
                      value: '+33 7 83 23 83 19',
                      href: 'tel:+33783238319',
                      note: 'Lundi – Vendredi, 8h – 18h',
                    },
                    {
                      label: 'Email',
                      value: 'contact@perfect-amenagement.fr',
                      href: 'mailto:contact@perfect-amenagement.fr',
                      note: 'Réponse sous 48h ouvrées',
                    },
                    {
                      label: 'Localisation',
                      value: 'Montigny-en-Gohelle, France',
                      href: null,
                      note: 'Atelier et déplacements zone locale',
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className='text-xs text-bark/40 tracking-wider uppercase font-sans mb-1'>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className='text-bark font-sans text-base hover:text-wood transition-colors'
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className='text-bark font-sans text-base'>{item.value}</p>
                      )}
                      {item.note && (
                        <p className='text-xs text-bark/40 mt-0.5'>{item.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Séparateur */}
              <div className='h-px bg-sand/30' />

              {/* Note devis */}
              <div className='bg-beige p-6'>
                <p className='text-sm font-sans font-medium text-bark mb-2'>
                  Vous avez un projet précis ?
                </p>
                <p className='text-sm text-bark/60 leading-relaxed mb-4'>
                  Utilisez notre formulaire de devis pour une réponse plus rapide et
                  complète. Il vous permet de joindre vos plans et photos directement.
                </p>
                <a
                  href='/devis'
                  className='text-sm text-wood underline underline-offset-4 hover:text-bark transition-colors'
                >
                  Accéder au formulaire de devis →
                </a>
              </div>

              {/* Horaires */}
              <div>
                <p className='text-xs tracking-widest uppercase text-bark/40 font-sans mb-4'>
                  Horaires
                </p>
                <div className='flex flex-col gap-2 text-sm'>
                  {[
                    { day: 'Lundi – Vendredi', hours: '8h00 – 18h00' },
                    { day: 'Samedi', hours: 'Sur rendez-vous' },
                    { day: 'Dimanche', hours: 'Fermé' },
                  ].map((h) => (
                    <div key={h.day} className='flex justify-between border-b border-sand/20 pb-2'>
                      <span className='text-bark/60'>{h.day}</span>
                      <span className='text-bark'>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <p className='text-xs tracking-widest uppercase text-wood font-sans mb-8'>
                Formulaire de contact
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
