import shuffleArray from '../../../utils/shuffleArray'

const Questions_Biblique = [
  {
    question: 'Quel est le premier livre de la Bible?',
    options: shuffleArray(['Genèse', 'Exode', 'Lévitique']),
    answer: 'Genèse',
  },
  {
    question: "Qui a construit l'arche?",
    options: shuffleArray(['Noé', 'Moïse', 'Abraham']),
    answer: 'Noé',
  },
  {
    question: 'Combien de jours a duré le déluge?',
    options: shuffleArray(['40 jours', '30 jours', '50 jours']),
    answer: '40 jours',
  },
  {
    question: 'Qui a reçu les dix commandements?',
    options: shuffleArray(['Moïse', 'David', 'Salomon']),
    answer: 'Moïse',
  },
  {
    question: 'Quel est le dernier livre de la Bible?',
    options: shuffleArray(['Apocalypse', 'Jean', 'Actes']),
    answer: 'Apocalypse',
  },
  {
    question: 'Qui a été avalé par un grand poisson?',
    options: shuffleArray(['Jonas', 'Daniel', 'Joseph']),
    answer: 'Jonas',
  },
  {
    question: 'Qui a trahi Jésus?',
    options: shuffleArray(['Judas', 'Pierre', 'Jean']),
    answer: 'Judas',
  },
  {
    question: "Combien de plaies ont frappé l'Égypte?",
    options: shuffleArray(['10', '7', '12']),
    answer: '10',
  },
  {
    question: 'Qui a été jeté dans la fosse aux lions?',
    options: shuffleArray(['Daniel', 'David', 'Joseph']),
    answer: 'Daniel',
  },
  {
    question: 'Qui a été transformé en statue de sel?',
    options: shuffleArray([
      'La femme de Lot',
      'La femme de Noé',
      'La femme de Moïse',
    ]),
    answer: 'La femme de Lot',
  },
  {
    question: 'Combien de jours Jésus a-t-il jeûné dans le désert?',
    options: shuffleArray(['40 jours', '30 jours', '50 jours']),
    answer: '40 jours',
  },
  {
    question: "Qui a été le premier roi d'Israël?",
    options: shuffleArray(['Saül', 'David', 'Salomon']),
    answer: 'Saül',
  },
  {
    question: 'Qui a écrit la majorité des Psaumes?',
    options: shuffleArray(['David', 'Moïse', 'Salomon']),
    answer: 'David',
  },
  {
    question: 'Qui a construit le temple de Jérusalem?',
    options: shuffleArray(['Salomon', 'David', 'Saül']),
    answer: 'Salomon',
  },
  {
    question: 'Qui a été vendu par ses frères?',
    options: shuffleArray(['Joseph', 'Benjamin', 'Ruben']),
    answer: 'Joseph',
  },
  {
    question: 'Qui a interprété les rêves de Pharaon?',
    options: shuffleArray(['Joseph', 'Moïse', 'Daniel']),
    answer: 'Joseph',
  },
  {
    question: 'Qui a été sauvé des eaux du Nil?',
    options: shuffleArray(['Moïse', 'Aaron', 'Josué']),
    answer: 'Moïse',
  },
  {
    question: 'Qui a conduit les Israélites dans la terre promise?',
    options: shuffleArray(['Josué', 'Moïse', 'Aaron']),
    answer: 'Josué',
  },
  {
    question: 'Qui a été le père de Jacob?',
    options: shuffleArray(['Isaac', 'Abraham', 'Noé']),
    answer: 'Isaac',
  },
  {
    question: 'Qui a été transformé en roi après avoir tué Goliath?',
    options: shuffleArray(['David', 'Saül', 'Salomon']),
    answer: 'David',
  },
  {
    question: 'Qui a été le père de Salomon?',
    options: shuffleArray(['David', 'Saül', 'Samuel']),
    answer: 'David',
  },
  {
    question: 'Qui a été le premier martyr chrétien?',
    options: shuffleArray(['Étienne', 'Pierre', 'Paul']),
    answer: 'Étienne',
  },
  {
    question: 'Qui a été le disciple bien-aimé de Jésus?',
    options: shuffleArray(['Jean', 'Pierre', 'Jacques']),
    answer: 'Jean',
  },
  {
    question: "Qui a écrit l'Apocalypse?",
    options: shuffleArray(['Jean', 'Paul', 'Pierre']),
    answer: 'Jean',
  },
  {
    question: 'Qui a été le premier à voir Jésus ressuscité?',
    options: shuffleArray(['Marie Madeleine', 'Pierre', 'Jean']),
    answer: 'Marie Madeleine',
  },
  {
    question: 'Qui a été le père de Jean-Baptiste?',
    options: shuffleArray(['Zacharie', 'Joseph', 'Siméon']),
    answer: 'Zacharie',
  },
  {
    question: 'Qui a été le père de Jésus?',
    options: shuffleArray(['Joseph', 'Zacharie', 'Siméon']),
    answer: 'Joseph',
  },
  {
    question: 'Qui a été le roi des Juifs à la naissance de Jésus?',
    options: shuffleArray(['Hérode', 'César', 'Pilate']),
    answer: 'Hérode',
  },
  {
    question: 'Qui a été le cousin de Jésus?',
    options: shuffleArray(['Jean-Baptiste', 'Pierre', 'Jacques']),
    answer: 'Jean-Baptiste',
  },
  {
    question: 'Qui a été le disciple qui a renié Jésus trois fois?',
    options: shuffleArray(['Pierre', 'Jean', 'Judas']),
    answer: 'Pierre',
  },
  {
    question: "Qui a été le disciple qui a marché sur l'eau avec Jésus?",
    options: shuffleArray(['Pierre', 'Jean', 'Jacques']),
    answer: 'Pierre',
  },
  {
    question: 'Qui a été le disciple qui a douté de la résurrection de Jésus?',
    options: shuffleArray(['Thomas', 'Pierre', 'Jean']),
    answer: 'Thomas',
  },
  {
    question:
      'Qui a été le disciple qui a écrit le plus de lettres dans le Nouveau Testament?',
    options: shuffleArray(['Paul', 'Pierre', 'Jean']),
    answer: 'Paul',
  },
  {
    question: "Qui a été le disciple qui a été appelé 'le roc'?",
    options: shuffleArray(['Pierre', 'Jean', 'Jacques']),
    answer: 'Pierre',
  },
  {
    question: "Qui a été le disciple qui a été exilé sur l'île de Patmos?",
    options: shuffleArray(['Jean', 'Pierre', 'Paul']),
    answer: 'Jean',
  },
]

export default Questions_Biblique
