import shuffleArray from '../shuffleArray/shuffleArray.js'

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
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2014 ?',
    options: shuffleArray(['12 Years a Slave', 'Gravity', 'Captain Phillips']),
    answer: '12 Years a Slave',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2014 ?',
    options: shuffleArray([
      'Matthew McConaughey',
      'Chiwetel Ejiofor',
      'Tom Hanks',
    ]),
    answer: 'Matthew McConaughey',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2014 ?',
    options: shuffleArray([
      'American Hustle',
      'Her',
      'The Wolf of Wall Street',
    ]),
    answer: 'American Hustle',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2014 ?',
    options: shuffleArray(['Cate Blanchett', 'Sandra Bullock', 'Judi Dench']),
    answer: 'Cate Blanchett',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2014 ?',
    options: shuffleArray([
      'Alfonso Cuarón',
      'Steve McQueen',
      'David O. Russell',
    ]),
    answer: 'Alfonso Cuarón',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film dramatique en 2013 ?',
    options: shuffleArray(['Argo', 'Django Unchained', 'Life of Pi']),
    answer: 'Argo',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film dramatique en 2013 ?',
    options: shuffleArray(['Daniel Day-Lewis', 'Richard Gere', 'John Hawkes']),
    answer: 'Daniel Day-Lewis',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2013 ?',
    options: shuffleArray([
      'Les Misérables',
      'Silver Linings Playbook',
      'Moonrise Kingdom',
    ]),
    answer: 'Les Misérables',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film dramatique en 2013 ?',
    options: shuffleArray([
      'Jessica Chastain',
      'Marion Cotillard',
      'Helen Mirren',
    ]),
    answer: 'Jessica Chastain',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2013 ?',
    options: shuffleArray(['Ben Affleck', 'Kathryn Bigelow', 'Ang Lee']),
    answer: 'Ben Affleck',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2012 ?',
    options: shuffleArray(['The Artist', '50/50', 'Midnight in Paris']),
    answer: 'The Artist',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2011 ?',
    options: shuffleArray([
      'The Kids Are All Right',
      'Alice in Wonderland',
      'Burlesque',
    ]),
    answer: 'The Kids Are All Right',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2010 ?',
    options: shuffleArray(['The Hangover', 'Julie & Julia', 'Nine']),
    answer: 'The Hangover',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2009 ?',
    options: shuffleArray([
      'Vicky Cristina Barcelona',
      'Mamma Mia!',
      'Burn After Reading',
    ]),
    answer: 'Vicky Cristina Barcelona',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2008 ?',
    options: shuffleArray(['Sweeney Todd', 'Juno', "Charlie Wilson's War"]),
    answer: 'Sweeney Todd',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2007 ?',
    options: shuffleArray(['Dreamgirls', 'Borat', 'The Devil Wears Prada']),
    answer: 'Dreamgirls',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2006 ?',
    options: shuffleArray([
      'Walk the Line',
      'Pride & Prejudice',
      'The Producers',
    ]),
    answer: 'Walk the Line',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2005 ?',
    options: shuffleArray(['Sideways', 'The Incredibles', 'Ray']),
    answer: 'Sideways',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2004 ?',
    options: shuffleArray([
      'Lost in Translation',
      'Finding Nemo',
      'Bend It Like Beckham',
    ]),
    answer: 'Lost in Translation',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film musical ou comédie en 2003 ?',
    options: shuffleArray([
      'Chicago',
      'About a Boy',
      'My Big Fat Greek Wedding',
    ]),
    answer: 'Chicago',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film musical ou comédie en 2020 ?',
    options: shuffleArray([
      'Taron Egerton',
      'Daniel Craig',
      'Roman Griffin Davis',
    ]),
    answer: 'Taron Egerton',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film musical ou comédie en 2020 ?',
    options: shuffleArray(['Awkwafina', 'Ana de Armas', 'Beanie Feldstein']),
    answer: 'Awkwafina',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film musical ou comédie en 2019 ?',
    options: shuffleArray([
      'Christian Bale',
      'Lin-Manuel Miranda',
      'Viggo Mortensen',
    ]),
    answer: 'Christian Bale',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film musical ou comédie en 2019 ?',
    options: shuffleArray(['Olivia Colman', 'Emily Blunt', 'Elsie Fisher']),
    answer: 'Olivia Colman',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film musical ou comédie en 2018 ?',
    options: shuffleArray(['James Franco', 'Hugh Jackman', 'Ansel Elgort']),
    answer: 'James Franco',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film musical ou comédie en 2018 ?',
    options: shuffleArray(['Saoirse Ronan', 'Margot Robbie', 'Emma Stone']),
    answer: 'Saoirse Ronan',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film musical ou comédie en 2017 ?',
    options: shuffleArray(['Ryan Gosling', 'Colin Farrell', 'Hugh Grant']),
    answer: 'Ryan Gosling',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film musical ou comédie en 2017 ?',
    options: shuffleArray(['Emma Stone', 'Annette Bening', 'Lily Collins']),
    answer: 'Emma Stone',
  },
  {
    question:
      'Quel acteur a remporté le Golden Globe du meilleur acteur dans un film musical ou comédie en 2016 ?',
    options: shuffleArray(['Matt Damon', 'Christian Bale', 'Mark Ruffalo']),
    answer: 'Matt Damon',
  },
  {
    question:
      'Quelle actrice a remporté le Golden Globe de la meilleure actrice dans un film musical ou comédie en 2016 ?',
    options: shuffleArray([
      'Jennifer Lawrence',
      'Melissa McCarthy',
      'Amy Schumer',
    ]),
    answer: 'Jennifer Lawrence',
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
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2014 ?',
    options: shuffleArray([
      'Alfonso Cuarón',
      'Steve McQueen',
      'David O. Russell',
    ]),
    answer: 'Alfonso Cuarón',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2013 ?',
    options: shuffleArray(['Ben Affleck', 'Kathryn Bigelow', 'Ang Lee']),
    answer: 'Ben Affleck',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2012 ?',
    options: shuffleArray(['Martin Scorsese', 'Woody Allen', 'George Clooney']),
    answer: 'Martin Scorsese',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2011 ?',
    options: shuffleArray(['David Fincher', 'Christopher Nolan', 'Tom Hooper']),
    answer: 'David Fincher',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2010 ?',
    options: shuffleArray([
      'James Cameron',
      'Quentin Tarantino',
      'Clint Eastwood',
    ]),
    answer: 'James Cameron',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2009 ?',
    options: shuffleArray(['Danny Boyle', 'David Fincher', 'Ron Howard']),
    answer: 'Danny Boyle',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2008 ?',
    options: shuffleArray(['Julian Schnabel', 'Tim Burton', 'Ridley Scott']),
    answer: 'Julian Schnabel',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2007 ?',
    options: shuffleArray([
      'Martin Scorsese',
      'Clint Eastwood',
      'Alejandro González Iñárritu',
    ]),
    answer: 'Martin Scorsese',
  },
  {
    question:
      'Quel réalisateur a remporté le Golden Globe du meilleur réalisateur en 2006 ?',
    options: shuffleArray(['Ang Lee', 'Steven Spielberg', 'George Clooney']),
    answer: 'Ang Lee',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2020 ?',
    options: shuffleArray([
      'Once Upon a Time in Hollywood',
      'Parasite',
      'The Two Popes',
    ]),
    answer: 'Once Upon a Time in Hollywood',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2019 ?',
    options: shuffleArray(['Green Book', 'The Favourite', 'Vice']),
    answer: 'Green Book',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2018 ?',
    options: shuffleArray([
      'Three Billboards Outside Ebbing, Missouri',
      'The Shape of Water',
      'Lady Bird',
    ]),
    answer: 'Three Billboards Outside Ebbing, Missouri',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2017 ?',
    options: shuffleArray(['La La Land', 'Manchester by the Sea', 'Moonlight']),
    answer: 'La La Land',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2016 ?',
    options: shuffleArray(['Steve Jobs', 'The Hateful Eight', 'Spotlight']),
    answer: 'Steve Jobs',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2015 ?',
    options: shuffleArray(['Birdman', 'The Grand Budapest Hotel', 'Gone Girl']),
    answer: 'Birdman',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2014 ?',
    options: shuffleArray(['Her', '12 Years a Slave', 'American Hustle']),
    answer: 'Her',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2013 ?',
    options: shuffleArray(['Django Unchained', 'Argo', 'Zero Dark Thirty']),
    answer: 'Django Unchained',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2012 ?',
    options: shuffleArray([
      'Midnight in Paris',
      'The Descendants',
      'Moneyball',
    ]),
    answer: 'Midnight in Paris',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur scénario en 2011 ?',
    options: shuffleArray([
      'The Social Network',
      'Inception',
      'The Kids Are All Right',
    ]),
    answer: 'The Social Network',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2020 ?',
    options: shuffleArray(['Missing Link', 'Frozen II', 'Toy Story 4']),
    answer: 'Missing Link',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2019 ?',
    options: shuffleArray([
      'Spider-Man: Into the Spider-Verse',
      'Incredibles 2',
      'Ralph Breaks the Internet',
    ]),
    answer: 'Spider-Man: Into the Spider-Verse',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2018 ?',
    options: shuffleArray(['Coco', 'Ferdinand', 'The Boss Baby']),
    answer: 'Coco',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2017 ?',
    options: shuffleArray(['Zootopia', 'Moana', 'Sing']),
    answer: 'Zootopia',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2016 ?',
    options: shuffleArray(['Inside Out', 'The Good Dinosaur', 'Anomalisa']),
    answer: 'Inside Out',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2015 ?',
    options: shuffleArray([
      'How to Train Your Dragon 2',
      'The Lego Movie',
      'Big Hero 6',
    ]),
    answer: 'How to Train Your Dragon 2',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2014 ?',
    options: shuffleArray(['Frozen', 'Despicable Me 2', 'The Croods']),
    answer: 'Frozen',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2013 ?',
    options: shuffleArray(['Brave', 'Frankenweenie', 'Wreck-It Ralph']),
    answer: 'Brave',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2012 ?',
    options: shuffleArray([
      'The Adventures of Tintin',
      'Puss in Boots',
      'Cars 2',
    ]),
    answer: 'The Adventures of Tintin',
  },
  {
    question:
      'Quel film a remporté le Golden Globe du meilleur film d’animation en 2011 ?',
    options: shuffleArray([
      'Toy Story 3',
      'Despicable Me',
      'How to Train Your Dragon',
    ]),
    answer: 'Toy Story 3',
  },
  {
    question:
      'En quelle année le Golden Globe pour la Meilleure chanson originale a-t-il été introduit ?',
    answer: '1962',
    options: shuffleArray(['1962', '1955', '1970']),
  },
  {
    question: 'Quelle chanson a été la première à remporter ce prix ?',
    answer: 'Town Without Pity',
    options: shuffleArray([
      'Town Without Pity',
      'Moon River',
      'Over the Rainbow',
    ]),
  },
  {
    question:
      'Qui décerne le prix de la Meilleure chanson originale aux Golden Globes ?',
    answer: 'Hollywood Foreign Press Association',
    options: shuffleArray([
      'Hollywood Foreign Press Association',
      'Recording Academy',
      'Screen Actors Guild',
    ]),
  },
  {
    question: 'Quelle chanson de Disney a remporté ce prix en 2014 ?',
    answer: 'Let It Go',
    options: shuffleArray([
      'Let It Go',
      'A Whole New World',
      'Can You Feel the Love Tonight',
    ]),
  },
  {
    question:
      "Quel chanteur a remporté un Golden Globe en 2019 pour la chanson 'Shallow' ?",
    answer: 'Lady Gaga',
    options: shuffleArray(['Lady Gaga', 'Adele', 'Beyoncé']),
  },
  {
    question: 'Quelle chanson de James Bond a remporté ce prix en 2013 ?',
    answer: 'Skyfall',
    options: shuffleArray([
      'Skyfall',
      "Writing's on the Wall",
      'No Time to Die',
    ]),
  },
  {
    question: 'Quelle chanson interprétée par Elton John a gagné en 2020 ?',
    answer: "I'm Gonna Love Me Again",
    options: shuffleArray([
      "I'm Gonna Love Me Again",
      'Can You Feel the Love Tonight',
      'Tiny Dancer',
    ]),
  },
  {
    question:
      "Combien de chansons d'animation ont remporté ce prix depuis 1962 ?",
    answer: '10',
    options: shuffleArray(['10', '5', '8']),
  },
  {
    question:
      "Quelle chanson de Beyoncé a été nominée pour ce prix mais n'a pas gagné ?",
    answer: 'Spirit',
    options: shuffleArray(['Spirit', 'Listen', 'Halo']),
  },
  {
    question:
      "Quel compositeur célèbre a remporté ce prix avec la chanson 'The Prayer' ?",
    answer: 'David Foster',
    options: shuffleArray(['David Foster', 'Hans Zimmer', 'John Williams']),
  },
]

export default Questions_Golden_Globe
