import shuffleArray from '../shuffleArray/shuffleArray'

const Questions_Films = [
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1994 ?",
    options: shuffleArray([
      'Forrest Gump',
      'Pulp Fiction',
      'The Shawshank Redemption',
    ]),
    answer: 'Forrest Gump',
  },
  {
    question: "Qui a réalisé le film 'Inception' ?",
    options: shuffleArray([
      'Christopher Nolan',
      'Steven Spielberg',
      'James Cameron',
    ]),
    answer: 'Christopher Nolan',
  },
  {
    question: "Quel est le nom du personnage principal dans 'Le Roi Lion' ?",
    options: shuffleArray(['Simba', 'Mufasa', 'Scar']),
    answer: 'Simba',
  },
  {
    question: "Quel film a popularisé la chanson 'My Heart Will Go On' ?",
    options: shuffleArray(['Titanic', 'The Bodyguard', 'Ghost']),
    answer: 'Titanic',
  },
  {
    question: "Qui joue le rôle principal dans 'Matrix' ?",
    options: shuffleArray(['Keanu Reeves', 'Brad Pitt', 'Tom Cruise']),
    answer: 'Keanu Reeves',
  },
  {
    question:
      "Quel film d'animation met en scène des jouets qui prennent vie ?",
    options: shuffleArray(['Toy Story', 'Shrek', 'Cars']),
    answer: 'Toy Story',
  },
  {
    question: 'Quel film de science-fiction se déroule sur Pandora ?',
    options: shuffleArray(['Avatar', 'Star Wars', 'Star Trek']),
    answer: 'Avatar',
  },
  {
    question: "Qui a réalisé 'Jurassic Park' ?",
    options: shuffleArray([
      'Steven Spielberg',
      'George Lucas',
      'James Cameron',
    ]),
    answer: 'Steven Spielberg',
  },
  {
    question: "Quel film raconte l'histoire de la vie de Jordan Belfort ?",
    options: shuffleArray([
      'Le Loup de Wall Street',
      'American Psycho',
      'Casino',
    ]),
    answer: 'Le Loup de Wall Street',
  },
  {
    question: 'Quel film met en scène un robot nommé WALL-E ?',
    options: shuffleArray(['WALL-E', 'Big Hero 6', 'Robots']),
    answer: 'WALL-E',
  },
  {
    question:
      'Quel film a pour personnage principal un clown maléfique nommé Pennywise ?',
    options: shuffleArray(['Ça', 'The Conjuring', 'Annabelle']),
    answer: 'Ça',
  },
  {
    question:
      'Quel film de Quentin Tarantino se déroule pendant la Seconde Guerre mondiale ?',
    options: shuffleArray([
      'Inglourious Basterds',
      'Django Unchained',
      'Pulp Fiction',
    ]),
    answer: 'Inglourious Basterds',
  },
  {
    question: "Quel film raconte l'histoire de la vie de Freddie Mercury ?",
    options: shuffleArray(['Bohemian Rhapsody', 'Rocketman', 'The Doors']),
    answer: 'Bohemian Rhapsody',
  },
  {
    question:
      'Quel film met en scène un groupe de super-héros appelé les Avengers ?',
    options: shuffleArray(['Avengers', 'Justice League', 'X-Men']),
    answer: 'Avengers',
  },
  {
    question:
      "Quel film d'animation raconte l'histoire d'une famille de super-héros ?",
    options: shuffleArray([
      'Les Indestructibles',
      'Les Nouveaux Héros',
      'Les Mondes de Ralph',
    ]),
    answer: 'Les Indestructibles',
  },
  {
    question:
      "Quel film de science-fiction met en scène des extraterrestres appelés Na'vi ?",
    options: shuffleArray(['Avatar', 'E.T.', 'Independence Day']),
    answer: 'Avatar',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui vieillit à l'envers ?",
    options: shuffleArray([
      "L'Étrange Histoire de Benjamin Button",
      'Forrest Gump',
      'Big Fish',
    ]),
    answer: "L'Étrange Histoire de Benjamin Button",
  },
  {
    question:
      "Quel film de guerre raconte l'histoire du débarquement en Normandie ?",
    options: shuffleArray([
      'Il faut sauver le soldat Ryan',
      'Dunkerque',
      'La Ligne rouge',
    ]),
    answer: 'Il faut sauver le soldat Ryan',
  },
  {
    question:
      "Quel film d'animation raconte l'histoire d'un rat qui veut devenir chef cuisinier ?",
    options: shuffleArray(['Ratatouille', 'Ralph', 'Zootopie']),
    answer: 'Ratatouille',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui se réveille seul sur Mars ?",
    options: shuffleArray(['Seul sur Mars', 'Interstellar', 'Gravity']),
    answer: 'Seul sur Mars',
  },
  {
    question:
      'Quel film de science-fiction met en scène un robot nommé R2-D2 ?',
    options: shuffleArray(['Star Wars', 'Star Trek', 'Blade Runner']),
    answer: 'Star Wars',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit revivre la même journée encore et encore ?",
    options: shuffleArray([
      'Un jour sans fin',
      'Edge of Tomorrow',
      'Source Code',
    ]),
    answer: 'Un jour sans fin',
  },
  {
    question:
      "Quel film d'animation raconte l'histoire d'un poisson clown nommé Nemo ?",
    options: shuffleArray([
      'Le Monde de Nemo',
      'Les Nouveaux Héros',
      'Zootopie',
    ]),
    answer: 'Le Monde de Nemo',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit protéger un anneau magique ?",
    options: shuffleArray([
      'Le Seigneur des Anneaux',
      'Harry Potter',
      'Le Hobbit',
    ]),
    answer: 'Le Seigneur des Anneaux',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver sa fille kidnappée ?",
    options: shuffleArray(['Taken', 'John Wick', 'Die Hard']),
    answer: 'Taken',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver sa femme kidnappée ?",
    options: shuffleArray(['Die Hard', 'Taken', 'John Wick']),
    answer: 'Die Hard',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver sa famille kidnappée ?",
    options: shuffleArray(['John Wick', 'Taken', 'Die Hard']),
    answer: 'John Wick',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une invasion extraterrestre ?",
    options: shuffleArray([
      'Independence Day',
      'Men in Black',
      'War of the Worlds',
    ]),
    answer: 'Independence Day',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse zombie ?",
    options: shuffleArray(['World War Z', '28 Days Later', 'Zombieland']),
    answer: 'World War Z',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse nucléaire ?",
    options: shuffleArray(['Terminator 2', 'Mad Max', 'The Day After']),
    answer: 'Terminator 2',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse climatique ?",
    options: shuffleArray(['The Day After Tomorrow', '2012', 'Geostorm']),
    answer: 'The Day After Tomorrow',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse biologique ?",
    options: shuffleArray(['Contagion', 'Outbreak', 'I Am Legend']),
    answer: 'Contagion',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse technologique ?",
    options: shuffleArray(['The Matrix', 'Terminator', 'Blade Runner']),
    answer: 'The Matrix',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse magique ?",
    options: shuffleArray([
      'Harry Potter',
      'The Lord of the Rings',
      'The Hobbit',
    ]),
    answer: 'Harry Potter',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse mythologique ?",
    options: shuffleArray(['Clash of the Titans', 'Percy Jackson', 'Hercules']),
    answer: 'Clash of the Titans',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse historique ?",
    options: shuffleArray(['Gladiator', 'Braveheart', '300']),
    answer: 'Gladiator',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse futuriste ?",
    options: shuffleArray([
      'Blade Runner',
      'The Fifth Element',
      'Minority Report',
    ]),
    answer: 'Blade Runner',
  },
  {
    question:
      "Quel film raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse interdimensionnelle ?",
    options: shuffleArray(['Doctor Strange', 'Interstellar', 'Inception']),
    answer: 'Doctor Strange',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un esprit de la forêt nommé Totoro ?",
    options: shuffleArray([
      'Mon Voisin Totoro',
      'Le Voyage de Chihiro',
      'Princesse Mononoké',
    ]),
    answer: 'Mon Voisin Totoro',
  },
  {
    question: "Quel film coréen a remporté l'Oscar du meilleur film en 2020 ?",
    options: shuffleArray(['Parasite', 'Oldboy', 'The Host']),
    answer: 'Parasite',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon et d'une fille qui échangent leurs corps ?",
    options: shuffleArray([
      'Your Name',
      'Le Château Ambulant',
      'Le Vent se Lève',
    ]),
    answer: 'Your Name',
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier légendaire nommé Ip Man ?",
    options: shuffleArray(['Ip Man', 'Hero', 'La Cité Interdite']),
    answer: 'Ip Man',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui devient un démon pour venger sa famille ?",
    options: shuffleArray([
      "Demon Slayer: Le Train de l'Infini",
      'Naruto',
      'One Piece',
    ]),
    answer: "Demon Slayer: Le Train de l'Infini",
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'un homme emprisonné pendant 15 ans sans raison apparente ?",
    options: shuffleArray(['Oldboy', 'Memories of Murder', 'The Handmaiden']),
    answer: 'Oldboy',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui découvre un monde parallèle rempli de créatures magiques ?",
    options: shuffleArray([
      'Le Voyage de Chihiro',
      'Princesse Mononoké',
      'Le Château dans le Ciel',
    ]),
    answer: 'Le Voyage de Chihiro',
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un empereur et de ses trois fils ?",
    options: shuffleArray([
      'La Cité Interdite',
      'Hero',
      'Le Secret des Poignards Volants',
    ]),
    answer: 'La Cité Interdite',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'un père qui doit protéger sa fille lors d'une invasion de zombies ?",
    options: shuffleArray(['Train to Busan', 'The Wailing', 'The Host']),
    answer: 'Train to Busan',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver sa sœur transformée en démon ?",
    options: shuffleArray([
      "Demon Slayer: Le Train de l'Infini",
      'Naruto',
      'One Piece',
    ]),
    answer: "Demon Slayer: Le Train de l'Infini",
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger un empereur contre des assassins ?",
    options: shuffleArray([
      'Hero',
      'La Cité Interdite',
      'Le Secret des Poignards Volants',
    ]),
    answer: 'Hero',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver un village attaqué par des esprits maléfiques ?",
    options: shuffleArray([
      'Princesse Mononoké',
      'Le Voyage de Chihiro',
      'Le Château dans le Ciel',
    ]),
    answer: 'Princesse Mononoké',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'une femme qui se venge de ceux qui l'ont trahie ?",
    options: shuffleArray(['Lady Vengeance', 'Oldboy', 'The Handmaiden']),
    answer: 'Lady Vengeance',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver un château volant attaqué par des pirates ?",
    options: shuffleArray([
      'Le Château dans le Ciel',
      'Le Château Ambulant',
      'Le Vent se Lève',
    ]),
    answer: 'Le Château dans le Ciel',
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger une princesse contre des assassins ?",
    options: shuffleArray([
      'Le Secret des Poignards Volants',
      'Hero',
      'La Cité Interdite',
    ]),
    answer: 'Le Secret des Poignards Volants',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'un détective qui enquête sur une série de meurtres non résolus ?",
    options: shuffleArray(['Memories of Murder', 'Oldboy', 'The Wailing']),
    answer: 'Memories of Murder',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver un village attaqué par des esprits maléfiques ?",
    options: shuffleArray([
      'Princesse Mononoké',
      'Le Voyage de Chihiro',
      'Le Château dans le Ciel',
    ]),
    answer: 'Princesse Mononoké',
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger un empereur contre des assassins ?",
    options: shuffleArray([
      'Hero',
      'La Cité Interdite',
      'Le Secret des Poignards Volants',
    ]),
    answer: 'Hero',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'un père qui doit protéger sa fille lors d'une invasion de zombies ?",
    options: shuffleArray(['Train to Busan', 'The Wailing', 'The Host']),
    answer: 'Train to Busan',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver sa sœur transformée en démon ?",
    options: shuffleArray([
      "Demon Slayer: Le Train de l'Infini",
      'Naruto',
      'One Piece',
    ]),
    answer: "Demon Slayer: Le Train de l'Infini",
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger une princesse contre des assassins ?",
    options: shuffleArray([
      'Le Secret des Poignards Volants',
      'Hero',
      'La Cité Interdite',
    ]),
    answer: 'Le Secret des Poignards Volants',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'une femme qui se venge de ceux qui l'ont trahie ?",
    options: shuffleArray(['Lady Vengeance', 'Oldboy', 'The Handmaiden']),
    answer: 'Lady Vengeance',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver un château volant attaqué par des pirates ?",
    options: shuffleArray([
      'Le Château dans le Ciel',
      'Le Château Ambulant',
      'Le Vent se Lève',
    ]),
    answer: 'Le Château dans le Ciel',
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger un empereur contre des assassins ?",
    options: shuffleArray([
      'Hero',
      'La Cité Interdite',
      'Le Secret des Poignards Volants',
    ]),
    answer: 'Hero',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'un détective qui enquête sur une série de meurtres non résolus ?",
    options: shuffleArray(['Memories of Murder', 'Oldboy', 'The Wailing']),
    answer: 'Memories of Murder',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver un village attaqué par des esprits maléfiques ?",
    options: shuffleArray([
      'Princesse Mononoké',
      'Le Voyage de Chihiro',
      'Le Château dans le Ciel',
    ]),
    answer: 'Princesse Mononoké',
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger un empereur contre des assassins ?",
    options: shuffleArray([
      'Hero',
      'La Cité Interdite',
      'Le Secret des Poignards Volants',
    ]),
    answer: 'Hero',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'un père qui doit protéger sa fille lors d'une invasion de zombies ?",
    options: shuffleArray(['Train to Busan', 'The Wailing', 'The Host']),
    answer: 'Train to Busan',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver sa sœur transformée en démon ?",
    options: shuffleArray([
      "Demon Slayer: Le Train de l'Infini",
      'Naruto',
      'One Piece',
    ]),
    answer: "Demon Slayer: Le Train de l'Infini",
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger une princesse contre des assassins ?",
    options: shuffleArray([
      'Le Secret des Poignards Volants',
      'Hero',
      'La Cité Interdite',
    ]),
    answer: 'Le Secret des Poignards Volants',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'une femme qui se venge de ceux qui l'ont trahie ?",
    options: shuffleArray(['Lady Vengeance', 'Oldboy', 'The Handmaiden']),
    answer: 'Lady Vengeance',
  },
  {
    question:
      "Quel film japonais raconte l'histoire d'un garçon qui doit sauver un château volant attaqué par des pirates ?",
    options: shuffleArray([
      'Le Château dans le Ciel',
      'Le Château Ambulant',
      'Le Vent se Lève',
    ]),
    answer: 'Le Château dans le Ciel',
  },
  {
    question:
      "Quel film chinois raconte l'histoire d'un guerrier qui doit protéger un empereur contre des assassins ?",
    options: shuffleArray([
      'Hero',
      'La Cité Interdite',
      'Le Secret des Poignards Volants',
    ]),
    answer: 'Hero',
  },
  {
    question:
      "Quel film coréen raconte l'histoire d'un détective qui enquête sur une série de meurtres non résolus ?",
    options: shuffleArray(['Memories of Murder', 'Oldboy', 'The Wailing']),
    answer: 'Memories of Murder',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un prince qui retourne dans son pays pour devenir roi ?",
    options: shuffleArray([
      'Black Panther',
      'Coming to America',
      'The Lion King',
    ]),
    answer: 'Black Panther',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit survivre sur une île déserte ?",
    options: shuffleArray(['Cast Away', 'The Revenant', 'Life of Pi']),
    answer: 'Cast Away',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un garçon qui devient roi après la mort de son père ?",
    options: shuffleArray([
      'The Lion King',
      'Black Panther',
      'Coming to America',
    ]),
    answer: 'The Lion King',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit sauver sa famille d'une attaque de terroristes ?",
    options: shuffleArray(['Die Hard', 'Taken', 'John Wick']),
    answer: 'Die Hard',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un garçon qui rêve de devenir un grand musicien ?",
    options: shuffleArray([
      'The Boy Who Harnessed the Wind',
      'Queen of Katwe',
      'Beasts of No Nation',
    ]),
    answer: 'The Boy Who Harnessed the Wind',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit protéger un anneau magique ?",
    options: shuffleArray([
      'The Lord of the Rings',
      'Harry Potter',
      'The Hobbit',
    ]),
    answer: 'The Lord of the Rings',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'une jeune fille qui devient championne d'échecs ?",
    options: shuffleArray([
      'Queen of Katwe',
      'The Boy Who Harnessed the Wind',
      'Beasts of No Nation',
    ]),
    answer: 'Queen of Katwe',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit sauver le monde d'une invasion extraterrestre ?",
    options: shuffleArray([
      'Independence Day',
      'Men in Black',
      'War of the Worlds',
    ]),
    answer: 'Independence Day',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un garçon qui invente une machine pour sauver son village ?",
    options: shuffleArray([
      'The Boy Who Harnessed the Wind',
      'Queen of Katwe',
      'Beasts of No Nation',
    ]),
    answer: 'The Boy Who Harnessed the Wind',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit revivre la même journée encore et encore ?",
    options: shuffleArray(['Groundhog Day', 'Edge of Tomorrow', 'Source Code']),
    answer: 'Groundhog Day',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un garçon qui devient un guerrier pour protéger son village ?",
    options: shuffleArray([
      'Beasts of No Nation',
      'The Boy Who Harnessed the Wind',
      'Queen of Katwe',
    ]),
    answer: 'Beasts of No Nation',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit sauver sa fille kidnappée ?",
    options: shuffleArray(['Taken', 'John Wick', 'Die Hard']),
    answer: 'Taken',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'une femme qui devient une guerrière pour protéger son royaume ?",
    options: shuffleArray([
      'The Woman King',
      'Black Panther',
      'Queen of Katwe',
    ]),
    answer: 'The Woman King',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse zombie ?",
    options: shuffleArray(['World War Z', '28 Days Later', 'Zombieland']),
    answer: 'World War Z',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un garçon qui doit sauver sa sœur transformée en démon ?",
    options: shuffleArray([
      "Demon Slayer: Le Train de l'Infini",
      'Naruto',
      'One Piece',
    ]),
    answer: "Demon Slayer: Le Train de l'Infini",
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse nucléaire ?",
    options: shuffleArray(['Terminator 2', 'Mad Max', 'The Day After']),
    answer: 'Terminator 2',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un garçon qui doit sauver un village attaqué par des esprits maléfiques ?",
    options: shuffleArray([
      'Princesse Mononoké',
      'Le Voyage de Chihiro',
      'Le Château dans le Ciel',
    ]),
    answer: 'Princesse Mononoké',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse climatique ?",
    options: shuffleArray(['The Day After Tomorrow', '2012', 'Geostorm']),
    answer: 'The Day After Tomorrow',
  },
  {
    question:
      "Quel film africain raconte l'histoire d'un guerrier qui doit protéger un empereur contre des assassins ?",
    options: shuffleArray([
      'Hero',
      'La Cité Interdite',
      'Le Secret des Poignards Volants',
    ]),
    answer: 'Hero',
  },
  {
    question:
      "Quel film américain raconte l'histoire d'un homme qui doit sauver le monde d'une apocalypse biologique ?",
    options: shuffleArray(['Contagion', 'Outbreak', 'I Am Legend']),
    answer: 'Contagion',
  },
  {
    question:
      "Quel film français raconte l'histoire d'un homme qui devient paraplégique et engage un aide-soignant ?",
    options: shuffleArray(['Intouchables', 'Amélie', 'La Haine']),
    answer: 'Intouchables',
  },
  {
    question:
      "Quel film italien raconte l'histoire d'un libraire juif pendant la Seconde Guerre mondiale ?",
    options: shuffleArray(['La vita è bella', 'Cinema Paradiso', 'Il Postino']),
    answer: 'La vita è bella',
  },
  {
    question:
      "Quel film espagnol raconte l'histoire d'une jeune fille qui découvre un monde fantastique pendant la guerre civile espagnole ?",
    options: shuffleArray(['Le Labyrinthe de Pan', 'Volver', 'Mar adentro']),
    answer: 'Le Labyrinthe de Pan',
  },
  {
    question:
      "Quel film allemand raconte l'histoire d'un jeune garçon qui découvre que son père est un ancien garde de camp de concentration ?",
    options: shuffleArray(['La Vie des autres', 'Le Ruban blanc', 'Le Liseur']),
    answer: 'Le Liseur',
  },
  {
    question:
      "Quel film britannique raconte l'histoire d'un roi qui surmonte son bégaiement avec l'aide d'un orthophoniste ?",
    options: shuffleArray([
      "Le Discours d'un roi",
      'Les Misérables',
      'Slumdog Millionaire',
    ]),
    answer: "Le Discours d'un roi",
  },
  {
    question:
      "Quel film suédois raconte l'histoire d'un journaliste et d'un hacker enquêtant sur une disparition vieille de 40 ans ?",
    options: shuffleArray([
      'Millénium : Les Hommes qui n’aimaient pas les femmes',
      'Fanny et Alexandre',
      'Le Septième Sceau',
    ]),
    answer: 'Millénium : Les Hommes qui n’aimaient pas les femmes',
  },
]

export default Questions_Films
