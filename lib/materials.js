/**
 * Données des matériaux utilisés.
 * Modifiez les descriptions selon vos besoins.
 */

export const materials = [
  {
    id: 'mdf',
    name: 'MDF',
    fullName: 'Medium Density Fibreboard',
    tagline: 'La base de toute finition soignée',
    description:
      "Le MDF est notre matériau de prédilection pour les meubles peints et les projets nécessitant une finition parfaitement lisse. Stable, usinable avec précision, il permet des découpes nettes et des profils complexes impossibles avec d'autres supports. Disponible en version hydrofuge pour les pièces humides.",
    usage: ['Meubles de salle de bain', 'Habillages muraux', 'Bibliothèques laquées', 'Claustras'],
    properties: ['Stable et uniforme', 'Finition lisse', 'Usinable avec précision', 'Version hydrofuge disponible'],
    image: '/images/mdf.png',
  },
  {
    id: 'melamine',
    name: 'Mélaminé',
    fullName: 'Panneau mélaminé',
    tagline: 'Durabilité et diversité des décors',
    description:
      "Le mélaminé est un panneau de particules recouvert d'une feuille décorative. Il offre une large gamme de décors — bois, uni, béton, marbre — pour un résultat soigné à des coûts maîtrisés. Résistant aux rayures et à l'humidité courante, il est idéal pour les meubles de rangement, cuisines et aménagements.",
    usage: ["Meubles d'entrée", 'Dressings', 'Rangements cuisine', 'Mobilier professionnel'],
    properties: ['Large choix de décors', 'Résistant aux rayures', 'Facile à entretenir', 'Bon rapport qualité/prix'],
    image: '/images/melamine.png',
  },
  {
    id: 'chants-pvc',
    name: 'Chants PVC',
    fullName: 'Chants thermocollants ABS/PVC',
    tagline: 'La finition qui fait toute la différence',
    description:
      "Les chants sont les bandes de finition appliquées sur les tranches des panneaux. C'est un détail qui distingue un meuble artisanal d'une production industrielle : application soignée, sans joint visible, assortie exactement au décor du panneau. Nous utilisons des chants ABS de qualité, résistants à la chaleur et au choc.",
    usage: ['Toutes les tranches visibles', 'Finition intérieure et extérieure', 'Épaisseurs sur mesure'],
    properties: ['Assortis aux décors', 'Application thermocollée', 'Résistants aux chocs', 'Finition professionnelle'],
    image: '/images/chant.png',
  },
]
