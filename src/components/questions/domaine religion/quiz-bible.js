import shuffleArray from '../shuffleArray/shuffleArray'

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
  {
    question: 'Qui a été le disciple qui a été crucifié la tête en bas?',
    options: shuffleArray(['Pierre', 'Jean', 'Paul']),
    answer: 'Pierre',
  },
  {
    question: "Qui a été le disciple qui a été appelé 'le fils du tonnerre'?",
    options: shuffleArray(['Jacques', 'Jean', 'Pierre']),
    answer: 'Jacques',
  },
  {
    question: "Qui a été le disciple qui a été appelé 'le bien-aimé'?",
    options: shuffleArray(['Jean', 'Pierre', 'Jacques']),
    answer: 'Jean',
  },
  {
    question: "Qui a été le disciple qui a été appelé 'le zélé'?",
    options: shuffleArray(['Simon', 'Pierre', 'Jean']),
    answer: 'Simon',
  },
  {
    question: 'Quel est le premier évangile dans le Nouveau Testament?',
    options: shuffleArray(['Matthieu', 'Marc', 'Luc']),
    answer: 'Matthieu',
  },
  {
    question: 'Quel évangile commence par un prologue poétique?',
    options: shuffleArray(['Jean', 'Luc', 'Marc']),
    answer: 'Jean',
  },
  {
    question: 'Quel évangile contient le Sermon sur la Montagne?',
    options: shuffleArray(['Matthieu', 'Marc', 'Luc']),
    answer: 'Matthieu',
  },
  {
    question: 'Quel évangile est le plus court?',
    options: shuffleArray(['Marc', 'Jean', 'Luc']),
    answer: 'Marc',
  },
  {
    question: 'Quel évangile contient la parabole du Bon Samaritain?',
    options: shuffleArray(['Luc', 'Matthieu', 'Jean']),
    answer: 'Luc',
  },
  {
    question: 'Quel évangile contient la parabole du Fils Prodigue?',
    options: shuffleArray(['Luc', 'Marc', 'Jean']),
    answer: 'Luc',
  },
  {
    question: 'Quel évangile commence par la généalogie de Jésus?',
    options: shuffleArray(['Matthieu', 'Marc', 'Jean']),
    answer: 'Matthieu',
  },
  {
    question: 'Quel évangile est souvent appelé "l’évangile de l’action"?',
    options: shuffleArray(['Marc', 'Luc', 'Jean']),
    answer: 'Marc',
  },
  {
    question: 'Quel évangile est le seul à mentionner les Mages?',
    options: shuffleArray(['Matthieu', 'Marc', 'Luc']),
    answer: 'Matthieu',
  },
  {
    question: 'Quel évangile est le seul à mentionner la visite des bergers?',
    options: shuffleArray(['Luc', 'Jean', 'Marc']),
    answer: 'Luc',
  },
  {
    question: 'Quel évangile contient le récit de la résurrection de Lazare?',
    options: shuffleArray(['Jean', 'Matthieu', 'Marc']),
    answer: 'Jean',
  },
  {
    question: 'Quel évangile contient le récit de la Transfiguration?',
    options: shuffleArray(['Matthieu', 'Marc', 'Luc']),
    answer: 'Matthieu',
  },
  {
    question: 'Quel évangile contient le récit de la Pentecôte?',
    options: shuffleArray(['Actes', 'Jean', 'Luc']),
    answer: 'Actes',
  },
  {
    question: 'Quel évangile contient le récit de la Cène?',
    options: shuffleArray(['Luc', 'Jean', 'Marc']),
    answer: 'Luc',
  },
  {
    question: 'Quel évangile contient le récit de la crucifixion de Jésus?',
    options: shuffleArray(['Tous les évangiles', 'Matthieu', 'Jean']),
    answer: 'Tous les évangiles',
  },
  {
    question: 'Quel évangile contient le récit de la tentation de Jésus?',
    options: shuffleArray(['Matthieu', 'Marc', 'Luc']),
    answer: 'Matthieu',
  },
  {
    question:
      'Quel évangile contient le récit de la naissance de Jean-Baptiste?',
    options: shuffleArray(['Luc', 'Jean', 'Marc']),
    answer: 'Luc',
  },
  {
    question: 'Quel évangile contient le récit de la fuite en Égypte?',
    options: shuffleArray(['Matthieu', 'Marc', 'Jean']),
    answer: 'Matthieu',
  },
  {
    question: 'Quel évangile contient le récit de la multiplication des pains?',
    options: shuffleArray(['Tous les évangiles', 'Matthieu', 'Jean']),
    answer: 'Tous les évangiles',
  },
  {
    question: 'Quel évangile contient le récit de la guérison du paralytique?',
    options: shuffleArray(['Marc', 'Luc', 'Jean']),
    answer: 'Marc',
  },
  {
    question: 'Quel évangile contient le récit de la guérison de l’aveugle-né?',
    options: shuffleArray(['Jean', 'Matthieu', 'Luc']),
    answer: 'Jean',
  },
  {
    question: 'Quel évangile contient le récit de la marche sur l’eau?',
    options: shuffleArray(['Matthieu', 'Marc', 'Jean']),
    answer: 'Matthieu',
  },
  {
    question: 'Quel évangile contient le récit de la résurrection de Jésus?',
    options: shuffleArray(['Tous les évangiles', 'Matthieu', 'Jean']),
    answer: 'Tous les évangiles',
  },
  {
    question: 'Quel évangile contient le récit de la conversion de Paul?',
    options: shuffleArray(['Actes', 'Jean', 'Luc']),
    answer: 'Actes',
  },
  {
    question:
      'Quel évangile contient le récit de la rencontre avec la Samaritaine?',
    options: shuffleArray(['Jean', 'Luc', 'Marc']),
    answer: 'Jean',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de la fille de Jaïrus?',
    options: shuffleArray(['Marc', 'Matthieu', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de la femme hémorroïsse?',
    options: shuffleArray(['Marc', 'Luc', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison du serviteur du centurion?',
    options: shuffleArray(['Matthieu', 'Luc', 'Jean']),
    answer: 'Matthieu',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’aveugle Bartimée?',
    options: shuffleArray(['Marc', 'Matthieu', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de la belle-mère de Pierre?',
    options: shuffleArray(['Matthieu', 'Marc', 'Luc']),
    answer: 'Matthieu',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme à la main sèche?',
    options: shuffleArray(['Marc', 'Matthieu', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme sourd-muet?',
    options: shuffleArray(['Marc', 'Matthieu', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme possédé à Gadara?',
    options: shuffleArray(['Marc', 'Matthieu', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme aveugle à Bethsaïda?',
    options: shuffleArray(['Marc', 'Matthieu', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme paralytique à la piscine de Bethesda?',
    options: shuffleArray(['Jean', 'Matthieu', 'Marc']),
    answer: 'Jean',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme né aveugle?',
    options: shuffleArray(['Jean', 'Matthieu', 'Marc']),
    answer: 'Jean',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme possédé à Capharnaüm?',
    options: shuffleArray(['Marc', 'Matthieu', 'Jean']),
    answer: 'Marc',
  },
  {
    question:
      'Quel évangile contient le récit de la guérison de l’homme muet possédé?',
    options: shuffleArray(['Matthieu', 'Marc', 'Jean']),
    answer: 'Matthieu',
  },
  {
    question: "Qui a été le père d'Isaac?",
    options: shuffleArray(['Abraham', 'Jacob', 'Joseph']),
    answer: 'Abraham',
  },
  {
    question: 'Qui a été le père de Joseph?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Moïse?',
    options: shuffleArray(['Amram', 'Aaron', 'Abraham']),
    answer: 'Amram',
  },
  {
    question: 'Qui a été le père de Samuel?',
    options: shuffleArray(['Elkana', 'Saül', 'David']),
    answer: 'Elkana',
  },
  {
    question: 'Qui a été le père de David?',
    options: shuffleArray(['Jessé', 'Saül', 'Salomon']),
    answer: 'Jessé',
  },
  {
    question: 'Qui a été le père de Salomon?',
    options: shuffleArray(['David', 'Saül', 'Samuel']),
    answer: 'David',
  },
  {
    question: 'Qui a été le père de Noé?',
    options: shuffleArray(['Lamech', 'Methuselah', 'Enoch']),
    answer: 'Lamech',
  },
  {
    question: 'Qui a été le père de Jacob?',
    options: shuffleArray(['Isaac', 'Abraham', 'Joseph']),
    answer: 'Isaac',
  },
  {
    question: 'Qui a été le père de Ruben?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Benjamin?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Lévi?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Juda?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Siméon?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Gad?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Asher?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Issachar?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Zabulon?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Dan?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Naphtali?',
    options: shuffleArray(['Jacob', 'Isaac', 'Abraham']),
    answer: 'Jacob',
  },
  {
    question: 'Qui a été le père de Manassé?',
    options: shuffleArray(['Joseph', 'Jacob', 'Isaac']),
    answer: 'Joseph',
  },
  {
    question: 'Qui a été le premier martyr chrétien?',
    options: shuffleArray(['Étienne', 'Pierre', 'Paul']),
    answer: 'Étienne',
  },
  {
    question: 'Qui a écrit la majorité des lettres du Nouveau Testament?',
    options: shuffleArray(['Paul', 'Pierre', 'Jean']),
    answer: 'Paul',
  },
  {
    question: 'Quel apôtre a été surnommé "le fils du tonnerre"?',
    options: shuffleArray(['Jacques', 'Jean', 'Pierre']),
    answer: 'Jacques',
  },
]

export default Questions_Biblique
