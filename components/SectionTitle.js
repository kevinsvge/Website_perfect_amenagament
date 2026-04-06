export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align]

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs tracking-widest uppercase font-sans mb-4 ${
            light ? 'text-sand' : 'text-wood'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl lg:text-4xl xl:text-5xl leading-tight text-balance ${
          light ? 'text-white' : 'text-bark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base lg:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-bark/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
