'use client'

import { useState } from 'react'
import Button from '@/components/Button'

const initialForm = { nom: '', email: '', telephone: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className='bg-olive/10 border border-olive/20 p-8 text-center'>
        <p className='font-serif text-xl text-bark mb-2'>Message envoyé</p>
        <p className='text-sm text-bark/60'>
          Merci, nous vous répondrons sous 48h ouvrées.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className='mt-6 text-sm text-wood underline underline-offset-4'
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div>
          <label className='block text-sm text-bark/70 mb-2' htmlFor='contact-nom'>
            Nom *
          </label>
          <input
            id='contact-nom'
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
          <label className='block text-sm text-bark/70 mb-2' htmlFor='contact-telephone'>
            Téléphone
          </label>
          <input
            id='contact-telephone'
            name='telephone'
            type='tel'
            value={form.telephone}
            onChange={handleChange}
            placeholder='06 XX XX XX XX'
            className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors'
          />
        </div>
      </div>

      <div>
        <label className='block text-sm text-bark/70 mb-2' htmlFor='contact-email'>
          Email *
        </label>
        <input
          id='contact-email'
          name='email'
          type='email'
          required
          value={form.email}
          onChange={handleChange}
          placeholder='jean@example.com'
          className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors'
        />
      </div>

      <div>
        <label className='block text-sm text-bark/70 mb-2' htmlFor='contact-message'>
          Message *
        </label>
        <textarea
          id='contact-message'
          name='message'
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder='Votre question ou message…'
          className='w-full bg-white border border-sand/60 px-4 py-3 text-sm text-bark placeholder-bark/30 transition-colors resize-none'
        />
      </div>

      <p className='text-xs text-bark/40'>
        Vos données sont utilisées uniquement pour répondre à votre message.
      </p>

      {status === 'error' && (
        <p className='text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3'>
          Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.
        </p>
      )}

      <Button
        type='submit'
        variant='primary'
        disabled={status === 'sending'}
        className='w-full justify-center'
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </Button>
    </form>
  )
}
