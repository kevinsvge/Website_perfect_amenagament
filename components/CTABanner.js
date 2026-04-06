import Button from './Button'

export default function CTABanner({
  eyebrow = 'Votre projet',
  title = 'Prêt à transformer votre intérieur ?',
  subtitle = 'Partagez vos plans, photos et mesures — nous fabriquons le reste.',
  cta = 'Demander un devis gratuit',
  ctaHref = '/devis',
  secondaryCta,
  secondaryCtaHref,
}) {
  return (
    <section className='bg-bark py-20 lg:py-28'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10'>
          <div className='max-w-2xl'>
            {eyebrow && (
              <p className='text-xs tracking-widest uppercase text-sand font-sans mb-4'>
                {eyebrow}
              </p>
            )}
            <h2 className='font-serif text-3xl lg:text-4xl xl:text-5xl text-white leading-tight text-balance'>
              {title}
            </h2>
            {subtitle && (
              <p className='mt-5 text-base lg:text-lg text-white/60 leading-relaxed'>
                {subtitle}
              </p>
            )}
          </div>
          <div className='flex flex-wrap gap-4 flex-shrink-0'>
            <Button href={ctaHref} variant='light' size='lg'>
              {cta}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCtaHref} variant='light-outline' size='lg'>
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
