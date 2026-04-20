/**
 * Données des projets réalisés.
 *
 * Pour ajouter un projet :
 * 1. Ajoutez votre image dans /public/images/
 * 2. Copiez un objet ci-dessous et remplissez les champs
 *
 * Catégories disponibles : 'salle-de-bain', 'entree', 'bibliotheque',
 * 'habillage-mural', 'claustra', 'borne-accueil', 'sur-mesure', 'professionnel'
 */

export const projects = [
  {
    id: 1,
    slug: 'meuble-salle-de-bain-chene',
    title: 'Meuble de salle de bain chêne naturel',
    category: 'salle-de-bain',
    categoryLabel: 'Salle de bain',
    materials: ['MDF hydrofuge', 'Chant PVC imitation chêne', 'Plan vasque céramique'],
    description:
      'Meuble double vasque sur mesure, conçu selon les plans fournis par le client. Finition chêne naturel avec plan vasque intégré et rangements optimisés.',
    image: '/images/salle_de_bain.png',
    featured: true,
  },
  {
    id: 2,
    slug: 'salle-de-bain-noyer',
    title: 'Salle de bain finition noyer',
    category: 'salle-de-bain',
    categoryLabel: 'Salle de bain',
    materials: ['MDF hydrofuge', 'Mélaminé imitation noyer', 'Chants ABS assortis'],
    description:
      'Meuble de salle de bain sur mesure avec finition imitation noyer. Conçu pour optimiser le rangement tout en apportant une touche chaleureuse et naturelle à la pièce.',
    image: '/images/salle_de_bain_noyer.PNG',
    featured: true,
  },
  {
    id: 3,
    slug: 'bibliotheque-sur-mesure-salon',
    title: 'Bibliothèque murale contemporaine',
    category: 'bibliotheque',
    categoryLabel: 'Bibliothèque',
    materials: ['MDF laqué blanc mat', 'Chants ABS assortis', 'Éclairage LED intégré'],
    description:
      'Bibliothèque murale du sol au plafond, fabriquée en MDF laqué blanc. Compartiments ajustables et emplacement TV central avec gestion des câbles.',
    image: '/images/bibliotheque_design.png',
    featured: true,
  },
  {
    id: 4,
    slug: 'meuble-entree-noyer',
    title: "Meuble d'entrée imitation noyer",
    category: 'entree',
    categoryLabel: 'Entrée',
    materials: ['Mélaminé noyer', 'Chants ABS assortis', 'Crochets intégrés'],
    description:
      "Aménagement d'entrée sur mesure en mélaminé imitation noyer. Banquette avec rangement intégré et porte-manteaux, fabriqué d'après les dimensions exactes du couloir.",
    image: '/images/entree_moderne_noyer.png',
    featured: false,
  },
  {
    id: 5,
    slug: 'entree-led',
    title: "Meuble d'entrée avec éclairage LED",
    category: 'entree',
    categoryLabel: 'Entrée',
    materials: ['MDF laqué', 'Chants ABS', 'Éclairage LED intégré'],
    description:
      "Meuble d'entrée avec éclairage LED intégré pour une ambiance soignée dès le seuil. Fabrication sur mesure avec niches éclairées et rangements fermés.",
    image: '/images/entree_led.PNG',
    featured: false,
  },
  {
    id: 6,
    slug: 'mobilier-bureau',
    title: 'Aménagement bureau sur mesure',
    category: 'sur-mesure',
    categoryLabel: 'Sur mesure',
    materials: ['Mélaminé', 'MDF', 'Chants ABS'],
    description:
      'Aménagement complet de bureau sur mesure : plan de travail, rangements muraux et caissons. Conçu pour optimiser l\'espace de travail selon les besoins du client.',
    image: '/images/mobilier_bureau.PNG',
    featured: false,
  },
  {
    id: 7,
    slug: 'mobilier-bureau-accueil',
    title: "Meuble d'accueil bureau professionnel",
    category: 'borne-accueil',
    categoryLabel: "Borne d'accueil",
    materials: ['MDF', 'Mélaminé', 'Chants ABS assortis'],
    description:
      "Meuble d'accueil sur mesure pour espace professionnel. Fabrication soignée avec comptoir intégré, rangements discrets et finitions adaptées à l'image de l'entreprise.",
    image: '/images/mobilier_bureau_accueil.PNG',
    featured: false,
  },
  {
    id: 8,
    slug: 'meuble-restaurant',
    title: 'Mobilier sur mesure pour restaurant',
    category: 'professionnel',
    categoryLabel: 'Professionnel',
    materials: ['MDF', 'Stratifié', 'Chants ABS'],
    description:
      'Fabrication de mobilier sur mesure pour un établissement de restauration. Comptoir, rangements et habillages réalisés avec des matériaux robustes adaptés à un usage intensif.',
    image: '/images/meuble_restaurant.PNG',
    featured: false,
  },
  {
    id: 9,
    slug: 'accueil-salle-de-sport',
    title: "Borne d'accueil salle de sport",
    category: 'borne-accueil',
    categoryLabel: "Borne d'accueil",
    materials: ['MDF', 'Mélaminé', 'Chants ABS'],
    description:
      "Borne d'accueil sur mesure pour une salle de sport. Design sobre et moderne, fabrication robuste pensée pour un accueil professionnel et une utilisation quotidienne intensive.",
    image: '/images/accueil_salle_de_sport.PNG',
    featured: false,
  },
  {
    id: 10,
    slug: 'garde-corps',
    title: 'Garde-corps sur mesure',
    category: 'sur-mesure',
    categoryLabel: 'Sur mesure',
    materials: ['Bois brut', 'Finition vernis mat'],
    description:
      'Fabrication d\'un garde-corps sur mesure, réalisé d\'après les plans et dimensions fournis par le client. Travail soigné alliant sécurité et esthétique.',
    image: '/images/garde_de_corps.PNG',
    featured: false,
  },
]

export const categories = [
  { value: 'tous', label: 'Tous les projets' },
  { value: 'salle-de-bain', label: 'Salle de bain' },
  { value: 'entree', label: 'Entrée' },
  { value: 'bibliotheque', label: 'Bibliothèque' },
  { value: 'borne-accueil', label: "Borne d'accueil" },
  { value: 'professionnel', label: 'Professionnel' },
  { value: 'sur-mesure', label: 'Sur mesure' },
]
