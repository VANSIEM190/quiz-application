import shuffleArray from '../../../utils/shuffleArray.js'

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
]

export default Questions_Realisateurs
