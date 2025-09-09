import shuffleArray from '../../../utils/shuffleArray'

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
]

export default Questions_Films
