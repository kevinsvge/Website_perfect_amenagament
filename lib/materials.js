/**
 * Données des matériaux utilisés.
 * Modifiez les descriptions selon vos besoins.
 */

export const materials = [
  {
    id: 'mdf',
    name: 'MDF / Medium',
    fullName: 'Medium Density Fibreboard',
    tagline: 'La base de toute finition soignée',
    description:
      "Le MDF (ou medium) est notre matériau de prédilection pour les meubles peints et les projets nécessitant une finition parfaitement lisse. Stable, usinable avec précision, il permet des découpes nettes et des profils complexes impossibles avec d'autres supports. Disponible en version hydrofuge pour les pièces humides.",
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
      "Le mélaminé est un panneau de particules recouvert d'une feuille décorative. Il offre une très large gamme de décors — bois, uni, béton, marbre — dans toutes les couleurs, pour un résultat soigné à des coûts maîtrisés. Résistant aux rayures et à l'humidité courante, il est idéal pour les meubles de rangement, cuisines et aménagements.",
    usage: ["Meubles d'entrée", 'Cuisines', 'Dressings', 'Mobilier professionnel'],
    properties: ['Large choix de couleurs et décors', 'Résistant aux rayures', 'Facile à entretenir', 'Bon rapport qualité/prix'],
    image: '/images/melamine.png',
  },
  {
    id: 'bois-brut',
    name: 'Bois brut',
    fullName: 'Bois massif naturel',
    tagline: 'Le charme authentique du bois naturel',
    description:
      "Le bois brut apporte chaleur et caractère à chaque réalisation. Chaque pièce est unique, avec ses veines et ses teintes naturelles. Nous travaillons différentes essences selon vos projets pour obtenir le rendu esthétique et la résistance adaptés à votre utilisation.",
    usage: ['Éléments décoratifs', 'Plans de travail', 'Habillages muraux', 'Mobilier chaleureux'],
    properties: ['Aspect naturel unique', 'Chaleureux et authentique', 'Durable dans le temps', 'Personnalisable en teinte'],
    image: '/images/bois_brut.png',
  },
  {
    id: 'stratifie',
    name: 'Stratifié',
    fullName: 'Panneau stratifié haute pression',
    tagline: 'Résistance et esthétique pour les surfaces intensives',
    description:
      "Le stratifié est une surface haute pression appliquée sur panneau, disponible dans une très large gamme de couleurs et de textures. Extrêmement résistant aux chocs, à la chaleur et aux rayures, il est particulièrement adapté aux plans de travail, cuisines et surfaces sollicitées au quotidien.",
    usage: ['Plans de travail cuisine', 'Surfaces intensives', 'Mobilier professionnel', 'Comptoirs'],
    properties: ['Très résistant aux chocs et chaleur', 'Large choix de couleurs', 'Facile à nettoyer', 'Longue durée de vie'],
    image: '/images/stratifier.png',
  },
  {
    id: 'chants-pvc',
    name: 'Chants ABS',
    fullName: 'Chants thermocollants ABS/PVC',
    tagline: 'La finition qui fait toute la différence',
    description:
      "Les chants sont les bandes de finition appliquées sur les tranches des panneaux. C'est un détail qui distingue un meuble artisanal d'une production industrielle : application soignée, sans joint visible, assortie exactement au décor du panneau. Disponibles dans toutes les couleurs pour s'adapter à n'importe quelle finition.",
    usage: ['Toutes les tranches visibles', 'Finition intérieure et extérieure', 'Toutes couleurs disponibles'],
    properties: ['Disponibles dans toutes les couleurs', 'Application thermocollée', 'Résistants aux chocs', 'Finition professionnelle'],
    image: '/images/chant.png',
  },
]
