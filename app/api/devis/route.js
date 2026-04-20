import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function sanitize(str) {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 5000)
}

export async function POST(request) {
  try {
    const data = await request.formData()

    const nom = sanitize(data.get('nom'))
    const email = sanitize(data.get('email'))
    const telephone = sanitize(data.get('telephone'))
    const typeProjet = sanitize(data.get('typeProjet'))
    const budget = sanitize(data.get('budget'))
    const dimensions = sanitize(data.get('dimensions'))
    const materiaux = sanitize(data.get('materiaux'))
    const description = sanitize(data.get('description'))
    const files = data.getAll('files').filter((f) => f && f.size > 0)

    // Validation
    if (!nom || !email || !telephone || !typeProjet || !dimensions || !description) {
      return new Response(JSON.stringify({ error: 'Champs requis manquants' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Préparer les pièces jointes (max 10 fichiers, 10Mo chacun)
    const attachments = []
    const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 Mo

    for (const file of files.slice(0, 10)) {
      if (file.size > MAX_FILE_SIZE) continue
      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name,
        content: buffer,
      })
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@perfect-amenagement.fr',
      to: process.env.CONTACT_EMAIL || 'votre@email.com',
      replyTo: email,
      subject: `Demande de devis — ${typeProjet} — ${nom}`,
      attachments,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #2C2014;">
          <h2 style="font-size: 20px; margin-bottom: 8px; color: #3E2111;">
            Nouvelle demande de devis
          </h2>
          <p style="font-size: 14px; color: #8B5E3C; margin: 0 0 28px 0;">
            Projet : <strong>${typeProjet}</strong>
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Nom</td>
              <td style="padding: 10px 0;">${nom}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #8B5E3C;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td>
              <td style="padding: 10px 0;"><a href="tel:${telephone}" style="color: #8B5E3C;">${telephone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Type de projet</td>
              <td style="padding: 10px 0;">${typeProjet}</td>
            </tr>
            ${budget ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td>
              <td style="padding: 10px 0;">${budget}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Dimensions</td>
              <td style="padding: 10px 0;">${dimensions}</td>
            </tr>
            ${materiaux ? `
            <tr style="border-bottom: 1px solid #F0E5D0;">
              <td style="padding: 10px 0; color: #8B5E3C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Matériaux</td>
              <td style="padding: 10px 0;">${materiaux}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #F0E5D0; border-left: 3px solid #8B5E3C;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #8B5E3C; margin: 0 0 12px 0;">Description du projet</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${description}</p>
          </div>

          ${attachments.length > 0 ? `
          <p style="margin-top: 20px; font-size: 13px; color: #5C6B4A;">
            📎 ${attachments.length} fichier(s) joint(s) : ${attachments.map((a) => a.filename).join(', ')}
          </p>
          ` : '<p style="margin-top: 20px; font-size: 13px; color: #B8956A;">Aucun fichier joint.</p>'}

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
    console.error('Erreur envoi devis:', error)
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
