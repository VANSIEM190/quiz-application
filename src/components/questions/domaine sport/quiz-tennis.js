import shuffleArray from '../shuffleArray/shuffleArray'

const Questions_Tennis = [
  {
    question: 'Quel est le tournoi du Grand Chelem joué sur terre battue?',
    options: shuffleArray(['Roland-Garros', 'Wimbledon', 'US Open']),
    answer: 'Roland-Garros',
  },
  {
    question: 'Quel joueur a remporté le plus de titres du Grand Chelem?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question: 'Quelle est la surface de jeu de Wimbledon?',
    options: shuffleArray(['Gazon', 'Terre battue', 'Dur']),
    answer: 'Gazon',
  },
  {
    question: 'Quel est le tournoi du Grand Chelem joué en Australie?',
    options: shuffleArray(['Australian Open', 'US Open', 'Roland-Garros']),
    answer: 'Australian Open',
  },
  {
    question: "Quel joueur est surnommé 'Rafa'?",
    options: shuffleArray(['Rafael Nadal', 'Roger Federer', 'Novak Djokovic']),
    answer: 'Rafael Nadal',
  },
  {
    question: 'Quel joueur a remporté le plus de titres à Roland-Garros?',
    options: shuffleArray(['Rafael Nadal', 'Roger Federer', 'Novak Djokovic']),
    answer: 'Rafael Nadal',
  },
  {
    question: "Quel joueur est surnommé 'Djoker'?",
    options: shuffleArray(['Novak Djokovic', 'Roger Federer', 'Andy Murray']),
    answer: 'Novak Djokovic',
  },
  {
    question: "Quel tournoi est connu sous le nom de 'The Championships'?",
    options: shuffleArray(['Wimbledon', 'US Open', 'Roland-Garros']),
    answer: 'Wimbledon',
  },
  {
    question: 'Quel joueur a remporté le plus de titres à Wimbledon?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Pete Sampras']),
    answer: 'Roger Federer',
  },
  {
    question: "Quel joueur a remporté le plus de titres à l'US Open?",
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Pete Sampras']),
    answer: 'Jimmy Connors',
  },
  {
    question: "Quel joueur est surnommé 'FedEx'?",
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question: "Quel joueur a remporté le plus de titres à l'Australian Open?",
    options: shuffleArray(['Novak Djokovic', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Novak Djokovic',
  },
  {
    question: "Quel joueur est surnommé 'The King of Clay'?",
    options: shuffleArray(['Rafael Nadal', 'Roger Federer', 'Novak Djokovic']),
    answer: 'Rafael Nadal',
  },
  {
    question: 'Quel joueur a remporté le plus de titres en Masters 1000?',
    options: shuffleArray(['Novak Djokovic', 'Rafael Nadal', 'Roger Federer']),
    answer: 'Novak Djokovic',
  },
  {
    question: 'Quel joueur a remporté le plus de titres en ATP Finals?',
    options: shuffleArray(['Roger Federer', 'Novak Djokovic', 'Rafael Nadal']),
    answer: 'Roger Federer',
  },
  {
    question: 'Quel joueur a remporté le plus de titres en Coupe Davis?',
    options: shuffleArray(['Rafael Nadal', 'Novak Djokovic', 'Roger Federer']),
    answer: 'Rafael Nadal',
  },
  {
    question: 'Quel joueur a remporté le plus de titres en double?',
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple et en double?',
    options: shuffleArray(['John McEnroe', 'Jimmy Connors', 'Roger Federer']),
    answer: 'John McEnroe',
  },
  {
    question: 'Quel joueur a remporté le plus de titres en simple sur gazon?',
    options: shuffleArray(['Roger Federer', 'Pete Sampras', 'Rafael Nadal']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple sur terre battue?',
    options: shuffleArray(['Rafael Nadal', 'Roger Federer', 'Novak Djokovic']),
    answer: 'Rafael Nadal',
  },
  {
    question: 'Quel joueur a remporté le plus de titres en simple sur dur?',
    options: shuffleArray(['Novak Djokovic', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Novak Djokovic',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple sur toutes les surfaces?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison?',
    options: shuffleArray(['John McEnroe', 'Roger Federer', 'Rafael Nadal']),
    answer: 'John McEnroe',
  },
  {
    question: 'Quel joueur a remporté le plus de titres en simple en carrière?',
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une année civile?',
    options: shuffleArray(['Rod Laver', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Rod Laver',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une décennie?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une carrière?',
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur terre battue?',
    options: shuffleArray(['Rafael Nadal', 'Roger Federer', 'Novak Djokovic']),
    answer: 'Rafael Nadal',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur gazon?',
    options: shuffleArray(['Roger Federer', 'Pete Sampras', 'Rafael Nadal']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur dur?',
    options: shuffleArray(['Novak Djokovic', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Novak Djokovic',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur toutes les surfaces?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une carrière sur terre battue?',
    options: shuffleArray(['Rafael Nadal', 'Roger Federer', 'Novak Djokovic']),
    answer: 'Rafael Nadal',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une carrière sur gazon?',
    options: shuffleArray(['Roger Federer', 'Pete Sampras', 'Rafael Nadal']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une carrière sur dur?',
    options: shuffleArray(['Novak Djokovic', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Novak Djokovic',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une carrière sur toutes les surfaces?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur toutes les surfaces?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur terre battue?',
    options: shuffleArray(['Rafael Nadal', 'Roger Federer', 'Novak Djokovic']),
    answer: 'Rafael Nadal',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur gazon?',
    options: shuffleArray(['Roger Federer', 'Pete Sampras', 'Rafael Nadal']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur dur?',
    options: shuffleArray(['Novak Djokovic', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Novak Djokovic',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple en une saison sur toutes les surfaces?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple masculin?",
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Pete Sampras']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple féminin?",
    options: shuffleArray([
      'Serena Williams',
      'Chris Evert',
      'Martina Navratilova',
    ]),
    answer: 'Chris Evert',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double masculin?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double féminin?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double mixte?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple junior masculin?",
    options: shuffleArray(['Stefan Edberg', 'Andy Roddick', 'Roger Federer']),
    answer: 'Stefan Edberg',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple junior féminin?",
    options: shuffleArray([
      'Lindsay Davenport',
      'Jennifer Capriati',
      'Martina Hingis',
    ]),
    answer: 'Lindsay Davenport',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior masculin?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior féminin?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior mixte?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple masculin en une saison?",
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Pete Sampras']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple féminin en une saison?",
    options: shuffleArray([
      'Serena Williams',
      'Chris Evert',
      'Martina Navratilova',
    ]),
    answer: 'Chris Evert',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double masculin en une saison?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double féminin en une saison?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double mixte en une saison?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple junior masculin en une saison?",
    options: shuffleArray(['Stefan Edberg', 'Andy Roddick', 'Roger Federer']),
    answer: 'Stefan Edberg',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple junior féminin en une saison?",
    options: shuffleArray([
      'Lindsay Davenport',
      'Jennifer Capriati',
      'Martina Hingis',
    ]),
    answer: 'Lindsay Davenport',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior masculin en une saison?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior féminin en une saison?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior mixte en une saison?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple masculin en une carrière?",
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Pete Sampras']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple féminin en une carrière?",
    options: shuffleArray([
      'Serena Williams',
      'Chris Evert',
      'Martina Navratilova',
    ]),
    answer: 'Chris Evert',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double masculin en une carrière?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double féminin en une carrière?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double mixte en une carrière?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple junior masculin en une carrière?",
    options: shuffleArray(['Stefan Edberg', 'Andy Roddick', 'Roger Federer']),
    answer: 'Stefan Edberg',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple junior féminin en une carrière?",
    options: shuffleArray([
      'Lindsay Davenport',
      'Jennifer Capriati',
      'Martina Hingis',
    ]),
    answer: 'Lindsay Davenport',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior masculin en une carrière?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior féminin en une carrière?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double junior mixte en une carrière?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple masculin en une décennie?",
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Pete Sampras']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple féminin en une décennie?",
    options: shuffleArray([
      'Serena Williams',
      'Chris Evert',
      'Martina Navratilova',
    ]),
    answer: 'Chris Evert',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double masculin en une décennie?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double féminin en une décennie?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double mixte en une décennie?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Roland-Garros en simple masculin?',
    options: shuffleArray(['Rafael Nadal', 'Bjorn Borg', 'Roger Federer']),
    answer: 'Rafael Nadal',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Roland-Garros en simple féminin?',
    options: shuffleArray(['Chris Evert', 'Steffi Graf', 'Serena Williams']),
    answer: 'Chris Evert',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Wimbledon en simple masculin?',
    options: shuffleArray(['Roger Federer', 'Pete Sampras', 'Bjorn Borg']),
    answer: 'Roger Federer',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Wimbledon en simple féminin?',
    options: shuffleArray([
      'Martina Navratilova',
      'Serena Williams',
      'Steffi Graf',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'Open d'Australie en simple masculin?",
    options: shuffleArray(['Novak Djokovic', 'Roger Federer', 'Roy Emerson']),
    answer: 'Novak Djokovic',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'Open d'Australie en simple féminin?",
    options: shuffleArray(['Margaret Court', 'Serena Williams', 'Steffi Graf']),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'Open d'Australie en double masculin?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John Newcombe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'Open d'Australie en double féminin?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'Open d'Australie en double mixte?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Roland-Garros en double masculin?',
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'Roy Emerson']),
    answer: 'Bob Bryan',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Roland-Garros en double féminin?',
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Roland-Garros en double mixte?',
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Wimbledon en double masculin?',
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John Newcombe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Wimbledon en double féminin?',
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres à Wimbledon en double mixte?',
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple masculin?",
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Pete Sampras']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en simple féminin?",
    options: shuffleArray([
      'Serena Williams',
      'Chris Evert',
      'Martina Navratilova',
    ]),
    answer: 'Chris Evert',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double masculin?",
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Bob Bryan',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double féminin?",
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      "Quel joueur a remporté le plus de titres à l'US Open en double mixte?",
    options: shuffleArray([
      'Margaret Court',
      'Martina Navratilova',
      'Billie Jean King',
    ]),
    answer: 'Margaret Court',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple masculin en carrière?',
    options: shuffleArray(['Jimmy Connors', 'Roger Federer', 'Rafael Nadal']),
    answer: 'Jimmy Connors',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple féminin en carrière?',
    options: shuffleArray([
      'Martina Navratilova',
      'Serena Williams',
      'Steffi Graf',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en double masculin en carrière?',
    options: shuffleArray(['Bob Bryan', 'Mike Bryan', 'John McEnroe']),
    answer: 'Mike Bryan',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en double féminin en carrière?',
    options: shuffleArray([
      'Martina Navratilova',
      'Pam Shriver',
      'Serena Williams',
    ]),
    answer: 'Martina Navratilova',
  },
  {
    question:
      'Quel joueur a remporté le plus de titres en simple sur toutes les surfaces?',
    options: shuffleArray(['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']),
    answer: 'Roger Federer',
  },
]

export default Questions_Tennis
