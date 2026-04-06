import DevisForm from './DevisForm'

export const metadata = {
  title: 'Demande de devis',
  description:
    "Demandez un devis pour votre projet d'aménagement sur mesure. Partagez vos plans, photos et mesures — nous fabriquons selon vos spécifications.",
}

const steps = [
  {
    number: '1',
    title: 'Vous remplissez le formulaire',
    description: 'Décrivez votre projet, ses dimensions et ses contraintes. Joignez photos, croquis ou plans.',
  },
  {
    number: '2',
    title: 'Nous analysons votre demande',
    description: "Nous étudions votre projet et vous revenons sous 48h avec une estimation et d'éventuelles questions.",
  },
  {
    number: '3',
    title: 'Vous recevez votre devis',
    description: 'Un devis clair, détaillé, sans surprises. Vous décidez en toute connaissance.',
  },
]

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className='bg-bark pt-36 pb-16 lg:pt-44 lg:pb-20'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10'>
          <div className='max-w-3xl'>
            <p className='text-xs tracking-widest uppercase text-sand font-sans mb-5'>
              Devis gratuit
            </p>
            <h1 className='font-serif text-4xl lg:text-5xl xl:text-6xl text-white leading-tight'>
              Parlons de votre projet
            </h1>
            <p className='mt-6 text-lg text-white/60 leading-relaxed max-w-2xl'>
              Partagez vos plans, mesures et photos. Plus votre demande est précise,
              plus notre estimation sera juste et rapide.
            </p>
          </div>

          {/* Étapes */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mt-12'>
            {steps.map((step) => (
              <div key={step.number} className='bg-bark/80 backdrop-blur p-6 lg:p-8'>
                <span className='font-serif text-3xl text-sand/40 leading-none block mb-4'>
                  {step.number}
                </span>
                <h3 className='text-sm font-sans text-white mb-2'>{step.title}</h3>
                <p className='text-xs text-white/50 leading-relaxed'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avertissement important */}
      <div className='bg-beige border-l-4 border-wood'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10 py-5'>
          <p className='text-sm text-bark/70 leading-relaxed'>
            <strong className='text-bark'>Important :</strong> Nous fabriquons vos projets,
            mais nous ne concevons pas ni ne modélisons en 3D. Pour nous contacter, vous devez
            disposer de plans, croquis cotés ou mesures précises. Sans ces éléments, nous ne
            pourrons pas établir de devis.
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <section className='py-20 lg:py-28'>
        <div className='max-w-3xl mx-auto px-6 lg:px-10'>
          <DevisForm />
        </div>
      </section>
    </>
  )
}
