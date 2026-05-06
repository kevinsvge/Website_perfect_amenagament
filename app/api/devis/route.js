import { Resend } from 'resend'
import { headers } from 'next/headers'
import { sanitize, escapeHtml, isFileAllowed, checkRateLimit } from '@/utils/api'

const resend = new Resend(process.env.RESEND_API_KEY)

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 Mo

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

    const data = await request.formData()

    const nom = sanitize(data.get('nom'))
    const email = sanitize(data.get('email'))
    const telephone = sanitize(data.get('telephone'))
    const typeProjet = sanitize(data.get('typeProjet'))
    const budget = sanitize(data.get('budget'))
    const urgence = sanitize(data.get('urgence'))
    const datesouhaitee = sanitize(data.get('datesouhaitee'))
    const dimensions = sanitize(data.get('dimensions'))
    const materiaux = sanitize(data.get('materiaux'))
    const description = sanitize(data.get('description'), 5000)
    const files = data.getAll('files').filter((f) => f && f.size > 0)

    // Validation des champs requis
    if (!nom || !email || !telephone || !typeProjet || !dimensions || !description) {
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

    // Échappement HTML
    const sNom = escapeHtml(nom)
    const sEmail = escapeHtml(email)
    const sTelephone = escapeHtml(telephone)
    const sTypeProjet = escapeHtml(typeProjet)
    const sBudget = escapeHtml(budget)
    const sUrgence = escapeHtml(urgence)
    const sDatesouhaitee = escapeHtml(datesouhaitee)
    const sDimensions = escapeHtml(dimensions)
    const sMateriaux = escapeHtml(materiaux)
    const sDescription = escapeHtml(description)

    // Validation et traitement des fichiers
    const attachments = []
    for (const file of files.slice(0, 10)) {
      if (file.size > MAX_FILE_SIZE) continue
      if (!isFileAllowed(file)) continue // Rejette les types non autorisés
      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name.replace(/[^a-zA-Z0-9._-]/g, '_'), // Sanitise le nom
        content: buffer,
      })
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@perfect-amenagement.fr',
      to: process.env.CONTACT_EMAIL || 'votre@email.com',
      replyTo: email,
      subject: `Demande de devis — ${sTypeProjet} — ${sNom}`,
      attachments,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #2C2014;">
          <h2 style="font-size: 20px; margin-bottom: 8px; color: #3E2111;">
            Nouvelle demande de devis
          </h2>
          <p style="font-size: 14px; color: #8B5E3C; margin: 0 0 28px 0;">
            Projet : <strong>${sTypeProjet}</strong>
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Nom</td>
              <td style="padding: 10px 0;">${sNom}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${sEmail}" style="color: #8B5E3C;">${sEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td>
              <td style="padding: 10px 0;"><a href="tel:${sTelephone}" style="color: #8B5E3C;">${sTelephone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Type de projet</td>
              <td style="padding: 10px 0;">${sTypeProjet}</td>
            </tr>
            ${sBudget ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td>
              <td style="padding: 10px 0;">${sBudget}</td>
            </tr>
            ` : ''}
            ${sUrgence ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Délai</td>
              <td style="padding: 10px 0;">${sUrgence}</td>
            </tr>
            ` : ''}
            ${sDatesouhaitee ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Date souhaitée</td>
              <td style="padding: 10px 0;">${sDatesouhaitee}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Dimensions</td>
              <td style="padding: 10px 0;">${sDimensions}</td>
            </tr>
            ${sMateriaux ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Matériaux</td>
              <td style="padding: 10px 0;">${sMateriaux}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #F0E5D0; border-left: 3px solid #8B5E3C;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #8B5E3C; margin: 0 0 12px 0;">Description du projet</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${sDescription}</p>
          </div>

          ${attachments.length > 0 ? `
          <p style="margin-top: 20px; font-size: 13px; color: #5C6B4A;">
            📎 ${attachments.length} fichier(s) joint(s) : ${attachments.map((a) => a.filename).join(', ')}
          </p>
          ` : '<p style="margin-top: 20px; font-size: 13px; color: #B8956A;">Aucun fichier joint.</p>'}

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
