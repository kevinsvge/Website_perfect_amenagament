import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Perfect Aménagement.',
}

const sections = [
  {
    title: 'Éditeur du site',
    content: [
      { label: 'Raison sociale', value: 'Perfect Aménagement' },
      { label: 'Forme juridique', value: 'EURL' },
      { label: 'SIRET', value: '953 744 760 00026' },
      { label: 'Gérant', value: 'SAUVAGE Frédéric' },
      { label: 'Adresse', value: 'Z.A des parts d\'en bas, 62640 Montigny-en-Gohelle, France' },
      { label: 'Téléphone', value: '+33 7 83 23 83 19' },
      { label: 'Email', value: 'contact@perfect-amenagement.fr' },
    ],
  },
  {
    title: 'Directeur de la publication',
    content: [
      { label: 'Responsable', value: 'SAUVAGE Frédéric' },
    ],
  },
  {
    title: 'Hébergement',
    content: [
      { label: 'Hébergeur', value: 'Vercel Inc.' },
      { label: 'Adresse', value: '340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis' },
      { label: 'Site', value: 'https://vercel.com' },
    ],
  },
  {
    title: 'Propriété intellectuelle',
    text: "L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de Perfect Aménagement, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.",
  },
  {
    title: 'Responsabilité',
    text: "Perfect Aménagement s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, l'entreprise ne saurait être tenue responsable des erreurs ou omissions, ni des dommages directs ou indirects résultant de l'utilisation de ce site.",
  },
  {
    title: 'Liens hypertextes',
    text: "Ce site peut contenir des liens vers des sites tiers. Perfect Aménagement n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
  },
  {
    title: 'Droit applicable',
    text: 'Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.',
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow='Informations légales'
        title='Mentions légales'
      />

      <section className='py-20 lg:py-28'>
        <div className='max-w-3xl mx-auto px-6 lg:px-10'>
          <div className='flex flex-col gap-12'>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className='font-serif text-2xl text-bark mb-6 pb-3 border-b border-sand/40'>
                  {section.title}
                </h2>

                {section.content && (
                  <dl className='flex flex-col gap-3'>
                    {section.content.map((item) => (
                      <div key={item.label} className='grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4'>
                        <dt className='text-xs uppercase tracking-widest text-bark/40 font-sans pt-0.5'>
                          {item.label}
                        </dt>
                        <dd className='text-bark/70 sm:col-span-2 text-sm leading-relaxed'>
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.text && (
                  <p className='text-bark/70 text-sm leading-relaxed'>{section.text}</p>
                )}
              </div>
            ))}
          </div>

          <p className='mt-16 text-xs text-bark/30 text-center'>
            Dernière mise à jour : avril 2025
          </p>
        </div>
      </section>
    </>
  )
}
