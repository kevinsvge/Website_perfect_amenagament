/**
 * Données des projets réalisés.
 *
 * Pour ajouter un projet :
 * 1. Ajoutez votre image dans /public/images/ (ex: projet-7.jpg)
 * 2. Copiez un objet ci-dessous et remplissez les champs
 *
 * Catégories disponibles : 'salle-de-bain', 'entree', 'bibliotheque',
 * 'habillage-mural', 'claustra', 'borne-accueil', 'sur-mesure'
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
    id: 3,
    slug: 'meuble-entree-moderne',
    title: "Meuble d'entrée avec claustra",
    category: 'entree',
    categoryLabel: 'Entrée',
    materials: ['Mélaminé noyer', 'Claustra lames bois', 'Crochets en laiton'],
    description:
      "Aménagement d'entrée complet : banquette avec rangement, claustra séparation et porte-manteaux. Réalisé en mélaminé imitation noyer.",
    image: '/images/entree_moderne_noyer.png',
    featured: true,
  },
  {
    id: 4,
    slug: 'habillage-mural-tete-de-lit',
    title: 'Habillage mural tête de lit',
    category: 'habillage-mural',
    categoryLabel: 'Habillage mural',
    materials: ['MDF rainuré', 'Peinture blanc cassé', 'Appliques intégrées'],
    description:
      "Habillage mural pour chambre principale. Panneaux MDF rainurés avec niches intégrées et appliques lumineuses. Fabrication sur mesure d'après croquis client.",
    image: '/images/projet-4.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'claustra-separation-bureau',
    title: 'Claustra séparation bureau',
    category: 'claustra',
    categoryLabel: 'Claustra',
    materials: ['MDF laqué anthracite', 'Lames alu anodisé noir', 'Structure acier'],
    description:
      'Claustra de séparation pour espace bureau à domicile. Lames verticales réglables en MDF laqué, structure fixée au sol et au plafond.',
    image: '/images/projet-5.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'borne-accueil-commerce',
    title: "Borne d'accueil commerce",
    category: 'borne-accueil',
    categoryLabel: "Borne d'accueil",
    materials: ['MDF hydrofuge', 'Mélaminé blanc', 'Logo en relief laiton brossé'],
    description:
      "Borne d'accueil sur mesure pour commerce. Fabrication MDF avec habillage mélaminé blanc, logo en relief et espace caisse intégré.",
    image: '/images/projet-6.jpg',
    featured: false,
  },
]

export const categories = [
  { value: 'tous', label: 'Tous les projets' },
  { value: 'salle-de-bain', label: 'Salle de bain' },
  { value: 'entree', label: 'Entrée' },
  { value: 'bibliotheque', label: 'Bibliothèque' },
  { value: 'habillage-mural', label: 'Habillage mural' },
  { value: 'claustra', label: 'Claustra' },
  { value: 'borne-accueil', label: "Borne d'accueil" },
  { value: 'sur-mesure', label: 'Sur mesure' },
]
