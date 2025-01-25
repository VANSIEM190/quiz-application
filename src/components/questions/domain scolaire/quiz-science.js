import shuffleArray from '../shuffleArray/shuffleArray'

const Questions_Science = [
  {
    question: "Quelle est la formule chimique de l'eau?",
    options: shuffleArray(['H2O', 'CO2', 'O2'], 'H2O'),
    answer: 'H2O',
  },
  {
    question: "Quel est l'élément chimique avec le symbole 'O'?",
    options: shuffleArray(['Oxygène', 'Or', 'Osmium'], 'Oxygène'),
    answer: 'Oxygène',
  },
  {
    question: "Quelle est la charge d'un proton?",
    options: shuffleArray(['Positive', 'Négative', 'Neutre'], 'Positive'),
    answer: 'Positive',
  },
  {
    question: 'Quelle est la vitesse de la lumière?',
    options: shuffleArray(
      ['300 000 km/s', '150 000 km/s', '450 000 km/s'],
      '300 000 km/s'
    ),
    answer: '300 000 km/s',
  },
  {
    question: "Quel est le pH de l'eau pure?",
    options: shuffleArray(['7', '5', '9'], '7'),
    answer: '7',
  },
  {
    question: 'Quel est le symbole chimique du sodium?',
    options: shuffleArray(['Na', 'S', 'N'], 'Na'),
    answer: 'Na',
  },
  {
    question: "Quelle est la loi de Newton qui décrit l'inertie?",
    options: shuffleArray(
      ['Première loi', 'Deuxième loi', 'Troisième loi'],
      'Première loi'
    ),
    answer: 'Première loi',
  },
  {
    question: "Quelle est l'unité de mesure de la force?",
    options: shuffleArray(['Newton', 'Joule', 'Watt'], 'Newton'),
    answer: 'Newton',
  },
  {
    question: "Quel est l'élément chimique le plus léger?",
    options: shuffleArray(['Hydrogène', 'Hélium', 'Lithium'], 'Hydrogène'),
    answer: 'Hydrogène',
  },
  {
    question: 'Quelle est la formule chimique du dioxyde de carbone?',
    options: shuffleArray(['CO2', 'CO', 'C2O'], 'CO2'),
    answer: 'CO2',
  },
  {
    question: "Quel est l'élément chimique avec le symbole 'Fe'?",
    options: shuffleArray(['Fer', 'Fluor', 'Francium'], 'Fer'),
    answer: 'Fer',
  },
  {
    question: "Quelle est la charge d'un électron?",
    options: shuffleArray(['Négative', 'Positive', 'Neutre'], 'Négative'),
    answer: 'Négative',
  },
  {
    question: 'Quelle est la constante gravitationnelle?',
    options: shuffleArray(
      ['9.8 m/s²', '6.67 x 10^-11 N(m/kg)²', '3 x 10^8 m/s'],
      '6.67 x 10^-11 N(m/kg)²'
    ),
    answer: '6.67 x 10^-11 N(m/kg)²',
  },
  {
    question: "Quel est le pH d'une solution acide?",
    options: shuffleArray(['Moins de 7', '7', 'Plus de 7'], 'Moins de 7'),
    answer: 'Moins de 7',
  },
  {
    question: 'Quel est le symbole chimique du potassium?',
    options: shuffleArray(['K', 'P', 'Pt'], 'K'),
    answer: 'K',
  },
  {
    question: 'Quelle est la deuxième loi de Newton?',
    options: shuffleArray(['F = ma', 'E = mc²', 'V = IR'], 'F = ma'),
    answer: 'F = ma',
  },
  {
    question: "Quelle est l'unité de mesure de l'énergie?",
    options: shuffleArray(['Joule', 'Newton', 'Watt'], 'Joule'),
    answer: 'Joule',
  },
  {
    question: "Quel est l'élément chimique le plus abondant dans l'univers?",
    options: shuffleArray(['Hydrogène', 'Hélium', 'Oxygène'], 'Hydrogène'),
    answer: 'Hydrogène',
  },
  {
    question: "Quelle est la formule chimique de l'ammoniac?",
    options: shuffleArray(['NH3', 'NO3', 'N2H4'], 'NH3'),
    answer: 'NH3',
  },
  {
    question: "Quel est l'élément chimique avec le symbole 'Cu'?",
    options: shuffleArray(['Cuivre', 'Carbone', 'Calcium'], 'Cuivre'),
    answer: 'Cuivre',
  },
  {
    question: "Quelle est la charge d'un neutron?",
    options: shuffleArray(['Neutre', 'Positive', 'Négative'], 'Neutre'),
    answer: 'Neutre',
  },
  {
    question: "Quelle est la vitesse du son dans l'air?",
    options: shuffleArray(['343 m/s', '300 m/s', '400 m/s'], '343 m/s'),
    answer: '343 m/s',
  },
  {
    question: "Quel est le pH d'une solution basique?",
    options: shuffleArray(['Plus de 7', '7', 'Moins de 7'], 'Plus de 7'),
    answer: 'Plus de 7',
  },
  {
    question: 'Quel est le symbole chimique du calcium?',
    options: shuffleArray(['Ca', 'C', 'Cl'], 'Ca'),
    answer: 'Ca',
  },
  {
    question: 'Quelle est la troisième loi de Newton?',
    options: shuffleArray(
      ['Action = Réaction', 'F = ma', 'E = mc²'],
      'Action = Réaction'
    ),
    answer: 'Action = Réaction',
  },
  {
    question: "Quelle est l'unité de mesure de la puissance?",
    options: shuffleArray(['Watt', 'Joule', 'Newton'], 'Watt'),
    answer: 'Watt',
  },
  {
    question:
      "Quel est l'élément chimique le plus abondant dans la croûte terrestre?",
    options: shuffleArray(['Oxygène', 'Silicium', 'Aluminium'], 'Oxygène'),
    answer: 'Oxygène',
  },
  {
    question: 'Quelle est la formule chimique du méthane?',
    options: shuffleArray(['CH4', 'C2H6', 'C3H8'], 'CH4'),
    answer: 'CH4',
  },
  {
    question: "Quel est l'élément chimique avec le symbole 'Ag'?",
    options: shuffleArray(['Argent', 'Or', 'Aluminium'], 'Argent'),
    answer: 'Argent',
  },
  {
    question: "Quelle est la charge d'un ion chlorure?",
    options: shuffleArray(['Négative', 'Positive', 'Neutre'], 'Négative'),
    answer: 'Négative',
  },
  {
    question:
      'Quelle est la partie de la plante responsable de la photosynthèse?',
    options: shuffleArray(['Feuille', 'Racine', 'Tige'], 'Feuille'),
    answer: 'Feuille',
  },
  {
    question:
      'Quel est le processus par lequel les plantes fabriquent leur nourriture?',
    options: shuffleArray(
      ['Photosynthèse', 'Respiration', 'Transpiration'],
      'Photosynthèse'
    ),
    answer: 'Photosynthèse',
  },
  {
    question:
      "Quelle est la structure qui transporte l'eau et les nutriments des racines aux feuilles?",
    options: shuffleArray(['Xylème', 'Phloème', 'Épiderme'], 'Xylème'),
    answer: 'Xylème',
  },
  {
    question: 'Quel est le pigment principal impliqué dans la photosynthèse?',
    options: shuffleArray(
      ['Chlorophylle', 'Carotène', 'Xanthophylle'],
      'Chlorophylle'
    ),
    answer: 'Chlorophylle',
  },
  {
    question: 'Quelle est la partie de la fleur qui produit le pollen?',
    options: shuffleArray(['Étamine', 'Pistil', 'Sépale'], 'Étamine'),
    answer: 'Étamine',
  },
  {
    question:
      "Quel est le processus par lequel les plantes perdent de l'eau par les feuilles?",
    options: shuffleArray(
      ['Transpiration', 'Photosynthèse', 'Respiration'],
      'Transpiration'
    ),
    answer: 'Transpiration',
  },
  {
    question:
      'Quelle est la partie de la plante qui ancre la plante dans le sol?',
    options: shuffleArray(['Racine', 'Tige', 'Feuille'], 'Racine'),
    answer: 'Racine',
  },
  {
    question: 'Quel est le fruit le plus consommé dans le monde?',
    options: shuffleArray(['Banane', 'Pomme', 'Orange'], 'Banane'),
    answer: 'Banane',
  },
  {
    question: 'Quelle est la plus grande fleur du monde?',
    options: shuffleArray(['Rafflesia', 'Tournesol', 'Rose'], 'Rafflesia'),
    answer: 'Rafflesia',
  },
  {
    question: "Quel est l'arbre le plus haut du monde?",
    options: shuffleArray(['Séquoia', 'Chêne', 'Pin'], 'Séquoia'),
    answer: 'Séquoia',
  },
  {
    question: "Quel est l'animal terrestre le plus rapide?",
    options: shuffleArray(['Guépard', 'Lion', 'Antilope'], 'Guépard'),
    answer: 'Guépard',
  },
  {
    question: 'Quel est le plus grand mammifère marin?',
    options: shuffleArray(
      ['Baleine bleue', 'Orque', 'Dauphin'],
      'Baleine bleue'
    ),
    answer: 'Baleine bleue',
  },
  {
    question: "Quel est l'oiseau qui ne peut pas voler?",
    options: shuffleArray(['Autruche', 'Aigle', 'Pigeon'], 'Autruche'),
    answer: 'Autruche',
  },
  {
    question: 'Quel est le plus grand reptile vivant?',
    options: shuffleArray(
      ['Crocodile marin', 'Anaconda', 'Varan de Komodo'],
      'Crocodile marin'
    ),
    answer: 'Crocodile marin',
  },
  {
    question: "Quel est l'insecte le plus rapide?",
    options: shuffleArray(['Libellule', 'Abeille', 'Fourmi'], 'Libellule'),
    answer: 'Libellule',
  },
  {
    question: 'Quel est le plus grand oiseau vivant?',
    options: shuffleArray(['Autruche', 'Aigle', 'Condor'], 'Autruche'),
    answer: 'Autruche',
  },
  {
    question: 'Quel est le plus petit mammifère?',
    options: shuffleArray(
      ['Musaraigne étrusque', 'Chauve-souris', 'Souris'],
      'Musaraigne étrusque'
    ),
    answer: 'Musaraigne étrusque',
  },
  {
    question: "Quel est l'animal le plus intelligent?",
    options: shuffleArray(['Dauphin', 'Chimpanzé', 'Éléphant'], 'Dauphin'),
    answer: 'Dauphin',
  },
  {
    question: "Quel est l'animal qui a la plus longue durée de vie?",
    options: shuffleArray(
      ['Tortue des Galápagos', 'Éléphant', 'Baleine'],
      'Tortue des Galápagos'
    ),
    answer: 'Tortue des Galápagos',
  },
  {
    question:
      "Quel est l'animal qui peut changer de couleur pour se camoufler?",
    options: shuffleArray(['Caméléon', 'Pieuvre', 'Serpent'], 'Caméléon'),
    answer: 'Caméléon',
  },
  {
    question: "Quel est l'animal qui peut régénérer ses membres?",
    options: shuffleArray(
      ['Étoile de mer', 'Crabe', 'Lézard'],
      'Étoile de mer'
    ),
    answer: 'Étoile de mer',
  },
  {
    question: "Quel est l'animal qui a le plus de dents?",
    options: shuffleArray(['Escargot', 'Requin', 'Crocodile'], 'Escargot'),
    answer: 'Escargot',
  },
  {
    question: "Quel est l'animal qui peut survivre sans eau pendant des mois?",
    options: shuffleArray(['Chameau', 'Kangourou', 'Serpent'], 'Chameau'),
    answer: 'Chameau',
  },
  {
    question: "Quel est l'animal qui peut voler en arrière?",
    options: shuffleArray(['Colibri', 'Aigle', 'Mouette'], 'Colibri'),
    answer: 'Colibri',
  },
  {
    question: "Quel est l'animal qui peut dormir debout?",
    options: shuffleArray(['Cheval', 'Chien', 'Chat'], 'Cheval'),
    answer: 'Cheval',
  },
  {
    question:
      "Quel est l'animal qui peut vivre le plus longtemps sans nourriture?",
    options: shuffleArray(['Crocodile', 'Serpent', 'Tortue'], 'Crocodile'),
    answer: 'Crocodile',
  },
  {
    question:
      "Quel est l'animal qui a le plus grand cerveau par rapport à sa taille?",
    options: shuffleArray(['Fourmi', 'Dauphin', 'Éléphant'], 'Fourmi'),
    answer: 'Fourmi',
  },
  {
    question:
      "Quel est l'animal qui peut voir dans toutes les directions en même temps?",
    options: shuffleArray(['Libellule', 'Chouette', 'Caméléon'], 'Libellule'),
    answer: 'Libellule',
  },
  {
    question:
      "Quel est l'animal qui peut vivre dans les conditions les plus extrêmes?",
    options: shuffleArray(['Tardigrade', 'Pingouin', 'Chameau'], 'Tardigrade'),
    answer: 'Tardigrade',
  },
  {
    question: "Quel est l'animal qui peut produire de la lumière?",
    options: shuffleArray(['Luciole', 'Méduse', 'Poisson'], 'Luciole'),
    answer: 'Luciole',
  },
  {
    question: "Combien d'os y a-t-il dans le corps humain adulte?",
    options: shuffleArray(['206', '208', '210'], '206'),
    answer: '206',
  },
  {
    question: 'Quel est le plus grand organe du corps humain?',
    options: shuffleArray(['Peau', 'Foie', 'Cœur'], 'Peau'),
    answer: 'Peau',
  },
  {
    question: 'Combien de chambres a le cœur humain?',
    options: shuffleArray(['4', '2', '3'], '4'),
    answer: '4',
  },
  {
    question: 'Quel est le plus long os du corps humain?',
    options: shuffleArray(['Fémur', 'Tibia', 'Humérus'], 'Fémur'),
    answer: 'Fémur',
  },
  {
    question: 'Quel est le muscle principal utilisé pour la respiration?',
    options: shuffleArray(['Diaphragme', 'Cœur', 'Abdominaux'], 'Diaphragme'),
    answer: 'Diaphragme',
  },
  {
    question: 'Combien de paires de côtes a un humain?',
    options: shuffleArray(['12', '10', '14'], '12'),
    answer: '12',
  },
  {
    question: 'Quel est le plus petit os du corps humain?',
    options: shuffleArray(['Étrier', 'Scaphoïde', 'Coccyx'], 'Étrier'),
    answer: 'Étrier',
  },
  {
    question: 'Quel est le principal composant des ongles?',
    options: shuffleArray(['Kératine', 'Collagène', 'Élastine'], 'Kératine'),
    answer: 'Kératine',
  },
  {
    question: 'Combien de dents a un adulte normalement?',
    options: shuffleArray(['32', '30', '28'], '32'),
    answer: '32',
  },
  {
    question: 'Quel est le plus grand muscle du corps humain?',
    options: shuffleArray(
      ['Grand fessier', 'Quadriceps', 'Triceps'],
      'Grand fessier'
    ),
    answer: 'Grand fessier',
  },
  {
    question: "Quel organe est responsable de la production d'insuline?",
    options: shuffleArray(['Pancréas', 'Foie', 'Reins'], 'Pancréas'),
    answer: 'Pancréas',
  },
  {
    question: 'Combien de vertèbres compose la colonne vertébrale humaine?',
    options: shuffleArray(['33', '30', '35'], '33'),
    answer: '33',
  },
  {
    question: 'Quel est le principal organe du système nerveux central?',
    options: shuffleArray(['Cerveau', 'Moelle épinière', 'Cœur'], 'Cerveau'),
    answer: 'Cerveau',
  },
  {
    question: 'Quel est le rôle principal des globules rouges?',
    options: shuffleArray(
      ["Transporter l'oxygène", 'Combattre les infections', 'Coaguler le sang'],
      "Transporter l'oxygène"
    ),
    answer: "Transporter l'oxygène",
  },
  {
    question: "Quel est le nom de l'os de la cuisse?",
    options: shuffleArray(['Fémur', 'Tibia', 'Fibula'], 'Fémur'),
    answer: 'Fémur',
  },
  {
    question: "Quel organe filtre le sang pour produire de l'urine?",
    options: shuffleArray(['Reins', 'Foie', 'Pancréas'], 'Reins'),
    answer: 'Reins',
  },
  {
    question: 'Quel est le principal organe de la digestion?',
    options: shuffleArray(['Estomac', 'Intestin grêle', 'Foie'], 'Estomac'),
    answer: 'Estomac',
  },
  {
    question: 'Quel est le rôle principal des globules blancs?',
    options: shuffleArray(
      ['Combattre les infections', "Transporter l'oxygène', 'Coaguler le sang"],
      'Combattre les infections'
    ),
    answer: 'Combattre les infections',
  },
  {
    question: "Quel est le nom de l'os du bras supérieur?",
    options: shuffleArray(['Humérus', 'Radius', 'Ulna'], 'Humérus'),
    answer: 'Humérus',
  },
  {
    question: 'Quel est le rôle principal du foie?',
    options: shuffleArray(
      ['Détoxifier le sang', "Produire de l'insuline', 'Filtrer l'urine"],
      'Détoxifier le sang'
    ),
    answer: 'Détoxifier le sang',
  },
  {
    question: 'Quel est le rôle principal des mitochondries?',
    options: shuffleArray(
      [
        "Produire de l'énergie",
        'Synthétiser des protéines',
        'Stocker des lipides',
      ],
      "Produire de l'énergie"
    ),
    answer: "Produire de l'énergie",
  },
  {
    question: 'Quel est le processus par lequel les cellules se divisent?',
    options: shuffleArray(['Mitose', 'Méiose', 'Cytokinèse'], 'Mitose'),
    answer: 'Mitose',
  },
  {
    question: 'Quel est le rôle principal du ribosome?',
    options: shuffleArray(
      [
        'Synthétiser des protéines',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Synthétiser des protéines'
    ),
    answer: 'Synthétiser des protéines',
  },
  {
    question: 'Quel est le rôle principal du noyau cellulaire?',
    options: shuffleArray(
      ["Contenir l'ADN", "Produire de l'énergie", 'Décomposer des déchets'],
      "Contenir l'ADN"
    ),
    answer: "Contenir l'ADN",
  },
  {
    question: 'Quel est le rôle principal du réticulum endoplasmique?',
    options: shuffleArray(
      [
        'Synthétiser des protéines',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Synthétiser des protéines'
    ),
    answer: 'Synthétiser des protéines',
  },
  {
    question: 'Quel est le rôle principal des lysosomes?',
    options: shuffleArray(
      [
        'Décomposer des déchets',
        "Produire de l'énergie",
        'Synthétiser des protéines',
      ],
      'Décomposer des déchets'
    ),
    answer: 'Décomposer des déchets',
  },
  {
    question: 'Quel est le rôle principal des chloroplastes?',
    options: shuffleArray(
      ['Photosynthèse', 'Respiration', 'Transpiration'],
      'Photosynthèse'
    ),
    answer: 'Photosynthèse',
  },
  {
    question: 'Quel est le rôle principal de la vacuole?',
    options: shuffleArray(
      [
        'Stocker des substances',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Stocker des substances'
    ),
    answer: 'Stocker des substances',
  },
  {
    question: 'Quel est le rôle principal de la membrane plasmique?',
    options: shuffleArray(
      [
        'Réguler les échanges',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Réguler les échanges'
    ),
    answer: 'Réguler les échanges',
  },
  {
    question: "Quel est le rôle principal de l'appareil de Golgi?",
    options: shuffleArray(
      [
        'Modifier et trier les protéines',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Modifier et trier les protéines'
    ),
    answer: 'Modifier et trier les protéines',
  },
  {
    question: 'Quel est le rôle principal des centrioles?',
    options: shuffleArray(
      [
        'Organiser la division cellulaire',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Organiser la division cellulaire'
    ),
    answer: 'Organiser la division cellulaire',
  },
  {
    question: 'Quel est le rôle principal des peroxysomes?',
    options: shuffleArray(
      [
        'Détoxifier les substances',
        "Produire de l'énergie",
        'Synthétiser des protéines',
      ],
      'Détoxifier les substances'
    ),
    answer: 'Détoxifier les substances',
  },
  {
    question: 'Quel est le rôle principal des microtubules?',
    options: shuffleArray(
      [
        'Maintenir la forme cellulaire',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Maintenir la forme cellulaire'
    ),
    answer: 'Maintenir la forme cellulaire',
  },
  {
    question: 'Quel est le rôle principal des microfilaments?',
    options: shuffleArray(
      [
        'Maintenir la forme cellulaire',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Maintenir la forme cellulaire'
    ),
    answer: 'Maintenir la forme cellulaire',
  },
  {
    question: 'Quel est le rôle principal des filaments intermédiaires?',
    options: shuffleArray(
      [
        'Maintenir la forme cellulaire',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Maintenir la forme cellulaire'
    ),
    answer: 'Maintenir la forme cellulaire',
  },
  {
    question: 'Quel est le rôle principal des plasmodesmes?',
    options: shuffleArray(
      [
        'Permettre la communication cellulaire',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Permettre la communication cellulaire'
    ),
    answer: 'Permettre la communication cellulaire',
  },
  {
    question: 'Quel est le rôle principal des jonctions serrées?',
    options: shuffleArray(
      [
        'Empêcher les fuites entre les cellules',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Empêcher les fuites entre les cellules'
    ),
    answer: 'Empêcher les fuites entre les cellules',
  },
  {
    question: 'Quel est le rôle principal des desmosomes?',
    options: shuffleArray(
      [
        'Ancrer les cellules ensemble',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Ancrer les cellules ensemble'
    ),
    answer: 'Ancrer les cellules ensemble',
  },
  {
    question: 'Quel est le rôle principal des jonctions communicantes?',
    options: shuffleArray(
      [
        'Permettre la communication cellulaire',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Permettre la communication cellulaire'
    ),
    answer: 'Permettre la communication cellulaire',
  },
  {
    question: 'Quel est le rôle principal des cils et flagelles?',
    options: shuffleArray(
      [
        'Permettre le mouvement cellulaire',
        "Produire de l'énergie",
        'Décomposer des déchets',
      ],
      'Permettre le mouvement cellulaire'
    ),
    answer: 'Permettre le mouvement cellulaire',
  },
]

export default Questions_Science
