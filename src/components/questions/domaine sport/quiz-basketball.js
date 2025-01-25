import shuffleArray from '../shuffleArray/shuffleArray'

const Questions_Basketball = [
  {
    question: "Quel est le diamètre d'un panier de basketball en pouces?",
    options: shuffleArray(['18 pouces', '20 pouces', '22 pouces']),
    answer: '18 pouces',
  },
  {
    question: 'Combien de joueurs y a-t-il dans une équipe de basketball?',
    options: shuffleArray(['5 joueurs', '6 joueurs', '7 joueurs']),
    answer: '5 joueurs',
  },
  {
    question: "Quelle est la hauteur d'un panier de basketball en pieds?",
    options: shuffleArray(['10 pieds', '12 pieds', '8 pieds']),
    answer: '10 pieds',
  },
  {
    question: 'Combien de points vaut un tir à trois points?',
    options: shuffleArray(['3 points', '2 points', '1 point']),
    answer: '3 points',
  },
  {
    question:
      'Quel joueur détient le record du plus grand nombre de points marqués en un seul match NBA?',
    options: shuffleArray([
      'Wilt Chamberlain',
      'Michael Jordan',
      'LeBron James',
    ]),
    answer: 'Wilt Chamberlain',
  },
  {
    question: 'Combien de temps dure un quart-temps en NBA?',
    options: shuffleArray(['12 minutes', '10 minutes', '15 minutes']),
    answer: '12 minutes',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Los Angeles?",
    options: shuffleArray(['Lakers', 'Clippers', 'Warriors']),
    answer: 'Lakers',
  },
  {
    question: "Quel joueur est surnommé 'King James'?",
    options: shuffleArray(['LeBron James', 'Kevin Durant', 'Stephen Curry']),
    answer: 'LeBron James',
  },
  {
    question: 'Combien de titres NBA Michael Jordan a-t-il remportés?',
    options: shuffleArray(['6 titres', '5 titres', '7 titres']),
    answer: '6 titres',
  },
  {
    question: 'Quel est le nom du trophée remis au champion NBA?',
    options: shuffleArray([
      "Trophée Larry O'Brien",
      'Trophée Bill Russell',
      'Trophée Michael Jordan',
    ]),
    answer: "Trophée Larry O'Brien",
  },
  {
    question: "Quel joueur a été surnommé 'The Black Mamba'?",
    options: shuffleArray(['Kobe Bryant', "Shaquille O'Neal", 'Tim Duncan']),
    answer: 'Kobe Bryant',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Chicago?",
    options: shuffleArray(['Bulls', 'Bears', 'Cubs']),
    answer: 'Bulls',
  },
  {
    question: 'Combien de points vaut un lancer franc?',
    options: shuffleArray(['1 point', '2 points', '3 points']),
    answer: '1 point',
  },
  {
    question: "Quel joueur a été surnommé 'The Big Fundamental'?",
    options: shuffleArray(['Tim Duncan', 'Karl Malone', 'Dirk Nowitzki']),
    answer: 'Tim Duncan',
  },
  {
    question:
      'Quel joueur détient le record du plus grand nombre de passes décisives en carrière NBA?',
    options: shuffleArray(['John Stockton', 'Magic Johnson', 'Jason Kidd']),
    answer: 'John Stockton',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Miami?",
    options: shuffleArray(['Heat', 'Magic', 'Hawks']),
    answer: 'Heat',
  },
  {
    question: 'Combien de titres NBA les Boston Celtics ont-ils remportés?',
    options: shuffleArray(['17 titres', '16 titres', '18 titres']),
    answer: '17 titres',
  },
  {
    question: "Quel joueur a été surnommé 'The Diesel'?",
    options: shuffleArray([
      "Shaquille O'Neal",
      'Charles Barkley',
      'Patrick Ewing',
    ]),
    answer: "Shaquille O'Neal",
  },
  {
    question: "Quel est le nom de l'équipe de basketball de New York?",
    options: shuffleArray(['Knicks', 'Nets', 'Raptors']),
    answer: 'Knicks',
  },
  {
    question: 'Combien de points vaut un tir à mi-distance?',
    options: shuffleArray(['2 points', '3 points', '1 point']),
    answer: '2 points',
  },
  {
    question:
      'Quel joueur détient le record du plus grand nombre de rebonds en carrière NBA?',
    options: shuffleArray([
      'Wilt Chamberlain',
      'Bill Russell',
      'Kareem Abdul-Jabbar',
    ]),
    answer: 'Wilt Chamberlain',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de San Antonio?",
    options: shuffleArray(['Spurs', 'Rockets', 'Mavericks']),
    answer: 'Spurs',
  },
  {
    question: 'Combien de titres NBA les Los Angeles Lakers ont-ils remportés?',
    options: shuffleArray(['17 titres', '16 titres', '18 titres']),
    answer: '17 titres',
  },
  {
    question: "Quel joueur a été surnommé 'The Answer'?",
    options: shuffleArray(['Allen Iverson', 'Dwyane Wade', 'Chris Paul']),
    answer: 'Allen Iverson',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Toronto?",
    options: shuffleArray(['Raptors', 'Grizzlies', 'Hornets']),
    answer: 'Raptors',
  },
  {
    question: 'Combien de points vaut un tir réussi après une faute?',
    options: shuffleArray(['1 point', '2 points', '3 points']),
    answer: '1 point',
  },
  {
    question:
      'Quel joueur détient le record du plus grand nombre de contres en carrière NBA?',
    options: shuffleArray([
      'Hakeem Olajuwon',
      'Dikembe Mutombo',
      'David Robinson',
    ]),
    answer: 'Hakeem Olajuwon',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Dallas?",
    options: shuffleArray(['Mavericks', 'Spurs', 'Rockets']),
    answer: 'Mavericks',
  },
  {
    question:
      'Combien de titres NBA les Golden State Warriors ont-ils remportés?',
    options: shuffleArray(['6 titres', '5 titres', '7 titres']),
    answer: '6 titres',
  },
  {
    question: "Quel joueur a été surnommé 'The Greek Freak'?",
    options: shuffleArray([
      'Giannis Antetokounmpo',
      'Nikola Jokic',
      'Kristaps Porzingis',
    ]),
    answer: 'Giannis Antetokounmpo',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Houston?",
    options: shuffleArray(['Rockets', 'Spurs', 'Mavericks']),
    answer: 'Rockets',
  },
  {
    question:
      'Combien de points vaut un tir réussi après une faute et un lancer franc?',
    options: shuffleArray(['3 points', '2 points', '4 points']),
    answer: '3 points',
  },
  {
    question:
      'Quel joueur détient le record du plus grand nombre de minutes jouées en carrière NBA?',
    options: shuffleArray([
      'Kareem Abdul-Jabbar',
      'Karl Malone',
      'LeBron James',
    ]),
    answer: 'Kareem Abdul-Jabbar',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Philadelphia?",
    options: shuffleArray(['76ers', 'Eagles', 'Flyers']),
    answer: '76ers',
  },
  {
    question: 'Combien de titres NBA les San Antonio Spurs ont-ils remportés?',
    options: shuffleArray(['5 titres', '4 titres', '6 titres']),
    answer: '5 titres',
  },
  {
    question: "Quel joueur a été surnommé 'The Claw'?",
    options: shuffleArray(['Kawhi Leonard', 'Paul George', 'Jimmy Butler']),
    answer: 'Kawhi Leonard',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Denver?",
    options: shuffleArray(['Nuggets', 'Jazz', 'Suns']),
    answer: 'Nuggets',
  },
  {
    question:
      'Combien de points vaut un tir réussi après une faute et deux lancers francs?',
    options: shuffleArray(['4 points', '3 points', '5 points']),
    answer: '4 points',
  },
  {
    question:
      'Quel joueur détient le record du plus grand nombre de triples-doubles en carrière NBA?',
    options: shuffleArray([
      'Russell Westbrook',
      'Oscar Robertson',
      'Magic Johnson',
    ]),
    answer: 'Russell Westbrook',
  },
  {
    question: "Quel est le nom de l'équipe de basketball de Milwaukee?",
    options: shuffleArray(['Bucks', 'Bulls', 'Pacers']),
    answer: 'Bucks',
  },
  {
    question:
      "Quel pays africain a remporté le premier championnat d'AfroBasket?",
    options: shuffleArray(['Egypte', 'Nigeria', 'Angola']),
    answer: 'Egypte',
  },
  {
    question: 'Quel joueur sénégalais a été le premier à jouer en NBA?',
    options: shuffleArray(["Makhtar N'Diaye", 'Gorgui Dieng', 'DeSagana Diop']),
    answer: "Makhtar N'Diaye",
  },
  {
    question: "Quel pays a remporté le plus de titres d'AfroBasket?",
    options: shuffleArray(['Angola', 'Tunisie', 'Nigeria']),
    answer: 'Angola',
  },
  {
    question: 'Quel joueur nigérian a été le premier choix de la draft NBA?',
    options: shuffleArray([
      'Hakeem Olajuwon',
      'Michael Olowokandi',
      'Giannis Antetokounmpo',
    ]),
    answer: 'Hakeem Olajuwon',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball en 2017?",
    options: shuffleArray(['Slovénie', 'Espagne', 'Serbie']),
    answer: 'Slovénie',
  },
  {
    question:
      'Quel joueur français a remporté le titre de MVP des finales NBA?',
    options: shuffleArray(['Tony Parker', 'Rudy Gobert', 'Boris Diaw']),
    answer: 'Tony Parker',
  },
  {
    question: "Quel pays a remporté le plus de titres de l'EuroBasket?",
    options: shuffleArray(['URSS', 'Espagne', 'Yougoslavie']),
    answer: 'URSS',
  },
  {
    question: 'Quel joueur espagnol a été le premier à jouer en NBA?',
    options: shuffleArray(['Fernando Martín', 'Pau Gasol', 'Ricky Rubio']),
    answer: 'Fernando Martín',
  },
  {
    question:
      "Quel pays a remporté le championnat d'AfroBasket féminin en 2019?",
    options: shuffleArray(['Nigeria', 'Sénégal', 'Mali']),
    answer: 'Nigeria',
  },
  {
    question: "Quel joueur grec est surnommé 'The Greek Freak'?",
    options: shuffleArray([
      'Giannis Antetokounmpo',
      'Kostas Antetokounmpo',
      'Thanasis Antetokounmpo',
    ]),
    answer: 'Giannis Antetokounmpo',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball féminin en 2019?",
    options: shuffleArray(['Espagne', 'France', 'Serbie']),
    answer: 'Espagne',
  },
  {
    question: 'Quel joueur français a été le premier choix de la draft NBA?',
    options: shuffleArray([
      'Tony Parker',
      'Nicolas Batum',
      'Michael Olowokandi',
    ]),
    answer: 'Michael Olowokandi',
  },
  {
    question: "Quel pays a remporté le championnat d'AfroBasket en 2015?",
    options: shuffleArray(['Nigeria', 'Angola', 'Tunisie']),
    answer: 'Nigeria',
  },
  {
    question:
      'Quel joueur espagnol a remporté le titre de Rookie of the Year en NBA?',
    options: shuffleArray(['Pau Gasol', 'Ricky Rubio', 'Marc Gasol']),
    answer: 'Pau Gasol',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball en 2013?",
    options: shuffleArray(['France', 'Espagne', 'Lituanie']),
    answer: 'France',
  },
  {
    question:
      'Quel joueur serbe a remporté le titre de MVP de la saison régulière en NBA?',
    options: shuffleArray(['Nikola Jokic', 'Vlade Divac', 'Peja Stojakovic']),
    answer: 'Nikola Jokic',
  },
  {
    question: "Quel pays a remporté le championnat d'AfroBasket en 2017?",
    options: shuffleArray(['Tunisie', 'Nigeria', 'Sénégal']),
    answer: 'Tunisie',
  },
  {
    question: 'Quel joueur italien a remporté le titre de MVP des finales NBA?',
    options: shuffleArray([
      'Marco Belinelli',
      'Danilo Gallinari',
      'Andrea Bargnani',
    ]),
    answer: 'Marco Belinelli',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball en 2009?",
    options: shuffleArray(['Espagne', 'Serbie', 'Grèce']),
    answer: 'Espagne',
  },
  {
    question: 'Quel joueur turc a été le premier à jouer en NBA?',
    options: shuffleArray(['Hedo Turkoglu', 'Mehmet Okur', 'Mirsad Turkcan']),
    answer: 'Mirsad Turkcan',
  },
  {
    question:
      "Quel pays a remporté le championnat d'AfroBasket féminin en 2017?",
    options: shuffleArray(['Sénégal', 'Nigeria', 'Mali']),
    answer: 'Nigeria',
  },
  {
    question:
      'Quel joueur allemand a remporté le titre de MVP de la saison régulière en NBA?',
    options: shuffleArray([
      'Dirk Nowitzki',
      'Detlef Schrempf',
      'Dennis Schröder',
    ]),
    answer: 'Dirk Nowitzki',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball en 2005?",
    options: shuffleArray(['Grèce', 'Espagne', 'France']),
    answer: 'Grèce',
  },
  {
    question: 'Quel joueur croate a été le premier à jouer en NBA?',
    options: shuffleArray(['Dražen Petrović', 'Toni Kukoč', 'Dino Rađa']),
    answer: 'Dražen Petrović',
  },
  {
    question: "Quel pays a remporté le championnat d'AfroBasket en 2011?",
    options: shuffleArray(['Tunisie', 'Angola', 'Nigeria']),
    answer: 'Tunisie',
  },
  {
    question: 'Quel joueur russe a remporté le titre de MVP des finales NBA?',
    options: shuffleArray([
      'Andrei Kirilenko',
      'Timofey Mozgov',
      'Sergei Bazarevich',
    ]),
    answer: 'Timofey Mozgov',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball en 2003?",
    options: shuffleArray(['Lituanie', 'Espagne', 'Italie']),
    answer: 'Lituanie',
  },
  {
    question: 'Quel joueur lituanien a été le premier à jouer en NBA?',
    options: shuffleArray([
      'Arvydas Sabonis',
      'Šarūnas Marčiulionis',
      'Zydrunas Ilgauskas',
    ]),
    answer: 'Šarūnas Marčiulionis',
  },
  {
    question: "Quel pays a remporté le championnat d'AfroBasket en 2009?",
    options: shuffleArray(['Angola', 'Côte d’Ivoire', 'Nigeria']),
    answer: 'Angola',
  },
  {
    question:
      'Quel joueur espagnol a remporté le titre de MVP des finales NBA?',
    options: shuffleArray(['Pau Gasol', 'Marc Gasol', 'Ricky Rubio']),
    answer: 'Pau Gasol',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball en 2001?",
    options: shuffleArray(['Yougoslavie', 'Italie', 'Espagne']),
    answer: 'Yougoslavie',
  },
  {
    question: 'Quel joueur français a été le premier à jouer en NBA?',
    options: shuffleArray([
      'Hervé Dubuisson',
      'Richard Dacoury',
      'Georges Vestris',
    ]),
    answer: 'Georges Vestris',
  },
  {
    question: "Quel pays a remporté le championnat d'AfroBasket en 2007?",
    options: shuffleArray(['Angola', 'Cameroun', 'Egypte']),
    answer: 'Angola',
  },
  {
    question: 'Quel joueur grec a remporté le titre de MVP des finales NBA?',
    options: shuffleArray([
      'Giannis Antetokounmpo',
      'Kostas Antetokounmpo',
      'Thanasis Antetokounmpo',
    ]),
    answer: 'Giannis Antetokounmpo',
  },
  {
    question:
      "Quel pays a remporté le championnat d'Europe de basketball en 1999?",
    options: shuffleArray(['Italie', 'Espagne', 'France']),
    answer: 'Italie',
  },
  {
    question: 'Quel joueur turc a remporté le titre de MVP des finales NBA?',
    options: shuffleArray(['Hedo Turkoglu', 'Mehmet Okur', 'Ersan Ilyasova']),
    answer: 'Mehmet Okur',
  },
  {
    question: "Quel pays a remporté le championnat d'AfroBasket en 2005?",
    options: shuffleArray(['Angola', 'Sénégal', 'Nigeria']),
    answer: 'Angola',
  },
  {
    question: 'Quel joueur serbe a remporté le titre de MVP des finales NBA?',
    options: shuffleArray(['Nikola Jokic', 'Vlade Divac', 'Peja Stojakovic']),
    answer: 'Peja Stojakovic',
  },
  {
    question: "Quelle est la longueur d'un terrain de basketball en pieds?",
    options: shuffleArray(['94 pieds', '100 pieds', '80 pieds']),
    answer: '94 pieds',
  },
  {
    question: "Quelle est la largeur d'un terrain de basketball en pieds?",
    options: shuffleArray(['50 pieds', '60 pieds', '40 pieds']),
    answer: '50 pieds',
  },
  {
    question: 'Quelle est la distance de la ligne des trois points en NBA?',
    options: shuffleArray(['23.75 pieds', '22 pieds', '24 pieds']),
    answer: '23.75 pieds',
  },
  {
    question: 'Quelle est la distance de la ligne des lancers francs?',
    options: shuffleArray(['15 pieds', '14 pieds', '16 pieds']),
    answer: '15 pieds',
  },
  {
    question: 'Quelle est la hauteur du panneau de basketball?',
    options: shuffleArray(['10 pieds', '12 pieds', '8 pieds']),
    answer: '10 pieds',
  },
  {
    question: 'Quelle est la largeur du panneau de basketball?',
    options: shuffleArray(['6 pieds', '5 pieds', '7 pieds']),
    answer: '6 pieds',
  },
  {
    question: 'Quelle est la hauteur du cercle du panier de basketball?',
    options: shuffleArray(['10 pieds', '12 pieds', '8 pieds']),
    answer: '10 pieds',
  },
  {
    question: 'Quelle est la largeur de la clé (zone restrictive) en NBA?',
    options: shuffleArray(['16 pieds', '12 pieds', '14 pieds']),
    answer: '16 pieds',
  },
  {
    question: 'Quelle est la largeur de la clé (zone restrictive) en FIBA?',
    options: shuffleArray(['12 pieds', '16 pieds', '14 pieds']),
    answer: '12 pieds',
  },
  {
    question: 'Quelle est la distance entre le panier et la ligne de fond?',
    options: shuffleArray(['4 pieds', '5 pieds', '3 pieds']),
    answer: '4 pieds',
  },
  {
    question: 'Quelle est la distance entre le panier et la ligne de touche?',
    options: shuffleArray(['25 pieds', '30 pieds', '20 pieds']),
    answer: '25 pieds',
  },
  {
    question: 'Quelle est la largeur de la ligne de touche?',
    options: shuffleArray(['2 pouces', '3 pouces', '1 pouce']),
    answer: '2 pouces',
  },
  {
    question: 'Quelle est la largeur de la ligne de fond?',
    options: shuffleArray(['2 pouces', '3 pouces', '1 pouce']),
    answer: '2 pouces',
  },
  {
    question: 'Quelle est la largeur de la ligne des lancers francs?',
    options: shuffleArray(['2 pouces', '3 pouces', '1 pouce']),
    answer: '2 pouces',
  },
  {
    question: 'Quelle est la largeur de la ligne des trois points?',
    options: shuffleArray(['2 pouces', '3 pouces', '1 pouce']),
    answer: '2 pouces',
  },
  {
    question: 'Quelle est la largeur de la ligne médiane?',
    options: shuffleArray(['2 pouces', '3 pouces', '1 pouce']),
    answer: '2 pouces',
  },
  {
    question:
      'Quelle est la distance entre la ligne médiane et la ligne de fond?',
    options: shuffleArray(['47 pieds', '50 pieds', '45 pieds']),
    answer: '47 pieds',
  },
  {
    question:
      'Quelle est la distance entre la ligne des lancers francs et la ligne de fond?',
    options: shuffleArray(['19 pieds', '20 pieds', '18 pieds']),
    answer: '19 pieds',
  },
  {
    question:
      'Quelle est la distance entre la ligne des trois points et la ligne de fond?',
    options: shuffleArray(['23.75 pieds', '22 pieds', '24 pieds']),
    answer: '23.75 pieds',
  },
  {
    question:
      'Quelle est la distance entre la ligne des trois points et la ligne de touche?',
    options: shuffleArray(['22 pieds', '23 pieds', '21 pieds']),
    answer: '22 pieds',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres de MVP de la saison régulière en NBA?',
    options: shuffleArray([
      'Kareem Abdul-Jabbar',
      'Michael Jordan',
      'LeBron James',
    ]),
    answer: 'Kareem Abdul-Jabbar',
  },
  {
    question: 'Quel joueur a marqué le plus de points en carrière NBA?',
    options: shuffleArray([
      'Kareem Abdul-Jabbar',
      'Karl Malone',
      'LeBron James',
    ]),
    answer: 'Kareem Abdul-Jabbar',
  },
]

export default Questions_Basketball
