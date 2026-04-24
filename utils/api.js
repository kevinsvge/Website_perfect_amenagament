// Échappe les caractères HTML pour éviter les injections dans les emails
export function escapeHtml(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Nettoie et limite la longueur d'une chaîne
export function sanitize(str, maxLength = 2000) {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, maxLength)
}

// Types MIME autorisés pour les uploads
const ALLOWED_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'application/pdf',
])

const ALLOWED_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.webp', '.gif', '.pdf',
])

export function isFileAllowed(file) {
  const ext = '.' + file.name.split('.').pop().toLowerCase()
  return (
    ALLOWED_MIME_TYPES.has(file.type) &&
    ALLOWED_EXTENSIONS.has(ext)
  )
}

// Rate limiting en mémoire (réinitialisé au redémarrage du serveur)
const rateLimitMap = new Map()
const RATE_LIMIT = 5      // max 5 requêtes
const WINDOW_MS = 60000   // par minute

export function checkRateLimit(ip) {
  const now = Date.now()
  const requests = (rateLimitMap.get(ip) || []).filter(t => now - t < WINDOW_MS)
  if (requests.length >= RATE_LIMIT) return false
  requests.push(now)
  rateLimitMap.set(ip, requests)
  return true
}
