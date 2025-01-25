import shuffleArray from '../shuffleArray/shuffleArray.js'

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
  {
    question:
      'Dans The Big Bang Theory, quel est le nom de la petite amie de Leonard?',
    options: shuffleArray(['Penny', 'Amy', 'Bernadette', 'Priya']),
    answer: 'Penny',
  },
  {
    question: 'Dans Friends, quel est le nom du frère de Ross?',
    options: shuffleArray(['Monica', 'Rachel', 'Phoebe', 'Chandler']),
    answer: 'Monica',
  },
  {
    question: 'Dans Game of Thrones, quel est le nom du père de Jon Snow?',
    options: shuffleArray([
      'Eddard Stark',
      'Robert Baratheon',
      'Tywin Lannister',
      'Stannis Baratheon',
    ]),
    answer: 'Eddard Stark',
  },
  {
    question:
      'Dans Stranger Things, quel est le nom du personnage qui a des pouvoirs télékinétiques?',
    options: shuffleArray(['Eleven', 'Mike', 'Lucas', 'Dustin']),
    answer: 'Eleven',
  },
  {
    question:
      'Dans Breaking Bad, quel est le nom du propriétaire du restaurant de poulet?',
    options: shuffleArray([
      'Gus Fring',
      'Hank Schrader',
      'Jesse Pinkman',
      'Saul Goodman',
    ]),
    answer: 'Gus Fring',
  },
  {
    question: 'Dans The Office, quel est le nom de la comptable stricte?',
    options: shuffleArray([
      'Angela Martin',
      'Pam Beesly',
      'Kelly Kapoor',
      'Meredith Palmer',
    ]),
    answer: 'Angela Martin',
  },
  {
    question:
      'Dans The Simpsons, quel est le nom du fils de la famille Simpson?',
    options: shuffleArray(['Bart', 'Homer', 'Lisa', 'Maggie']),
    answer: 'Bart',
  },
  {
    question:
      'Dans How I Met Your Mother, quel est le nom de la femme de Marshall?',
    options: shuffleArray(['Lily', 'Robin', 'Stella', 'Victoria']),
    answer: 'Lily',
  },
  {
    question:
      'Dans The Big Bang Theory, quel est le nom du personnage qui est ingénieur?',
    options: shuffleArray(['Howard', 'Sheldon', 'Leonard', 'Raj']),
    answer: 'Howard',
  },
  {
    question: 'Dans Friends, quel est le nom du personnage qui est acteur?',
    options: shuffleArray(['Joey', 'Ross', 'Chandler', 'Gunther']),
    answer: 'Joey',
  },
  {
    question: 'Dans Game of Thrones, quel est le nom de la maison de Jon Snow?',
    options: shuffleArray(['Stark', 'Lannister', 'Baratheon', 'Targaryen']),
    answer: 'Stark',
  },
  {
    question:
      'Dans Stranger Things, quel est le nom du personnage qui est le chef de la bande?',
    options: shuffleArray(['Mike', 'Lucas', 'Dustin', 'Will']),
    answer: 'Mike',
  },
  {
    question: 'Dans Breaking Bad, quel est le nom du frère de Skyler?',
    options: shuffleArray([
      'Hank Schrader',
      'Jesse Pinkman',
      'Gus Fring',
      'Saul Goodman',
    ]),
    answer: 'Hank Schrader',
  },
  {
    question:
      'Dans The Office, quel est le nom du personnage qui est le représentant des ventes?',
    options: shuffleArray([
      'Jim Halpert',
      'Dwight Schrute',
      'Stanley Hudson',
      'Andy Bernard',
    ]),
    answer: 'Jim Halpert',
  },
  {
    question:
      'Dans la série nigériane "King of Boys", quel est le nom du personnage principal?',
    options: shuffleArray([
      'Eniola Salami',
      'Dapo Banjo',
      'Ayo Akinwale',
      'Kemi Salami',
    ]),
    answer: 'Eniola Salami',
  },
  {
    question:
      'Dans la série sud-africaine "Queen Sono", quel est le métier de Queen Sono?',
    options: shuffleArray([
      'Agent secret',
      'Avocate',
      'Médecin',
      'Journaliste',
    ]),
    answer: 'Agent secret',
  },
  {
    question:
      'Dans la série coréenne "Crash Landing on You", quel est le nom du personnage principal masculin?',
    options: shuffleArray([
      'Ri Jeong-hyeok',
      'Kim Soo-hyun',
      'Park Seo-joon',
      'Lee Min-ho',
    ]),
    answer: 'Ri Jeong-hyeok',
  },
  {
    question:
      'Dans la série japonaise "Terrace House", combien de personnes vivent ensemble dans la maison?',
    options: shuffleArray(['6', '4', '8', '10']),
    answer: '6',
  },
  {
    question:
      'Dans la série indienne "Sacred Games", quel est le nom du policier principal?',
    options: shuffleArray([
      'Sartaj Singh',
      'Ganesh Gaitonde',
      'Kukoo',
      'Bunty',
    ]),
    answer: 'Sartaj Singh',
  },
  {
    question:
      'Dans la série coréenne "Goblin", quel est le métier de Ji Eun-tak?',
    options: shuffleArray(['Étudiante', 'Journaliste', 'Médecin', 'Avocate']),
    answer: 'Étudiante',
  },
  {
    question:
      'Dans la série nigériane "The Men’s Club", quel est le nom du personnage joué par Ayoola Ayolola?',
    options: shuffleArray([
      'Aminu Garba',
      'Louis Okafor',
      'Tayo Oladapo',
      'Lanre Taiwo',
    ]),
    answer: 'Aminu Garba',
  },
  {
    question:
      'Dans la série sud-africaine "Blood & Water", quel est le nom de la sœur disparue de Puleng?',
    options: shuffleArray(['Fikile', 'Zama', 'Wendy', 'Chris']),
    answer: 'Fikile',
  },
  {
    question:
      'Dans la série coréenne "Itaewon Class", quel est le nom du restaurant ouvert par Park Sae-ro-yi?',
    options: shuffleArray(['DanBam', 'Jangga', 'SaeRo', 'Itaewon']),
    answer: 'DanBam',
  },
  {
    question:
      'Dans la série japonaise "Midnight Diner", quel est le plat signature du restaurant?',
    options: shuffleArray(['Soupe miso', 'Ramen', 'Omelette', 'Sushi']),
    answer: 'Omelette',
  },
  {
    question:
      'Dans la série indienne "Made in Heaven", quel est le métier de Tara Khanna?',
    options: shuffleArray([
      'Organisatrice de mariages',
      'Actrice',
      'Médecin',
      'Avocate',
    ]),
    answer: 'Organisatrice de mariages',
  },
  {
    question:
      'Dans la série coréenne "My Love from the Star", quel est le pouvoir de Do Min-joon?',
    options: shuffleArray([
      'Téléportation',
      'Invisibilité',
      'Vol',
      'Télékinésie',
    ]),
    answer: 'Téléportation',
  },
  {
    question:
      'Dans la série nigériane "Skinny Girl in Transit", quel est le nom du personnage principal?',
    options: shuffleArray(['Tiwa', 'Shalewa', 'Mide', 'Didi']),
    answer: 'Tiwa',
  },
  {
    question:
      'Dans la série sud-africaine "Shadow", quel est le métier de Shadow?',
    options: shuffleArray([
      'Détective privé',
      'Avocat',
      'Médecin',
      'Journaliste',
    ]),
    answer: 'Détective privé',
  },
  {
    question:
      'Dans la série coréenne "Descendants of the Sun", quel est le métier de Yoo Si-jin?',
    options: shuffleArray(['Soldat', 'Médecin', 'Avocat', 'Journaliste']),
    answer: 'Soldat',
  },
  {
    question:
      'Dans la série japonaise "Alice in Borderland", quel est le nom du personnage principal?',
    options: shuffleArray(['Arisu', 'Chishiya', 'Usagi', 'Niragi']),
    answer: 'Arisu',
  },
  {
    question:
      'Dans la série indienne "Delhi Crime", quel est le nom de la commissaire de police?',
    options: shuffleArray([
      'Vartika Chaturvedi',
      'Neeti Singh',
      'Bhupendra Singh',
      'Jatin Singh',
    ]),
    answer: 'Vartika Chaturvedi',
  },
  {
    question:
      'Dans la série coréenne "Vincenzo", quel est le métier de Vincenzo Cassano?',
    options: shuffleArray(['Avocat', 'Médecin', 'Journaliste', 'Détective']),
    answer: 'Avocat',
  },
  {
    question:
      'Dans la série nigériane "Jenifa’s Diary", quel est le rêve de Jenifa?',
    options: shuffleArray([
      'Devenir actrice',
      'Devenir chanteuse',
      'Devenir médecin',
      'Devenir avocate',
    ]),
    answer: 'Devenir actrice',
  },
  {
    question:
      'Dans la série sud-africaine "The River", quel est le nom de la matriarche de la famille Dlamini?',
    options: shuffleArray(['Lindiwe', 'Zolani', 'Andile', 'Zweli']),
    answer: 'Lindiwe',
  },
  {
    question:
      'Dans la série coréenne "Hotel Del Luna", quel est le rôle de Jang Man-wol?',
    options: shuffleArray([
      'Propriétaire de l’hôtel',
      'Client de l’hôtel',
      'Femme de ménage',
      'Chef cuisinier',
    ]),
    answer: 'Propriétaire de l’hôtel',
  },
  {
    question:
      'Dans la série japonaise "Giri/Haji", quel est le métier de Kenzo Mori?',
    options: shuffleArray(['Détective', 'Médecin', 'Avocat', 'Journaliste']),
    answer: 'Détective',
  },
  {
    question:
      'Dans la série indienne "Breathe", quel est le nom du personnage principal joué par R. Madhavan?',
    options: shuffleArray([
      'Danny Mascarenhas',
      'Kabir Sawant',
      'Avinash Sabharwal',
      'Jatin Pandey',
    ]),
    answer: 'Danny Mascarenhas',
  },
  {
    question:
      'Dans la série coréenne "Kingdom", quel est le nom du prince héritier?',
    options: shuffleArray([
      'Lee Chang',
      'Yi Seong-gye',
      'Kim Shin',
      'Park Hae-soo',
    ]),
    answer: 'Lee Chang',
  },
  {
    question:
      'Dans la série nigériane "Castle & Castle", quel est le métier des personnages principaux?',
    options: shuffleArray([
      'Avocats',
      'Médecins',
      'Journalistes',
      'Détectives',
    ]),
    answer: 'Avocats',
  },
  {
    question:
      'Dans la série sud-africaine "Lockdown", quel est le cadre principal de l’histoire?',
    options: shuffleArray(['Prison pour femmes', 'Hôpital', 'École', 'Bureau']),
    answer: 'Prison pour femmes',
  },
  {
    question:
      'Dans la série coréenne "The Heirs", quel est le nom du personnage principal masculin?',
    options: shuffleArray([
      'Kim Tan',
      'Choi Young-do',
      'Yoon Chan-young',
      'Lee Hyo-shin',
    ]),
    answer: 'Kim Tan',
  },
  {
    question:
      'Dans la série japonaise "Erased", quel est le pouvoir de Satoru Fujinuma?',
    options: shuffleArray([
      'Voyager dans le temps',
      'Invisibilité',
      'Télékinésie',
      'Vol',
    ]),
    answer: 'Voyager dans le temps',
  },
  {
    question:
      'Dans la série indienne "Mirzapur", quel est le nom du personnage principal?',
    options: shuffleArray([
      'Guddu Pandit',
      'Munna Tripathi',
      'Bablu Pandit',
      'Kaleen Bhaiya',
    ]),
    answer: 'Guddu Pandit',
  },
  {
    question:
      'Dans la série coréenne "Start-Up", quel est le nom de l’entreprise fondée par Seo Dal-mi?',
    options: shuffleArray([
      'Cheongmyeong Company',
      'Sandbox',
      'Morning Group',
      'Dream Company',
    ]),
    answer: 'Cheongmyeong Company',
  },
  {
    question:
      'Dans la série nigériane "Shuga", quel est le thème principal de la série?',
    options: shuffleArray([
      'Santé sexuelle',
      'Politique',
      'Éducation',
      'Économie',
    ]),
    answer: 'Santé sexuelle',
  },
  {
    question:
      'Dans la série sud-africaine "Isibaya", quel est le nom de la famille rivale des Zungu?',
    options: shuffleArray(['Ndlovu', 'Dlamini', 'Mthembu', 'Khumalo']),
    answer: 'Ndlovu',
  },
  {
    question:
      'Dans la série coréenne "It’s Okay to Not Be Okay", quel est le métier de Moon Gang-tae?',
    options: shuffleArray(['Infirmier', 'Médecin', 'Journaliste', 'Avocat']),
    answer: 'Infirmier',
  },
  {
    question:
      'Dans la série japonaise "Hana Yori Dango", quel est le nom du groupe de garçons riches?',
    options: shuffleArray([
      'F4',
      'Boys Over Flowers',
      'Rich Boys',
      'Elite Four',
    ]),
    answer: 'F4',
  },
  {
    question:
      'Dans la série indienne "Paatal Lok", quel est le métier de Hathiram Chaudhary?',
    options: shuffleArray([
      'Inspecteur de police',
      'Avocat',
      'Médecin',
      'Journaliste',
    ]),
    answer: 'Inspecteur de police',
  },
  {
    question:
      'Dans la série coréenne "The Penthouse", quel est le nom de la résidence de luxe?',
    options: shuffleArray([
      'Hera Palace',
      'Olympus Tower',
      'Zeus Mansion',
      'Apollo Heights',
    ]),
    answer: 'Hera Palace',
  },
  {
    question:
      'Dans la série nigériane "Battleground", quel est le nom de la famille principale?',
    options: shuffleArray(['Bhadmus', 'Adeleke', 'Okafor', 'Balogun']),
    answer: 'Bhadmus',
  },
  {
    question:
      'Dans la série sud-africaine "The Queen", quel est le nom de la matriarche de la famille Khoza?',
    options: shuffleArray(['Harriet', 'Kea', 'Shaka', 'Brutus']),
    answer: 'Harriet',
  },
  {
    question: 'Dans Sherlock, quel est le nom du détective consultant?',
    options: shuffleArray([
      'Sherlock Holmes',
      'John Watson',
      'Mycroft Holmes',
      'Greg Lestrade',
    ]),
    answer: 'Sherlock Holmes',
  },
  {
    question:
      'Dans Doctor Who, quel est le nom du vaisseau spatial du Docteur?',
    options: shuffleArray([
      'TARDIS',
      'Enterprise',
      'Serenity',
      'Millennium Falcon',
    ]),
    answer: 'TARDIS',
  },
  {
    question:
      'Dans Peaky Blinders, quel est le nom du chef de la famille Shelby?',
    options: shuffleArray([
      'Tommy Shelby',
      'Arthur Shelby',
      'John Shelby',
      'Finn Shelby',
    ]),
    answer: 'Tommy Shelby',
  },
  {
    question:
      'Dans Black Mirror, quel est le nom de l’épisode où les gens notent les autres?',
    options: shuffleArray([
      'Nosedive',
      'San Junipero',
      'White Christmas',
      'Bandersnatch',
    ]),
    answer: 'Nosedive',
  },
  {
    question: 'Dans The Crown, quel est le nom de la reine d’Angleterre?',
    options: shuffleArray(['Elizabeth II', 'Victoria', 'Mary I', 'Anne']),
    answer: 'Elizabeth II',
  },
  {
    question:
      'Dans La Casa de Papel, quel est le surnom du chef des braqueurs?',
    options: shuffleArray(['Le Professeur', 'Berlin', 'Tokyo', 'Rio']),
    answer: 'Le Professeur',
  },
  {
    question: 'Dans Vikings, quel est le nom du personnage principal?',
    options: shuffleArray([
      'Ragnar Lothbrok',
      'Bjorn Ironside',
      'Lagertha',
      'Floki',
    ]),
    answer: 'Ragnar Lothbrok',
  },
  {
    question: 'Dans The Witcher, quel est le nom du sorceleur?',
    options: shuffleArray(['Geralt de Riv', 'Jaskier', 'Yennefer', 'Ciri']),
    answer: 'Geralt de Riv',
  },
  {
    question:
      'Dans Downton Abbey, quel est le nom de la famille aristocratique?',
    options: shuffleArray(['Crawley', 'Grantham', 'Bennet', 'Darcy']),
    answer: 'Crawley',
  },
  {
    question: 'Dans Lupin, quel est le nom du personnage principal?',
    options: shuffleArray([
      'Assane Diop',
      'Raoul Diop',
      'Hubert Pellegrini',
      'Juliette Pellegrini',
    ]),
    answer: 'Assane Diop',
  },
  {
    question: 'Dans The Mandalorian, quel est le surnom de l’enfant?',
    options: shuffleArray(['Baby Yoda', 'Grogu', 'The Child', 'Yaddle']),
    answer: 'Grogu',
  },
  {
    question: 'Dans The Boys, quel est le nom du chef des Seven?',
    options: shuffleArray(['Homelander', 'Butcher', 'Starlight', 'A-Train']),
    answer: 'Homelander',
  },
  {
    question: 'Dans The Umbrella Academy, quel est le numéro de Luther?',
    options: shuffleArray(['Numéro 1', 'Numéro 2', 'Numéro 3', 'Numéro 4']),
    answer: 'Numéro 1',
  },
  {
    question:
      'Dans Stranger Things, quel est le nom de la ville où se déroule l’histoire?',
    options: shuffleArray([
      'Hawkins',
      'Sunnydale',
      'Riverdale',
      'Mystic Falls',
    ]),
    answer: 'Hawkins',
  },
  {
    question:
      'Dans The Handmaid’s Tale, quel est le nom de la servante principale?',
    options: shuffleArray(['June', 'Serena', 'Moira', 'Emily']),
    answer: 'June',
  },
  {
    question: 'Dans Westworld, quel est le nom du parc d’attractions?',
    options: shuffleArray([
      'Westworld',
      'Futureworld',
      'Shogunworld',
      'Romanworld',
    ]),
    answer: 'Westworld',
  },
  {
    question:
      'Dans Money Heist, quel est le nom de la ville où se déroule le braquage?',
    options: shuffleArray(['Madrid', 'Paris', 'Berlin', 'Lisbonne']),
    answer: 'Madrid',
  },
  {
    question:
      'Dans The Expanse, quel est le nom du vaisseau spatial principal?',
    options: shuffleArray(['Rocinante', 'Nostromo', 'Serenity', 'Galactica']),
    answer: 'Rocinante',
  },
  {
    question: 'Dans Killing Eve, quel est le nom de l’assassin?',
    options: shuffleArray(['Villanelle', 'Eve', 'Carolyn', 'Kenny']),
    answer: 'Villanelle',
  },
  {
    question:
      'Dans Dark, quel est le nom de la ville où se déroule l’histoire?',
    options: shuffleArray(['Winden', 'Essen', 'Berlin', 'Hambourg']),
    answer: 'Winden',
  },
  {
    question:
      'Dans la série indienne "Sacred Games", quel est le nom du gangster principal?',
    options: shuffleArray([
      'Ganesh Gaitonde',
      'Sartaj Singh',
      'Kukoo',
      'Bunty',
    ]),
    answer: 'Ganesh Gaitonde',
  },
  {
    question:
      'Dans la série indienne "Mirzapur", quel est le nom du personnage joué par Pankaj Tripathi?',
    options: shuffleArray([
      'Kaleen Bhaiya',
      'Guddu Pandit',
      'Munna Tripathi',
      'Bablu Pandit',
    ]),
    answer: 'Kaleen Bhaiya',
  },
  {
    question:
      'Dans la série indienne "Made in Heaven", quel est le nom du partenaire de Tara Khanna?',
    options: shuffleArray([
      'Karan Mehra',
      'Adil Khanna',
      'Faiza Naqvi',
      'Kabir Basrai',
    ]),
    answer: 'Karan Mehra',
  },
]

export default Questions_Series
