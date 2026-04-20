import Image from 'next/image'
import PageHero from '@/components/PageHero'
import MaterialCard from '@/components/MaterialCard'
import CTABanner from '@/components/CTABanner'
import SectionTitle from '@/components/SectionTitle'
import { materials } from '@/lib/materials'

export const metadata = {
  title: 'Matériaux & Savoir-faire',
  description:
    'MDF, mélaminé, chants ABS : découvrez les matériaux que nous utilisons pour fabriquer vos aménagements intérieurs sur mesure.',
}

const methodSteps = [
  {
    step: '1',
    title: 'Vous fournissez vos plans',
    description:
      'Photos, mesures, croquis ou plans techniques : nous travaillons à partir de ce que vous nous transmettez. Plus vos informations sont précises, plus notre fabrication sera fidèle.',
  },
  {
    step: '2',
    title: 'Nous sélectionnons les matériaux',
    description:
      "Selon votre projet, l'environnement (salle de bain, salon, bureau\u2026) et votre budget, nous vous conseillons sur les mat\u00e9riaux et finitions les mieux adapt\u00e9s.",
  },
  {
    step: '3',
    title: 'Fabrication en atelier',
    description:
      'Chaque pièce est découpée, usinée et assemblée dans notre atelier. Découpe numérique pour la précision, assemblage manuel pour la solidité.',
  },
  {
    step: '4',
    title: 'Livraison et pose',
    description:
      'Votre mobilier est livré et installé selon les conditions convenues. Chaque détail est vérifié avant notre départ.',
  },
]

export default function MateriauxPage() {
  return (
    <>
      <PageHero
        eyebrow='Matériaux & Savoir-faire'
        title='La matière au service de votre projet'
        subtitle="Nous travaillons avec des matériaux sélectionnés pour leur qualité, leur durabilité et le rendu qu'ils offrent à vos aménagements."
      />

      {/* Matériaux */}
      <section className='py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <SectionTitle
            eyebrow='Nos matériaux'
            title='Ce que nous utilisons et pourquoi'
            subtitle='Trois matériaux maîtrisés, chacun avec ses qualités propres et ses usages privilégiés.'
            align='center'
          />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
            {materials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section className='py-20 lg:py-28 bg-bark'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <SectionTitle
            eyebrow='Notre méthode'
            title='Comment nous travaillons'
            subtitle='Un processus simple et transparent, du premier contact à la livraison.'
            light
            align='center'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-16'>
            {methodSteps.map((step) => (
              <div key={step.step} className='bg-bark p-8 lg:p-10'>
                <span className='font-serif text-5xl text-sand/40 leading-none block mb-6'>
                  {step.step}
                </span>
                <h3 className='font-serif text-lg text-white mb-3'>{step.title}</h3>
                <p className='text-sm text-white/55 leading-relaxed'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier image + texte */}
      <section className='py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div className='relative aspect-[4/3] bg-beige overflow-hidden'>
              {/* Remplacez /images/atelier-detail.jpg par votre photo */}
              <Image
                src='/images/atelier.PNG'
                alt='Détail de fabrication en atelier'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
            <div>
              <SectionTitle
                eyebrow='Précision'
                title="L'atelier comme engagement"
                subtitle={null}
              />
              <p className='mt-6 text-bark/65 leading-relaxed'>
                Tout est fabriqué dans notre propre atelier. Pas de sous-traitance,
                pas d'intermédiaire. Chaque panneau est découpé, chaque chant est appliqué,
                chaque assemblage est vérifié par nos mains.
              </p>
              <p className='mt-4 text-bark/65 leading-relaxed'>
                Cette maîtrise de bout en bout est ce qui nous permet de garantir
                la précision au millimètre et la cohérence de chaque projet,
                quelle qu'en soit la complexité.
              </p>

              <div className='mt-10 grid grid-cols-2 gap-6'>
                {[
                  { value: 'Atelier propre', label: 'Fabrication intégrée' },
                  { value: 'Sur mesure', label: 'Aucun standard' },
                  { value: 'Matériaux', label: 'Sélection rigoureuse' },
                  { value: 'Suivi', label: 'Interlocuteur unique' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className='font-serif text-lg text-wood mb-1'>{item.value}</div>
                    <div className='text-xs text-bark/50 uppercase tracking-wider font-sans'>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow='Passons à la pratique'
        title='Votre projet, nos matériaux'
        subtitle='Décrivez-nous votre projet et nous vous conseillerons sur les meilleures solutions.'
        cta='Demander un devis'
      />
    </>
  )
}
