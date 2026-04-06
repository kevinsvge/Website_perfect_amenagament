import Image from 'next/image'

export default function MaterialCard({ material }) {
  return (
    <div className='flex flex-col bg-white border border-sand/40'>
      {/* Image matériau */}
      <div className='relative aspect-[3/2] bg-beige overflow-hidden'>
        <Image
          src={material.image}
          alt={material.name}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      {/* Contenu */}
      <div className='p-6 lg:p-8 flex flex-col flex-1'>
        <p className='text-xs tracking-widest uppercase text-wood font-sans mb-2'>
          {material.fullName}
        </p>
        <h3 className='font-serif text-2xl text-bark mb-2'>{material.name}</h3>
        <p className='text-sm text-bark/50 italic mb-4'>{material.tagline}</p>
        <p className='text-sm text-bark/70 leading-relaxed mb-6'>
          {material.description}
        </p>

        {/* Propriétés */}
        <div className='mt-auto'>
          <p className='text-xs tracking-widest uppercase text-bark/40 font-sans mb-3'>
            Propriétés
          </p>
          <ul className='flex flex-col gap-2'>
            {material.properties.map((prop) => (
              <li key={prop} className='flex items-center gap-2 text-sm text-bark/70'>
                <span className='w-1.5 h-1.5 rounded-full bg-wood flex-shrink-0' />
                {prop}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
