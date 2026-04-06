import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <article className='group flex flex-col'>
      {/* Image */}
      <div className='relative overflow-hidden bg-beige aspect-[4/3]'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        {/* Overlay au hover */}
        <div className='absolute inset-0 bg-bark/0 group-hover:bg-bark/30 transition-all duration-500' />
        {/* Catégorie badge */}
        <div className='absolute top-4 left-4'>
          <span className='bg-bark/80 backdrop-blur-sm text-sand text-xs tracking-widest uppercase px-3 py-1.5 font-sans'>
            {project.categoryLabel}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className='pt-5 flex flex-col flex-1'>
        <h3 className='font-serif text-xl text-bark mb-2 leading-snug'>
          {project.title}
        </h3>
        <p className='text-sm text-bark/60 leading-relaxed mb-4 flex-1'>
          {project.description}
        </p>
        {/* Matériaux */}
        <div className='flex flex-wrap gap-2 mt-auto'>
          {project.materials.map((mat) => (
            <span
              key={mat}
              className='text-xs text-wood border border-sand px-2.5 py-1 font-sans'
            >
              {mat}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
