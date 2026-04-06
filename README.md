# Perfect Aménagement — Site vitrine

Site vitrine haut de gamme pour une entreprise de menuiserie intérieure spécialisée dans la fabrication de meubles et d'aménagements sur mesure.

## Stack technique

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/) (envoi d'emails)

## Pages

| Page | URL |
|---|---|
| Accueil | `/` |
| Réalisations | `/realisations` |
| Matériaux | `/materiaux` |
| À propos | `/a-propos` |
| Demande de devis | `/devis` |
| Contact | `/contact` |

## Installation

```bash
npm install
```

Copier le fichier d'environnement et renseigner les variables :

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Clé API Resend |
| `CONTACT_EMAIL` | Email de réception des demandes |
| `FROM_EMAIL` | Email expéditeur (vérifié sur Resend) |

## Lancer le projet

```bash
npm run dev     # développement → http://localhost:3000
npm run build   # build production
npm run start   # lancer en production
```

## Ajouter des images

Déposez vos photos dans `/public/images/` avec les noms correspondants. Consultez [`/public/images/README.md`](/public/images/README.md) pour la liste complète.

## Ajouter un projet dans la galerie

Ouvrez [`/lib/projects.js`](/lib/projects.js) et ajoutez un objet à la liste :

```js
{
  id: 7,
  slug: 'mon-nouveau-projet',
  title: 'Titre du projet',
  category: 'salle-de-bain',
  categoryLabel: 'Salle de bain',
  materials: ['MDF', 'Mélaminé'],
  description: 'Description du projet...',
  image: '/images/mon-image.jpg',
  featured: false,
}
```
