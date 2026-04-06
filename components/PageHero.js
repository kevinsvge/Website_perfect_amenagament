export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className='bg-bark pt-36 pb-20 lg:pt-44 lg:pb-28'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='max-w-3xl'>
          {eyebrow && (
            <p className='text-xs tracking-widest uppercase text-sand font-sans mb-5'>
              {eyebrow}
            </p>
          )}
          <h1 className='font-serif text-4xl lg:text-5xl xl:text-6xl text-white leading-tight text-balance'>
            {title}
          </h1>
          {subtitle && (
            <p className='mt-6 text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl'>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
