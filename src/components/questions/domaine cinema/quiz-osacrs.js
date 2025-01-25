import shuffleArray from '../shuffleArray/shuffleArray.js'

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
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1992 ?",
    options: shuffleArray(['Unforgiven', 'A Few Good Men', 'Scent of a Woman']),
    answer: 'Unforgiven',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 1991 ?",
    options: shuffleArray([
      'Anthony Hopkins',
      'Warren Beatty',
      'Robert De Niro',
    ]),
    answer: 'Anthony Hopkins',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1990 ?",
    options: shuffleArray([
      'Dances with Wolves',
      'Goodfellas',
      'The Godfather Part III',
    ]),
    answer: 'Dances with Wolves',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 1989 ?",
    options: shuffleArray([
      'Jessica Tandy',
      'Michelle Pfeiffer',
      'Isabelle Adjani',
    ]),
    answer: 'Jessica Tandy',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1988 ?",
    options: shuffleArray([
      'Rain Man',
      'Dangerous Liaisons',
      'Mississippi Burning',
    ]),
    answer: 'Rain Man',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 1987 ?",
    options: shuffleArray([
      'Michael Douglas',
      'Robin Williams',
      'William Hurt',
    ]),
    answer: 'Michael Douglas',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1986 ?",
    options: shuffleArray(['Platoon', 'Hannah and Her Sisters', 'The Mission']),
    answer: 'Platoon',
  },
  {
    question: "Qui a remporté l'Oscar de la meilleure actrice en 1985 ?",
    options: shuffleArray([
      'Geraldine Page',
      'Whoopi Goldberg',
      'Meryl Streep',
    ]),
    answer: 'Geraldine Page',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1984 ?",
    options: shuffleArray([
      'Amadeus',
      'The Killing Fields',
      'A Passage to India',
    ]),
    answer: 'Amadeus',
  },
  {
    question: "Qui a remporté l'Oscar du meilleur acteur en 1983 ?",
    options: shuffleArray(['Robert Duvall', 'Tom Conti', 'Albert Finney']),
    answer: 'Robert Duvall',
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1982 ?",
    options: shuffleArray(['Gandhi', 'E.T. the Extra-Terrestrial', 'Tootsie']),
    answer: 'Gandhi',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2021 ?",
    options: shuffleArray(['My Octopus Teacher', 'Crip Camp', 'Time']),
    answer: 'My Octopus Teacher',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2021 ?",
    options: shuffleArray(['Soul', 'Mank', 'Minari']),
    answer: 'Soul',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2020 ?",
    options: shuffleArray(['American Factory', 'The Cave', 'For Sama']),
    answer: 'American Factory',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2020 ?",
    options: shuffleArray(['Joker', 'Little Women', 'Marriage Story']),
    answer: 'Joker',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2019 ?",
    options: shuffleArray([
      'Free Solo',
      'Hale County This Morning, This Evening',
      'Minding the Gap',
    ]),
    answer: 'Free Solo',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2019 ?",
    options: shuffleArray([
      'Black Panther',
      'BlacKkKlansman',
      'If Beale Street Could Talk',
    ]),
    answer: 'Black Panther',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2018 ?",
    options: shuffleArray([
      'Icarus',
      'Abacus: Small Enough to Jail',
      'Faces Places',
    ]),
    answer: 'Icarus',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2018 ?",
    options: shuffleArray(['The Shape of Water', 'Dunkirk', 'Phantom Thread']),
    answer: 'The Shape of Water',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2017 ?",
    options: shuffleArray(['O.J.: Made in America', '13th', 'Fire at Sea']),
    answer: 'O.J.: Made in America',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2017 ?",
    options: shuffleArray(['La La Land', 'Lion', 'Moonlight']),
    answer: 'La La Land',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2016 ?",
    options: shuffleArray(['Amy', 'Cartel Land', 'The Look of Silence']),
    answer: 'Amy',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2016 ?",
    options: shuffleArray(['The Hateful Eight', 'Bridge of Spies', 'Carol']),
    answer: 'The Hateful Eight',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2015 ?",
    options: shuffleArray([
      'Citizenfour',
      'Finding Vivian Maier',
      'Last Days in Vietnam',
    ]),
    answer: 'Citizenfour',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2015 ?",
    options: shuffleArray([
      'The Grand Budapest Hotel',
      'The Imitation Game',
      'Interstellar',
    ]),
    answer: 'The Grand Budapest Hotel',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2014 ?",
    options: shuffleArray([
      '20 Feet from Stardom',
      'The Act of Killing',
      'Cutie and the Boxer',
    ]),
    answer: '20 Feet from Stardom',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2014 ?",
    options: shuffleArray(['Gravity', 'Her', 'Philomena']),
    answer: 'Gravity',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2013 ?",
    options: shuffleArray([
      'Searching for Sugar Man',
      'The Gatekeepers',
      'How to Survive a Plague',
    ]),
    answer: 'Searching for Sugar Man',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2013 ?",
    options: shuffleArray(['Life of Pi', 'Argo', 'Lincoln']),
    answer: 'Life of Pi',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2012 ?",
    options: shuffleArray([
      'Undefeated',
      'Hell and Back Again',
      'If a Tree Falls',
    ]),
    answer: 'Undefeated',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2012 ?",
    options: shuffleArray(['The Artist', 'Hugo', 'Tinker Tailor Soldier Spy']),
    answer: 'The Artist',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2011 ?",
    options: shuffleArray([
      'Inside Job',
      'Exit Through the Gift Shop',
      'Restrepo',
    ]),
    answer: 'Inside Job',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2011 ?",
    options: shuffleArray([
      'The Social Network',
      'Inception',
      "The King's Speech",
    ]),
    answer: 'The Social Network',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2010 ?",
    options: shuffleArray(['The Cove', 'Burma VJ', 'Food, Inc.']),
    answer: 'The Cove',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2010 ?",
    options: shuffleArray(['Up', 'Avatar', 'Fantastic Mr. Fox']),
    answer: 'Up',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2009 ?",
    options: shuffleArray([
      'Man on Wire',
      'Encounters at the End of the World',
      'The Garden',
    ]),
    answer: 'Man on Wire',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2009 ?",
    options: shuffleArray([
      'Slumdog Millionaire',
      'The Curious Case of Benjamin Button',
      'Wall-E',
    ]),
    answer: 'Slumdog Millionaire',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2008 ?",
    options: shuffleArray([
      'Taxi to the Dark Side',
      'No End in Sight',
      'Operation Homecoming',
    ]),
    answer: 'Taxi to the Dark Side',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2008 ?",
    options: shuffleArray(['Atonement', 'The Kite Runner', 'Ratatouille']),
    answer: 'Atonement',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2007 ?",
    options: shuffleArray([
      'An Inconvenient Truth',
      'Deliver Us from Evil',
      'Iraq in Fragments',
    ]),
    answer: 'An Inconvenient Truth',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2007 ?",
    options: shuffleArray(['Babel', 'The Good German', "Pan's Labyrinth"]),
    answer: 'Babel',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2006 ?",
    options: shuffleArray([
      'March of the Penguins',
      "Darwin's Nightmare', 'Enron: The Smartest Guys in the Room",
    ]),
    answer: 'March of the Penguins',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2006 ?",
    options: shuffleArray([
      'Brokeback Mountain',
      'Memoirs of a Geisha',
      'Pride & Prejudice',
    ]),
    answer: 'Brokeback Mountain',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2005 ?",
    options: shuffleArray([
      'Born into Brothels',
      'The Story of the Weeping Camel',
      'Super Size Me',
    ]),
    answer: 'Born into Brothels',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2005 ?",
    options: shuffleArray([
      'Finding Neverland',
      'Harry Potter and the Prisoner of Azkaban',
      'The Village',
    ]),
    answer: 'Finding Neverland',
  },
  {
    question:
      "Quel documentaire a remporté l'Oscar du meilleur documentaire en 2004 ?",
    options: shuffleArray([
      'The Fog of War',
      'Balseros',
      'Capturing the Friedmans',
    ]),
    answer: 'The Fog of War',
  },
  {
    question:
      "Quel film a remporté l'Oscar de la meilleure musique originale en 2004 ?",
    options: shuffleArray([
      'The Lord of the Rings: The Return of the King',
      'Big Fish',
      'Cold Mountain',
    ]),
    answer: 'The Lord of the Rings: The Return of the King',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2021 ?",
    options: shuffleArray([
      'Two Distant Strangers',
      'Feeling Through',
      'The Letter Room',
    ]),
    answer: 'Two Distant Strangers',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2021 ?",
    options: shuffleArray(['Tenet', 'The Midnight Sky', 'Mulan']),
    answer: 'Tenet',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2020 ?",
    options: shuffleArray([
      'The Neighbor’s Window',
      'Brotherhood',
      'Nefta Football Club',
    ]),
    answer: 'The Neighbor’s Window',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2020 ?",
    options: shuffleArray(['1917', 'Avengers: Endgame', 'The Lion King']),
    answer: '1917',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2019 ?",
    options: shuffleArray(['Skin', 'Detainment', 'Fauve']),
    answer: 'Skin',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2019 ?",
    options: shuffleArray([
      'First Man',
      'Avengers: Infinity War',
      'Ready Player One',
    ]),
    answer: 'First Man',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2018 ?",
    options: shuffleArray([
      'The Silent Child',
      'DeKalb Elementary',
      'My Nephew Emmett',
    ]),
    answer: 'The Silent Child',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2018 ?",
    options: shuffleArray([
      'Blade Runner 2049',
      'Guardians of the Galaxy Vol. 2',
      'Kong: Skull Island',
    ]),
    answer: 'Blade Runner 2049',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2017 ?",
    options: shuffleArray(['Sing', 'Ennemis Intérieurs', 'La Femme et le TGV']),
    answer: 'Sing',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2017 ?",
    options: shuffleArray([
      'The Jungle Book',
      'Doctor Strange',
      'Rogue One: A Star Wars Story',
    ]),
    answer: 'The Jungle Book',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2016 ?",
    options: shuffleArray(['Stutterer', 'Ave Maria', 'Day One']),
    answer: 'Stutterer',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2016 ?",
    options: shuffleArray(['Ex Machina', 'Mad Max: Fury Road', 'The Martian']),
    answer: 'Ex Machina',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2015 ?",
    options: shuffleArray(['The Phone Call', 'Aya', 'Boogaloo and Graham']),
    answer: 'The Phone Call',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2015 ?",
    options: shuffleArray([
      'Interstellar',
      'Dawn of the Planet of the Apes',
      'Guardians of the Galaxy',
    ]),
    answer: 'Interstellar',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2014 ?",
    options: shuffleArray([
      'Helium',
      'Aquel No Era Yo',
      'Avant Que De Tout Perdre',
    ]),
    answer: 'Helium',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2014 ?",
    options: shuffleArray([
      'Gravity',
      'The Hobbit: The Desolation of Smaug',
      'Iron Man 3',
    ]),
    answer: 'Gravity',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2013 ?",
    options: shuffleArray(['Curfew', 'Death of a Shadow', 'Henry']),
    answer: 'Curfew',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2013 ?",
    options: shuffleArray([
      'Life of Pi',
      'The Hobbit: An Unexpected Journey',
      'The Avengers',
    ]),
    answer: 'Life of Pi',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2012 ?",
    options: shuffleArray(['The Shore', 'Pentecost', 'Raju']),
    answer: 'The Shore',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2012 ?",
    options: shuffleArray([
      'Hugo',
      'Harry Potter and the Deathly Hallows – Part 2',
      'Transformers: Dark of the Moon',
    ]),
    answer: 'Hugo',
  },
  {
    question:
      "Quel court métrage a remporté l'Oscar du meilleur court métrage en 2011 ?",
    options: shuffleArray(['God of Love', 'The Confession', 'Wish 143']),
    answer: 'God of Love',
  },
  {
    question:
      "Quel film a remporté l'Oscar des meilleurs effets visuels en 2011 ?",
    options: shuffleArray([
      'Inception',
      'Alice in Wonderland',
      'Harry Potter and the Deathly Hallows – Part 1',
    ]),
    answer: 'Inception',
  },
  {
    question:
      "Quel documentaire africain a remporté l'Oscar du meilleur documentaire en 2021 ?",
    options: shuffleArray(['My Octopus Teacher', 'Crip Camp', 'Time']),
    answer: 'My Octopus Teacher',
  },
  {
    question:
      "Quel documentaire africain a remporté l'Oscar du meilleur documentaire en 2020 ?",
    options: shuffleArray(['American Factory', 'The Cave', 'For Sama']),
    answer: 'American Factory',
  },
  {
    question:
      "Quel documentaire africain a remporté l'Oscar du meilleur documentaire en 2019 ?",
    options: shuffleArray([
      'Free Solo',
      'Hale County This Morning, This Evening',
      'Minding the Gap',
    ]),
    answer: 'Free Solo',
  },
]

export default Questions_Oscars
