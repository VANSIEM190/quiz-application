import shuffleArray from '../shuffleArray/shuffleArray.js'

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
  {
    question: "Quel acteur a joué le rôle de 'Harry Potter'?",
    options: shuffleArray([
      'Daniel Radcliffe',
      'Rupert Grint',
      'Elijah Wood',
      'Tom Felton',
    ]),
    answer: 'Daniel Radcliffe',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Frodo Baggins' dans 'Le Seigneur des Anneaux'?",
    options: shuffleArray([
      'Elijah Wood',
      'Sean Astin',
      'Orlando Bloom',
      'Viggo Mortensen',
    ]),
    answer: 'Elijah Wood',
  },
  {
    question: "Quel acteur a joué le rôle de 'James Bond' dans 'Skyfall'?",
    options: shuffleArray([
      'Daniel Craig',
      'Sean Connery',
      'Pierce Brosnan',
      'Roger Moore',
    ]),
    answer: 'Daniel Craig',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Spider-Man' dans le film de 2002?",
    options: shuffleArray([
      'Tobey Maguire',
      'Andrew Garfield',
      'Tom Holland',
      'James Franco',
    ]),
    answer: 'Tobey Maguire',
  },
  {
    question: "Quel acteur a joué le rôle de 'Superman' dans 'Man of Steel'?",
    options: shuffleArray([
      'Henry Cavill',
      'Brandon Routh',
      'Christopher Reeve',
      'Tom Welling',
    ]),
    answer: 'Henry Cavill',
  },
  {
    question: "Quel acteur a joué le rôle de 'Deadpool'?",
    options: shuffleArray([
      'Ryan Reynolds',
      'Hugh Jackman',
      'Chris Evans',
      'Robert Downey Jr.',
    ]),
    answer: 'Ryan Reynolds',
  },
  {
    question: "Quel acteur a joué le rôle de 'Doctor Strange'?",
    options: shuffleArray([
      'Benedict Cumberbatch',
      'Robert Downey Jr.',
      'Chris Hemsworth',
      'Tom Hiddleston',
    ]),
    answer: 'Benedict Cumberbatch',
  },
  {
    question: "Quel acteur a joué le rôle de 'Black Panther'?",
    options: shuffleArray([
      'Chadwick Boseman',
      'Michael B. Jordan',
      'Chris Evans',
      'Anthony Mackie',
    ]),
    answer: 'Chadwick Boseman',
  },
  {
    question: "Quel acteur a joué le rôle de 'Thor'?",
    options: shuffleArray([
      'Chris Hemsworth',
      'Tom Hiddleston',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Chris Hemsworth',
  },
  {
    question: "Quel acteur a joué le rôle de 'Hulk' dans 'The Avengers'?",
    options: shuffleArray([
      'Mark Ruffalo',
      'Edward Norton',
      'Eric Bana',
      'Lou Ferrigno',
    ]),
    answer: 'Mark Ruffalo',
  },
  {
    question: "Quel acteur a joué le rôle de 'Captain America'?",
    options: shuffleArray([
      'Chris Evans',
      'Sebastian Stan',
      'Anthony Mackie',
      'Robert Downey Jr.',
    ]),
    answer: 'Chris Evans',
  },
  {
    question: "Quel acteur a joué le rôle de 'Ant-Man'?",
    options: shuffleArray([
      'Paul Rudd',
      'Michael Douglas',
      'Evangeline Lilly',
      'Jeremy Renner',
    ]),
    answer: 'Paul Rudd',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Star-Lord' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Chris Pratt',
      'Dave Bautista',
      'Bradley Cooper',
      'Vin Diesel',
    ]),
    answer: 'Chris Pratt',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Drax' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Dave Bautista',
      'Chris Pratt',
      'Vin Diesel',
      'Bradley Cooper',
    ]),
    answer: 'Dave Bautista',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Rocket Raccoon' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Bradley Cooper',
      'Vin Diesel',
      'Chris Pratt',
      'Dave Bautista',
    ]),
    answer: 'Bradley Cooper',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Groot' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Vin Diesel',
      'Bradley Cooper',
      'Chris Pratt',
      'Dave Bautista',
    ]),
    answer: 'Vin Diesel',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Gamora' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Zoe Saldana',
      'Karen Gillan',
      'Pom Klementieff',
      'Elizabeth Debicki',
    ]),
    answer: 'Zoe Saldana',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Nebula' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Karen Gillan',
      'Zoe Saldana',
      'Pom Klementieff',
      'Elizabeth Debicki',
    ]),
    answer: 'Karen Gillan',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Mantis' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Pom Klementieff',
      'Zoe Saldana',
      'Karen Gillan',
      'Elizabeth Debicki',
    ]),
    answer: 'Pom Klementieff',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Yondu' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Michael Rooker',
      'Chris Pratt',
      'Dave Bautista',
      'Bradley Cooper',
    ]),
    answer: 'Michael Rooker',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Thanos' dans 'Avengers: Infinity War'?",
    options: shuffleArray([
      'Josh Brolin',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Josh Brolin',
  },
  {
    question: "Quel acteur a joué le rôle de 'Loki' dans 'Thor'?",
    options: shuffleArray([
      'Tom Hiddleston',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Tom Hiddleston',
  },
  {
    question: "Quel acteur a joué le rôle de 'Nick Fury' dans 'The Avengers'?",
    options: shuffleArray([
      'Samuel L. Jackson',
      'Robert Downey Jr.',
      'Chris Evans',
      'Mark Ruffalo',
    ]),
    answer: 'Samuel L. Jackson',
  },
  {
    question: "Quel acteur a joué le rôle de 'Hawkeye' dans 'The Avengers'?",
    options: shuffleArray([
      'Jeremy Renner',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Jeremy Renner',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Black Widow' dans 'The Avengers'?",
    options: shuffleArray([
      'Scarlett Johansson',
      'Elizabeth Olsen',
      'Cobie Smulders',
      'Gwyneth Paltrow',
    ]),
    answer: 'Scarlett Johansson',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Scarlet Witch' dans 'The Avengers'?",
    options: shuffleArray([
      'Elizabeth Olsen',
      'Scarlett Johansson',
      'Cobie Smulders',
      'Gwyneth Paltrow',
    ]),
    answer: 'Elizabeth Olsen',
  },
  {
    question: "Quel acteur a joué le rôle de 'Vision' dans 'The Avengers'?",
    options: shuffleArray([
      'Paul Bettany',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Paul Bettany',
  },
  {
    question: "Quel acteur a joué le rôle de 'Falcon' dans 'The Avengers'?",
    options: shuffleArray([
      'Anthony Mackie',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Anthony Mackie',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'War Machine' dans 'The Avengers'?",
    options: shuffleArray([
      'Don Cheadle',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Don Cheadle',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Doctor Strange' dans 'Doctor Strange'?",
    options: shuffleArray([
      'Benedict Cumberbatch',
      'Robert Downey Jr.',
      'Chris Hemsworth',
      'Tom Hiddleston',
    ]),
    answer: 'Benedict Cumberbatch',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Black Panther' dans 'Black Panther'?",
    options: shuffleArray([
      'Chadwick Boseman',
      'Michael B. Jordan',
      'Chris Evans',
      'Anthony Mackie',
    ]),
    answer: 'Chadwick Boseman',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Spider-Man' dans 'Spider-Man: Homecoming'?",
    options: shuffleArray([
      'Tom Holland',
      'Andrew Garfield',
      'Tobey Maguire',
      'James Franco',
    ]),
    answer: 'Tom Holland',
  },
  {
    question: "Quel acteur a joué le rôle de 'Ant-Man' dans 'Ant-Man'?",
    options: shuffleArray([
      'Paul Rudd',
      'Michael Douglas',
      'Evangeline Lilly',
      'Jeremy Renner',
    ]),
    answer: 'Paul Rudd',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Star-Lord' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Chris Pratt',
      'Dave Bautista',
      'Bradley Cooper',
      'Vin Diesel',
    ]),
    answer: 'Chris Pratt',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Drax' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Dave Bautista',
      'Chris Pratt',
      'Vin Diesel',
      'Bradley Cooper',
    ]),
    answer: 'Dave Bautista',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Rocket Raccoon' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Bradley Cooper',
      'Vin Diesel',
      'Chris Pratt',
      'Dave Bautista',
    ]),
    answer: 'Bradley Cooper',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Groot' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Vin Diesel',
      'Bradley Cooper',
      'Chris Pratt',
      'Dave Bautista',
    ]),
    answer: 'Vin Diesel',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Gamora' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Zoe Saldana',
      'Karen Gillan',
      'Pom Klementieff',
      'Elizabeth Debicki',
    ]),
    answer: 'Zoe Saldana',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Nebula' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Karen Gillan',
      'Zoe Saldana',
      'Pom Klementieff',
      'Elizabeth Debicki',
    ]),
    answer: 'Karen Gillan',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Mantis' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Pom Klementieff',
      'Zoe Saldana',
      'Karen Gillan',
      'Elizabeth Debicki',
    ]),
    answer: 'Pom Klementieff',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Yondu' dans 'Les Gardiens de la Galaxie'?",
    options: shuffleArray([
      'Michael Rooker',
      'Chris Pratt',
      'Dave Bautista',
      'Bradley Cooper',
    ]),
    answer: 'Michael Rooker',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Thanos' dans 'Avengers: Infinity War'?",
    options: shuffleArray([
      'Josh Brolin',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Josh Brolin',
  },
  {
    question: "Quel acteur a joué le rôle de 'Loki' dans 'Thor'?",
    options: shuffleArray([
      'Tom Hiddleston',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ]),
    answer: 'Tom Hiddleston',
  },
  {
    question:
      "Quel acteur a joué le rôle principal dans 'Slumdog Millionaire'?",
    options: shuffleArray([
      'Dev Patel',
      'Irrfan Khan',
      'Anil Kapoor',
      'Freida Pinto',
    ]),
    answer: 'Dev Patel',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Ip Man' dans la série de films 'Ip Man'?",
    options: shuffleArray([
      'Donnie Yen',
      'Jet Li',
      'Jackie Chan',
      'Tony Leung',
    ]),
    answer: 'Donnie Yen',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Bruce Lee' dans 'Dragon: The Bruce Lee Story'?",
    options: shuffleArray([
      'Jason Scott Lee',
      'Jet Li',
      'Donnie Yen',
      'Jackie Chan',
    ]),
    answer: 'Jason Scott Lee',
  },
  {
    question: "Quel acteur a joué le rôle de 'Kumar' dans 'Harold & Kumar'?",
    options: shuffleArray(['Kal Penn', 'John Cho', 'Dev Patel', 'Irrfan Khan']),
    answer: 'Kal Penn',
  },
  {
    question: "Quel acteur a joué le rôle de 'Han' dans 'Fast & Furious'?",
    options: shuffleArray([
      'Sung Kang',
      'John Cho',
      'Daniel Dae Kim',
      'Steven Yeun',
    ]),
    answer: 'Sung Kang',
  },
  {
    question: "Quel acteur a joué le rôle de 'Glenn' dans 'The Walking Dead'?",
    options: shuffleArray([
      'Steven Yeun',
      'John Cho',
      'Daniel Dae Kim',
      'Sung Kang',
    ]),
    answer: 'Steven Yeun',
  },
  {
    question: "Quel acteur a joué le rôle de 'Sulu' dans 'Star Trek'?",
    options: shuffleArray([
      'John Cho',
      'George Takei',
      'Daniel Dae Kim',
      'Steven Yeun',
    ]),
    answer: 'John Cho',
  },
  {
    question: "Quel acteur a joué le rôle de 'Jin' dans 'Lost'?",
    options: shuffleArray([
      'Daniel Dae Kim',
      'John Cho',
      'Steven Yeun',
      'Sung Kang',
    ]),
    answer: 'Daniel Dae Kim',
  },
  {
    question: "Quel acteur a joué le rôle de 'Jackie Chan' dans 'Rush Hour'?",
    options: shuffleArray([
      'Jackie Chan',
      'Jet Li',
      'Donnie Yen',
      'Tony Leung',
    ]),
    answer: 'Jackie Chan',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Li Mu Bai' dans 'Crouching Tiger, Hidden Dragon'?",
    options: shuffleArray([
      'Chow Yun-Fat',
      'Jet Li',
      'Donnie Yen',
      'Tony Leung',
    ]),
    answer: 'Chow Yun-Fat',
  },
  {
    question: "Quel acteur a joué le rôle de 'Wong' dans 'Doctor Strange'?",
    options: shuffleArray([
      'Benedict Wong',
      'Donnie Yen',
      'Jet Li',
      'Tony Leung',
    ]),
    answer: 'Benedict Wong',
  },
  {
    question: "Quel acteur a joué le rôle de 'Kato' dans 'The Green Hornet'?",
    options: shuffleArray(['Jay Chou', 'Jackie Chan', 'Jet Li', 'Donnie Yen']),
    answer: 'Jay Chou',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Bruce Lee' dans 'Once Upon a Time in Hollywood'?",
    options: shuffleArray([
      'Mike Moh',
      'Jason Scott Lee',
      'Jet Li',
      'Donnie Yen',
    ]),
    answer: 'Mike Moh',
  },
  {
    question: "Quel acteur a joué le rôle de 'Detective Lee' dans 'Rush Hour'?",
    options: shuffleArray([
      'Jackie Chan',
      'Jet Li',
      'Donnie Yen',
      'Tony Leung',
    ]),
    answer: 'Jackie Chan',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Chirrut Îmwe' dans 'Rogue One: A Star Wars Story'?",
    options: shuffleArray([
      'Donnie Yen',
      'Jet Li',
      'Jackie Chan',
      'Tony Leung',
    ]),
    answer: 'Donnie Yen',
  },
  {
    question: "Quel acteur a joué le rôle de 'The Mandarin' dans 'Iron Man 3'?",
    options: shuffleArray([
      'Ben Kingsley',
      'Tony Leung',
      'Donnie Yen',
      'Jet Li',
    ]),
    answer: 'Ben Kingsley',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Shang-Chi' dans 'Shang-Chi and the Legend of the Ten Rings'?",
    options: shuffleArray(['Simu Liu', 'Tony Leung', 'Donnie Yen', 'Jet Li']),
    answer: 'Simu Liu',
  },
  {
    question: "Quel acteur a joué le rôle de 'Po' dans 'Kung Fu Panda'?",
    options: shuffleArray([
      'Jack Black',
      'Jackie Chan',
      'Jet Li',
      'Donnie Yen',
    ]),
    answer: 'Jack Black',
  },
  {
    question: "Quel acteur a joué le rôle de 'Mowgli' dans 'The Jungle Book'?",
    options: shuffleArray([
      'Neel Sethi',
      'Dev Patel',
      'Kal Penn',
      'Irrfan Khan',
    ]),
    answer: 'Neel Sethi',
  },
  {
    question: "Quel acteur a joué le rôle de 'Pi' dans 'Life of Pi'?",
    options: shuffleArray([
      'Suraj Sharma',
      'Dev Patel',
      'Irrfan Khan',
      'Kal Penn',
    ]),
    answer: 'Suraj Sharma',
  },
  {
    question: "Quel acteur a joué le rôle principal dans 'Hotel Rwanda'?",
    options: shuffleArray([
      'Don Cheadle',
      'Idris Elba',
      'Chiwetel Ejiofor',
      'Djimon Hounsou',
    ]),
    answer: 'Don Cheadle',
  },
  {
    question: "Quel acteur a joué le rôle de 'Nelson Mandela' dans 'Invictus'?",
    options: shuffleArray([
      'Morgan Freeman',
      'Idris Elba',
      'Forest Whitaker',
      'Chiwetel Ejiofor',
    ]),
    answer: 'Morgan Freeman',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Solomon Northup' dans '12 Years a Slave'?",
    options: shuffleArray([
      'Chiwetel Ejiofor',
      'Idris Elba',
      'Djimon Hounsou',
      'David Oyelowo',
    ]),
    answer: 'Chiwetel Ejiofor',
  },
  {
    question: "Quel acteur a joué le rôle de 'T'Challa' dans 'Black Panther'?",
    options: shuffleArray([
      'Chadwick Boseman',
      'Michael B. Jordan',
      'Daniel Kaluuya',
      'Winston Duke',
    ]),
    answer: 'Chadwick Boseman',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Moses' dans 'Exodus: Gods and Kings'?",
    options: shuffleArray([
      'Christian Bale',
      'Idris Elba',
      'Chiwetel Ejiofor',
      'Djimon Hounsou',
    ]),
    answer: 'Christian Bale',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Robert McCall' dans 'The Equalizer'?",
    options: shuffleArray([
      'Denzel Washington',
      'Idris Elba',
      'Chiwetel Ejiofor',
      'Forest Whitaker',
    ]),
    answer: 'Denzel Washington',
  },
  {
    question: "Quel acteur a joué le rôle de 'Kunta Kinte' dans 'Roots'?",
    options: shuffleArray([
      'LeVar Burton',
      'John Amos',
      'Louis Gossett Jr.',
      'Ben Vereen',
    ]),
    answer: 'LeVar Burton',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Idi Amin' dans 'The Last King of Scotland'?",
    options: shuffleArray([
      'Forest Whitaker',
      'Idris Elba',
      'Chiwetel Ejiofor',
      'Djimon Hounsou',
    ]),
    answer: 'Forest Whitaker',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Solomon Vandy' dans 'Blood Diamond'?",
    options: shuffleArray([
      'Djimon Hounsou',
      'Idris Elba',
      'Chiwetel Ejiofor',
      'David Oyelowo',
    ]),
    answer: 'Djimon Hounsou',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Martin Luther King Jr.' dans 'Selma'?",
    options: shuffleArray([
      'David Oyelowo',
      'Idris Elba',
      'Chiwetel Ejiofor',
      'Forest Whitaker',
    ]),
    answer: 'David Oyelowo',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Chris Washington' dans 'Get Out'?",
    options: shuffleArray([
      'Daniel Kaluuya',
      'Chadwick Boseman',
      'Michael B. Jordan',
      'John Boyega',
    ]),
    answer: 'Daniel Kaluuya',
  },
  {
    question:
      "Quel acteur a joué le rôle de 'Finn' dans 'Star Wars: The Force Awakens'?",
    options: shuffleArray([
      'John Boyega',
      'Chadwick Boseman',
      'Michael B. Jordan',
      'Daniel Kaluuya',
    ]),
    answer: 'John Boyega',
  },
]

export default Questions_Acteurs
