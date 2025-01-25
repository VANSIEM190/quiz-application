import shuffleArray from '../shuffleArray/shuffleArray'

const Questions_Docom = [
  {
    question: "Qu'est-ce qu'une facture?",
    options: shuffleArray([
      'Un document commercial',
      'Un document juridique',
      'Un document personnel',
    ]),
    answer: 'Un document commercial',
  },
  {
    question:
      'Quel document est utilisé pour prouver la réception des marchandises?',
    options: shuffleArray(['Bon de livraison', 'Facture', 'Devis']),
    answer: 'Bon de livraison',
  },
  {
    question: 'Quel document est utilisé pour demander un paiement?',
    options: shuffleArray(['Facture', 'Bon de commande', 'Bon de livraison']),
    answer: 'Facture',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une vente avant qu'elle ne soit finalisée?",
    options: shuffleArray(['Devis', 'Facture', 'Bon de livraison']),
    answer: 'Devis',
  },
  {
    question: 'Quel document est utilisé pour commander des marchandises?',
    options: shuffleArray(['Bon de commande', 'Facture', 'Bon de livraison']),
    answer: 'Bon de commande',
  },
  {
    question: 'Quel document est utilisé pour retourner des marchandises?',
    options: shuffleArray(['Bon de retour', 'Facture', 'Bon de commande']),
    answer: 'Bon de retour',
  },
  {
    question:
      "Quel document est utilisé pour accuser réception d'une commande?",
    options: shuffleArray([
      'Accusé de réception',
      'Facture',
      'Bon de livraison',
    ]),
    answer: 'Accusé de réception',
  },
  {
    question:
      'Quel document est utilisé pour détailler les conditions de vente?',
    options: shuffleArray([
      'Conditions générales de vente',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Conditions générales de vente',
  },
  {
    question: 'Quel document est utilisé pour prouver le paiement?',
    options: shuffleArray(['Reçu', 'Facture', 'Bon de commande']),
    answer: 'Reçu',
  },
  {
    question:
      'Quel document est utilisé pour détailler les produits et services vendus?',
    options: shuffleArray(['Facture', 'Bon de commande', 'Bon de livraison']),
    answer: 'Facture',
  },
  {
    question: 'Quel document est utilisé pour demander un devis?',
    options: shuffleArray(['Demande de devis', 'Facture', 'Bon de commande']),
    answer: 'Demande de devis',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'un contrat?",
    options: shuffleArray(['Contrat', 'Facture', 'Bon de commande']),
    answer: 'Contrat',
  },
  {
    question:
      'Quel document est utilisé pour prouver la livraison des marchandises?',
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question:
      'Quel document est utilisé pour détailler les conditions de paiement?',
    options: shuffleArray([
      'Conditions de paiement',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Conditions de paiement',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une garantie?",
    options: shuffleArray([
      'Certificat de garantie',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Certificat de garantie',
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'un paiement?",
    options: shuffleArray(['Reçu', 'Facture', 'Bon de commande']),
    answer: 'Reçu',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance?",
    options: shuffleArray(["Police d'assurance", 'Facture', 'Bon de commande']),
    answer: "Police d'assurance",
  },
  {
    question: "Quel document est utilisé pour prouver la propriété d'un bien?",
    options: shuffleArray(['Titre de propriété', 'Facture', 'Bon de commande']),
    answer: 'Titre de propriété',
  },
  {
    question: "Quel document est utilisé pour détailler les termes d'un prêt?",
    options: shuffleArray(['Contrat de prêt', 'Facture', 'Bon de commande']),
    answer: 'Contrat de prêt',
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'un service?",
    options: shuffleArray(['Bon de réception', 'Facture', 'Bon de commande']),
    answer: 'Bon de réception',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une location?",
    options: shuffleArray([
      'Contrat de location',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de location',
  },
  {
    question:
      "Quel document est utilisé pour prouver la livraison d'un service?",
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une vente?",
    options: shuffleArray(['Contrat de vente', 'Facture', 'Bon de commande']),
    answer: 'Contrat de vente',
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une commande?",
    options: shuffleArray([
      'Accusé de réception',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Accusé de réception',
  },
  {
    question: "Quel document est utilisé pour détailler les termes d'un achat?",
    options: shuffleArray(["Contrat d'achat", 'Facture', 'Bon de commande']),
    answer: "Contrat d'achat",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'un produit?",
    options: shuffleArray(['Bon de réception', 'Facture', 'Bon de commande']),
    answer: 'Bon de réception',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une prestation de service?",
    options: shuffleArray([
      'Contrat de prestation de service',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de prestation de service',
  },
  {
    question:
      "Quel document est utilisé pour prouver la livraison d'un produit?",
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une commande?",
    options: shuffleArray(['Bon de commande', 'Facture', 'Bon de livraison']),
    answer: 'Bon de commande',
  },
  {
    question: "Quel document est utilisé pour prouver la réception d'un bien?",
    options: shuffleArray(['Bon de réception', 'Facture', 'Bon de commande']),
    answer: 'Bon de réception',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une facture?",
    options: shuffleArray([
      'Conditions de facturation',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Conditions de facturation',
  },
  {
    question: "Quel document est utilisé pour prouver la livraison d'un bien?",
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question: "Quel document est utilisé pour détailler les termes d'un devis?",
    options: shuffleArray([
      'Conditions de devis',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Conditions de devis',
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'un service?",
    options: shuffleArray(['Bon de réception', 'Facture', 'Bon de commande']),
    answer: 'Bon de réception',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une commande?",
    options: shuffleArray(['Bon de commande', 'Facture', 'Bon de livraison']),
    answer: 'Bon de commande',
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'un produit?",
    options: shuffleArray(['Bon de réception', 'Facture', 'Bon de commande']),
    answer: 'Bon de réception',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une prestation de service?",
    options: shuffleArray([
      'Contrat de prestation de service',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de prestation de service',
  },
  {
    question:
      "Quel document est utilisé pour prouver la livraison d'un produit?",
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une commande?",
    options: shuffleArray(['Bon de commande', 'Facture', 'Bon de livraison']),
    answer: 'Bon de commande',
  },
  {
    question: 'Quel document est utilisé pour prouver un paiement en banque?',
    options: shuffleArray(['Relevé bancaire', 'Facture', 'Bon de commande']),
    answer: 'Relevé bancaire',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'un crédit documentaire?",
    options: shuffleArray([
      'Crédit documentaire',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Crédit documentaire',
  },
  {
    question:
      "Quel document est utilisé pour prouver le paiement d'un salaire?",
    options: shuffleArray(['Feuille de paie', 'Facture', 'Bon de commande']),
    answer: 'Feuille de paie',
  },
  {
    question: 'Quel document est utilisé pour enregistrer les encaissements?',
    options: shuffleArray([
      "Fiche d'encaissement",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Fiche d'encaissement",
  },
  {
    question: 'Quel document est utilisé pour enregistrer les décaissements?',
    options: shuffleArray([
      'Fiche de décaissement',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Fiche de décaissement',
  },
  {
    question: 'Quel document est utilisé pour ordonner un paiement?',
    options: shuffleArray(['Billet à ordre', 'Facture', 'Bon de commande']),
    answer: 'Billet à ordre',
  },
  {
    question:
      'Quel document est utilisé pour demander un paiement à une date future?',
    options: shuffleArray(['Lettre de change', 'Facture', 'Bon de commande']),
    answer: 'Lettre de change',
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'un paiement en banque?",
    options: shuffleArray(['Relevé bancaire', 'Facture', 'Bon de commande']),
    answer: 'Relevé bancaire',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'un prêt bancaire?",
    options: shuffleArray([
      'Contrat de prêt bancaire',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de prêt bancaire',
  },
  {
    question: "Quel document est utilisé pour prouver la réception d'un prêt?",
    options: shuffleArray([
      'Accusé de réception de prêt',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Accusé de réception de prêt',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une hypothèque?",
    options: shuffleArray([
      "Contrat d'hypothèque",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'hypothèque",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une hypothèque?",
    options: shuffleArray([
      "Accusé de réception d'hypothèque",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'hypothèque",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'un leasing?",
    options: shuffleArray(['Contrat de leasing', 'Facture', 'Bon de commande']),
    answer: 'Contrat de leasing',
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'un leasing?",
    options: shuffleArray([
      'Accusé de réception de leasing',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Accusé de réception de leasing',
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance vie?",
    options: shuffleArray([
      "Contrat d'assurance vie",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance vie",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance vie?",
    options: shuffleArray([
      "Accusé de réception d'assurance vie",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance vie",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance habitation?",
    options: shuffleArray([
      "Contrat d'assurance habitation",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance habitation",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance habitation?",
    options: shuffleArray([
      "Accusé de réception d'assurance habitation",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance habitation",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance automobile?",
    options: shuffleArray([
      "Contrat d'assurance automobile",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance automobile",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance automobile?",
    options: shuffleArray([
      "Accusé de réception d'assurance automobile",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance automobile",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance santé?",
    options: shuffleArray([
      "Contrat d'assurance santé",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance santé",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance santé?",
    options: shuffleArray([
      "Accusé de réception d'assurance santé",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance santé",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance voyage?",
    options: shuffleArray([
      "Contrat d'assurance voyage",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance voyage",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance voyage?",
    options: shuffleArray([
      "Accusé de réception d'assurance voyage",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance voyage",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance responsabilité civile?",
    options: shuffleArray([
      "Contrat d'assurance responsabilité civile",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance responsabilité civile",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance responsabilité civile?",
    options: shuffleArray([
      "Accusé de réception d'assurance responsabilité civile",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance responsabilité civile",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance professionnelle?",
    options: shuffleArray([
      "Contrat d'assurance professionnelle",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance professionnelle",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance professionnelle?",
    options: shuffleArray([
      "Accusé de réception d'assurance professionnelle",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance professionnelle",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance scolaire?",
    options: shuffleArray([
      "Contrat d'assurance scolaire",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance scolaire",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance scolaire?",
    options: shuffleArray([
      "Accusé de réception d'assurance scolaire",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance scolaire",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance animaux?",
    options: shuffleArray([
      "Contrat d'assurance animaux",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance animaux",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance animaux?",
    options: shuffleArray([
      "Accusé de réception d'assurance animaux",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance animaux",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance emprunteur?",
    options: shuffleArray([
      "Contrat d'assurance emprunteur",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance emprunteur",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance emprunteur?",
    options: shuffleArray([
      "Accusé de réception d'assurance emprunteur",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance emprunteur",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance obsèques?",
    options: shuffleArray([
      "Contrat d'assurance obsèques",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance obsèques",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance obsèques?",
    options: shuffleArray([
      "Accusé de réception d'assurance obsèques",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance obsèques",
  },
  {
    question:
      "Quel document est utilisé pour détailler les termes d'une assurance dépendance?",
    options: shuffleArray([
      "Contrat d'assurance dépendance",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Contrat d'assurance dépendance",
  },
  {
    question:
      "Quel document est utilisé pour prouver la réception d'une assurance dépendance?",
    options: shuffleArray([
      "Accusé de réception d'assurance dépendance",
      'Facture',
      'Bon de commande',
    ]),
    answer: "Accusé de réception d'assurance dépendance",
  },
  {
    question:
      'Quel document est utilisé par un courtier pour enregistrer une transaction?',
    options: shuffleArray(['Note de courtage', 'Facture', 'Bon de commande']),
    answer: 'Note de courtage',
  },
  {
    question:
      'Quel document est utilisé par un commissionnaire pour prouver une vente?',
    options: shuffleArray([
      'Contrat de commission',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de commission',
  },
  {
    question:
      "Quel document est utilisé par un courtier pour détailler les termes d'une transaction?",
    options: shuffleArray([
      'Contrat de courtage',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de courtage',
  },
  {
    question:
      'Quel document est utilisé par un commissionnaire pour enregistrer une commande?',
    options: shuffleArray(['Bon de commande', 'Facture', 'Bon de livraison']),
    answer: 'Bon de commande',
  },
  {
    question:
      "Quel document est utilisé par un courtier pour prouver la réception d'une commission?",
    options: shuffleArray(['Reçu de commission', 'Facture', 'Bon de commande']),
    answer: 'Reçu de commission',
  },
  {
    question:
      "Quel document est utilisé par un commissionnaire pour détailler les termes d'une commission?",
    options: shuffleArray([
      'Contrat de commission',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de commission',
  },
  {
    question:
      "Quel document est utilisé par un courtier pour prouver la livraison d'un service?",
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question:
      "Quel document est utilisé par un commissionnaire pour prouver la réception d'une marchandise?",
    options: shuffleArray(['Bon de réception', 'Facture', 'Bon de commande']),
    answer: 'Bon de réception',
  },
  {
    question:
      'Quel document est utilisé par un courtier pour demander une commission?',
    options: shuffleArray([
      'Demande de commission',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Demande de commission',
  },
  {
    question:
      "Quel document est utilisé par un commissionnaire pour prouver la réception d'un paiement?",
    options: shuffleArray(['Reçu de paiement', 'Facture', 'Bon de commande']),
    answer: 'Reçu de paiement',
  },
  {
    question:
      "Quel document est utilisé par un courtier pour détailler les termes d'un contrat?",
    options: shuffleArray([
      'Contrat de courtage',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de courtage',
  },
  {
    question:
      "Quel document est utilisé par un commissionnaire pour prouver la livraison d'une marchandise?",
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question:
      'Quel document est utilisé par un courtier pour enregistrer une vente?',
    options: shuffleArray(['Note de courtage', 'Facture', 'Bon de commande']),
    answer: 'Note de courtage',
  },
  {
    question:
      'Quel document est utilisé par un commissionnaire pour demander un paiement?',
    options: shuffleArray([
      'Demande de paiement',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Demande de paiement',
  },
  {
    question:
      "Quel document est utilisé par un courtier pour prouver la réception d'une marchandise?",
    options: shuffleArray(['Bon de réception', 'Facture', 'Bon de commande']),
    answer: 'Bon de réception',
  },
  {
    question:
      "Quel document est utilisé par un commissionnaire pour détailler les termes d'une vente?",
    options: shuffleArray([
      'Contrat de commission',
      'Facture',
      'Bon de commande',
    ]),
    answer: 'Contrat de commission',
  },
  {
    question:
      "Quel document est utilisé par un courtier pour prouver la réception d'un paiement?",
    options: shuffleArray(['Reçu de paiement', 'Facture', 'Bon de commande']),
    answer: 'Reçu de paiement',
  },
  {
    question:
      'Quel document est utilisé par un commissionnaire pour enregistrer une transaction?',
    options: shuffleArray(['Note de commission', 'Facture', 'Bon de commande']),
    answer: 'Note de commission',
  },
  {
    question:
      "Quel document est utilisé par un courtier pour prouver la livraison d'une marchandise?",
    options: shuffleArray(['Bon de livraison', 'Facture', 'Bon de commande']),
    answer: 'Bon de livraison',
  },
  {
    question:
      "Quel document est utilisé par un commissionnaire pour prouver la réception d'une commission?",
    options: shuffleArray(['Reçu de commission', 'Facture', 'Bon de commande']),
    answer: 'Reçu de commission',
  },
  {
    question: "Quel document est utilisé pour enregistrer l'entrée de stock?",
    options: shuffleArray(['Bon d’entrée', 'Facture', 'Bon de commande']),
    answer: 'Bon d’entrée',
  },
  {
    question: 'Quel document est utilisé pour enregistrer la sortie de stock?',
    options: shuffleArray(['Bon de sortie', 'Facture', 'Bon de commande']),
    answer: 'Bon de sortie',
  },
  {
    question: 'Quel document est utilisé pour suivre les mouvements de stock?',
    options: shuffleArray(['Fiche de stock', 'Facture', 'Bon de commande']),
    answer: 'Fiche de stock',
  },
]

export default Questions_Docom
