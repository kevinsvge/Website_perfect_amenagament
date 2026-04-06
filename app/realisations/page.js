'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import ProjectCard from '@/components/ProjectCard'
import CTABanner from '@/components/CTABanner'
import { projects, categories } from '@/lib/projects'

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('tous')

  const filtered =
    activeCategory === 'tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageHero
        eyebrow='Nos travaux'
        title='Chaque projet est unique'
        subtitle='Découvrez nos réalisations : du meuble de salle de bain à la bibliothèque sur mesure, en passant par les habillages muraux et les claustras.'
      />

      {/* Filtres */}
      <section className='bg-beige border-b border-sand/30 sticky top-20 z-40'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='flex gap-0 overflow-x-auto scrollbar-hide'>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex-shrink-0 px-5 py-4 text-xs tracking-widest uppercase font-sans border-b-2 transition-colors duration-200 ${
                  activeCategory === cat.value
                    ? 'border-wood text-wood'
                    : 'border-transparent text-bark/50 hover:text-bark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className='py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          {filtered.length === 0 ? (
            <p className='text-bark/50 text-center py-20'>
              Aucun projet dans cette catégorie pour le moment.
            </p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12'>
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        eyebrow='Votre tour'
        title='Votre projet mérite le même soin'
        subtitle='Partagez vos plans et mesures. Nous fabriquons sur mesure, selon vos spécifications.'
        cta='Demander un devis'
      />
    </>
  )
}
