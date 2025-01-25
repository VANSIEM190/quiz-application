import shuffleArray from '../shuffleArray/shuffleArray.js'

const Questions_Volleyball = [
  {
    question: 'Quelle est la hauteur du filet pour les hommes en volleyball?',
    options: shuffleArray(['2,43 mètres', '2,24 mètres', '2,50 mètres']),
    answer: '2,43 mètres',
  },
  {
    question: 'Combien de joueurs y a-t-il dans une équipe de volleyball?',
    options: shuffleArray(['6', '7', '5']),
    answer: '6',
  },
  {
    question: "Quelle est la taille réglementaire d'un terrain de volleyball?",
    options: shuffleArray(['18m x 9m', '20m x 10m', '16m x 8m']),
    answer: '18m x 9m',
  },
  {
    question:
      'Combien de sets faut-il gagner pour remporter un match de volleyball?',
    options: shuffleArray(['3', '2', '4']),
    answer: '3',
  },
  {
    question: "Quelle est la durée maximale d'un set en volleyball?",
    options: shuffleArray([
      "Il n'y a pas de durée maximale",
      '30 minutes',
      '60 minutes',
    ]),
    answer: "Il n'y a pas de durée maximale",
  },
  {
    question: 'Combien de points faut-il pour gagner un set en volleyball?',
    options: shuffleArray(['25', '21', '30']),
    answer: '25',
  },
  {
    question: 'Quel est le rôle du libero en volleyball?',
    options: shuffleArray([
      'Spécialiste de la défense',
      'Attaquant principal',
      'Serveur',
    ]),
    answer: 'Spécialiste de la défense',
  },
  {
    question:
      'Combien de touches sont autorisées par équipe avant de renvoyer le ballon?',
    options: shuffleArray(['3', '2', '4']),
    answer: '3',
  },
  {
    question: 'Quelle est la largeur du filet en volleyball?',
    options: shuffleArray(['1 mètre', '1,5 mètres', '2 mètres']),
    answer: '1 mètre',
  },
  {
    question: 'Quelle est la hauteur du filet pour les femmes en volleyball?',
    options: shuffleArray(['2,24 mètres', '2,43 mètres', '2,30 mètres']),
    answer: '2,24 mètres',
  },
  {
    question: "Quel est le diamètre d'un ballon de volleyball?",
    options: shuffleArray(['65-67 cm', '60-62 cm', '70-72 cm']),
    answer: '65-67 cm',
  },
  {
    question:
      'Combien de points faut-il pour gagner un set décisif (5ème set) en volleyball?',
    options: shuffleArray(['15', '25', '20']),
    answer: '15',
  },
  {
    question: "Quelle est la durée maximale d'un temps mort en volleyball?",
    options: shuffleArray(['30 secondes', '1 minute', '2 minutes']),
    answer: '30 secondes',
  },
  {
    question: 'Combien de temps morts sont autorisés par set en volleyball?',
    options: shuffleArray(['2', '3', '1']),
    answer: '2',
  },
  {
    question: "Quelle est la hauteur maximale d'un service en volleyball?",
    options: shuffleArray([
      "Il n'y a pas de hauteur maximale",
      '3 mètres',
      '2,5 mètres',
    ]),
    answer: "Il n'y a pas de hauteur maximale",
  },
  {
    question: "Quel est le poids d'un ballon de volleyball?",
    options: shuffleArray([
      '260-280 grammes',
      '300-320 grammes',
      '240-260 grammes',
    ]),
    answer: '260-280 grammes',
  },
  {
    question: 'Combien de remplacements sont autorisés par set en volleyball?',
    options: shuffleArray(['6', '8', '10']),
    answer: '6',
  },
  {
    question:
      'Quelle est la largeur des lignes de fond de court en volleyball?',
    options: shuffleArray(['5 cm', '10 cm', '8 cm']),
    answer: '5 cm',
  },
  {
    question: 'Quel est le rôle du passeur en volleyball?',
    options: shuffleArray(['Distribuer le jeu', 'Attaquer', 'Défendre']),
    answer: 'Distribuer le jeu',
  },
  {
    question:
      'Combien de points faut-il pour gagner un set en volleyball de plage?',
    options: shuffleArray(['21', '25', '15']),
    answer: '21',
  },
  {
    question: 'Combien de joueurs composent une équipe de volleyball de plage?',
    options: shuffleArray(['2', '4', '6']),
    answer: '2',
  },
  {
    question:
      "Quelle est la taille réglementaire d'un terrain de volleyball de plage?",
    options: shuffleArray(['16m x 8m', '18m x 9m', '14m x 7m']),
    answer: '16m x 8m',
  },
  {
    question:
      'Quelle est la hauteur du filet pour les hommes en volleyball de plage?',
    options: shuffleArray(['2,43 mètres', '2,24 mètres', '2,50 mètres']),
    answer: '2,43 mètres',
  },
  {
    question:
      'Quelle est la hauteur du filet pour les femmes en volleyball de plage?',
    options: shuffleArray(['2,24 mètres', '2,43 mètres', '2,30 mètres']),
    answer: '2,24 mètres',
  },
  {
    question:
      'Combien de sets faut-il gagner pour remporter un match de volleyball de plage?',
    options: shuffleArray(['2', '3', '1']),
    answer: '2',
  },
  {
    question: "Quelle est la durée maximale d'un set en volleyball de plage?",
    options: shuffleArray([
      "Il n'y a pas de durée maximale",
      '30 minutes',
      '60 minutes',
    ]),
    answer: "Il n'y a pas de durée maximale",
  },
  {
    question:
      'Combien de points faut-il pour gagner un set décisif (3ème set) en volleyball de plage?',
    options: shuffleArray(['15', '21', '25']),
    answer: '15',
  },
  {
    question:
      'Quelle est la largeur des lignes de fond de court en volleyball de plage?',
    options: shuffleArray(['5 cm', '10 cm', '8 cm']),
    answer: '5 cm',
  },
  {
    question:
      'Combien de touches sont autorisées par équipe avant de renvoyer le ballon en volleyball de plage?',
    options: shuffleArray(['3', '2', '4']),
    answer: '3',
  },
  {
    question: 'Quel est le rôle du bloqueur en volleyball de plage?',
    options: shuffleArray([
      'Bloquer les attaques adverses',
      'Servir',
      'Défendre',
    ]),
    answer: 'Bloquer les attaques adverses',
  },
  {
    question:
      "Quelle est la durée maximale d'un temps mort en volleyball de plage?",
    options: shuffleArray(['30 secondes', '1 minute', '2 minutes']),
    answer: '30 secondes',
  },
  {
    question:
      'Combien de temps morts sont autorisés par set en volleyball de plage?',
    options: shuffleArray(['1', '2', '3']),
    answer: '1',
  },
  {
    question: "Quel est le diamètre d'un ballon de volleyball de plage?",
    options: shuffleArray(['66-68 cm', '65-67 cm', '70-72 cm']),
    answer: '66-68 cm',
  },
  {
    question: "Quel est le poids d'un ballon de volleyball de plage?",
    options: shuffleArray([
      '260-280 grammes',
      '300-320 grammes',
      '240-260 grammes',
    ]),
    answer: '260-280 grammes',
  },
  {
    question:
      'Combien de remplacements sont autorisés par set en volleyball de plage?',
    options: shuffleArray(["Il n'y a pas de remplacements", '6', '8']),
    answer: "Il n'y a pas de remplacements",
  },
  {
    question:
      'Quelle est la largeur des lignes de côté en volleyball de plage?',
    options: shuffleArray(['5 cm', '10 cm', '8 cm']),
    answer: '5 cm',
  },
  {
    question: 'Quel est le rôle du serveur en volleyball de plage?',
    options: shuffleArray(['Mettre le ballon en jeu', 'Attaquer', 'Défendre']),
    answer: 'Mettre le ballon en jeu',
  },
  {
    question:
      'Combien de points faut-il pour gagner un set en volleyball assis?',
    options: shuffleArray(['25', '21', '15']),
    answer: '25',
  },
  {
    question: 'Combien de joueurs composent une équipe de volleyball assis?',
    options: shuffleArray(['6', '4', '2']),
    answer: '6',
  },
  {
    question:
      'Quelle est la hauteur du filet pour les hommes en volleyball assis?',
    options: shuffleArray(['1,15 mètres', '1,05 mètres', '1,25 mètres']),
    answer: '1,15 mètres',
  },
  {
    question:
      'Quelle est la hauteur du filet pour les femmes en volleyball assis?',
    options: shuffleArray(['1,05 mètres', '1,15 mètres', '1,25 mètres']),
    answer: '1,05 mètres',
  },
  {
    question:
      "Quel pays africain a remporté le plus de titres de champion d'Afrique de volleyball masculin?",
    options: shuffleArray(['Tunisie', 'Égypte', 'Cameroun']),
    answer: 'Tunisie',
  },
  {
    question:
      "Quel pays européen a remporté le plus de titres de champion d'Europe de volleyball masculin?",
    options: shuffleArray(['Russie', 'Italie', 'Serbie']),
    answer: 'Russie',
  },
  {
    question:
      "Quel pays africain a remporté le plus de titres de champion d'Afrique de volleyball féminin?",
    options: shuffleArray(['Kenya', 'Cameroun', 'Égypte']),
    answer: 'Kenya',
  },
  {
    question:
      "Quel pays européen a remporté le plus de titres de champion d'Europe de volleyball féminin?",
    options: shuffleArray(['Russie', 'Italie', 'Serbie']),
    answer: 'Russie',
  },
  {
    question:
      "En quelle année l'équipe masculine de volleyball de Tunisie a-t-elle remporté son premier titre de champion d'Afrique?",
    options: shuffleArray(['1967', '1971', '1979']),
    answer: '1967',
  },
  {
    question:
      "En quelle année l'équipe féminine de volleyball du Kenya a-t-elle remporté son premier titre de champion d'Afrique?",
    options: shuffleArray(['1991', '1993', '1995']),
    answer: '1991',
  },
  {
    question:
      "Quel pays a accueilli le championnat d'Afrique de volleyball masculin en 2019?",
    options: shuffleArray(['Tunisie', 'Égypte', 'Cameroun']),
    answer: 'Tunisie',
  },
  {
    question:
      "Quel pays a accueilli le championnat d'Europe de volleyball masculin en 2019?",
    options: shuffleArray(['France', 'Belgique', 'Pays-Bas']),
    answer: 'France',
  },
  {
    question:
      "Quel pays a accueilli le championnat d'Afrique de volleyball féminin en 2019?",
    options: shuffleArray(['Égypte', 'Kenya', 'Cameroun']),
    answer: 'Égypte',
  },
  {
    question:
      "Quel pays a accueilli le championnat d'Europe de volleyball féminin en 2019?",
    options: shuffleArray(['Turquie', 'Pologne', 'Hongrie']),
    answer: 'Turquie',
  },
  {
    question:
      "Combien de fois l'équipe masculine de volleyball de Russie a-t-elle remporté le championnat d'Europe?",
    options: shuffleArray(['14', '12', '10']),
    answer: '14',
  },
  {
    question:
      "Combien de fois l'équipe féminine de volleyball de Russie a-t-elle remporté le championnat d'Europe?",
    options: shuffleArray(['19', '21', '17']),
    answer: '19',
  },
  {
    question:
      "Combien de fois l'équipe masculine de volleyball de Tunisie a-t-elle remporté le championnat d'Afrique?",
    options: shuffleArray(['10', '11', '9']),
    answer: '10',
  },
  {
    question:
      "Combien de fois l'équipe féminine de volleyball du Kenya a-t-elle remporté le championnat d'Afrique?",
    options: shuffleArray(['9', '10', '11']),
    answer: '10',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball masculin en 2017?",
    options: shuffleArray(['Tunisie', 'Égypte', 'Cameroun']),
    answer: 'Tunisie',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball masculin en 2017?",
    options: shuffleArray(['Russie', 'Serbie', 'France']),
    answer: 'Russie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball féminin en 2017?",
    options: shuffleArray(['Cameroun', 'Kenya', 'Égypte']),
    answer: 'Cameroun',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball féminin en 2017?",
    options: shuffleArray(['Serbie', 'Italie', 'Pays-Bas']),
    answer: 'Serbie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball masculin en 2015?",
    options: shuffleArray(['Égypte', 'Tunisie', 'Algérie']),
    answer: 'Égypte',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball masculin en 2015?",
    options: shuffleArray(['France', 'Slovénie', 'Italie']),
    answer: 'France',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball féminin en 2015?",
    options: shuffleArray(['Kenya', 'Cameroun', 'Algérie']),
    answer: 'Kenya',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball féminin en 2015?",
    options: shuffleArray(['Russie', 'Pays-Bas', 'Serbie']),
    answer: 'Russie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball masculin en 2013?",
    options: shuffleArray(['Tunisie', 'Égypte', 'Algérie']),
    answer: 'Tunisie',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball masculin en 2013?",
    options: shuffleArray(['Russie', 'Italie', 'Serbie']),
    answer: 'Russie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball féminin en 2013?",
    options: shuffleArray(['Kenya', 'Cameroun', 'Algérie']),
    answer: 'Kenya',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball féminin en 2013?",
    options: shuffleArray(['Russie', 'Allemagne', 'Serbie']),
    answer: 'Russie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball masculin en 2011?",
    options: shuffleArray(['Égypte', 'Tunisie', 'Cameroun']),
    answer: 'Égypte',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball masculin en 2011?",
    options: shuffleArray(['Serbie', 'Italie', 'Russie']),
    answer: 'Serbie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball féminin en 2011?",
    options: shuffleArray(['Algérie', 'Kenya', 'Cameroun']),
    answer: 'Algérie',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball féminin en 2011?",
    options: shuffleArray(['Serbie', 'Allemagne', 'Turquie']),
    answer: 'Serbie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball masculin en 2009?",
    options: shuffleArray(['Tunisie', 'Égypte', 'Algérie']),
    answer: 'Égypte',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball masculin en 2009?",
    options: shuffleArray(['Pologne', 'France', 'Italie']),
    answer: 'Pologne',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball féminin en 2009?",
    options: shuffleArray(['Algérie', 'Kenya', 'Cameroun']),
    answer: 'Algérie',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball féminin en 2009?",
    options: shuffleArray(['Italie', 'Pays-Bas', 'Pologne']),
    answer: 'Italie',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball masculin en 2007?",
    options: shuffleArray(['Égypte', 'Tunisie', 'Cameroun']),
    answer: 'Égypte',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball masculin en 2007?",
    options: shuffleArray(['Espagne', 'Russie', 'Serbie']),
    answer: 'Espagne',
  },
  {
    question:
      "Quel pays africain a remporté le championnat d'Afrique de volleyball féminin en 2007?",
    options: shuffleArray(['Kenya', 'Algérie', 'Cameroun']),
    answer: 'Kenya',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball féminin en 2007?",
    options: shuffleArray(['Italie', 'Serbie', 'Russie']),
    answer: 'Italie',
  },
  {
    question:
      'Quel pays américain a remporté le plus de titres de champion de volleyball masculin?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Argentine']),
    answer: 'Brésil',
  },
  {
    question:
      'Quel pays américain a remporté le plus de titres de champion de volleyball féminin?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Cuba']),
    answer: 'Cuba',
  },
  {
    question:
      "En quelle année l'équipe masculine de volleyball des États-Unis a-t-elle remporté son premier titre olympique?",
    options: shuffleArray(['1984', '1988', '1992']),
    answer: '1984',
  },
  {
    question:
      "En quelle année l'équipe féminine de volleyball du Brésil a-t-elle remporté son premier titre olympique?",
    options: shuffleArray(['2008', '2012', '2016']),
    answer: '2008',
  },
  {
    question:
      'Quel pays américain a remporté le championnat du monde de volleyball masculin en 2018?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Argentine']),
    answer: 'États-Unis',
  },
  {
    question:
      'Quel pays américain a remporté le championnat du monde de volleyball féminin en 2018?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Cuba']),
    answer: 'États-Unis',
  },
  {
    question:
      "Combien de fois l'équipe masculine de volleyball du Brésil a-t-elle remporté le championnat du monde?",
    options: shuffleArray(['3', '4', '5']),
    answer: '3',
  },
  {
    question:
      "Combien de fois l'équipe féminine de volleyball de Cuba a-t-elle remporté le championnat du monde?",
    options: shuffleArray(['3', '4', '5']),
    answer: '3',
  },
  {
    question:
      'Quel pays américain a remporté le championnat panaméricain de volleyball masculin en 2019?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Argentine']),
    answer: 'Argentine',
  },
  {
    question:
      'Quel pays américain a remporté le championnat panaméricain de volleyball féminin en 2019?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Cuba']),
    answer: 'États-Unis',
  },
  {
    question:
      "Combien de fois l'équipe masculine de volleyball des États-Unis a-t-elle remporté le championnat panaméricain?",
    options: shuffleArray(['8', '9', '10']),
    answer: '9',
  },
  {
    question:
      "Combien de fois l'équipe féminine de volleyball du Brésil a-t-elle remporté le championnat panaméricain?",
    options: shuffleArray(['7', '8', '9']),
    answer: '8',
  },
  {
    question:
      'Quel pays américain a remporté le championnat sud-américain de volleyball masculin en 2019?',
    options: shuffleArray(['Brésil', 'Argentine', 'Venezuela']),
    answer: 'Brésil',
  },
  {
    question:
      'Quel pays américain a remporté le championnat sud-américain de volleyball féminin en 2019?',
    options: shuffleArray(['Brésil', 'Argentine', 'Colombie']),
    answer: 'Brésil',
  },
  {
    question:
      "Combien de fois l'équipe masculine de volleyball du Brésil a-t-elle remporté le championnat sud-américain?",
    options: shuffleArray(['32', '33', '34']),
    answer: '32',
  },
  {
    question:
      "Combien de fois l'équipe féminine de volleyball du Brésil a-t-elle remporté le championnat sud-américain?",
    options: shuffleArray(['21', '22', '23']),
    answer: '22',
  },
  {
    question:
      'Quel pays américain a remporté la Ligue mondiale de volleyball masculin en 2017?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Canada']),
    answer: 'Brésil',
  },
  {
    question:
      'Quel pays américain a remporté le Grand Prix mondial de volleyball féminin en 2017?',
    options: shuffleArray(['Brésil', 'États-Unis', 'Dominique']),
    answer: 'Brésil',
  },
  {
    question:
      "Combien de fois l'équipe masculine de volleyball du Brésil a-t-elle remporté la Ligue mondiale?",
    options: shuffleArray(['9', '10', '11']),
    answer: '9',
  },
  {
    question:
      "Combien de fois l'équipe féminine de volleyball du Brésil a-t-elle remporté le Grand Prix mondial?",
    options: shuffleArray(['12', '13', '14']),
    answer: '12',
  },
  {
    question:
      "Quel pays européen a remporté le championnat d'Europe de volleyball féminin en 2021?",
    options: shuffleArray(['Italie', 'Serbie', 'Turquie']),
    answer: 'Italie',
  },
]

export default Questions_Volleyball
