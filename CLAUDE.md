# CLAUDE.md

## 1. Contexte du projet

### Nom du projet
Perfect Aménagement – Site vitrine

### Description
Site vitrine haut de gamme pour une entreprise de menuiserie intérieure spécialisée dans la fabrication de meubles et d'aménagements sur mesure.

Objectifs :
- valoriser le savoir-faire artisanal
- présenter les réalisations
- générer des demandes de devis qualifiées
- offrir une expérience utilisateur simple, élégante et rassurante

### Activité de l'entreprise
- meubles de salle de bain
- meubles d'entrée
- habillages muraux
- bibliothèques
- claustras
- bornes d'accueil
- mobilier intérieur sur mesure

+ prestations ponctuelles :
- bâtis de porte
- châssis de fenêtre

⚠️ Important :
L'entreprise fabrique mais ne conçoit pas ni ne modélise les projets clients.
Le site doit encourager les utilisateurs à fournir photos, mesures, croquis ou plans.

---

### Stack technique

- Next.js (App Router)
- React
- Tailwind CSS
- JavaScript (ou TypeScript si nécessaire)
- Formulaire de contact via API route Next.js + Resend (envoi d'email)

### Objectifs techniques
- site rapide (performance optimisée)
- SEO-friendly
- responsive (mobile first)
- facilement maintenable
- facilement modifiable par un non développeur

---

### Architecture du projet

/app → pages du site
/components → composants réutilisables
/styles → styles globaux
/public/images → images du site (IMPORTANT)
/utils → fonctions utilitaires

⚠️ Les images doivent être facilement remplaçables sans modifier la logique.

---

## 2. Conventions de code

### Style général
- code propre, lisible, structuré
- éviter la complexité inutile
- privilégier la simplicité et la maintenabilité

### Nommage
- composants : PascalCase (ex: ProjectCard)
- variables : camelCase
- fichiers : kebab-case ou PascalCase selon le contexte

### Style
- indentation : 2 espaces
- quotes : simples (' ')
- éviter les fichiers trop longs
- composants découpés logiquement

### Patterns à respecter
- composants réutilisables
- séparation logique UI / logique métier
- structure claire

### À éviter
- code inutilement complexe
- dépendances inutiles
- sur-ingénierie

---

## 3. Commandes utiles

### Développement
```bash
npm install
npm run dev
npm run build
npm run start
```

---

## 4. Design & identité visuelle

### Palette de couleurs
- Beige chaud (fond principal, espaces aérés)
- Nuances de marron (bois, tons naturels — du sable au brun profond)
- Vert olive (accent, sobriété, lien avec la nature)
- Blanc cassé ou crème pour les textes sur fond sombre

### Ambiance générale
- Haut de gamme, artisanal, chaleureux
- Minimaliste mais pas froid
- Mise en valeur des matières et des réalisations via les photos
- Typographie élégante, espacements généreux

### Ton éditorial
- Sobre, confiant, professionnel
- Pas de superlatifs vides
- Mettre en avant le savoir-faire, la précision, le sur-mesure

---

## 5. Formulaire de contact / devis

- Service d'envoi : **Resend** (API simple, gratuit jusqu'à 3000 emails/mois)
- Le formulaire doit encourager l'utilisateur à joindre photos, mesures, croquis ou plans
- Champs minimum : nom, email, téléphone, type de projet, message, pièces jointes (optionnel)
- L'email reçu doit être clair et exploitable directement par le client

---

## 6. Règles de comportement pour Claude

- Toujours répondre en **français**
- Ne pas créer de fichiers non demandés
- Ne pas ajouter de dépendances sans en informer d'abord
- Privilégier la simplicité : pas d'abstractions prématurées
- Ne pas refactoriser du code non concerné par la tâche en cours
- Ne pas ajouter de commentaires ou docstrings inutiles
- Proposer des solutions adaptées à un site vitrine, pas à une application complexe
- En cas de doute sur le périmètre d'une tâche, demander confirmation avant d'agir
