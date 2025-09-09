import shuffleArray from '../../../utils/shuffleArray'

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
]

export default Questions_Docom
