import shuffleArray from '../../../utils/shuffleArray.js'

const Questions_Oscars = [
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2020 ?",
    options: shuffleArray([
      'Parasite',
      '1917',
      'Once Upon a Time in Hollywood',
    ]),
    answer: 'Parasite',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 2019 ?",
    options: shuffleArray([
      'Joaquin Phoenix',
      'Leonardo DiCaprio',
      'Adam Driver',
    ]),
    answer: 'Joaquin Phoenix',
  },
  {
    question:
      "Quel film a remporté l'Oscar du meilleur film d'animation en 2018 ?",
    options: shuffleArray([
      'Coco',
      'Les Indestructibles 2',
      'Spider-Man: New Generation',
    ]),
    answer: 'Coco',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 2017 ?",
    options: shuffleArray(['Emma Stone', 'Meryl Streep', 'Natalie Portman']),
    answer: 'Emma Stone',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2016 ?",
    options: shuffleArray(['Spotlight', 'The Revenant', 'Mad Max: Fury Road']),
    answer: 'Spotlight',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur réalisateur en 2015 ?",
    options: shuffleArray([
      'Alejandro G. Iñárritu',
      'Richard Linklater',
      'Wes Anderson',
    ]),
    answer: 'Alejandro G. Iñárritu',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2014 ?",
    options: shuffleArray(['12 Years a Slave', 'Gravity', 'American Hustle']),
    answer: '12 Years a Slave',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 2013 ?",
    options: shuffleArray([
      'Jennifer Lawrence',
      'Jessica Chastain',
      'Naomi Watts',
    ]),
    answer: 'Jennifer Lawrence',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2012 ?",
    options: shuffleArray(['The Artist', 'Hugo', 'Midnight in Paris']),
    answer: 'The Artist',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 2011 ?",
    options: shuffleArray(['Colin Firth', 'Jesse Eisenberg', 'James Franco']),
    answer: 'Colin Firth',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2010 ?",
    options: shuffleArray([
      'The Hurt Locker',
      'Avatar',
      'Inglourious Basterds',
    ]),
    answer: 'The Hurt Locker',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 2009 ?",
    options: shuffleArray(['Sandra Bullock', 'Meryl Streep', 'Carey Mulligan']),
    answer: 'Sandra Bullock',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2008 ?",
    options: shuffleArray([
      'Slumdog Millionaire',
      'The Curious Case of Benjamin Button',
      'Milk',
    ]),
    answer: 'Slumdog Millionaire',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 2007 ?",
    options: shuffleArray([
      'Daniel Day-Lewis',
      'George Clooney',
      'Johnny Depp',
    ]),
    answer: 'Daniel Day-Lewis',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2006 ?",
    options: shuffleArray(['The Departed', 'Babel', 'Letters from Iwo Jima']),
    answer: 'The Departed',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 2005 ?",
    options: shuffleArray([
      'Reese Witherspoon',
      'Felicity Huffman',
      'Charlize Theron',
    ]),
    answer: 'Reese Witherspoon',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2004 ?",
    options: shuffleArray([
      'Million Dollar Baby',
      'The Aviator',
      'Finding Neverland',
    ]),
    answer: 'Million Dollar Baby',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 2003 ?",
    options: shuffleArray(['Sean Penn', 'Johnny Depp', 'Ben Kingsley']),
    answer: 'Sean Penn',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2002 ?",
    options: shuffleArray(['Chicago', 'Gangs of New York', 'The Pianist']),
    answer: 'Chicago',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 2001 ?",
    options: shuffleArray(['Halle Berry', 'Nicole Kidman', 'Renée Zellweger']),
    answer: 'Halle Berry',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 2000 ?",
    options: shuffleArray([
      'Gladiator',
      'Crouching Tiger, Hidden Dragon',
      'Erin Brockovich',
    ]),
    answer: 'Gladiator',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 1999 ?",
    options: shuffleArray([
      'Kevin Spacey',
      'Russell Crowe',
      'Denzel Washington',
    ]),
    answer: 'Kevin Spacey',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1998 ?",
    options: shuffleArray([
      'Shakespeare in Love',
      'Saving Private Ryan',
      'The Thin Red Line',
    ]),
    answer: 'Shakespeare in Love',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 1997 ?",
    options: shuffleArray(['Helen Hunt', 'Judi Dench', 'Kate Winslet']),
    answer: 'Helen Hunt',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1996 ?",
    options: shuffleArray(['The English Patient', 'Fargo', 'Jerry Maguire']),
    answer: 'The English Patient',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 1995 ?",
    options: shuffleArray(['Nicolas Cage', 'Anthony Hopkins', 'Sean Penn']),
    answer: 'Nicolas Cage',
  },
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
    question: "Qui a remporté l'Oscar de la meilleure actrice en 1993 ?",
    options: shuffleArray(['Holly Hunter', 'Angela Bassett', 'Emma Thompson']),
    answer: 'Holly Hunter',
  },
]

export default Questions_Oscars
