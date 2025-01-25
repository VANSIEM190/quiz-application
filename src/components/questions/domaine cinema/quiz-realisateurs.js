import shuffleArray from '../shuffleArray/shuffleArray.js'

const Questions_Realisateurs = [
  {
    question: "Qui a réalisé le film 'Inception'?",
    options: shuffleArray([
      'Christopher Nolan',
      'Steven Spielberg',
      'James Cameron',
    ]),
    answer: 'Christopher Nolan',
  },
  {
    question: "Qui a réalisé le film 'Titanic'?",
    options: shuffleArray(['James Cameron', 'Martin Scorsese', 'Ridley Scott']),
    answer: 'James Cameron',
  },
  {
    question: "Qui a réalisé le film 'Jurassic Park'?",
    options: shuffleArray([
      'Steven Spielberg',
      'George Lucas',
      'Peter Jackson',
    ]),
    answer: 'Steven Spielberg',
  },
  {
    question: "Qui a réalisé le film 'Pulp Fiction'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'Guy Ritchie',
      'David Fincher',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'The Godfather'?",
    options: shuffleArray([
      'Francis Ford Coppola',
      'Brian De Palma',
      'Stanley Kubrick',
    ]),
    answer: 'Francis Ford Coppola',
  },
  {
    question: "Qui a réalisé le film 'The Dark Knight'?",
    options: shuffleArray(['Christopher Nolan', 'Tim Burton', 'Zack Snyder']),
    answer: 'Christopher Nolan',
  },
  {
    question: "Qui a réalisé le film 'Avatar'?",
    options: shuffleArray([
      'James Cameron',
      'Peter Jackson',
      'Steven Spielberg',
    ]),
    answer: 'James Cameron',
  },
  {
    question: "Qui a réalisé le film 'Schindler's List'?",
    options: shuffleArray([
      'Steven Spielberg',
      'Roman Polanski',
      'Oliver Stone',
    ]),
    answer: 'Steven Spielberg',
  },
  {
    question: "Qui a réalisé le film 'Fight Club'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'The Shawshank Redemption'?",
    options: shuffleArray(['Frank Darabont', 'Rob Reiner', 'Ron Howard']),
    answer: 'Frank Darabont',
  },
  {
    question: "Qui a réalisé le film 'The Matrix'?",
    options: shuffleArray(['The Wachowskis', 'James Cameron', 'Ridley Scott']),
    answer: 'The Wachowskis',
  },
  {
    question: "Qui a réalisé le film 'Gladiator'?",
    options: shuffleArray([
      'Ridley Scott',
      'Peter Jackson',
      'Steven Spielberg',
    ]),
    answer: 'Ridley Scott',
  },
  {
    question: "Qui a réalisé le film 'The Lord of the Rings'?",
    options: shuffleArray(['Peter Jackson', 'George Lucas', 'James Cameron']),
    answer: 'Peter Jackson',
  },
  {
    question: "Qui a réalisé le film 'Star Wars: A New Hope'?",
    options: shuffleArray(['George Lucas', 'Steven Spielberg', 'Ridley Scott']),
    answer: 'George Lucas',
  },
  {
    question: "Qui a réalisé le film 'The Silence of the Lambs'?",
    options: shuffleArray([
      'Jonathan Demme',
      'David Fincher',
      'Martin Scorsese',
    ]),
    answer: 'Jonathan Demme',
  },
  {
    question: "Qui a réalisé le film 'Se7en'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Braveheart'?",
    options: shuffleArray(['Mel Gibson', 'Ridley Scott', 'Steven Spielberg']),
    answer: 'Mel Gibson',
  },
  {
    question: "Qui a réalisé le film 'The Departed'?",
    options: shuffleArray([
      'Martin Scorsese',
      'Quentin Tarantino',
      'David Fincher',
    ]),
    answer: 'Martin Scorsese',
  },
  {
    question: "Qui a réalisé le film 'The Social Network'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Steven Spielberg',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Black Swan'?",
    options: shuffleArray([
      'Darren Aronofsky',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Darren Aronofsky',
  },
  {
    question: "Qui a réalisé le film 'Mad Max: Fury Road'?",
    options: shuffleArray(['George Miller', 'James Cameron', 'Ridley Scott']),
    answer: 'George Miller',
  },
  {
    question: "Qui a réalisé le film 'The Grand Budapest Hotel'?",
    options: shuffleArray([
      'Wes Anderson',
      'David Fincher',
      'Quentin Tarantino',
    ]),
    answer: 'Wes Anderson',
  },
  {
    question: "Qui a réalisé le film 'La La Land'?",
    options: shuffleArray([
      'Damien Chazelle',
      'Christopher Nolan',
      'David Fincher',
    ]),
    answer: 'Damien Chazelle',
  },
  {
    question: "Qui a réalisé le film 'Whiplash'?",
    options: shuffleArray([
      'Damien Chazelle',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Damien Chazelle',
  },
  {
    question: "Qui a réalisé le film 'Django Unchained'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'The Revenant'?",
    options: shuffleArray([
      'Alejandro González Iñárritu',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Alejandro González Iñárritu',
  },
  {
    question: "Qui a réalisé le film 'Birdman'?",
    options: shuffleArray([
      'Alejandro González Iñárritu',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Alejandro González Iñárritu',
  },
  {
    question: "Qui a réalisé le film 'Gravity'?",
    options: shuffleArray([
      'Alfonso Cuarón',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Alfonso Cuarón',
  },
  {
    question: "Qui a réalisé le film 'The Shape of Water'?",
    options: shuffleArray([
      'Guillermo del Toro',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Guillermo del Toro',
  },
  {
    question: "Qui a réalisé le film 'Pan's Labyrinth'?",
    options: shuffleArray([
      'Guillermo del Toro',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Guillermo del Toro',
  },
  {
    question: "Qui a réalisé le film 'Blade Runner 2049'?",
    options: shuffleArray([
      'Denis Villeneuve',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Denis Villeneuve',
  },
  {
    question: "Qui a réalisé le film 'Arrival'?",
    options: shuffleArray([
      'Denis Villeneuve',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Denis Villeneuve',
  },
  {
    question: "Qui a réalisé le film 'Prisoners'?",
    options: shuffleArray([
      'Denis Villeneuve',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Denis Villeneuve',
  },
  {
    question: "Qui a réalisé le film 'Sicario'?",
    options: shuffleArray([
      'Denis Villeneuve',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Denis Villeneuve',
  },
  {
    question: "Qui a réalisé le film 'Interstellar'?",
    options: shuffleArray([
      'Christopher Nolan',
      'David Fincher',
      'Quentin Tarantino',
    ]),
    answer: 'Christopher Nolan',
  },
  {
    question: "Qui a réalisé le film 'Dunkirk'?",
    options: shuffleArray([
      'Christopher Nolan',
      'David Fincher',
      'Quentin Tarantino',
    ]),
    answer: 'Christopher Nolan',
  },
  {
    question: "Qui a réalisé le film 'Memento'?",
    options: shuffleArray([
      'Christopher Nolan',
      'David Fincher',
      'Quentin Tarantino',
    ]),
    answer: 'Christopher Nolan',
  },
  {
    question: "Qui a réalisé le film 'The Prestige'?",
    options: shuffleArray([
      'Christopher Nolan',
      'David Fincher',
      'Quentin Tarantino',
    ]),
    answer: 'Christopher Nolan',
  },
  {
    question: "Qui a réalisé le film 'Inglourious Basterds'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'Le Roi Lion'?",
    options: shuffleArray(['Roger Allers', 'John Lasseter', 'Brad Bird']),
    answer: 'Roger Allers',
  },
  {
    question: "Qui a réalisé le film 'Toy Story'?",
    options: shuffleArray(['John Lasseter', 'Pete Docter', 'Andrew Stanton']),
    answer: 'John Lasseter',
  },
  {
    question: "Qui a réalisé le film 'Le Voyage de Chihiro'?",
    options: shuffleArray(['Hayao Miyazaki', 'Isao Takahata', 'Mamoru Hosoda']),
    answer: 'Hayao Miyazaki',
  },
  {
    question: "Qui a réalisé le film 'Shrek'?",
    options: shuffleArray(['Andrew Adamson', 'Chris Sanders', 'Dean DeBlois']),
    answer: 'Andrew Adamson',
  },
  {
    question: "Qui a réalisé le film 'Ratatouille'?",
    options: shuffleArray(['Brad Bird', 'Pete Docter', 'Andrew Stanton']),
    answer: 'Brad Bird',
  },
  {
    question: "Qui a réalisé le film 'La Reine des neiges'?",
    options: shuffleArray(['Chris Buck', 'Jennifer Lee', 'John Lasseter']),
    answer: 'Chris Buck',
  },
  {
    question: "Qui a réalisé le film 'Zootopie'?",
    options: shuffleArray(['Byron Howard', 'Rich Moore', 'Chris Buck']),
    answer: 'Byron Howard',
  },
  {
    question: "Qui a réalisé le film 'Les Indestructibles'?",
    options: shuffleArray(['Brad Bird', 'Pete Docter', 'Andrew Stanton']),
    answer: 'Brad Bird',
  },
  {
    question: "Qui a réalisé le film 'Monstres et Cie'?",
    options: shuffleArray(['Pete Docter', 'John Lasseter', 'Andrew Stanton']),
    answer: 'Pete Docter',
  },
  {
    question: "Qui a réalisé le film 'Kung Fu Panda'?",
    options: shuffleArray(['Mark Osborne', 'Chris Sanders', 'Dean DeBlois']),
    answer: 'Mark Osborne',
  },
  {
    question: "Qui a réalisé le film 'Moi, moche et méchant'?",
    options: shuffleArray(['Pierre Coffin', 'Chris Renaud', 'Kyle Balda']),
    answer: 'Pierre Coffin',
  },
  {
    question: "Qui a réalisé le film 'Les Nouveaux Héros'?",
    options: shuffleArray(['Don Hall', 'Chris Williams', 'John Lasseter']),
    answer: 'Don Hall',
  },
  {
    question: "Qui a réalisé le film 'Dragons'?",
    options: shuffleArray(['Chris Sanders', 'Dean DeBlois', 'Mark Osborne']),
    answer: 'Chris Sanders',
  },
  {
    question: "Qui a réalisé le film 'Coco'?",
    options: shuffleArray(['Lee Unkrich', 'Adrian Molina', 'John Lasseter']),
    answer: 'Lee Unkrich',
  },
  {
    question: "Qui a réalisé le film 'Les Croods'?",
    options: shuffleArray(['Kirk DeMicco', 'Chris Sanders', 'Dean DeBlois']),
    answer: 'Kirk DeMicco',
  },
  {
    question: "Qui a réalisé le film 'Vaiana'?",
    options: shuffleArray(['Ron Clements', 'John Musker', 'Chris Buck']),
    answer: 'Ron Clements',
  },
  {
    question: "Qui a réalisé le film 'Là-haut'?",
    options: shuffleArray(['Pete Docter', 'Bob Peterson', 'John Lasseter']),
    answer: 'Pete Docter',
  },
  {
    question: "Qui a réalisé le film 'Wall-E'?",
    options: shuffleArray(['Andrew Stanton', 'Pete Docter', 'Brad Bird']),
    answer: 'Andrew Stanton',
  },
  {
    question: "Qui a réalisé le film 'Les Mondes de Ralph'?",
    options: shuffleArray(['Rich Moore', 'Phil Johnston', 'John Lasseter']),
    answer: 'Rich Moore',
  },
  {
    question: "Qui a réalisé le film 'Le Géant de fer'?",
    options: shuffleArray(['Brad Bird', 'Pete Docter', 'Andrew Stanton']),
    answer: 'Brad Bird',
  },
  {
    question: "Qui a réalisé le film 'Gone Girl'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'The Wolf of Wall Street'?",
    options: shuffleArray([
      'Martin Scorsese',
      'Quentin Tarantino',
      'David Fincher',
    ]),
    answer: 'Martin Scorsese',
  },
  {
    question: "Qui a réalisé le film 'The Irishman'?",
    options: shuffleArray([
      'Martin Scorsese',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Martin Scorsese',
  },
  {
    question: "Qui a réalisé le film 'Once Upon a Time in Hollywood'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'The Hateful Eight'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'Inglourious Basterds'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'Kill Bill: Vol. 1'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'Kill Bill: Vol. 2'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'Reservoir Dogs'?",
    options: shuffleArray([
      'Quentin Tarantino',
      'David Fincher',
      'Christopher Nolan',
    ]),
    answer: 'Quentin Tarantino',
  },
  {
    question: "Qui a réalisé le film 'The Social Network'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Zodiac'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'The Girl with the Dragon Tattoo'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Gone Girl'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'The Curious Case of Benjamin Button'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Fight Club'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Se7en'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'The Game'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Panic Room'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Alien 3'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Mank'?",
    options: shuffleArray([
      'David Fincher',
      'Christopher Nolan',
      'Quentin Tarantino',
    ]),
    answer: 'David Fincher',
  },
  {
    question: "Qui a réalisé le film 'Oldboy'?",
    options: shuffleArray(['Park Chan-wook', 'Bong Joon-ho', 'Kim Ki-duk']),
    answer: 'Park Chan-wook',
  },
  {
    question: "Qui a réalisé le film 'Parasite'?",
    options: shuffleArray(['Bong Joon-ho', 'Park Chan-wook', 'Lee Chang-dong']),
    answer: 'Bong Joon-ho',
  },
  {
    question: "Qui a réalisé le film 'Crouching Tiger, Hidden Dragon'?",
    options: shuffleArray(['Ang Lee', 'John Woo', 'Wong Kar-wai']),
    answer: 'Ang Lee',
  },
  {
    question: "Qui a réalisé le film 'In the Mood for Love'?",
    options: shuffleArray(['Wong Kar-wai', 'Ang Lee', 'John Woo']),
    answer: 'Wong Kar-wai',
  },
  {
    question: "Qui a réalisé le film 'Hero'?",
    options: shuffleArray(['Zhang Yimou', 'Chen Kaige', 'Ang Lee']),
    answer: 'Zhang Yimou',
  },
  {
    question: "Qui a réalisé le film 'The Grandmaster'?",
    options: shuffleArray(['Wong Kar-wai', 'Ang Lee', 'John Woo']),
    answer: 'Wong Kar-wai',
  },
  {
    question: "Qui a réalisé le film 'The Handmaiden'?",
    options: shuffleArray(['Park Chan-wook', 'Bong Joon-ho', 'Kim Ki-duk']),
    answer: 'Park Chan-wook',
  },
  {
    question: "Qui a réalisé le film 'The Host'?",
    options: shuffleArray(['Bong Joon-ho', 'Park Chan-wook', 'Lee Chang-dong']),
    answer: 'Bong Joon-ho',
  },
  {
    question: "Qui a réalisé le film 'Memories of Murder'?",
    options: shuffleArray(['Bong Joon-ho', 'Park Chan-wook', 'Kim Ki-duk']),
    answer: 'Bong Joon-ho',
  },
  {
    question: "Qui a réalisé le film 'Yi Yi'?",
    options: shuffleArray(['Edward Yang', 'Hou Hsiao-hsien', 'Ang Lee']),
    answer: 'Edward Yang',
  },
  {
    question: "Qui a réalisé le film 'A Touch of Sin'?",
    options: shuffleArray(['Jia Zhangke', 'Zhang Yimou', 'Chen Kaige']),
    answer: 'Jia Zhangke',
  },
  {
    question: "Qui a réalisé le film 'City of God'?",
    options: shuffleArray([
      'Fernando Meirelles',
      'Walter Salles',
      'José Padilha',
    ]),
    answer: 'Fernando Meirelles',
  },
  {
    question: "Qui a réalisé le film 'Tsotsi'?",
    options: shuffleArray(['Gavin Hood', 'Neill Blomkamp', 'John Trengove']),
    answer: 'Gavin Hood',
  },
  {
    question: "Qui a réalisé le film 'District 9'?",
    options: shuffleArray(['Neill Blomkamp', 'Gavin Hood', 'John Trengove']),
    answer: 'Neill Blomkamp',
  },
  {
    question: "Qui a réalisé le film 'The Gods Must Be Crazy'?",
    options: shuffleArray(['Jamie Uys', 'Gavin Hood', 'Neill Blomkamp']),
    answer: 'Jamie Uys',
  },
  {
    question: "Qui a réalisé le film 'Timbuktu'?",
    options: shuffleArray([
      'Abderrahmane Sissako',
      'Mahamat-Saleh Haroun',
      'Moussa Touré',
    ]),
    answer: 'Abderrahmane Sissako',
  },
  {
    question: "Qui a réalisé le film 'Moolaadé'?",
    options: shuffleArray([
      'Ousmane Sembène',
      'Abderrahmane Sissako',
      'Mahamat-Saleh Haroun',
    ]),
    answer: 'Ousmane Sembène',
  },
  {
    question: "Qui a réalisé le film 'Black Girl'?",
    options: shuffleArray([
      'Ousmane Sembène',
      'Abderrahmane Sissako',
      'Mahamat-Saleh Haroun',
    ]),
    answer: 'Ousmane Sembène',
  },
  {
    question: "Qui a réalisé le film 'Yeelen'?",
    options: shuffleArray([
      'Souleymane Cissé',
      'Ousmane Sembène',
      'Abderrahmane Sissako',
    ]),
    answer: 'Souleymane Cissé',
  },
  {
    question: "Qui a réalisé le film 'The Wedding Party'?",
    options: shuffleArray(['Kemi Adetiba', 'Kunle Afolayan', 'Izu Ojukwu']),
    answer: 'Kemi Adetiba',
  },
  {
    question: "Qui a réalisé le film 'October 1'?",
    options: shuffleArray(['Kunle Afolayan', 'Kemi Adetiba', 'Izu Ojukwu']),
    answer: 'Kunle Afolayan',
  },
]

export default Questions_Realisateurs
