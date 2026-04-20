'use client'

import { useState } from 'react'
import Button from '@/components/Button'

const projectTypes = [
  'Meuble de salle de bain',
  "Meuble d'entrée",
  'Bibliothèque',
  'Habillage mural',
  'Claustra',
  "Borne d'accueil",
  'Cuisine',
  'Mobilier sur mesure',
  'Bâti de porte / châssis',
  'Autre',
]

const budgetRanges = [
  'Moins de 1 000 €',
  '1 000 € – 5 000 €',
  '5 000 € – 15 000 €',
  'Plus de 15 000 €',
  'Je ne sais pas encore',
]

const initialForm = {
  nom: '',
  email: '',
  telephone: '',
  typeProjet: '',
  budget: '',
  dimensions: '',
  materiaux: '',
  description: '',
  files: [],
}

export default function DevisForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [fileNames, setFileNames] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleFiles(e) {
    const selected = Array.from(e.target.files)
    setForm((prev) => ({ ...prev, files: selected }))
    setFileNames(selected.map((f) => f.name))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const data = new FormData()
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'files') {
          value.forEach((file) => data.append('files', file))
        } else {
          data.append(key, value)
        }
      })

      const res = await fetch('/api/devis', {
        method: 'POST',
        body: data,
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
        setFileNames([])
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className='text-center py-16'>
        <div className='w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6'>
          <svg className='w-8 h-8 text-olive' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M5 13l4 4L19 7' />
          </svg>
        </div>
        <h2 className='font-serif text-3xl text-bark mb-4'>Demande envoyée</h2>
        <p className='text-bark/60 leading-relaxed max-w-md mx-auto'>
          Merci pour votre demande. Nous l'étudions et nous vous recontactons
          sous 48h ouvrées avec une estimation.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className='mt-8 text-sm text-wood underline underline-offset-4'
        >
          Envoyer une nouvelle demande
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <div>
        <h2 className='font-serif text-2xl text-bark mb-1'>Votre demande de devis</h2>
        <p className='text-sm text-bark/50'>Tous les champs marqués * sont obligatoires.</p>
      </div>

      {/* Infos personnelles */}
      <fieldset className='flex flex-col gap-5'>
        <legend className='text-xs tracking-widest uppercase text-bark/40 font-sans mb-2'>
          Vos coordonnées
        </legend>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div>
            <label className='block text-sm text-bark/70 mb-2' htmlFor='nom'>
              Nom complet *
            </label>
            <input
              id='nom'
              name='nom'
              type='text'
              required
              value={form.nom}
              onChange={handleChange}
              placeholder='Jean Dupont'
              className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm text-bark/70 mb-2' htmlFor='telephone'>
              Téléphone *
            </label>
            <input
              id='telephone'
              name='telephone'
              type='tel'
              required
              value={form.telephone}
              onChange={handleChange}
              placeholder='06 XX XX XX XX'
              className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm text-bark/70 mb-2' htmlFor='email'>
            Email *
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            value={form.email}
            onChange={handleChange}
            placeholder='jean@example.com'
            className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors'
          />
        </div>
      </fieldset>

      {/* Projet */}
      <fieldset className='flex flex-col gap-5'>
        <legend className='text-xs tracking-widest uppercase text-bark/40 font-sans mb-2'>
          Votre projet
        </legend>

        <div>
          <label className='block text-sm text-bark/70 mb-2' htmlFor='typeProjet'>
            Type de projet *
          </label>
          <select
            id='typeProjet'
            name='typeProjet'
            required
            value={form.typeProjet}
            onChange={handleChange}
            className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark transition-colors appearance-none cursor-pointer'
          >
            <option value=''>Sélectionnez un type de projet</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm text-bark/70 mb-3' htmlFor='budget'>
            Fourchette de budget
          </label>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
            {budgetRanges.map((range) => (
              <button
                key={range}
                type='button'
                onClick={() => setForm((prev) => ({ ...prev, budget: range }))}
                className={`px-3 py-2.5 text-xs font-sans border transition-colors duration-150 text-left ${
                  form.budget === range
                    ? 'border-wood bg-wood text-white'
                    : 'border-sand/60 bg-white text-bark/70 hover:border-wood hover:text-bark'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className='block text-sm text-bark/70 mb-2' htmlFor='dimensions'>
            Dimensions approximatives *
          </label>
          <input
            id='dimensions'
            name='dimensions'
            type='text'
            required
            value={form.dimensions}
            onChange={handleChange}
            placeholder='Ex : L 250cm × H 220cm × P 40cm'
            className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors'
          />
        </div>

        <div>
          <label className='block text-sm text-bark/70 mb-2' htmlFor='materiaux'>
            Matériaux / finition souhaités
          </label>
          <input
            id='materiaux'
            name='materiaux'
            type='text'
            value={form.materiaux}
            onChange={handleChange}
            placeholder='Ex : MDF laqué blanc, mélaminé chêne, avec chants assortis…'
            className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors'
          />
        </div>

        <div>
          <label className='block text-sm text-bark/70 mb-2' htmlFor='description'>
            Description du projet *
          </label>
          <textarea
            id='description'
            name='description'
            required
            rows={5}
            value={form.description}
            onChange={handleChange}
            placeholder='Décrivez votre projet : usage, contraintes, détails importants, délai souhaité…'
            className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors resize-none'
          />
        </div>
      </fieldset>

      {/* Upload */}
      <fieldset>
        <legend className='text-xs tracking-widest uppercase text-bark/40 font-sans mb-4'>
          Plans & photos
        </legend>
        <div className='border-2 border-dashed border-sand/60 hover:border-wood transition-colors p-8 text-center cursor-pointer relative'>
          <input
            type='file'
            multiple
            accept='image/*,.pdf,.dwg'
            onChange={handleFiles}
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
          />
          <div className='flex flex-col items-center gap-2 pointer-events-none'>
            <svg className='w-8 h-8 text-sand' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
            </svg>
            <p className='text-sm text-bark/50'>
              Glissez vos fichiers ici ou{' '}
              <span className='text-wood underline underline-offset-4'>parcourez</span>
            </p>
            <p className='text-xs text-bark/30'>JPG, PNG, PDF — 10 Mo max par fichier</p>
          </div>
        </div>
        {fileNames.length > 0 && (
          <ul className='mt-3 flex flex-col gap-1'>
            {fileNames.map((name) => (
              <li key={name} className='text-xs text-bark/50 flex items-center gap-2'>
                <span className='w-1 h-1 rounded-full bg-olive flex-shrink-0' />
                {name}
              </li>
            ))}
          </ul>
        )}
      </fieldset>

      {/* Note RGPD */}
      <p className='text-xs text-bark/40 leading-relaxed'>
        Vos données sont utilisées uniquement pour traiter votre demande de devis.
        Elles ne sont pas transmises à des tiers.
      </p>

      {/* Submit */}
      {status === 'error' && (
        <p className='text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3'>
          Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.
        </p>
      )}

      <Button
        type='submit'
        variant='primary'
        size='lg'
        disabled={status === 'sending'}
        className='w-full justify-center'
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande de devis'}
      </Button>
    </form>
  )
}
