import shuffleArray from '../shuffleArray/shuffleArray.js'

const Questions_Football = [
  {
    question: 'Quel est le club de football le plus titré au monde?',
    options: shuffleArray(['Real Madrid', 'FC Barcelone', 'Manchester United']),
    answer: 'Real Madrid',
  },
  {
    question: 'Qui a remporté la Coupe du Monde de la FIFA en 2018?',
    options: shuffleArray(['France', 'Croatie', 'Brésil']),
    answer: 'France',
  },
  {
    question: "Quel joueur a remporté le plus de Ballons d'Or?",
    options: shuffleArray([
      'Lionel Messi',
      'Cristiano Ronaldo',
      'Michel Platini',
    ]),
    answer: 'Lionel Messi',
  },
  {
    question: 'Quel est le stade de football le plus grand du monde?',
    options: shuffleArray([
      'Rungrado May Day Stadium',
      'Camp Nou',
      'Wembley Stadium',
    ]),
    answer: 'Rungrado May Day Stadium',
  },
  {
    question: 'Quel pays a remporté le plus de Coupes du Monde?',
    options: shuffleArray(['Brésil', 'Allemagne', 'Italie']),
    answer: 'Brésil',
  },
  {
    question:
      'Quel joueur détient le record du plus grand nombre de buts en une saison de Ligue des Champions?',
    options: shuffleArray([
      'Cristiano Ronaldo',
      'Lionel Messi',
      'Robert Lewandowski',
    ]),
    answer: 'Cristiano Ronaldo',
  },
  {
    question: 'Quel club a remporté la première Ligue des Champions?',
    options: shuffleArray(['Real Madrid', 'AC Milan', 'Benfica']),
    answer: 'Real Madrid',
  },
  {
    question: "Quel joueur est surnommé 'El Fenomeno'?",
    options: shuffleArray(['Ronaldo', 'Ronaldinho', 'Romario']),
    answer: 'Ronaldo',
  },
  {
    question: "Quel club est surnommé 'Les Reds'?",
    options: shuffleArray(['Liverpool', 'Manchester United', 'Arsenal']),
    answer: 'Liverpool',
  },
  {
    question: "Quel joueur a marqué le but de la 'Main de Dieu'?",
    options: shuffleArray(['Diego Maradona', 'Pelé', 'Zinedine Zidane']),
    answer: 'Diego Maradona',
  },
  {
    question: 'Quel club a remporté le plus de titres de Premier League?',
    options: shuffleArray(['Manchester United', 'Liverpool', 'Chelsea']),
    answer: 'Manchester United',
  },
  {
    question: "Quel joueur est surnommé 'La Pulga'?",
    options: shuffleArray(['Lionel Messi', 'Sergio Agüero', 'Carlos Tevez']),
    answer: 'Lionel Messi',
  },
  {
    question: 'Quel club a remporté le plus de titres de Serie A?',
    options: shuffleArray(['Juventus', 'AC Milan', 'Inter Milan']),
    answer: 'Juventus',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en Coupe du Monde?',
    options: shuffleArray(['Miroslav Klose', 'Ronaldo', 'Gerd Müller']),
    answer: 'Miroslav Klose',
  },
  {
    question: "Quel club est surnommé 'Les Blaugranas'?",
    options: shuffleArray(['FC Barcelone', 'Real Madrid', 'Atletico Madrid']),
    answer: 'FC Barcelone',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres de Ligue des Champions?',
    options: shuffleArray([
      'Francisco Gento',
      'Cristiano Ronaldo',
      'Lionel Messi',
    ]),
    answer: 'Francisco Gento',
  },
  {
    question: 'Quel club a remporté la première Coupe du Monde des Clubs?',
    options: shuffleArray(['Corinthians', 'Real Madrid', 'Boca Juniors']),
    answer: 'Corinthians',
  },
  {
    question: "Quel joueur est surnommé 'Il Divin Codino'?",
    options: shuffleArray([
      'Roberto Baggio',
      'Francesco Totti',
      'Alessandro Del Piero',
    ]),
    answer: 'Roberto Baggio',
  },
  {
    question: 'Quel club a remporté le plus de titres de Bundesliga?',
    options: shuffleArray([
      'Bayern Munich',
      'Borussia Dortmund',
      'Hambourg SV',
    ]),
    answer: 'Bayern Munich',
  },
  {
    question: 'Quel joueur a remporté le plus de titres de Copa America?',
    options: shuffleArray([
      'Lionel Messi',
      'Gabriel Batistuta',
      'Diego Maradona',
    ]),
    answer: 'Lionel Messi',
  },
  {
    question: "Quel club est surnommé 'Les Gunners'?",
    options: shuffleArray(['Arsenal', 'Chelsea', 'Tottenham']),
    answer: 'Arsenal',
  },
  {
    question: 'Quel joueur a remporté le plus de titres de Ligue 1?',
    options: shuffleArray([
      'Jean-Michel Larqué',
      'Thiago Silva',
      'Marco Verratti',
    ]),
    answer: 'Jean-Michel Larqué',
  },
  {
    question: 'Quel club a remporté le plus de titres de La Liga?',
    options: shuffleArray(['Real Madrid', 'FC Barcelone', 'Atletico Madrid']),
    answer: 'Real Madrid',
  },
  {
    question: "Quel joueur est surnommé 'O Rei'?",
    options: shuffleArray(['Pelé', 'Zico', 'Romario']),
    answer: 'Pelé',
  },
  {
    question:
      'Quel club a remporté le plus de titres de Ligue des Champions féminine?',
    options: shuffleArray(['Olympique Lyonnais', 'Wolfsburg', 'FC Barcelone']),
    answer: 'Olympique Lyonnais',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres de Coupe d'Afrique des Nations?",
    options: shuffleArray(["Samuel Eto'o", 'Didier Drogba', 'Yaya Touré']),
    answer: "Samuel Eto'o",
  },
  {
    question: "Quel club est surnommé 'Les Rossoneri'?",
    options: shuffleArray(['AC Milan', 'Inter Milan', 'Juventus']),
    answer: 'AC Milan',
  },
  {
    question: 'Quel joueur a remporté le plus de titres de Copa Libertadores?',
    options: shuffleArray(['Pelé', 'Carlos Bianchi', 'Juan Román Riquelme']),
    answer: 'Carlos Bianchi',
  },
  {
    question:
      "Quel club a remporté le plus de titres de Ligue des Champions de l'AFC?",
    options: shuffleArray([
      'Al-Hilal',
      'Urawa Red Diamonds',
      'Guangzhou Evergrande',
    ]),
    answer: 'Al-Hilal',
  },
  {
    question: "Quel joueur est surnommé 'Le Roi Lion'?",
    options: shuffleArray(['Roger Milla', 'George Weah', 'Didier Drogba']),
    answer: 'Roger Milla',
  },
  {
    question:
      'Quel club a remporté le plus de titres de Ligue des Champions de la CONCACAF?',
    options: shuffleArray(['Club América', 'Cruz Azul', 'Monterrey']),
    answer: 'Club América',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres de Ligue des Champions de l'OFC?",
    options: shuffleArray(['Roy Krishna', 'Emiliano Tade', 'Ryan De Vries']),
    answer: 'Roy Krishna',
  },
  {
    question: "Quel club est surnommé 'Les Parisiens'?",
    options: shuffleArray([
      'Paris Saint-Germain',
      'Olympique de Marseille',
      'AS Monaco',
    ]),
    answer: 'Paris Saint-Germain',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres de Ligue des Champions de la CAF?',
    options: shuffleArray(['Wael Gomaa', 'Hossam Hassan', 'Mohamed Aboutrika']),
    answer: 'Wael Gomaa',
  },
  {
    question:
      "Quel club a remporté le plus de titres de Ligue des Champions de l'OFC?",
    options: shuffleArray([
      'Auckland City',
      'Team Wellington',
      'Waitakere United',
    ]),
    answer: 'Auckland City',
  },
  {
    question: "Quel joueur est surnommé 'Le Phénomène'?",
    options: shuffleArray(['Ronaldo', 'Ronaldinho', 'Romario']),
    answer: 'Ronaldo',
  },
  {
    question:
      'Quel club a remporté le plus de titres de Ligue des Champions de la CONMEBOL?',
    options: shuffleArray(['Independiente', 'Boca Juniors', 'River Plate']),
    answer: 'Independiente',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres de Ligue des Champions de l'UEFA?",
    options: shuffleArray([
      'Cristiano Ronaldo',
      'Lionel Messi',
      'Francisco Gento',
    ]),
    answer: 'Francisco Gento',
  },
  {
    question: "Quel club est surnommé 'Les Merengues'?",
    options: shuffleArray(['Real Madrid', 'FC Barcelone', 'Atletico Madrid']),
    answer: 'Real Madrid',
  },
  {
    question:
      "Quel joueur a été transféré pour la somme record de 222 millions d'euros?",
    options: shuffleArray(['Neymar', 'Kylian Mbappé', 'Cristiano Ronaldo']),
    answer: 'Neymar',
  },
  {
    question:
      'Quel joueur a été transféré de Manchester United à Real Madrid en 2009?',
    options: shuffleArray([
      'Cristiano Ronaldo',
      'David Beckham',
      'Ruud van Nistelrooy',
    ]),
    answer: 'Cristiano Ronaldo',
  },
  {
    question:
      'Quel joueur a été transféré de Liverpool à FC Barcelone en 2018?',
    options: shuffleArray([
      'Philippe Coutinho',
      'Luis Suárez',
      'Javier Mascherano',
    ]),
    answer: 'Philippe Coutinho',
  },
  {
    question:
      'Quel joueur a été transféré de Juventus à Manchester United en 2021?',
    options: shuffleArray(['Cristiano Ronaldo', 'Paul Pogba', 'Carlos Tevez']),
    answer: 'Cristiano Ronaldo',
  },
  {
    question:
      'Quel joueur a été transféré de Borussia Dortmund à Bayern Munich en 2013?',
    options: shuffleArray([
      'Mario Götze',
      'Robert Lewandowski',
      'Mats Hummels',
    ]),
    answer: 'Mario Götze',
  },
  {
    question:
      'Quel joueur a été transféré de AS Monaco à Paris Saint-Germain en 2017?',
    options: shuffleArray(['Kylian Mbappé', 'Thiago Silva', 'Radamel Falcao']),
    answer: 'Kylian Mbappé',
  },
  {
    question: 'Quel joueur a été transféré de Tottenham à Real Madrid en 2013?',
    options: shuffleArray([
      'Gareth Bale',
      'Luka Modrić',
      'Rafael van der Vaart',
    ]),
    answer: 'Gareth Bale',
  },
  {
    question:
      'Quel joueur a été transféré de FC Barcelone à Paris Saint-Germain en 2021?',
    options: shuffleArray(['Lionel Messi', 'Neymar', 'Dani Alves']),
    answer: 'Lionel Messi',
  },
  {
    question: 'Quel joueur a été transféré de Chelsea à Real Madrid en 2019?',
    options: shuffleArray(['Eden Hazard', 'Thibaut Courtois', 'Alvaro Morata']),
    answer: 'Eden Hazard',
  },
  {
    question:
      'Quel joueur a été transféré de Atletico Madrid à FC Barcelone en 2019?',
    options: shuffleArray(['Antoine Griezmann', 'David Villa', 'Arda Turan']),
    answer: 'Antoine Griezmann',
  },
  {
    question: 'Quel arbitre a officié la finale de la Coupe du Monde 2010?',
    options: shuffleArray([
      'Howard Webb',
      'Pierluigi Collina',
      'Mark Clattenburg',
    ]),
    answer: 'Howard Webb',
  },
  {
    question:
      'Quel arbitre est célèbre pour avoir arbitré la finale de la Coupe du Monde 2002?',
    options: shuffleArray(['Pierluigi Collina', 'Markus Merk', 'Howard Webb']),
    answer: 'Pierluigi Collina',
  },
  {
    question:
      'Quel arbitre a officié la finale de la Ligue des Champions 2016?',
    options: shuffleArray([
      'Mark Clattenburg',
      'Björn Kuipers',
      'Damir Skomina',
    ]),
    answer: 'Mark Clattenburg',
  },
  {
    question:
      'Quel arbitre a été le premier à utiliser le VAR en Coupe du Monde?',
    options: shuffleArray(['Néstor Pitana', 'Björn Kuipers', 'Mark Geiger']),
    answer: 'Néstor Pitana',
  },
  {
    question: "Quel arbitre a officié la finale de l'Euro 2016?",
    options: shuffleArray([
      'Mark Clattenburg',
      'Björn Kuipers',
      'Damir Skomina',
    ]),
    answer: 'Mark Clattenburg',
  },
  {
    question: 'Quel arbitre a officié la finale de la Coupe du Monde 2018?',
    options: shuffleArray(['Néstor Pitana', 'Björn Kuipers', 'Mark Geiger']),
    answer: 'Néstor Pitana',
  },
  {
    question:
      'Quel arbitre a officié la finale de la Ligue des Champions 2019?',
    options: shuffleArray([
      'Damir Skomina',
      'Björn Kuipers',
      'Mark Clattenburg',
    ]),
    answer: 'Damir Skomina',
  },
  {
    question: 'Quel arbitre a officié la finale de la Coupe du Monde 1998?',
    options: shuffleArray(['Said Belqola', 'Pierluigi Collina', 'Howard Webb']),
    answer: 'Said Belqola',
  },
  {
    question:
      'Quel arbitre a officié la finale de la Ligue des Champions 2005?',
    options: shuffleArray([
      'Manuel Mejuto González',
      'Pierluigi Collina',
      'Markus Merk',
    ]),
    answer: 'Manuel Mejuto González',
  },
  {
    question: 'Quel arbitre a officié la finale de la Coupe du Monde 1994?',
    options: shuffleArray(['Said Belqola', 'Pierluigi Collina', 'Sandor Puhl']),
    answer: 'Sandor Puhl',
  },
  {
    question:
      'Quel joueur a été transféré de Juventus à Manchester United en 2016?',
    options: shuffleArray(['Paul Pogba', 'Cristiano Ronaldo', 'Carlos Tevez']),
    answer: 'Paul Pogba',
  },
  {
    question: 'Quel joueur a été transféré de Real Madrid à Juventus en 2018?',
    options: shuffleArray([
      'Cristiano Ronaldo',
      'Zinedine Zidane',
      'Gonzalo Higuain',
    ]),
    answer: 'Cristiano Ronaldo',
  },
  {
    question:
      'Quel joueur a été transféré de FC Barcelone à Bayern Munich en 2020?',
    options: shuffleArray([
      'Philippe Coutinho',
      'Thiago Alcantara',
      'Arturo Vidal',
    ]),
    answer: 'Philippe Coutinho',
  },
  {
    question: 'Quel joueur a été transféré de Arsenal à FC Barcelone en 2011?',
    options: shuffleArray(['Cesc Fàbregas', 'Thierry Henry', 'Alexis Sánchez']),
    answer: 'Cesc Fàbregas',
  },
  {
    question:
      'Quel joueur a été transféré de Manchester United à Inter Milan en 2019?',
    options: shuffleArray(['Romelu Lukaku', 'Alexis Sánchez', 'Ashley Young']),
    answer: 'Romelu Lukaku',
  },
  {
    question:
      'Quel joueur a été transféré de Liverpool à Bayern Munich en 2020?',
    options: shuffleArray([
      'Thiago Alcantara',
      'Philippe Coutinho',
      'Xherdan Shaqiri',
    ]),
    answer: 'Thiago Alcantara',
  },
  {
    question:
      'Quel joueur a été transféré de Chelsea à Atletico Madrid en 2018?',
    options: shuffleArray([
      'Diego Costa',
      'Fernando Torres',
      'Thibaut Courtois',
    ]),
    answer: 'Diego Costa',
  },
  {
    question: 'Quel joueur a été transféré de Real Madrid à Arsenal en 2020?',
    options: shuffleArray(['Dani Ceballos', 'Mesut Özil', 'Luka Modrić']),
    answer: 'Dani Ceballos',
  },
  {
    question:
      'Quel joueur a été transféré de FC Barcelone à Atletico Madrid en 2020?',
    options: shuffleArray(['Luis Suárez', 'Antoine Griezmann', 'David Villa']),
    answer: 'Luis Suárez',
  },
  {
    question: 'Quel joueur a été transféré de Real Madrid à Tottenham en 2020?',
    options: shuffleArray(['Gareth Bale', 'Luka Modrić', 'Sergio Reguilón']),
    answer: 'Gareth Bale',
  },
  {
    question:
      'Quel joueur a été transféré de Borussia Dortmund à Manchester United en 2021?',
    options: shuffleArray(['Jadon Sancho', 'Erling Haaland', 'Shinji Kagawa']),
    answer: 'Jadon Sancho',
  },
  {
    question:
      'Quel joueur a été transféré de Inter Milan à Paris Saint-Germain en 2019?',
    options: shuffleArray([
      'Mauro Icardi',
      'Zlatan Ibrahimović',
      'Thiago Motta',
    ]),
    answer: 'Mauro Icardi',
  },
  {
    question: 'Quel joueur a été transféré de FC Barcelone à Chelsea en 2014?',
    options: shuffleArray(['Cesc Fàbregas', 'Pedro', "Samuel Eto'o"]),
    answer: 'Cesc Fàbregas',
  },
  {
    question:
      'Quel joueur a été transféré de Manchester City à Bayern Munich en 2020?',
    options: shuffleArray(['Leroy Sané', 'David Alaba', 'Jerome Boateng']),
    answer: 'Leroy Sané',
  },
  {
    question:
      'Quel joueur a été transféré de Real Madrid à Inter Milan en 2020?',
    options: shuffleArray(['Achraf Hakimi', 'Luka Modrić', 'James Rodríguez']),
    answer: 'Achraf Hakimi',
  },
  {
    question: 'Quel joueur a été transféré de FC Barcelone à Juventus en 2020?',
    options: shuffleArray(['Arthur Melo', 'Miralem Pjanic', 'Dani Alves']),
    answer: 'Arthur Melo',
  },
  {
    question: 'Quel joueur a été transféré de Chelsea à Real Madrid en 2020?',
    options: shuffleArray(['Thibaut Courtois', 'Eden Hazard', 'Mateo Kovačić']),
    answer: 'Thibaut Courtois',
  },
  {
    question:
      'Quel joueur a été transféré de Atletico Madrid à Chelsea en 2014?',
    options: shuffleArray([
      'Diego Costa',
      'Fernando Torres',
      'Thibaut Courtois',
    ]),
    answer: 'Diego Costa',
  },
  {
    question: 'Quel est le stade de football le plus cher au monde?',
    options: shuffleArray([
      'SoFi Stadium',
      'Wembley Stadium',
      'MetLife Stadium',
    ]),
    answer: 'SoFi Stadium',
  },
  {
    question: 'Quel est le stade de football le plus beau au monde?',
    options: shuffleArray(['Camp Nou', 'Allianz Arena', 'Santiago Bernabéu']),
    answer: 'Allianz Arena',
  },
  {
    question: "Quel est le stade de football le plus grand d'Europe?",
    options: shuffleArray(['Camp Nou', 'Wembley Stadium', 'San Siro']),
    answer: 'Camp Nou',
  },
  {
    question: "Quel est le stade de football le plus grand d'Afrique?",
    options: shuffleArray([
      'FNB Stadium',
      'Borg El Arab Stadium',
      'Stade des Martyrs',
    ]),
    answer: 'FNB Stadium',
  },
  {
    question: "Quel est le stade de football le plus grand d'Amérique du Sud?",
    options: shuffleArray([
      'Maracanã',
      'Estadio Monumental',
      'Estadio Centenario',
    ]),
    answer: 'Maracanã',
  },
  {
    question: "Quel est le stade de football le plus grand d'Asie?",
    options: shuffleArray([
      'Rungrado May Day Stadium',
      'Azadi Stadium',
      'Salt Lake Stadium',
    ]),
    answer: 'Rungrado May Day Stadium',
  },
  {
    question: "Quel est le stade de football le plus grand d'Amérique du Nord?",
    options: shuffleArray(['Rose Bowl', 'MetLife Stadium', 'AT&T Stadium']),
    answer: 'Rose Bowl',
  },
  {
    question: "Quel est le stade de football le plus grand d'Océanie?",
    options: shuffleArray([
      'Melbourne Cricket Ground',
      'Stadium Australia',
      'Eden Park',
    ]),
    answer: 'Melbourne Cricket Ground',
  },
  {
    question: 'Quel est le stade de football le plus ancien au monde?',
    options: shuffleArray(['Bramall Lane', 'Anfield', 'Goodison Park']),
    answer: 'Bramall Lane',
  },
  {
    question: 'Quel est le stade de football le plus moderne au monde?',
    options: shuffleArray([
      'Allianz Arena',
      'Allegiant Stadium',
      'Mercedes-Benz Stadium',
    ]),
    answer: 'Allianz Arena',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en Ligue des Champions?',
    options: shuffleArray([
      'Cristiano Ronaldo',
      'Lionel Messi',
      'Robert Lewandowski',
    ]),
    answer: 'Cristiano Ronaldo',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en Premier League?',
    options: shuffleArray(['Alan Shearer', 'Wayne Rooney', 'Sergio Agüero']),
    answer: 'Alan Shearer',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en La Liga?',
    options: shuffleArray(['Lionel Messi', 'Cristiano Ronaldo', 'Telmo Zarra']),
    answer: 'Lionel Messi',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en Serie A?',
    options: shuffleArray([
      'Silvio Piola',
      'Francesco Totti',
      'Gunnar Nordahl',
    ]),
    answer: 'Silvio Piola',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en Bundesliga?',
    options: shuffleArray([
      'Gerd Müller',
      'Robert Lewandowski',
      'Klaus Fischer',
    ]),
    answer: 'Gerd Müller',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en Ligue 1?',
    options: shuffleArray(['Delio Onnis', 'Bernard Lacombe', 'Hervé Revelli']),
    answer: 'Delio Onnis',
  },
  {
    question:
      'Quel joueur a marqué le plus de buts en une saison de Ligue des Champions?',
    options: shuffleArray([
      'Cristiano Ronaldo',
      'Lionel Messi',
      'Robert Lewandowski',
    ]),
    answer: 'Cristiano Ronaldo',
  },
  {
    question:
      'Quel joueur a marqué le plus de buts en une saison de Premier League?',
    options: shuffleArray(['Mohamed Salah', 'Alan Shearer', 'Andy Cole']),
    answer: 'Mohamed Salah',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en une saison de La Liga?',
    options: shuffleArray(['Lionel Messi', 'Cristiano Ronaldo', 'Telmo Zarra']),
    answer: 'Lionel Messi',
  },
  {
    question: 'Quel joueur a marqué le plus de buts en une saison de Serie A?',
    options: shuffleArray(['Gonzalo Higuain', 'Ciro Immobile', 'Luca Toni']),
    answer: 'Gonzalo Higuain',
  },
  {
    question: 'Quel entraîneur a remporté le plus de Ligues des Champions?',
    options: shuffleArray([
      'Carlo Ancelotti',
      'Zinedine Zidane',
      'Pep Guardiola',
    ]),
    answer: 'Carlo Ancelotti',
  },
  {
    question: 'Quel entraîneur a remporté le plus de titres de Premier League?',
    options: shuffleArray(['Alex Ferguson', 'Arsène Wenger', 'José Mourinho']),
    answer: 'Alex Ferguson',
  },
  {
    question:
      'Quel entraîneur a remporté la Coupe du Monde de la FIFA en 2014?',
    options: shuffleArray([
      'Joachim Löw',
      'Didier Deschamps',
      'Vicente del Bosque',
    ]),
    answer: 'Joachim Löw',
  },
]

export default Questions_Football
