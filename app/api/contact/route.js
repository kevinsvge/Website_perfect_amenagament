import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Validation simple côté serveur
function sanitize(str) {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 2000)
}

export async function POST(request) {
  try {
    const body = await request.json()

    const nom = sanitize(body.nom)
    const email = sanitize(body.email)
    const telephone = sanitize(body.telephone)
    const message = sanitize(body.message)

    // Validation basique
    if (!nom || !email || !message) {
      return new Response(JSON.stringify({ error: 'Champs requis manquants' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@perfect-amenagement.fr',
      to: process.env.CONTACT_EMAIL || 'votre@email.com',
      replyTo: email,
      subject: `Nouveau message de contact — ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #2C2014;">
          <h2 style="font-size: 20px; margin-bottom: 24px; color: #3E2111;">
            Nouveau message de contact
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Nom</td>
              <td style="padding: 10px 0;">${nom}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #8B5E3C;">${email}</a></td>
            </tr>
            ${telephone ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td>
              <td style="padding: 10px 0;"><a href="tel:${telephone}" style="color: #8B5E3C;">${telephone}</a></td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #F0E5D0; border-left: 3px solid #8B5E3C;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #8B5E3C; margin: 0 0 12px 0;">Message</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #B8956A;">
            Répondez directement à cet email pour contacter ${nom}.
          </p>
        </div>
      `,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Erreur envoi email contact:', error)
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
