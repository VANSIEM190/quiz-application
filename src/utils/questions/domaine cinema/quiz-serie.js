import shuffleArray from '../../shuffleArray.js'

const Questions_Series = [
  {
    question:
      "Quelle est la couleur de la porte de l'appartement de Monica dans Friends?",
    options: shuffleArray(['Violet', 'Rouge', 'Bleu', 'Vert']),
    answer: 'Violet',
  },
  {
    question: 'Dans Breaking Bad, quel est le nom du personnage principal?',
    options: shuffleArray([
      'Walter White',
      'Jesse Pinkman',
      'Hank Schrader',
      'Saul Goodman',
    ]),
    answer: 'Walter White',
  },
  {
    question: 'Quel est le nom du trône dans Game of Thrones?',
    options: shuffleArray([
      'Trône de Fer',
      'Trône de Glace',
      'Trône de Pierre',
      'Trône de Bois',
    ]),
    answer: 'Trône de Fer',
  },
  {
    question: "Dans Stranger Things, comment s'appelle le monde parallèle?",
    options: shuffleArray([
      'Upside Down',
      'Dark World',
      'Mirror World',
      'Shadow Realm',
    ]),
    answer: 'Upside Down',
  },
  {
    question: 'Quel est le nom du vaisseau spatial dans Star Trek?',
    options: shuffleArray(['Enterprise', 'Voyager', 'Discovery', 'Defiant']),
    answer: 'Enterprise',
  },
  {
    question:
      'Dans The Office, quel est le nom du patron de la branche de Scranton?',
    options: shuffleArray([
      'Michael Scott',
      'Jim Halpert',
      'Dwight Schrute',
      'Pam Beesly',
    ]),
    answer: 'Michael Scott',
  },
  {
    question: 'Quel est le nom du chien dans Family Guy?',
    options: shuffleArray(['Brian', 'Stewie', 'Peter', 'Chris']),
    answer: 'Brian',
  },
  {
    question:
      "Dans The Simpsons, comment s'appelle le bar où Homer va souvent?",
    options: shuffleArray([
      "Moe's Tavern",
      "Joe's Bar",
      "Sam's Pub",
      "Tom's Inn",
    ]),
    answer: "Moe's Tavern",
  },
  {
    question: 'Dans How I Met Your Mother, quel est le métier de Ted Mosby?',
    options: shuffleArray(['Architecte', 'Avocat', 'Médecin', 'Banquier']),
    answer: 'Architecte',
  },
  {
    question:
      'Dans The Big Bang Theory, quel est le nom du colocataire de Sheldon?',
    options: shuffleArray(['Leonard', 'Howard', 'Raj', 'Stuart']),
    answer: 'Leonard',
  },
  {
    question: 'Dans Friends, quel est le nom de la sœur jumelle de Phoebe?',
    options: shuffleArray(['Ursula', 'Monica', 'Rachel', 'Janice']),
    answer: 'Ursula',
  },
  {
    question: 'Dans Game of Thrones, qui est la mère des dragons?',
    options: shuffleArray([
      'Daenerys Targaryen',
      'Cersei Lannister',
      'Sansa Stark',
      'Arya Stark',
    ]),
    answer: 'Daenerys Targaryen',
  },
  {
    question: 'Dans Stranger Things, quel est le nom du shérif de la ville?',
    options: shuffleArray([
      'Jim Hopper',
      'Mike Wheeler',
      'Lucas Sinclair',
      'Dustin Henderson',
    ]),
    answer: 'Jim Hopper',
  },
  {
    question: 'Dans Breaking Bad, quel est le surnom de Walter White?',
    options: shuffleArray(['Heisenberg', 'Gus', 'Tuco', 'Saul']),
    answer: 'Heisenberg',
  },
  {
    question: 'Dans The Office, quel est le nom de la réceptionniste?',
    options: shuffleArray([
      'Pam Beesly',
      'Angela Martin',
      'Kelly Kapoor',
      'Meredith Palmer',
    ]),
    answer: 'Pam Beesly',
  },
  {
    question:
      'Dans The Simpsons, quel est le nom du voisin de la famille Simpson?',
    options: shuffleArray([
      'Ned Flanders',
      'Apu Nahasapeemapetilon',
      'Seymour Skinner',
      'Barney Gumble',
    ]),
    answer: 'Ned Flanders',
  },
  {
    question:
      'Dans How I Met Your Mother, quel est le nom du bar où les personnages se retrouvent souvent?',
    options: shuffleArray([
      "MacLaren's Pub",
      "Paddy's Pub",
      'Central Perk',
      'Cheers',
    ]),
    answer: "MacLaren's Pub",
  },
  {
    question: 'Dans The Big Bang Theory, quel est le métier de Sheldon Cooper?',
    options: shuffleArray([
      'Physicien théoricien',
      'Ingénieur',
      'Biologiste',
      'Chimiste',
    ]),
    answer: 'Physicien théoricien',
  },
  {
    question:
      'Dans Friends, quel est le nom du café où les personnages se retrouvent souvent?',
    options: shuffleArray([
      'Central Perk',
      "MacLaren's Pub",
      "Moe's Tavern",
      'Cheers',
    ]),
    answer: 'Central Perk',
  },
  {
    question: 'Dans Game of Thrones, quel est le nom du loup de Jon Snow?',
    options: shuffleArray(['Ghost', 'Nymeria', 'Summer', 'Shaggydog']),
    answer: 'Ghost',
  },
  {
    question: 'Dans Stranger Things, quel est le nom de la mère de Will?',
    options: shuffleArray([
      'Joyce Byers',
      'Karen Wheeler',
      'Nancy Wheeler',
      'Max Mayfield',
    ]),
    answer: 'Joyce Byers',
  },
  {
    question:
      'Dans Breaking Bad, quel est le nom du partenaire de Walter White?',
    options: shuffleArray([
      'Jesse Pinkman',
      'Hank Schrader',
      'Gus Fring',
      'Saul Goodman',
    ]),
    answer: 'Jesse Pinkman',
  },
  {
    question: 'Dans The Office, quel est le nom du vendeur excentrique?',
    options: shuffleArray([
      'Dwight Schrute',
      'Jim Halpert',
      'Stanley Hudson',
      'Andy Bernard',
    ]),
    answer: 'Dwight Schrute',
  },
  {
    question: "Dans The Simpsons, quel est le nom du directeur de l'école?",
    options: shuffleArray([
      'Seymour Skinner',
      'Edna Krabappel',
      'Apu Nahasapeemapetilon',
      'Ned Flanders',
    ]),
    answer: 'Seymour Skinner',
  },
  {
    question:
      "Dans How I Met Your Mother, quel est le nom du personnage qui raconte l'histoire?",
    options: shuffleArray([
      'Ted Mosby',
      'Barney Stinson',
      'Marshall Eriksen',
      'Robin Scherbatsky',
    ]),
    answer: 'Ted Mosby',
  },
]

export default Questions_Series
