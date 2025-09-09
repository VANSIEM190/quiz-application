import shuffleArray from '../../../utils/shuffleArray.js'

const Questions_Acteurs = [
  {
    question: "Quel acteur a joué le rôle principal dans le film 'Titanic'?",
    options: shuffleArray([
      'Leonardo DiCaprio',
      'Brad Pitt',
      'Tom Hanks',
      'Johnny Depp',
    ]),
    answer: 'Leonardo DiCaprio',
  },
  {
    question: "Quel acteur est connu pour son rôle dans 'Mission Impossible'?",
    options: shuffleArray([
      'Tom Cruise',
      'Matt Damon',
      'Keanu Reeves',
      'Robert Downey Jr.',
    ]),
    answer: 'Tom Cruise',
  },
  {
    question: "Quel acteur a joué le rôle de 'Forrest Gump'?",
    options: shuffleArray([
      'Tom Hanks',
      'Robin Williams',
      'Harrison Ford',
      'Morgan Freeman',
    ]),
    answer: 'Tom Hanks',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Jack Sparrow' dans 'Pirates des Caraïbes'?",
    options: shuffleArray([
      'Johnny Depp',
      'Orlando Bloom',
      'Hugh Jackman',
      'Chris Hemsworth',
    ]),
    answer: 'Johnny Depp',
  },
  {
    question: "Quel acteur a joué le rôle de 'Iron Man'?",
    options: shuffleArray([
      'Robert Downey Jr.',
      'Chris Evans',
      'Mark Ruffalo',
      'Chris Pratt',
    ]),
    answer: 'Robert Downey Jr.',
  },
  {
    question: "Quel acteur a joué le rôle de 'Neo' dans 'Matrix'?",
    options: shuffleArray([
      'Keanu Reeves',
      'Laurence Fishburne',
      'Hugo Weaving',
      'Will Smith',
    ]),
    answer: 'Keanu Reeves',
  },
  {
    question: "Quel acteur a joué le rôle de 'Wolverine' dans 'X-Men'?",
    options: shuffleArray([
      'Hugh Jackman',
      'Patrick Stewart',
      'Ian McKellen',
      'James McAvoy',
    ]),
    answer: 'Hugh Jackman',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'James Bond' dans 'Casino Royale'?",
    options: shuffleArray([
      'Daniel Craig',
      'Sean Connery',
      'Pierce Brosnan',
      'Roger Moore',
    ]),
    answer: 'Daniel Craig',
  },
  {
    question: "Quel acteur a joué le rôle de 'Batman' dans 'The Dark Knight'?",
    options: shuffleArray([
      'Christian Bale',
      'Ben Affleck',
      'Michael Keaton',
      'George Clooney',
    ]),
    answer: 'Christian Bale',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Sherlock Holmes' dans le film de 2009?",
    options: shuffleArray([
      'Robert Downey Jr.',
      'Benedict Cumberbatch',
      'Jude Law',
      'Martin Freeman',
    ]),
    answer: 'Robert Downey Jr.',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Gandalf' dans 'Le Seigneur des Anneaux'?",
    options: shuffleArray([
      'Ian McKellen',
      'Christopher Lee',
      'Viggo Mortensen',
      'Elijah Wood',
    ]),
    answer: 'Ian McKellen',
  },
  {
    question: "Quel acteur a joué le rôle de 'Indiana Jones'?",
    options: shuffleArray([
      'Harrison Ford',
      'Tom Selleck',
      'Sean Connery',
      'Mark Hamill',
    ]),
    answer: 'Harrison Ford',
  },
  {
    question: "Quel acteur a joué le rôle de 'Rocky Balboa'?",
    options: shuffleArray([
      'Sylvester Stallone',
      'Arnold Schwarzenegger',
      'Bruce Willis',
      'Jean-Claude Van Damme',
    ]),
    answer: 'Sylvester Stallone',
  },
  {
    question: "Quel acteur a joué le rôle de 'John McClane' dans 'Die Hard'?",
    options: shuffleArray([
      'Bruce Willis',
      'Mel Gibson',
      'Tommy Lee Jones',
      'Nicolas Cage',
    ]),
    answer: 'Bruce Willis',
  },
  {
    question: "Quel acteur a joué le rôle de 'Maximus' dans 'Gladiator'?",
    options: shuffleArray([
      'Russell Crowe',
      'Joaquin Phoenix',
      'Gerard Butler',
      'Brad Pitt',
    ]),
    answer: 'Russell Crowe',
  },
  {
    question: "Quel acteur a joué le rôle de 'Tony Montana' dans 'Scarface'?",
    options: shuffleArray([
      'Al Pacino',
      'Robert De Niro',
      'Joe Pesci',
      'Marlon Brando',
    ]),
    answer: 'Al Pacino',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Vito Corleone' dans 'Le Parrain'?",
    options: shuffleArray([
      'Marlon Brando',
      'Al Pacino',
      'Robert De Niro',
      'James Caan',
    ]),
    answer: 'Marlon Brando',
  },
  {
    question: "Quel acteur a joué le rôle de 'Tyler Durden' dans 'Fight Club'?",
    options: shuffleArray([
      'Brad Pitt',
      'Edward Norton',
      'Jared Leto',
      'Helena Bonham Carter',
    ]),
    answer: 'Brad Pitt',
  },
  {
    question: "Quel acteur a joué le rôle de 'Joker' dans 'The Dark Knight'?",
    options: shuffleArray([
      'Heath Ledger',
      'Joaquin Phoenix',
      'Jack Nicholson',
      'Jared Leto',
    ]),
    answer: 'Heath Ledger',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Hannibal Lecter' dans 'Le Silence des Agneaux'?",
    options: shuffleArray([
      'Anthony Hopkins',
      'Brian Cox',
      'Mads Mikkelsen',
      'Ralph Fiennes',
    ]),
    answer: 'Anthony Hopkins',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Jack Torrance' dans 'The Shining'?",
    options: shuffleArray([
      'Jack Nicholson',
      'Robert De Niro',
      'Al Pacino',
      'Dustin Hoffman',
    ]),
    answer: 'Jack Nicholson',
  },
  {
    question: "Quel acteur a joué le rôle de 'Rambo'?",
    options: shuffleArray([
      'Sylvester Stallone',
      'Arnold Schwarzenegger',
      'Bruce Willis',
      'Chuck Norris',
    ]),
    answer: 'Sylvester Stallone',
  },
  {
    question: "Quel acteur a joué le rôle de 'Terminator'?",
    options: shuffleArray([
      'Arnold Schwarzenegger',
      'Sylvester Stallone',
      'Bruce Willis',
      'Jean-Claude Van Damme',
    ]),
    answer: 'Arnold Schwarzenegger',
  },
  {
    question: "Quel acteur a joué le rôle de 'Jason Bourne'?",
    options: shuffleArray([
      'Matt Damon',
      'Jeremy Renner',
      'Tom Cruise',
      'Brad Pitt',
    ]),
    answer: 'Matt Damon',
  },
  {
    question: "Quel acteur a joué le rôle de 'Captain Jack Sparrow'?",
    options: shuffleArray([
      'Johnny Depp',
      'Orlando Bloom',
      'Geoffrey Rush',
      'Keira Knightley',
    ]),
    answer: 'Johnny Depp',
  },
]

export default Questions_Acteurs
