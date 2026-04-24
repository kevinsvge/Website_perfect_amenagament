import { Resend } from 'resend'
import { headers } from 'next/headers'
import { sanitize, escapeHtml, checkRateLimit } from '@/utils/api'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    // Rate limiting
    const headersList = headers()
    const ip = headersList.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return new Response(JSON.stringify({ error: 'Trop de requêtes. Réessayez dans une minute.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
      })
    }

    const body = await request.json()

    const nom = sanitize(body.nom)
    const email = sanitize(body.email)
    const telephone = sanitize(body.telephone)
    const message = sanitize(body.message)

    if (!nom || !email || !message) {
      return new Response(JSON.stringify({ error: 'Champs requis manquants' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Échappement HTML pour éviter les injections dans l'email
    const sNom = escapeHtml(nom)
    const sEmail = escapeHtml(email)
    const sTelephone = escapeHtml(telephone)
    const sMessage = escapeHtml(message)

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@perfect-amenagement.fr',
      to: process.env.CONTACT_EMAIL || 'votre@email.com',
      replyTo: email,
      subject: `Nouveau message de contact — ${sNom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #2C2014;">
          <h2 style="font-size: 20px; margin-bottom: 24px; color: #3E2111;">
            Nouveau message de contact
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Nom</td>
              <td style="padding: 10px 0;">${sNom}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${sEmail}" style="color: #8B5E3C;">${sEmail}</a></td>
            </tr>
            ${sTelephone ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td>
              <td style="padding: 10px 0;"><a href="tel:${sTelephone}" style="color: #8B5E3C;">${sTelephone}</a></td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #F0E5D0; border-left: 3px solid #8B5E3C;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #8B5E3C; margin: 0 0 12px 0;">Message</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${sMessage}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #B8956A;">
            Répondez directement à cet email pour contacter ${sNom}.
          </p>
        </div>
      `,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
