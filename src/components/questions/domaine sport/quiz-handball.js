import shuffleArray from '../shuffleArray/shuffleArray.js'

const Questions_Handball = [
  {
    question: "Quelle est la durée d'un match de handball professionnel?",
    options: shuffleArray(['60 minutes', '45 minutes', '90 minutes']),
    answer: '60 minutes',
  },
  {
    question: 'Combien de joueurs y a-t-il sur le terrain pour chaque équipe?',
    options: shuffleArray(['7 joueurs', '6 joueurs', '8 joueurs']),
    answer: '7 joueurs',
  },
  {
    question:
      "Quelle est la taille réglementaire d'un ballon de handball pour les hommes?",
    options: shuffleArray(['Taille 3', 'Taille 2', 'Taille 1']),
    answer: 'Taille 3',
  },
  {
    question: 'Combien de temps dure une mi-temps en handball?',
    options: shuffleArray(['30 minutes', '20 minutes', '25 minutes']),
    answer: '30 minutes',
  },
  {
    question: "Quelle est la largeur d'un but de handball?",
    options: shuffleArray(['3 mètres', '2 mètres', '4 mètres']),
    answer: '3 mètres',
  },
  {
    question: "Quelle est la hauteur d'un but de handball?",
    options: shuffleArray(['2 mètres', '3 mètres', '2,5 mètres']),
    answer: '2 mètres',
  },
  {
    question: 'Combien de temps dure une exclusion temporaire en handball?',
    options: shuffleArray(['2 minutes', '5 minutes', '3 minutes']),
    answer: '2 minutes',
  },
  {
    question: "Quel est le diamètre d'un ballon de handball pour les femmes?",
    options: shuffleArray(['54-56 cm', '50-52 cm', '58-60 cm']),
    answer: '54-56 cm',
  },
  {
    question: 'Combien de joueurs composent une équipe de handball?',
    options: shuffleArray(['14 joueurs', '12 joueurs', '16 joueurs']),
    answer: '14 joueurs',
  },
  {
    question: 'Quelle est la durée de la pause entre les deux mi-temps?',
    options: shuffleArray(['10 minutes', '15 minutes', '5 minutes']),
    answer: '10 minutes',
  },
  {
    question: 'Quelle est la distance entre le point de penalty et le but?',
    options: shuffleArray(['7 mètres', '9 mètres', '6 mètres']),
    answer: '7 mètres',
  },
  {
    question: 'Combien de temps dure une prolongation en handball?',
    options: shuffleArray(['10 minutes', '15 minutes', '5 minutes']),
    answer: '10 minutes',
  },
  {
    question: 'Combien de temps dure une période de prolongation en handball?',
    options: shuffleArray(['5 minutes', '10 minutes', '15 minutes']),
    answer: '5 minutes',
  },
  {
    question: 'Quelle est la taille du terrain de handball?',
    options: shuffleArray(['40x20 mètres', '50x25 mètres', '30x15 mètres']),
    answer: '40x20 mètres',
  },
  {
    question: 'Combien de temps dure une mi-temps en handball junior?',
    options: shuffleArray(['25 minutes', '20 minutes', '30 minutes']),
    answer: '25 minutes',
  },
  {
    question:
      'Combien de temps dure une période de prolongation en handball junior?',
    options: shuffleArray(['5 minutes', '10 minutes', '15 minutes']),
    answer: '5 minutes',
  },
  {
    question: 'Quelle est la largeur de la zone de but en handball?',
    options: shuffleArray(['6 mètres', '9 mètres', '7 mètres']),
    answer: '6 mètres',
  },
  {
    question: 'Quelle est la hauteur de la zone de but en handball?',
    options: shuffleArray(['2 mètres', '3 mètres', '2,5 mètres']),
    answer: '2 mètres',
  },
  {
    question:
      'Combien de temps dure une exclusion temporaire en handball junior?',
    options: shuffleArray(['2 minutes', '5 minutes', '3 minutes']),
    answer: '2 minutes',
  },
  {
    question:
      'Quelle est la distance entre le point de penalty et le but en handball junior?',
    options: shuffleArray(['7 mètres', '9 mètres', '6 mètres']),
    answer: '7 mètres',
  },
  {
    question: 'Combien de joueurs composent une équipe de handball junior?',
    options: shuffleArray(['14 joueurs', '12 joueurs', '16 joueurs']),
    answer: '14 joueurs',
  },
  {
    question:
      'Quelle est la durée de la pause entre les deux mi-temps en handball junior?',
    options: shuffleArray(['10 minutes', '15 minutes', '5 minutes']),
    answer: '10 minutes',
  },
  {
    question: 'Quelle est la taille du terrain de handball junior?',
    options: shuffleArray(['40x20 mètres', '50x25 mètres', '30x15 mètres']),
    answer: '40x20 mètres',
  },
  {
    question: 'Combien de temps dure une mi-temps en handball féminin?',
    options: shuffleArray(['30 minutes', '25 minutes', '20 minutes']),
    answer: '30 minutes',
  },
  {
    question:
      'Combien de temps dure une période de prolongation en handball féminin?',
    options: shuffleArray(['5 minutes', '10 minutes', '15 minutes']),
    answer: '5 minutes',
  },
  {
    question: 'Quelle est la largeur de la zone de but en handball féminin?',
    options: shuffleArray(['6 mètres', '9 mètres', '7 mètres']),
    answer: '6 mètres',
  },
  {
    question: 'Quelle est la hauteur de la zone de but en handball féminin?',
    options: shuffleArray(['2 mètres', '3 mètres', '2,5 mètres']),
    answer: '2 mètres',
  },
  {
    question:
      'Combien de temps dure une exclusion temporaire en handball féminin?',
    options: shuffleArray(['2 minutes', '5 minutes', '3 minutes']),
    answer: '2 minutes',
  },
  {
    question:
      'Quelle est la distance entre le point de penalty et le but en handball féminin?',
    options: shuffleArray(['7 mètres', '9 mètres', '6 mètres']),
    answer: '7 mètres',
  },
  {
    question: 'Combien de joueurs composent une équipe de handball féminin?',
    options: shuffleArray(['14 joueurs', '12 joueurs', '16 joueurs']),
    answer: '14 joueurs',
  },
  {
    question:
      'Quelle est la durée de la pause entre les deux mi-temps en handball féminin?',
    options: shuffleArray(['10 minutes', '15 minutes', '5 minutes']),
    answer: '10 minutes',
  },
  {
    question: 'Quelle est la taille du terrain de handball féminin?',
    options: shuffleArray(['40x20 mètres', '50x25 mètres', '30x15 mètres']),
    answer: '40x20 mètres',
  },
  {
    question: 'Combien de temps dure une mi-temps en handball masculin?',
    options: shuffleArray(['30 minutes', '25 minutes', '20 minutes']),
    answer: '30 minutes',
  },
  {
    question:
      'Combien de temps dure une période de prolongation en handball masculin?',
    options: shuffleArray(['5 minutes', '10 minutes', '15 minutes']),
    answer: '5 minutes',
  },
  {
    question: 'Quelle est la largeur de la zone de but en handball masculin?',
    options: shuffleArray(['6 mètres', '9 mètres', '7 mètres']),
    answer: '6 mètres',
  },
  {
    question: 'Quelle est la hauteur de la zone de but en handball masculin?',
    options: shuffleArray(['2 mètres', '3 mètres', '2,5 mètres']),
    answer: '2 mètres',
  },
  {
    question:
      'Combien de temps dure une exclusion temporaire en handball masculin?',
    options: shuffleArray(['2 minutes', '5 minutes', '3 minutes']),
    answer: '2 minutes',
  },
  {
    question:
      'Quelle est la distance entre le point de penalty et le but en handball masculin?',
    options: shuffleArray(['7 mètres', '9 mètres', '6 mètres']),
    answer: '7 mètres',
  },
  {
    question: 'Combien de joueurs composent une équipe de handball masculin?',
    options: shuffleArray(['14 joueurs', '12 joueurs', '16 joueurs']),
    answer: '14 joueurs',
  },
  {
    question:
      'Quelle est la durée de la pause entre les deux mi-temps en handball masculin?',
    options: shuffleArray(['10 minutes', '15 minutes', '5 minutes']),
    answer: '10 minutes',
  },
  {
    question: 'Quelle est la taille du terrain de handball masculin?',
    options: shuffleArray(['40x20 mètres', '50x25 mètres', '30x15 mètres']),
    answer: '40x20 mètres',
  },
  {
    question:
      "Quel pays a remporté le plus de titres de champion d'Europe de handball masculin?",
    options: shuffleArray(['France', 'Espagne', 'Allemagne']),
    answer: 'France',
  },
  {
    question:
      "Quel pays a remporté le plus de titres de champion d'Europe de handball féminin?",
    options: shuffleArray(['Norvège', 'Danemark', 'Russie']),
    answer: 'Norvège',
  },
  {
    question:
      'Quel pays a remporté le plus de titres de champion du monde de handball masculin?',
    options: shuffleArray(['France', 'Suède', 'Allemagne']),
    answer: 'France',
  },
  {
    question:
      'Quel pays a remporté le plus de titres de champion du monde de handball féminin?',
    options: shuffleArray(['Russie', 'Norvège', 'Danemark']),
    answer: 'Russie',
  },
  {
    question:
      "Quel pays a remporté le plus de titres de champion d'Amérique de handball masculin?",
    options: shuffleArray(['Brésil', 'Argentine', 'Chili']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le plus de titres de champion d'Amérique de handball féminin?",
    options: shuffleArray(['Brésil', 'Argentine', 'Cuba']),
    answer: 'Brésil',
  },
  {
    question:
      'Quel pays a remporté le plus de titres de champion olympique de handball masculin?',
    options: shuffleArray(['France', 'Russie', 'Croatie']),
    answer: 'France',
  },
  {
    question:
      'Quel pays a remporté le plus de titres de champion olympique de handball féminin?',
    options: shuffleArray(['Norvège', 'Danemark', 'Russie']),
    answer: 'Danemark',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball masculin en 2020?",
    options: shuffleArray(['Espagne', 'Croatie', 'Norvège']),
    answer: 'Espagne',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball féminin en 2020?",
    options: shuffleArray(['Norvège', 'France', 'Danemark']),
    answer: 'Norvège',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball masculin en 2021?',
    options: shuffleArray(['Danemark', 'Suède', 'Espagne']),
    answer: 'Danemark',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball féminin en 2021?',
    options: shuffleArray(['Norvège', 'France', 'Danemark']),
    answer: 'Norvège',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball masculin en 2020?",
    options: shuffleArray(['Argentine', 'Brésil', 'Chili']),
    answer: 'Argentine',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball féminin en 2020?",
    options: shuffleArray(['Brésil', 'Argentine', 'Cuba']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball masculin en 2018?",
    options: shuffleArray(['Espagne', 'Suède', 'France']),
    answer: 'Espagne',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball féminin en 2018?",
    options: shuffleArray(['France', 'Russie', 'Pays-Bas']),
    answer: 'France',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball masculin en 2019?',
    options: shuffleArray(['Danemark', 'Norvège', 'France']),
    answer: 'Danemark',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball féminin en 2019?',
    options: shuffleArray(['Pays-Bas', 'Espagne', 'Russie']),
    answer: 'Pays-Bas',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball masculin en 2018?",
    options: shuffleArray(['Brésil', 'Argentine', 'Chili']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball féminin en 2018?",
    options: shuffleArray(['Brésil', 'Argentine', 'Cuba']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball masculin en 2016?",
    options: shuffleArray(['Allemagne', 'Espagne', 'Croatie']),
    answer: 'Allemagne',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball féminin en 2016?",
    options: shuffleArray(['Norvège', 'Pays-Bas', 'France']),
    answer: 'Norvège',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball masculin en 2017?',
    options: shuffleArray(['France', 'Norvège', 'Slovénie']),
    answer: 'France',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball féminin en 2017?',
    options: shuffleArray(['France', 'Norvège', 'Pays-Bas']),
    answer: 'France',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball masculin en 2016?",
    options: shuffleArray(['Brésil', 'Argentine', 'Chili']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball féminin en 2016?",
    options: shuffleArray(['Brésil', 'Argentine', 'Cuba']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball masculin en 2014?",
    options: shuffleArray(['France', 'Danemark', 'Espagne']),
    answer: 'France',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball féminin en 2014?",
    options: shuffleArray(['Norvège', 'Espagne', 'Suède']),
    answer: 'Norvège',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball masculin en 2015?',
    options: shuffleArray(['France', 'Qatar', 'Pologne']),
    answer: 'France',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball féminin en 2015?',
    options: shuffleArray(['Norvège', 'Pays-Bas', 'Roumanie']),
    answer: 'Norvège',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball masculin en 2014?",
    options: shuffleArray(['Argentine', 'Brésil', 'Chili']),
    answer: 'Argentine',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball féminin en 2014?",
    options: shuffleArray(['Brésil', 'Argentine', 'Cuba']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball masculin en 2012?",
    options: shuffleArray(['Danemark', 'Serbie', 'Croatie']),
    answer: 'Danemark',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball féminin en 2012?",
    options: shuffleArray(['Monténégro', 'Norvège', 'Hongrie']),
    answer: 'Monténégro',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball masculin en 2013?',
    options: shuffleArray(['Espagne', 'Danemark', 'Croatie']),
    answer: 'Espagne',
  },
  {
    question:
      'Quel pays a remporté le championnat du monde de handball féminin en 2013?',
    options: shuffleArray(['Brésil', 'Serbie', 'Danemark']),
    answer: 'Brésil',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball masculin en 2012?",
    options: shuffleArray(['Argentine', 'Brésil', 'Chili']),
    answer: 'Argentine',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Amérique de handball féminin en 2012?",
    options: shuffleArray(['Brésil', 'Argentine', 'Cuba']),
    answer: 'Brésil',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2020?',
    options: shuffleArray([
      'Yahia Omar',
      'Mohamed Mamdouh',
      'Oussama Boughanmi',
    ]),
    answer: 'Yahia Omar',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2019?',
    options: shuffleArray([
      'Mohamed Mamdouh',
      'Yahia Omar',
      'Oussama Boughanmi',
    ]),
    answer: 'Mohamed Mamdouh',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2018?',
    options: shuffleArray([
      'Oussama Boughanmi',
      'Mohamed Mamdouh',
      'Yahia Omar',
    ]),
    answer: 'Oussama Boughanmi',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2017?',
    options: shuffleArray([
      'Mohamed Mamdouh',
      'Yahia Omar',
      'Oussama Boughanmi',
    ]),
    answer: 'Mohamed Mamdouh',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2016?',
    options: shuffleArray([
      'Yahia Omar',
      'Mohamed Mamdouh',
      'Oussama Boughanmi',
    ]),
    answer: 'Yahia Omar',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2015?',
    options: shuffleArray([
      'Oussama Boughanmi',
      'Mohamed Mamdouh',
      'Yahia Omar',
    ]),
    answer: 'Oussama Boughanmi',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2014?',
    options: shuffleArray([
      'Mohamed Mamdouh',
      'Yahia Omar',
      'Oussama Boughanmi',
    ]),
    answer: 'Mohamed Mamdouh',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2013?',
    options: shuffleArray([
      'Yahia Omar',
      'Mohamed Mamdouh',
      'Oussama Boughanmi',
    ]),
    answer: 'Yahia Omar',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2012?',
    options: shuffleArray([
      'Oussama Boughanmi',
      'Mohamed Mamdouh',
      'Yahia Omar',
    ]),
    answer: 'Oussama Boughanmi',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2011?',
    options: shuffleArray([
      'Mohamed Mamdouh',
      'Yahia Omar',
      'Oussama Boughanmi',
    ]),
    answer: 'Mohamed Mamdouh',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2010?',
    options: shuffleArray([
      'Yahia Omar',
      'Mohamed Mamdouh',
      'Oussama Boughanmi',
    ]),
    answer: 'Yahia Omar',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2009?',
    options: shuffleArray([
      'Oussama Boughanmi',
      'Mohamed Mamdouh',
      'Yahia Omar',
    ]),
    answer: 'Oussama Boughanmi',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2008?',
    options: shuffleArray([
      'Mohamed Mamdouh',
      'Yahia Omar',
      'Oussama Boughanmi',
    ]),
    answer: 'Mohamed Mamdouh',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2007?',
    options: shuffleArray([
      'Yahia Omar',
      'Mohamed Mamdouh',
      'Oussama Boughanmi',
    ]),
    answer: 'Yahia Omar',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2006?',
    options: shuffleArray([
      'Oussama Boughanmi',
      'Mohamed Mamdouh',
      'Yahia Omar',
    ]),
    answer: 'Oussama Boughanmi',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2005?',
    options: shuffleArray([
      'Mohamed Mamdouh',
      'Yahia Omar',
      'Oussama Boughanmi',
    ]),
    answer: 'Mohamed Mamdouh',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2004?',
    options: shuffleArray([
      'Yahia Omar',
      'Mohamed Mamdouh',
      'Oussama Boughanmi',
    ]),
    answer: 'Yahia Omar',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2003?',
    options: shuffleArray([
      'Oussama Boughanmi',
      'Mohamed Mamdouh',
      'Yahia Omar',
    ]),
    answer: 'Oussama Boughanmi',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2002?',
    options: shuffleArray([
      'Mohamed Mamdouh',
      'Yahia Omar',
      'Oussama Boughanmi',
    ]),
    answer: 'Mohamed Mamdouh',
  },
  {
    question:
      'Quel joueur africain a remporté le titre de meilleur joueur de handball en 2001?',
    options: shuffleArray([
      'Yahia Omar',
      'Mohamed Mamdouh',
      'Oussama Boughanmi',
    ]),
    answer: 'Yahia Omar',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de handball féminin en 2020?",
    options: shuffleArray(['Norvège', 'Espagne', 'France']),
    answer: 'Norvège',
  },
]

export default Questions_Handball
