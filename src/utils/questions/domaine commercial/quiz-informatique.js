import shuffleArray from '../../shuffleArray.js'

const Questions_Informatique = [
  {
    question: "Qui est considéré comme le père de l'informatique?",
    options: shuffleArray([
      'Alan Turing',
      'Charles Babbage',
      'John von Neumann',
    ]),
    answer: 'Charles Babbage',
  },
  {
    question:
      'En quelle année a été inventé le premier ordinateur électronique?',
    options: shuffleArray(['1943', '1946', '1951']),
    answer: '1946',
  },
  {
    question: 'Quel était le nom du premier ordinateur électronique?',
    options: shuffleArray(['ENIAC', 'UNIVAC', 'IBM 701']),
    answer: 'ENIAC',
  },
  {
    question: 'Qui a inventé le World Wide Web?',
    options: shuffleArray(['Tim Berners-Lee', 'Vint Cerf', 'Bill Gates']),
    answer: 'Tim Berners-Lee',
  },
  {
    question: 'Quel était le premier langage de programmation de haut niveau?',
    options: shuffleArray(['Fortran', 'COBOL', 'Lisp']),
    answer: 'Fortran',
  },
  {
    question: 'Quel est le nom du premier microprocesseur?',
    options: shuffleArray(['Intel 4004', 'AMD 8080', 'Motorola 6800']),
    answer: 'Intel 4004',
  },
  {
    question: 'En quelle année a été fondée la société Microsoft?',
    options: shuffleArray(['1975', '1980', '1985']),
    answer: '1975',
  },
  {
    question: "Quel est le nom du premier système d'exploitation graphique?",
    options: shuffleArray(['Mac OS', 'Windows', 'Xerox Alto']),
    answer: 'Xerox Alto',
  },
  {
    question: 'Qui a co-fondé Apple Inc. avec Steve Jobs?',
    options: shuffleArray(['Steve Wozniak', 'Bill Gates', 'Paul Allen']),
    answer: 'Steve Wozniak',
  },
  {
    question: 'Quel est le nom du premier ordinateur personnel?',
    options: shuffleArray(['Altair 8800', 'Apple II', 'IBM PC']),
    answer: 'Altair 8800',
  },
  {
    question: 'En quelle année a été lancé le premier iPhone?',
    options: shuffleArray(['2007', '2005', '2009']),
    answer: '2007',
  },
  {
    question: 'Quel est le nom du premier navigateur web?',
    options: shuffleArray([
      'WorldWideWeb',
      'Netscape Navigator',
      'Internet Explorer',
    ]),
    answer: 'WorldWideWeb',
  },
  {
    question: 'Qui a inventé le langage de programmation Java?',
    options: shuffleArray([
      'James Gosling',
      'Bjarne Stroustrup',
      'Guido van Rossum',
    ]),
    answer: 'James Gosling',
  },
  {
    question: 'Quel est le nom du premier disque dur commercialisé?',
    options: shuffleArray([
      'IBM 350',
      'Seagate ST-506',
      'Western Digital WD-40',
    ]),
    answer: 'IBM 350',
  },
  {
    question: 'En quelle année a été créé le premier site web?',
    options: shuffleArray(['1991', '1989', '1993']),
    answer: '1991',
  },
  {
    question: 'Quel est le nom du premier moteur de recherche sur Internet?',
    options: shuffleArray(['Archie', 'Google', 'Yahoo']),
    answer: 'Archie',
  },
  {
    question: "Qui est le créateur du système d'exploitation Linux?",
    options: shuffleArray([
      'Linus Torvalds',
      'Richard Stallman',
      'Ken Thompson',
    ]),
    answer: 'Linus Torvalds',
  },
  {
    question: 'Quel est le nom du premier ordinateur portable?',
    options: shuffleArray(['Osborne 1', 'IBM ThinkPad', 'Compaq Portable']),
    answer: 'Osborne 1',
  },
  {
    question: 'En quelle année a été fondée la société Google?',
    options: shuffleArray(['1998', '1995', '2000']),
    answer: '1998',
  },
  {
    question: 'Quel est le nom du premier réseau social?',
    options: shuffleArray(['Six Degrees', 'MySpace', 'Facebook']),
    answer: 'Six Degrees',
  },
  {
    question: "Quel est le rôle du système d'exploitation?",
    options: shuffleArray([
      'Gérer les ressources matérielles et logicielles',
      'Compiler le code source',
      'Exécuter les applications web',
    ]),
    answer: 'Gérer les ressources matérielles et logicielles',
  },
  {
    question: "Quel est le nom du noyau du système d'exploitation Linux?",
    options: shuffleArray(['Linux', 'Unix', 'Windows']),
    answer: 'Linux',
  },
  {
    question: "Quel est le système d'exploitation développé par Apple?",
    options: shuffleArray(['macOS', 'Windows', 'Linux']),
    answer: 'macOS',
  },
  {
    question:
      "Quel est le système d'exploitation le plus utilisé sur les serveurs web?",
    options: shuffleArray(['Linux', 'Windows', 'macOS']),
    answer: 'Linux',
  },
  {
    question: 'Quel est le rôle du BIOS dans un ordinateur?',
    options: shuffleArray([
      'Initialiser le matériel au démarrage',
      'Gérer les fichiers',
      'Exécuter les applications',
    ]),
    answer: 'Initialiser le matériel au démarrage',
  },
  {
    question:
      'Quel est le nom du gestionnaire de fichiers par défaut de Windows?',
    options: shuffleArray(['Explorateur de fichiers', 'Finder', 'Nautilus']),
    answer: 'Explorateur de fichiers',
  },
  {
    question:
      "Quel est le système d'exploitation open source le plus populaire?",
    options: shuffleArray(['Linux', 'Windows', 'macOS']),
    answer: 'Linux',
  },
  {
    question:
      "Quel est le rôle du gestionnaire de tâches dans un système d'exploitation?",
    options: shuffleArray([
      'Surveiller et gérer les processus en cours',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Surveiller et gérer les processus en cours',
  },
  {
    question:
      "Quel est le nom du système d'exploitation mobile développé par Google?",
    options: shuffleArray(['Android', 'iOS', 'Windows Phone']),
    answer: 'Android',
  },
  {
    question:
      "Quel est le rôle du système de fichiers dans un système d'exploitation?",
    options: shuffleArray([
      'Organiser et stocker les données',
      'Gérer les connexions réseau',
      'Compiler le code source',
    ]),
    answer: 'Organiser et stocker les données',
  },
  {
    question:
      "Quel est le nom du système d'exploitation utilisé par les ordinateurs IBM dans les années 1960?",
    options: shuffleArray(['OS/360', 'Windows', 'Linux']),
    answer: 'OS/360',
  },
  {
    question:
      "Quel est le nom du système d'exploitation utilisé par les superordinateurs?",
    options: shuffleArray(['Linux', 'Windows', 'macOS']),
    answer: 'Linux',
  },
  {
    question: "Quel est le rôle du shell dans un système d'exploitation?",
    options: shuffleArray([
      "Interpréter les commandes de l'utilisateur",
      'Gérer les fichiers',
      'Initialiser le matériel',
    ]),
    answer: "Interpréter les commandes de l'utilisateur",
  },
  {
    question:
      "Quel est le nom du système d'exploitation utilisé par les smartphones Apple?",
    options: shuffleArray(['iOS', 'Android', 'Windows Phone']),
    answer: 'iOS',
  },
  {
    question:
      "Quel est le rôle du gestionnaire de mémoire dans un système d'exploitation?",
    options: shuffleArray([
      "Gérer l'allocation et la libération de la mémoire",
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: "Gérer l'allocation et la libération de la mémoire",
  },
]

export default Questions_Informatique
