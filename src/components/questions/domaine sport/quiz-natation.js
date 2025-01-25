import shuffleArray from '../shuffleArray/shuffleArray.js'

const Questions_Natation = [
  {
    question: "Quelle est la distance d'une piscine olympique ?",
    options: shuffleArray(['50 mètres', '25 mètres', '100 mètres']),
    answer: '50 mètres',
  },
  {
    question: 'Quel est le nombre de nages officielles en natation ?',
    options: shuffleArray(['4', '3', '5']),
    answer: '4',
  },
  {
    question: 'Quelle nage est souvent appelée la nage du papillon ?',
    options: shuffleArray(['Papillon', 'Brasse', 'Crawl']),
    answer: 'Papillon',
  },
  {
    question: 'Quelle nage est la plus rapide ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Dos']),
    answer: 'Crawl',
  },
  {
    question: 'Quelle nage utilise un mouvement de bras circulaire ?',
    options: shuffleArray(['Papillon', 'Brasse', 'Dos']),
    answer: 'Papillon',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus courte en compétition ?',
    options: shuffleArray(['50 mètres', '100 mètres', '25 mètres']),
    answer: '50 mètres',
  },
  {
    question: 'Quel est le nombre de couloirs dans une piscine olympique ?',
    options: shuffleArray(['8', '6', '10']),
    answer: '8',
  },
  {
    question: 'Quelle nage est souvent utilisée pour les échauffements ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Dos']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus longue en compétition ?',
    options: shuffleArray(['1500 mètres', '800 mètres', '400 mètres']),
    answer: '1500 mètres',
  },
  {
    question: 'Quelle nage est souvent utilisée pour les sauvetages en mer ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Dos']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de relais ?',
    options: shuffleArray(['Crawl', 'Papillon', 'Dos']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus courte en compétition ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage synchronisée ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Papillon']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus longue en compétition ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de triathlon ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire en compétition ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de pentathlon moderne ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus difficile en compétition ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus rapide en compétition ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de longue distance ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus lente en compétition ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de courte distance ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus technique en compétition ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de moyenne distance ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus stratégique en compétition ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de longue durée ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus exigeante en compétition ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de courte durée ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire parmi les amateurs ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de moyenne durée ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire parmi les professionnels ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de longue distance ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire parmi les débutants ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de courte distance ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire parmi les experts ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de moyenne distance ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire parmi les athlètes ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de longue distance ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus populaire en Amérique ?',
    options: shuffleArray(['100 mètres', '200 mètres', '50 mètres']),
    answer: '100 mètres',
  },
  {
    question: 'Quelle nage est la plus pratiquée en Amérique ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus populaire en Asie ?',
    options: shuffleArray(['200 mètres', '100 mètres', '50 mètres']),
    answer: '200 mètres',
  },
  {
    question: 'Quelle nage est la plus pratiquée en Asie ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Papillon']),
    answer: 'Brasse',
  },
  {
    question:
      "Quel pays d'Amérique a remporté le plus de médailles en natation aux Jeux Olympiques ?",
    options: shuffleArray(['États-Unis', 'Canada', 'Brésil']),
    answer: 'États-Unis',
  },
  {
    question:
      "Quel pays d'Asie a remporté le plus de médailles en natation aux Jeux Olympiques ?",
    options: shuffleArray(['Japon', 'Chine', 'Corée du Sud']),
    answer: 'Japon',
  },
  {
    question: 'Quelle est la nage la plus rapide en Amérique ?',
    options: shuffleArray(['Crawl', 'Papillon', 'Dos']),
    answer: 'Crawl',
  },
  {
    question: 'Quelle est la nage la plus rapide en Asie ?',
    options: shuffleArray(['Crawl', 'Papillon', 'Dos']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus longue en Amérique ?',
    options: shuffleArray(['1500 mètres', '800 mètres', '400 mètres']),
    answer: '1500 mètres',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus longue en Asie ?',
    options: shuffleArray(['1500 mètres', '800 mètres', '400 mètres']),
    answer: '1500 mètres',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de relais en Amérique ?',
    options: shuffleArray(['Crawl', 'Papillon', 'Dos']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de relais en Asie ?',
    options: shuffleArray(['Crawl', 'Papillon', 'Dos']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus courte en Amérique ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus courte en Asie ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage synchronisée en Amérique ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Papillon']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage synchronisée en Asie ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Papillon']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus longue en Amérique ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus longue en Asie ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de triathlon en Amérique ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de triathlon en Asie ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire en Amérique ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire en Asie ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de pentathlon moderne en Amérique ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de pentathlon moderne en Asie ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus difficile en Amérique ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus difficile en Asie ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre en Amérique ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre en Asie ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus rapide en Amérique ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus rapide en Asie ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de longue distance en Amérique ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de longue distance en Asie ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus lente en Amérique ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus lente en Asie ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de courte distance en Amérique ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de courte distance en Asie ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus technique en Amérique ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus technique en Asie ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de moyenne distance en Amérique ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre de moyenne distance en Asie ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question: "Quelle est la distance d'une piscine olympique en Europe ?",
    options: shuffleArray(['50 mètres', '25 mètres', '100 mètres']),
    answer: '50 mètres',
  },
  {
    question: 'Quel est le nombre de nages officielles en natation en Europe ?',
    options: shuffleArray(['4', '3', '5']),
    answer: '4',
  },
  {
    question: 'Quelle nage est souvent appelée la nage du papillon en Europe ?',
    options: shuffleArray(['Papillon', 'Brasse', 'Crawl']),
    answer: 'Papillon',
  },
  {
    question: 'Quelle nage est la plus rapide en Europe ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Dos']),
    answer: 'Crawl',
  },
  {
    question: 'Quelle nage utilise un mouvement de bras circulaire en Europe ?',
    options: shuffleArray(['Papillon', 'Brasse', 'Dos']),
    answer: 'Papillon',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus courte en compétition en Europe ?',
    options: shuffleArray(['50 mètres', '100 mètres', '25 mètres']),
    answer: '50 mètres',
  },
  {
    question:
      'Quel est le nombre de couloirs dans une piscine olympique en Europe ?',
    options: shuffleArray(['8', '6', '10']),
    answer: '8',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les échauffements en Europe ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Dos']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle est la distance de la course de natation la plus longue en compétition en Europe ?',
    options: shuffleArray(['1500 mètres', '800 mètres', '400 mètres']),
    answer: '1500 mètres',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les sauvetages en mer en Europe ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Dos']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de relais en Europe ?',
    options: shuffleArray(['Crawl', 'Papillon', 'Dos']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus courte en compétition en Europe ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage synchronisée en Europe ?',
    options: shuffleArray(['Brasse', 'Crawl', 'Papillon']),
    answer: 'Brasse',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus longue en compétition en Europe ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de triathlon en Europe ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus populaire en compétition en Europe ?',
    options: shuffleArray(['10 km', '5 km', '25 km']),
    answer: '10 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de pentathlon moderne en Europe ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus difficile en compétition en Europe ?',
    options: shuffleArray(['25 km', '10 km', '5 km']),
    answer: '25 km',
  },
  {
    question:
      'Quelle nage est souvent utilisée pour les compétitions de nage en eau libre en Europe ?',
    options: shuffleArray(['Crawl', 'Brasse', 'Papillon']),
    answer: 'Crawl',
  },
  {
    question:
      'Quelle est la distance de la course de natation en eau libre la plus rapide en compétition en Europe ?',
    options: shuffleArray(['5 km', '10 km', '25 km']),
    answer: '5 km',
  },
]

export default Questions_Natation
