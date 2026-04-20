import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import CTABanner from '@/components/CTABanner'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Perfect Aménagement – Menuiserie intérieure sur mesure',
  description:
    'Fabrication de mobilier et aménagements intérieurs sur mesure. Fondée par un artisan menuisier fort de 25 ans d\'expérience dans le métier.',
}

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

const expertiseItems = [
  {
    number: '01',
    title: 'Sur plan client',
    description:
      'Vous fournissez vos mesures, photos, croquis ou plans. Nous fabriquons exactement selon vos spécifications — sans approximation.',
  },
  {
    number: '02',
    title: 'Fabrication en atelier',
    description:
      "Chaque pièce est façonnée dans notre atelier avec des matériaux soigneusement sélectionnés. Découpe numérique, assemblage à la main.",
  },
  {
    number: '03',
    title: 'Finition sans compromis',
    description:
      "Du choix des chants aux détails de pose, chaque finition reçoit notre attention totale. C'est ce qui différencie l'artisanat de la série.",
  },
]

const reassuranceItems = [
  {
    title: '25 ans d\'expérience dans le métier',
    description: 'Notre fondateur exerce la menuiserie depuis 25 ans. Ce savoir-faire se retrouve dans chaque projet, chaque détail, chaque finition.',
  },
  {
    title: 'Fabrication 100% sur mesure',
    description: "Rien n'est standard. Chaque meuble est conçu et fabriqué selon vos plans et vos dimensions.",
  },
  {
    title: 'Matériaux de qualité',
    description: 'MDF, mélaminé premium, chants ABS : nous sélectionnons des matériaux durables et esthétiques.',
  },
  {
    title: 'Interlocuteur unique',
    description: "De la réception de vos plans à la livraison : un seul contact, une communication claire et directe.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Background image — remplacez /images/hero.jpg par votre photo */}
        <div className='absolute inset-0 bg-bark'>
          <Image
            src='/images/fond_accueil.png'
            alt='Aménagement intérieur sur mesure Perfect Aménagement'
            fill
            priority
            className='object-cover opacity-40'
            sizes='100vw'
          />
        </div>

        {/* Grain texture overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-bark/60 via-bark/40 to-bark/80' />

        {/* Contenu */}
        <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16'>
          <div className='max-w-3xl'>
            <p className='text-xs tracking-widest uppercase text-sand font-sans mb-8'>
              25 ans d'expérience dans le métier
            </p>
            <h1 className='font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] text-balance'>
              L'art du bois,
              <br />
              <em className='not-italic text-sand'>au service</em>
              <br />
              de votre espace
            </h1>
            <p className='mt-8 text-lg lg:text-xl text-white/65 leading-relaxed max-w-xl'>
              Mobilier et aménagements intérieurs fabriqués sur mesure,
              d'après vos plans et vos mesures.
            </p>
            <div className='flex flex-wrap gap-4 mt-10'>
              <Button href='/realisations' variant='light' size='lg'>
                Voir nos réalisations
              </Button>
              <Button href='/devis' variant='light-outline' size='lg'>
                Demander un devis
              </Button>
            </div>
          </div>

          {/* Stat latérale */}
          <div className='hidden lg:flex flex-col gap-1 text-right flex-shrink-0'>
            <span className='font-serif text-7xl text-sand leading-none'>25</span>
            <span className='text-sm text-white/50 tracking-widest uppercase font-sans'>ans d'expérience</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
          <div className='w-px h-12 bg-white/20 animate-pulse' />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className='bg-beige border-b border-sand/50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='grid grid-cols-2 lg:grid-cols-4 divide-x divide-sand/30'>
            {[
              { value: '25 ans', label: "D'expérience dans le métier" },
              { value: '200+', label: 'Projets réalisés' },
              { value: '100%', label: 'Sur mesure' },
              { value: 'Sur mesure', label: 'Matériaux & finitions au choix' },
            ].map((stat) => (
              <div key={stat.label} className='py-8 lg:py-10 px-6 lg:px-10 text-center'>
                <div className='font-serif text-3xl lg:text-4xl text-bark mb-1'>{stat.value}</div>
                <div className='text-xs tracking-widest uppercase text-bark/50 font-sans'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────────── */}
      <section className='py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <SectionTitle
            eyebrow='Notre méthode'
            title="Un savoir-faire d'exception"
            subtitle="Nous ne vendons pas des meubles de catalogue. Nous fabriquons vos projets, d'après vos plans."
            align='center'
          />

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-px bg-sand/30 mt-16 lg:mt-20'>
            {expertiseItems.map((item) => (
              <div key={item.number} className='bg-cream p-8 lg:p-10'>
                <span className='font-serif text-5xl text-sand/60 leading-none block mb-6'>
                  {item.number}
                </span>
                <h3 className='font-serif text-xl text-bark mb-3'>{item.title}</h3>
                <p className='text-sm text-bark/60 leading-relaxed'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ──────────────────────────────────────── */}
      <section className='py-24 lg:py-32 bg-beige'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-16'>
            <SectionTitle
              eyebrow='Nos réalisations'
              title='Ce que nous savons faire'
            />
            <Button href='/realisations' variant='secondary' className='self-start lg:self-auto flex-shrink-0'>
              Voir toutes les réalisations
            </Button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MATÉRIAUX ─────────────────────────────────────────── */}
      <section className='py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
            {/* Texte */}
            <div>
              <SectionTitle
                eyebrow='Matériaux'
                title='Des matières choisies avec soin'
                subtitle="MDF, mélaminé, chants ABS : chaque matériau est sélectionné pour sa qualité, sa durabilité et le rendu final qu'il offre à votre projet."
              />
              <div className='mt-10 flex flex-col gap-4'>
                {['MDF / Medium — stabilité et précision de découpe', 'Mélaminé — toutes couleurs et décors', 'Bois brut — chaleur et authenticité', 'Stratifié — résistance pour surfaces intensives', 'Chants ABS — finition nette, toutes couleurs'].map((item) => (
                  <div key={item} className='flex items-center gap-3'>
                    <span className='w-6 h-px bg-wood flex-shrink-0' />
                    <span className='text-sm text-bark/70'>{item}</span>
                  </div>
                ))}
              </div>
              <div className='mt-10'>
                <Button href='/materiaux' variant='secondary'>
                  Découvrir nos matériaux
                </Button>
              </div>
            </div>

            {/* Image — remplacez /images/atelier.jpg */}
            <div className='relative aspect-[4/3] bg-beige overflow-hidden'>
              <Image
                src='/images/atelier.PNG'
                alt="Atelier de fabrication Perfect Aménagement"
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉASSURANCE ───────────────────────────────────────── */}
      <section className='py-24 lg:py-32 bg-bark'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <SectionTitle
            eyebrow='Pourquoi nous choisir'
            title="L'artisanat au cœur de chaque projet"
            subtitle="Ce qui nous distingue d'une enseigne ou d'un fabricant industriel."
            light
            align='center'
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-16'>
            {reassuranceItems.map((item) => (
              <div key={item.title} className='bg-bark p-8 lg:p-10'>
                <div className='w-8 h-px bg-sand mb-6' />
                <h3 className='font-serif text-lg text-white mb-3'>{item.title}</h3>
                <p className='text-sm text-white/55 leading-relaxed'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À PROPOS STRIP ────────────────────────────────────── */}
      <section className='py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Image — remplacez /images/portrait.jpg */}
            <div className='relative aspect-[3/4] bg-beige overflow-hidden lg:order-2'>
              <Image
                src='/images/portrait.jpg'
                alt='Artisan menuisier Perfect Aménagement'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>

            {/* Texte */}
            <div className='lg:order-1'>
              <p className='text-xs tracking-widest uppercase text-wood font-sans mb-6'>
                Notre histoire
              </p>
              <blockquote className='font-serif text-3xl lg:text-4xl text-bark leading-tight mb-8 text-balance'>
                "25 ans dans le métier, au service de vos projets."
              </blockquote>
              <p className='text-bark/65 leading-relaxed mb-6'>
                Perfect Aménagement est une entreprise familiale fondée sur une passion transmise :
                celle du bois, du travail bien fait, et du détail qui change tout.
                Chaque projet est abordé avec la même exigence, du premier dessin à la dernière finition.
              </p>
              <p className='text-bark/65 leading-relaxed mb-10'>
                Nous ne concevons pas les projets pour vous — c'est votre vision. Nous la réalisons,
                avec précision, dans les matériaux et les dimensions que vous nous fournissez.
              </p>
              <Button href='/a-propos' variant='secondary'>
                Notre histoire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <CTABanner
        title='Parlons de votre projet'
        subtitle='Envoyez-nous vos plans, photos et mesures. Nous vous revenons rapidement avec une estimation.'
        cta='Demander un devis gratuit'
        secondaryCta='Nous contacter'
        secondaryCtaHref='/contact'
      />
    </>
  )
}
