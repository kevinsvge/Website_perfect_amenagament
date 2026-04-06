import Image from 'next/image'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import SectionTitle from '@/components/SectionTitle'
import Button from '@/components/Button'

export const metadata = {
  title: 'À propos',
  description:
    "Découvrez l'histoire de Perfect Aménagement : une entreprise familiale de menuiserie intérieure fondée sur 25 ans de savoir-faire artisanal.",
}

const values = [
  {
    title: 'Précision',
    description:
      'Chaque découpe, chaque assemblage, chaque chant est réalisé avec une attention au détail qui ne souffre aucun compromis.',
  },
  {
    title: 'Honnêteté',
    description:
      'Nous sommes clairs sur ce que nous faisons et ne faisons pas. Nous fabriquons sur plans — nous ne concevons pas les projets.',
  },
  {
    title: 'Qualité',
    description:
      "Des matériaux sélectionnés, des finitions soignées, un résultat durable. La qualité n'est pas un argument de vente, c'est notre standard.",
  },
  {
    title: 'Engagement',
    description:
      "Lorsqu'un projet nous est confié, nous nous y investissons pleinement. Votre satisfaction est notre seule mesure de réussite.",
  },
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow='Notre histoire'
        title='Une passion transmise, un métier maîtrisé'
        subtitle="Perfect Aménagement, c'est 25 ans de savoir-faire artisanal au service de vos projets intérieurs."
      />

      {/* Histoire */}
      <section className='py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start'>
            {/* Image portrait — remplacez /images/fondateur.jpg */}
            <div className='relative aspect-[3/4] bg-beige overflow-hidden sticky top-28'>
              <Image
                src='/images/fondateur.jpg'
                alt='Fondateur Perfect Aménagement'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
              {/* Badge expérience */}
              <div className='absolute bottom-6 right-6 bg-bark/90 backdrop-blur px-6 py-4 text-center'>
                <div className='font-serif text-4xl text-sand leading-none'>25</div>
                <div className='text-xs text-white/60 tracking-widest uppercase font-sans mt-1'>ans</div>
              </div>
            </div>

            {/* Texte */}
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-xs tracking-widest uppercase text-wood font-sans mb-5'>Nos origines</p>
                <h2 className='font-serif text-3xl lg:text-4xl text-bark mb-6 leading-tight'>
                  25 ans à transformer des espaces
                </h2>
                <p className='text-bark/65 leading-relaxed text-lg'>
                  Perfect Aménagement est née d'une passion simple et profonde pour le bois
                  et le travail bien fait. Fondée par un artisan menuisier fort de 25 ans d'expérience,
                  l'entreprise repose sur une conviction : que chaque espace mérite un aménagement
                  pensé pour lui, fabriqué à la main, au millimètre.
                </p>
              </div>

              <div>
                <p className='text-bark/65 leading-relaxed'>
                  Au fil des années, nous avons fabriqué des centaines de meubles et d'aménagements
                  pour des particuliers et des professionnels. Des salles de bain aux bibliothèques,
                  des habillages muraux aux bornes d'accueil : chaque projet est différent,
                  chaque client a ses besoins propres.
                </p>
              </div>

              <div>
                <p className='text-bark/65 leading-relaxed'>
                  Notre méthode est simple : vous fournissez vos plans, photos et mesures —
                  nous fabriquons exactement ce que vous imaginez. Pas d'interprétation,
                  pas d'approximation. Une fabrication fidèle à vos spécifications,
                  avec les matériaux et finitions que vous choisissez.
                </p>
              </div>

              <blockquote className='border-l-2 border-wood pl-6'>
                <p className='font-serif text-xl text-bark italic leading-relaxed'>
                  "Mon père m'a appris que la qualité d'un meuble se voit dans ses finitions.
                  25 ans plus tard, c'est toujours cette exigence qui guide notre travail."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className='py-20 lg:py-28 bg-beige'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <SectionTitle
            eyebrow='Nos valeurs'
            title='Ce qui nous guide au quotidien'
            align='center'
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sand/30 mt-16'>
            {values.map((value) => (
              <div key={value.title} className='bg-beige p-8 lg:p-10'>
                <div className='w-8 h-px bg-wood mb-6' />
                <h3 className='font-serif text-xl text-bark mb-3'>{value.title}</h3>
                <p className='text-sm text-bark/60 leading-relaxed'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que nous faisons / ne faisons pas */}
      <section className='py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <SectionTitle
              eyebrow='Clarté'
              title='Ce que nous faisons — et ne faisons pas'
              align='center'
            />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-px bg-sand/30 mt-16 max-w-4xl mx-auto'>
            <div className='bg-cream p-10'>
              <p className='text-xs tracking-widest uppercase text-olive font-sans mb-6'>Ce que nous faisons</p>
              <ul className='flex flex-col gap-3'>
                {[
                  'Fabriquer vos meubles et aménagements sur mesure',
                  'Travailler à partir de vos plans, mesures et croquis',
                  'Vous conseiller sur les matériaux et finitions',
                  'Respecter vos dimensions au millimètre',
                  'Poser et installer vos aménagements',
                ].map((item) => (
                  <li key={item} className='flex items-start gap-3 text-sm text-bark/70'>
                    <span className='text-olive mt-0.5 flex-shrink-0'>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-beige p-10'>
              <p className='text-xs tracking-widest uppercase text-bark/40 font-sans mb-6'>Ce que nous ne faisons pas</p>
              <ul className='flex flex-col gap-3'>
                {[
                  'Concevoir ou modéliser vos projets en 3D',
                  'Imaginer le design à votre place',
                  'Travailler sans plans ni mesures précises',
                  'Proposer des modèles de catalogue standards',
                ].map((item) => (
                  <li key={item} className='flex items-start gap-3 text-sm text-bark/50'>
                    <span className='text-bark/30 mt-0.5 flex-shrink-0'>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className='text-xs text-bark/40 mt-6 leading-relaxed'>
                Pour la conception 3D, nous vous recommandons de faire appel
                à un architecte d'intérieur ou un designer avant de nous contacter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow='Travaillons ensemble'
        title='Votre projet entre de bonnes mains'
        subtitle='Partagez vos plans et mesures. Nous vous accompagnons du début à la fin de la fabrication.'
        cta='Demander un devis'
        secondaryCta='Nous contacter'
        secondaryCtaHref='/contact'
      />
    </>
  )
}
