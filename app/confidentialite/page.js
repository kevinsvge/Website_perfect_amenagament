import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles — Perfect Aménagement.',
}

const sections = [
  {
    title: 'Responsable du traitement',
    text: "Le responsable du traitement des données personnelles collectées sur ce site est : Perfect Aménagement, EURL — SIRET 953 744 760 00026, représentée par SAUVAGE Frédéric, Z.A des parts d'en bas, 62640 Montigny-en-Gohelle. Contact : contact@perfect-amenagement.fr",
  },
  {
    title: 'Données collectées',
    text: "Ce site collecte uniquement les données que vous saisissez volontairement dans les formulaires de contact et de devis : nom, adresse email, numéro de téléphone, description de votre projet et, le cas échéant, les fichiers (photos, plans) que vous joignez à votre demande. Aucune donnée n'est collectée automatiquement (pas de cookies de tracking, pas d'analytics).",
  },
  {
    title: 'Finalité du traitement',
    text: "Les données collectées sont utilisées exclusivement pour traiter votre demande de contact ou de devis et vous recontacter. Elles ne sont pas utilisées à des fins commerciales, ni transmises à des tiers.",
  },
  {
    title: 'Durée de conservation',
    text: "Vos données sont conservées le temps nécessaire au traitement de votre demande. Elles ne sont pas stockées dans une base de données : chaque soumission de formulaire génère un email directement transmis à Perfect Aménagement.",
  },
  {
    title: 'Cookies',
    text: "Ce site n'utilise pas de cookies de suivi ou de profilage. Aucune donnée de navigation n'est collectée ni transmise à des tiers.",
  },
  {
    title: 'Vos droits',
    text: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à : contact@perfect-amenagement.fr",
  },
  {
    title: 'Sécurité',
    text: "Nous mettons en œuvre les mesures techniques appropriées pour protéger vos données contre tout accès non autorisé, modification ou divulgation.",
  },
  {
    title: 'Contact & réclamation',
    text: "Pour toute question relative à cette politique ou pour exercer vos droits, vous pouvez nous contacter par email à contact@perfect-amenagement.fr ou par téléphone au +33 7 83 23 83 19. En cas de réclamation non résolue, vous pouvez saisir la CNIL (Commission Nationale de l'Informatique et des Libertés) sur www.cnil.fr.",
  },
]

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow='RGPD'
        title='Politique de confidentialité'
        subtitle="Comment nous traitons vos données personnelles."
      />

      <section className='py-20 lg:py-28'>
        <div className='max-w-3xl mx-auto px-6 lg:px-10'>
          <div className='flex flex-col gap-10'>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className='font-serif text-2xl text-bark mb-4 pb-3 border-b border-sand/40'>
                  {section.title}
                </h2>
                <p className='text-bark/70 text-sm leading-relaxed'>{section.text}</p>
              </div>
            ))}
          </div>

          <p className='mt-16 text-xs text-bark/30 text-center'>
            Dernière mise à jour : avril 2025
          </p>
        </div>
      </section>
    </>
  )
}
