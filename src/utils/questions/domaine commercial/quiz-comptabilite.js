import shuffleArray from '../../../utils/shuffleArray'

const Questions_Comptabilite = [
  {
    question: "Qu'est-ce que le système OHADA ?",
    options: shuffleArray([
      "Organisation pour l'Harmonisation en Afrique du Droit des Affaires",
      "Organisation des Hommes d'Affaires Africains",
      'Organisation des Hautes Autorités de Droit Africain',
    ]),
    answer:
      "Organisation pour l'Harmonisation en Afrique du Droit des Affaires",
  },
  {
    question: "Quel est l'objectif principal du système OHADA ?",
    options: shuffleArray([
      'Harmoniser le droit des affaires en Afrique',
      'Créer une monnaie unique en Afrique',
      'Promouvoir le commerce international',
    ]),
    answer: 'Harmoniser le droit des affaires en Afrique',
  },
  {
    question: 'Quel est le rôle du SYSCOHADA ?',
    options: shuffleArray([
      'Uniformiser les pratiques comptables en Afrique',
      'Réguler les marchés financiers africains',
      'Superviser les banques africaines',
    ]),
    answer: 'Uniformiser les pratiques comptables en Afrique',
  },
  {
    question: 'Quel est le plan comptable utilisé dans le système OHADA ?',
    options: shuffleArray(['Le SYSCOHADA', 'Le GAAP', 'Les IFRS']),
    answer: 'Le SYSCOHADA',
  },
  {
    question:
      "Quel est le rôle du Conseil Permanent de la Comptabilité au sein de l'OHADA ?",
    options: shuffleArray([
      'Élaborer les normes comptables',
      'Superviser les audits',
      'Former les comptables',
    ]),
    answer: 'Élaborer les normes comptables',
  },
  {
    question: "Quelle est la devise de l'OHADA ?",
    options: shuffleArray([
      'Un droit pour un marché',
      'Un marché pour tous',
      'Un droit pour tous',
    ]),
    answer: 'Un droit pour un marché',
  },
  {
    question: "Quel est le siège de l'OHADA ?",
    options: shuffleArray([
      'Yaoundé, Cameroun',
      "Abidjan, Côte d'Ivoire",
      'Dakar, Sénégal',
    ]),
    answer: 'Yaoundé, Cameroun',
  },
  {
    question: "Combien de pays sont membres de l'OHADA ?",
    options: shuffleArray(['17', '15', '20']),
    answer: '17',
  },
  {
    question:
      "Quel est le rôle de la Cour Commune de Justice et d'Arbitrage (CCJA) ?",
    options: shuffleArray([
      "Assurer l'interprétation et l'application uniforme du droit OHADA",
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: "Assurer l'interprétation et l'application uniforme du droit OHADA",
  },
  {
    question: 'Quel est le document de base du SYSCOHADA ?',
    options: shuffleArray([
      'Le Plan Comptable Général',
      'Le Code des Obligations',
      'Le Code de Commerce',
    ]),
    answer: 'Le Plan Comptable Général',
  },
  {
    question: "Quel est l'objectif du Plan Comptable Général OHADA ?",
    options: shuffleArray([
      'Harmoniser les pratiques comptables',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Harmoniser les pratiques comptables',
  },
  {
    question: 'Quel est le rôle des normes comptables OHADA ?',
    options: shuffleArray([
      'Assurer la transparence et la comparabilité des états financiers',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Assurer la transparence et la comparabilité des états financiers',
  },
  {
    question: 'Quel est le rôle des états financiers selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière',
  },
  {
    question: "Quel est le rôle de l'audit dans le système OHADA ?",
    options: shuffleArray([
      'Vérifier la conformité des états financiers',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Vérifier la conformité des états financiers',
  },
  {
    question:
      'Quel est le rôle des commissaires aux comptes dans le système OHADA ?',
    options: shuffleArray([
      'Certifier les états financiers',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Certifier les états financiers',
  },
  {
    question: 'Quel est le rôle des experts-comptables dans le système OHADA ?',
    options: shuffleArray([
      'Tenir la comptabilité des entreprises',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Tenir la comptabilité des entreprises',
  },
  {
    question: 'Quel est le rôle des normes IFRS dans le système OHADA ?',
    options: shuffleArray([
      'Compléter les normes OHADA',
      'Remplacer les normes OHADA',
      'Réguler les marchés financiers',
    ]),
    answer: 'Compléter les normes OHADA',
  },
  {
    question:
      'Quel est le rôle des états financiers consolidés selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière du groupe',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière du groupe',
  },
  {
    question:
      'Quel est le rôle des états financiers intermédiaires selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière à une date intermédiaire',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer:
      'Fournir une image fidèle de la situation financière à une date intermédiaire',
  },
  {
    question:
      'Quel est le rôle des états financiers annuels selon le SYSCOHADA ?',
    options: shuffleArray([
      "Fournir une image fidèle de la situation financière à la fin de l'exercice",
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer:
      "Fournir une image fidèle de la situation financière à la fin de l'exercice",
  },
  {
    question:
      'Quel est le rôle des états financiers prévisionnels selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière future',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière future',
  },
  {
    question:
      'Quel est le rôle des états financiers consolidés selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière du groupe',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière du groupe',
  },
  {
    question:
      'Quel est le rôle des états financiers intermédiaires selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière à une date intermédiaire',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer:
      'Fournir une image fidèle de la situation financière à une date intermédiaire',
  },
  {
    question:
      'Quel est le rôle des états financiers annuels selon le SYSCOHADA ?',
    options: shuffleArray([
      "Fournir une image fidèle de la situation financière à la fin de l'exercice",
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer:
      "Fournir une image fidèle de la situation financière à la fin de l'exercice",
  },
  {
    question:
      'Quel est le rôle des états financiers prévisionnels selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière future',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière future',
  },
  {
    question:
      'Quel est le rôle des états financiers consolidés selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière du groupe',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière du groupe',
  },
  {
    question:
      'Quel est le rôle des états financiers intermédiaires selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière à une date intermédiaire',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer:
      'Fournir une image fidèle de la situation financière à une date intermédiaire',
  },
  {
    question:
      'Quel est le rôle des états financiers annuels selon le SYSCOHADA ?',
    options: shuffleArray([
      "Fournir une image fidèle de la situation financière à la fin de l'exercice",
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer:
      "Fournir une image fidèle de la situation financière à la fin de l'exercice",
  },
  {
    question:
      'Quel est le rôle des états financiers prévisionnels selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière future',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière future',
  },
  {
    question:
      'Quel est le rôle des états financiers consolidés selon le SYSCOHADA ?',
    options: shuffleArray([
      'Fournir une image fidèle de la situation financière du groupe',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir une image fidèle de la situation financière du groupe',
  },
]

export default Questions_Comptabilite
