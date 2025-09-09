import shuffleArray from '../../../utils/shuffleArray.js'

const Questions_Golden_Globe = [
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2020 ?',
    options: shuffleArray(['1917', 'Joker', 'The Irishman']),
    answer: '1917',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2020 ?',
    options: shuffleArray(['Joaquin Phoenix', 'Adam Driver', 'Christian Bale']),
    answer: 'Joaquin Phoenix',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2020 ?',
    options: shuffleArray([
      'Once Upon a Time in Hollywood',
      'Rocketman',
      'Knives Out',
    ]),
    answer: 'Once Upon a Time in Hollywood',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2020 ?',
    options: shuffleArray([
      'Renée Zellweger',
      'Charlize Theron',
      'Scarlett Johansson',
    ]),
    answer: 'Renée Zellweger',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2020 ?',
    options: shuffleArray([
      'Sam Mendes',
      'Quentin Tarantino',
      'Martin Scorsese',
    ]),
    answer: 'Sam Mendes',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2019 ?',
    options: shuffleArray([
      'Bohemian Rhapsody',
      'Black Panther',
      'A Star Is Born',
    ]),
    answer: 'Bohemian Rhapsody',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2019 ?',
    options: shuffleArray(['Rami Malek', 'Bradley Cooper', 'Willem Dafoe']),
    answer: 'Rami Malek',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2019 ?',
    options: shuffleArray([
      'Green Book',
      'The Favourite',
      'Mary Poppins Returns',
    ]),
    answer: 'Green Book',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2019 ?',
    options: shuffleArray(['Glenn Close', 'Lady Gaga', 'Nicole Kidman']),
    answer: 'Glenn Close',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2019 ?',
    options: shuffleArray([
      'Alfonso Cuarón',
      'Bradley Cooper',
      'Peter Farrelly',
    ]),
    answer: 'Alfonso Cuarón',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2018 ?',
    options: shuffleArray([
      'Three Billboards Outside Ebbing, Missouri',
      'The Shape of Water',
      'Dunkirk',
    ]),
    answer: 'Three Billboards Outside Ebbing, Missouri',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2018 ?',
    options: shuffleArray([
      'Gary Oldman',
      'Timothée Chalamet',
      'Daniel Day-Lewis',
    ]),
    answer: 'Gary Oldman',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2018 ?',
    options: shuffleArray(['Lady Bird', 'The Disaster Artist', 'Get Out']),
    answer: 'Lady Bird',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2018 ?',
    options: shuffleArray([
      'Frances McDormand',
      'Sally Hawkins',
      'Meryl Streep',
    ]),
    answer: 'Frances McDormand',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2018 ?',
    options: shuffleArray([
      'Guillermo del Toro',
      'Christopher Nolan',
      'Ridley Scott',
    ]),
    answer: 'Guillermo del Toro',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2017 ?',
    options: shuffleArray([
      'Moonlight',
      'Manchester by the Sea',
      'Hacksaw Ridge',
    ]),
    answer: 'Moonlight',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2017 ?',
    options: shuffleArray([
      'Casey Affleck',
      'Denzel Washington',
      'Andrew Garfield',
    ]),
    answer: 'Casey Affleck',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2017 ?',
    options: shuffleArray([
      'La La Land',
      'Deadpool',
      'Florence Foster Jenkins',
    ]),
    answer: 'La La Land',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2017 ?',
    options: shuffleArray(['Isabelle Huppert', 'Natalie Portman', 'Amy Adams']),
    answer: 'Isabelle Huppert',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2017 ?',
    options: shuffleArray(['Damien Chazelle', 'Mel Gibson', 'Barry Jenkins']),
    answer: 'Damien Chazelle',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2016 ?',
    options: shuffleArray(['The Revenant', 'Mad Max: Fury Road', 'Room']),
    answer: 'The Revenant',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2016 ?',
    options: shuffleArray([
      'Leonardo DiCaprio',
      'Bryan Cranston',
      'Michael Fassbender',
    ]),
    answer: 'Leonardo DiCaprio',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2016 ?',
    options: shuffleArray(['The Martian', 'Joy', 'Spy']),
    answer: 'The Martian',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2016 ?',
    options: shuffleArray(['Brie Larson', 'Cate Blanchett', 'Rooney Mara']),
    answer: 'Brie Larson',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2016 ?',
    options: shuffleArray([
      'Alejandro G. Iñárritu',
      'George Miller',
      'Ridley Scott',
    ]),
    answer: 'Alejandro G. Iñárritu',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2015 ?',
    options: shuffleArray(['Boyhood', 'Selma', 'The Imitation Game']),
    answer: 'Boyhood',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2015 ?',
    options: shuffleArray([
      'Eddie Redmayne',
      'Steve Carell',
      'Benedict Cumberbatch',
    ]),
    answer: 'Eddie Redmayne',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2015 ?',
    options: shuffleArray([
      'The Grand Budapest Hotel',
      'Birdman',
      'Into the Woods',
    ]),
    answer: 'The Grand Budapest Hotel',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2015 ?',
    options: shuffleArray([
      'Julianne Moore',
      'Reese Witherspoon',
      'Rosamund Pike',
    ]),
    answer: 'Julianne Moore',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2015 ?',
    options: shuffleArray([
      'Richard Linklater',
      'Alejandro G. Iñárritu',
      'Wes Anderson',
    ]),
    answer: 'Richard Linklater',
  },
]

export default Questions_Golden_Globe
