import shuffleArray from '../shuffleArray/shuffleArray'

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
    question: 'Quel est le rôle des tiers dans la comptabilité OHADA ?',
    options: shuffleArray([
      'Fournir des informations financières externes',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir des informations financières externes',
  },
  {
    question: 'Quels sont les types de tiers en comptabilité OHADA ?',
    options: shuffleArray([
      'Clients, fournisseurs, et créanciers',
      'Banques et régulateurs',
      'Auditeurs et superviseurs',
    ]),
    answer: 'Clients, fournisseurs, et créanciers',
  },
  {
    question: 'Quel est le rôle des clients en comptabilité OHADA ?',
    options: shuffleArray([
      'Acheter des biens ou services',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Acheter des biens ou services',
  },
  {
    question: 'Quel est le rôle des fournisseurs en comptabilité OHADA ?',
    options: shuffleArray([
      'Fournir des biens ou services',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir des biens ou services',
  },
  {
    question: 'Quel est le rôle des créanciers en comptabilité OHADA ?',
    options: shuffleArray([
      'Fournir des prêts ou crédits',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir des prêts ou crédits',
  },
  {
    question:
      'Quel est le rôle des intermédiaires de commerce en comptabilité OHADA ?',
    options: shuffleArray([
      'Faciliter les transactions commerciales',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Faciliter les transactions commerciales',
  },
  {
    question:
      'Quels sont les types d’intermédiaires de commerce en comptabilité OHADA ?',
    options: shuffleArray([
      'Agents commerciaux, courtiers, et commissionnaires',
      'Banques et régulateurs',
      'Auditeurs et superviseurs',
    ]),
    answer: 'Agents commerciaux, courtiers, et commissionnaires',
  },
  {
    question: 'Quel est le rôle des agents commerciaux en comptabilité OHADA ?',
    options: shuffleArray([
      'Représenter les entreprises dans les transactions commerciales',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Représenter les entreprises dans les transactions commerciales',
  },
  {
    question: 'Quel est le rôle des courtiers en comptabilité OHADA ?',
    options: shuffleArray([
      'Faciliter les transactions entre acheteurs et vendeurs',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Faciliter les transactions entre acheteurs et vendeurs',
  },
  {
    question: 'Quel est le rôle des commissionnaires en comptabilité OHADA ?',
    options: shuffleArray([
      'Agir en leur propre nom pour le compte d’un tiers',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Agir en leur propre nom pour le compte d’un tiers',
  },
  {
    question: 'Quel est le rôle des auditeurs en comptabilité OHADA ?',
    options: shuffleArray([
      'Vérifier la conformité des états financiers',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Vérifier la conformité des états financiers',
  },
  {
    question: 'Quel est le rôle des superviseurs en comptabilité OHADA ?',
    options: shuffleArray([
      'Assurer le respect des normes comptables',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Assurer le respect des normes comptables',
  },
  {
    question: 'Quel est le rôle des banques en comptabilité OHADA ?',
    options: shuffleArray([
      'Fournir des services financiers',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Fournir des services financiers',
  },
  {
    question: 'Quel est le rôle des régulateurs en comptabilité OHADA ?',
    options: shuffleArray([
      'Assurer la stabilité et la transparence des marchés financiers',
      'Réguler les marchés financiers',
      'Superviser les banques',
    ]),
    answer: 'Assurer la stabilité et la transparence des marchés financiers',
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
    question: "Qu'est-ce qu'une SARL ?",
    options: shuffleArray([
      'Société à Responsabilité Limitée',
      'Société Anonyme',
      'Société en Nom Collectif',
    ]),
    answer: 'Société à Responsabilité Limitée',
  },
  {
    question: "Qu'est-ce qu'une SA ?",
    options: shuffleArray([
      'Société Anonyme',
      'Société à Responsabilité Limitée',
      'Société en Nom Collectif',
    ]),
    answer: 'Société Anonyme',
  },
  {
    question: "Qu'est-ce qu'une SNC ?",
    options: shuffleArray([
      'Société en Nom Collectif',
      'Société Anonyme',
      'Société à Responsabilité Limitée',
    ]),
    answer: 'Société en Nom Collectif',
  },
  {
    question: "Qu'est-ce qu'une SCS ?",
    options: shuffleArray([
      'Société en Commandite Simple',
      'Société Anonyme',
      'Société à Responsabilité Limitée',
    ]),
    answer: 'Société en Commandite Simple',
  },
  {
    question: "Qu'est-ce qu'une SCA ?",
    options: shuffleArray([
      'Société en Commandite par Actions',
      'Société Anonyme',
      'Société à Responsabilité Limitée',
    ]),
    answer: 'Société en Commandite par Actions',
  },
  {
    question: "Qu'est-ce qu'une EURL ?",
    options: shuffleArray([
      'Entreprise Unipersonnelle à Responsabilité Limitée',
      'Société Anonyme',
      'Société en Nom Collectif',
    ]),
    answer: 'Entreprise Unipersonnelle à Responsabilité Limitée',
  },
  {
    question: "Qu'est-ce qu'une SAS ?",
    options: shuffleArray([
      'Société par Actions Simplifiée',
      'Société Anonyme',
      'Société à Responsabilité Limitée',
    ]),
    answer: 'Société par Actions Simplifiée',
  },
  {
    question: "Qu'est-ce qu'une SASU ?",
    options: shuffleArray([
      'Société par Actions Simplifiée Unipersonnelle',
      'Société Anonyme',
      'Société à Responsabilité Limitée',
    ]),
    answer: 'Société par Actions Simplifiée Unipersonnelle',
  },
  {
    question: 'Quel est le capital minimum pour constituer une SARL ?',
    options: shuffleArray(['1 euro', '10 000 euros', '100 000 euros']),
    answer: '1 euro',
  },
  {
    question: 'Quel est le capital minimum pour constituer une SA ?',
    options: shuffleArray(['37 000 euros', '1 euro', '10 000 euros']),
    answer: '37 000 euros',
  },
  {
    question: 'Quel est le capital minimum pour constituer une SAS ?',
    options: shuffleArray(['1 euro', '37 000 euros', '10 000 euros']),
    answer: '1 euro',
  },
  {
    question: 'Quel est le capital minimum pour constituer une EURL ?',
    options: shuffleArray(['1 euro', '37 000 euros', '10 000 euros']),
    answer: '1 euro',
  },
  {
    question: 'Quel est le capital minimum pour constituer une SNC ?',
    options: shuffleArray(['Pas de minimum', '1 euro', '37 000 euros']),
    answer: 'Pas de minimum',
  },
  {
    question:
      "Quel est le nombre minimum d'associés pour constituer une SARL ?",
    options: shuffleArray(['2', '1', '7']),
    answer: '2',
  },
  {
    question: "Quel est le nombre minimum d'associés pour constituer une SA ?",
    options: shuffleArray(['7', '2', '1']),
    answer: '7',
  },
  {
    question: "Quel est le nombre minimum d'associés pour constituer une SNC ?",
    options: shuffleArray(['2', '1', '7']),
    answer: '2',
  },
  {
    question: "Quel est le nombre minimum d'associés pour constituer une SCS ?",
    options: shuffleArray(['2', '1', '7']),
    answer: '2',
  },
  {
    question: "Quel est le nombre minimum d'associés pour constituer une SCA ?",
    options: shuffleArray(['4', '2', '7']),
    answer: '4',
  },
  {
    question:
      "Quel est le nombre maximum d'associés pour constituer une SARL ?",
    options: shuffleArray(['100', '50', '200']),
    answer: '100',
  },
  {
    question: "Quel est le nombre maximum d'associés pour constituer une SA ?",
    options: shuffleArray(['Pas de maximum', '100', '200']),
    answer: 'Pas de maximum',
  },
  {
    question: "Quel est le nombre maximum d'associés pour constituer une SAS ?",
    options: shuffleArray(['Pas de maximum', '100', '200']),
    answer: 'Pas de maximum',
  },
  {
    question: "Quel est le nombre maximum d'associés pour constituer une SNC ?",
    options: shuffleArray(['Pas de maximum', '100', '200']),
    answer: 'Pas de maximum',
  },
  {
    question: "Quel est le nombre maximum d'associés pour constituer une SCS ?",
    options: shuffleArray(['Pas de maximum', '100', '200']),
    answer: 'Pas de maximum',
  },
  {
    question: "Quel est le nombre maximum d'associés pour constituer une SCA ?",
    options: shuffleArray(['Pas de maximum', '100', '200']),
    answer: 'Pas de maximum',
  },
  {
    question: 'Quel est le rôle du gérant dans une SARL ?',
    options: shuffleArray([
      'Diriger la société',
      'Superviser les banques',
      'Réguler les marchés financiers',
    ]),
    answer: 'Diriger la société',
  },
  {
    question: 'Quel est le rôle du président dans une SAS ?',
    options: shuffleArray([
      'Diriger la société',
      'Superviser les banques',
      'Réguler les marchés financiers',
    ]),
    answer: 'Diriger la société',
  },
  {
    question: "Quel est le rôle du conseil d'administration dans une SA ?",
    options: shuffleArray([
      'Superviser la gestion de la société',
      'Superviser les banques',
      'Réguler les marchés financiers',
    ]),
    answer: 'Superviser la gestion de la société',
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
]

export default Questions_Comptabilite
