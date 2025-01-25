import shuffleArray from '../shuffleArray/shuffleArray'

const Questions_Geographie = [
  {
    question: "Quel est le plus long fleuve d'Europe ?",
    options: shuffleArray(['Le Danube', 'La Volga', 'Le Rhin']),
    answer: 'La Volga',
  },
  {
    question: "Quelle chaîne de montagnes sépare l'Europe de l'Asie ?",
    options: shuffleArray(['Les Alpes', 'Les Carpates', 'Les Monts Oural']),
    answer: 'Les Monts Oural',
  },
  {
    question: "Quel est le plus grand lac d'Europe ?",
    options: shuffleArray([
      'Le lac de Constance',
      'Le lac Ladoga',
      'Le lac Balaton',
    ]),
    answer: 'Le lac Ladoga',
  },
  {
    question: 'Quelle est la plus grande île de la Méditerranée ?',
    options: shuffleArray(['La Corse', 'La Sardaigne', 'La Sicile']),
    answer: 'La Sicile',
  },
  {
    question: 'Quel est le plus haut sommet des Alpes ?',
    options: shuffleArray(['Le Mont Blanc', 'Le Cervin', 'Le Mont Rose']),
    answer: 'Le Mont Blanc',
  },
  {
    question: "Quel est le plus grand pays d'Europe par superficie ?",
    options: shuffleArray(['La France', "L'Ukraine", 'La Russie']),
    answer: 'La Russie',
  },
  {
    question: 'Quel fleuve traverse la ville de Paris ?',
    options: shuffleArray(['La Seine', 'La Loire', 'Le Rhône']),
    answer: 'La Seine',
  },
  {
    question: "Quel est le plus grand désert d'Europe ?",
    options: shuffleArray([
      'Le désert de Tabernas',
      'Le désert de Bardenas Reales',
      'Le désert de Karakoum',
    ]),
    answer: 'Le désert de Tabernas',
  },
  {
    question: "Quel est le plus grand volcan actif d'Europe ?",
    options: shuffleArray(['Le Vésuve', "L'Etna", 'Le Stromboli']),
    answer: "L'Etna",
  },
  {
    question: "Quel est le plus grand lac d'Amérique du Nord ?",
    options: shuffleArray([
      'Le lac Supérieur',
      'Le lac Michigan',
      'Le lac Huron',
    ]),
    answer: 'Le lac Supérieur',
  },
  {
    question: "Quel est le plus long fleuve d'Amérique du Nord ?",
    options: shuffleArray(['Le Mississippi', 'Le Missouri', 'Le Colorado']),
    answer: 'Le Missouri',
  },
  {
    question: "Quel est le plus grand désert d'Amérique du Nord ?",
    options: shuffleArray([
      'Le désert de Sonora',
      'Le désert de Chihuahua',
      'Le désert de Mojave',
    ]),
    answer: 'Le désert de Chihuahua',
  },
  {
    question: "Quel est le plus haut sommet d'Amérique du Nord ?",
    options: shuffleArray([
      'Le Mont McKinley',
      'Le Mont Logan',
      'Le Mont Whitney',
    ]),
    answer: 'Le Mont McKinley',
  },
  {
    question: "Quel est le plus grand lac d'Amérique du Sud ?",
    options: shuffleArray([
      'Le lac Titicaca',
      'Le lac Maracaibo',
      'Le lac Poopó',
    ]),
    answer: 'Le lac Titicaca',
  },
  {
    question: "Quel est le plus long fleuve d'Amérique du Sud ?",
    options: shuffleArray(["L'Amazone", 'Le Paraná', 'Le Rio de la Plata']),
    answer: "L'Amazone",
  },
  {
    question: "Quel est le plus haut sommet d'Amérique du Sud ?",
    options: shuffleArray(["L'Aconcagua", 'Le Huascarán', 'Le Chimborazo']),
    answer: "L'Aconcagua",
  },
  {
    question: "Quel est le plus grand désert d'Amérique du Sud ?",
    options: shuffleArray([
      "Le désert d'Atacama",
      'Le désert de Patagonie',
      'Le désert de Sechura',
    ]),
    answer: "Le désert d'Atacama",
  },
  {
    question: "Quel est le plus grand pays d'Amérique du Sud par superficie ?",
    options: shuffleArray(['Le Brésil', "L'Argentine", 'Le Pérou']),
    answer: 'Le Brésil',
  },
  {
    question: "Quel est le plus grand archipel d'Amérique du Sud ?",
    options: shuffleArray([
      'Les Galápagos',
      'Les Malouines',
      'Les îles Juan Fernández',
    ]),
    answer: 'Les Galápagos',
  },
  {
    question: "Quel est le plus grand lac salé d'Amérique du Sud ?",
    options: shuffleArray([
      'Le Salar de Uyuni',
      'Le Salar de Atacama',
      'Le Salar de Coipasa',
    ]),
    answer: 'Le Salar de Uyuni',
  },
  {
    question: "Quel est le plus grand glacier d'Amérique du Sud ?",
    options: shuffleArray([
      'Le glacier Perito Moreno',
      'Le glacier Viedma',
      'Le glacier Upsala',
    ]),
    answer: 'Le glacier Perito Moreno',
  },
  {
    question: "Quel est le plus grand fleuve d'Amérique centrale ?",
    options: shuffleArray([
      'Le fleuve Usumacinta',
      'Le fleuve Motagua',
      'Le fleuve San Juan',
    ]),
    answer: 'Le fleuve Usumacinta',
  },
  {
    question: "Quel est le plus grand lac d'Amérique centrale ?",
    options: shuffleArray([
      'Le lac Nicaragua',
      'Le lac Gatún',
      'Le lac Izabal',
    ]),
    answer: 'Le lac Nicaragua',
  },
  {
    question: "Quel est le plus grand volcan d'Amérique centrale ?",
    options: shuffleArray([
      'Le volcan Tajumulco',
      'Le volcan Barú',
      'Le volcan Irazú',
    ]),
    answer: 'Le volcan Tajumulco',
  },
  {
    question:
      "Quel est le plus grand pays d'Amérique centrale par superficie ?",
    options: shuffleArray(['Le Nicaragua', 'Le Honduras', 'Le Guatemala']),
    answer: 'Le Nicaragua',
  },
  {
    question: "Quel est le plus grand archipel d'Amérique centrale ?",
    options: shuffleArray([
      'Les îles de la Baie',
      'Les îles San Blas',
      'Les îles Corn',
    ]),
    answer: 'Les îles de la Baie',
  },
  {
    question: "Quel est le plus grand lac salé d'Amérique centrale ?",
    options: shuffleArray([
      'Le lac Enriquillo',
      'Le lac Azuei',
      'Le lac Xolotlán',
    ]),
    answer: 'Le lac Enriquillo',
  },
  {
    question: "Quel est le plus grand glacier d'Amérique centrale ?",
    options: shuffleArray([
      'Le glacier Chacaltaya',
      'Le glacier Pastoruri',
      'Le glacier Yanamarey',
    ]),
    answer: 'Le glacier Chacaltaya',
  },
  {
    question: "Quel est le plus grand fleuve d'Amérique du Nord par débit ?",
    options: shuffleArray(['Le Mississippi', 'Le Mackenzie', 'Le Yukon']),
    answer: 'Le Mississippi',
  },
  {
    question: "Quel est le plus grand lac d'Amérique du Nord par volume ?",
    options: shuffleArray([
      'Le lac Supérieur',
      'Le lac Michigan',
      'Le lac Huron',
    ]),
    answer: 'Le lac Supérieur',
  },
  {
    question:
      "Quel est le plus grand désert d'Amérique du Nord par superficie ?",
    options: shuffleArray([
      'Le désert de Sonora',
      'Le désert de Chihuahua',
      'Le désert de Mojave',
    ]),
    answer: 'Le désert de Chihuahua',
  },
  {
    question: "Quel est le plus grand volcan d'Amérique du Nord ?",
    options: shuffleArray([
      'Le Popocatépetl',
      'Le Mont Saint Helens',
      'Le Mont Rainier',
    ]),
    answer: 'Le Popocatépetl',
  },
  {
    question: "Quel est le plus grand pays d'Amérique du Nord par superficie ?",
    options: shuffleArray(['Le Canada', 'Les États-Unis', 'Le Mexique']),
    answer: 'Le Canada',
  },
  {
    question: "Quel est le plus grand archipel d'Amérique du Nord ?",
    options: shuffleArray([
      'Les îles Aléoutiennes',
      'Les îles de la Reine Charlotte',
      'Les îles de la Madeleine',
    ]),
    answer: 'Les îles Aléoutiennes',
  },
  {
    question: "Quel est le plus grand lac salé d'Amérique du Nord ?",
    options: shuffleArray([
      'Le Grand Lac Salé',
      'Le lac Salton',
      'Le lac Mono',
    ]),
    answer: 'Le Grand Lac Salé',
  },
  {
    question: "Quel est le plus grand glacier d'Amérique du Nord ?",
    options: shuffleArray([
      'Le glacier Hubbard',
      'Le glacier Columbia',
      'Le glacier Malaspina',
    ]),
    answer: 'Le glacier Hubbard',
  },
  {
    question: "Quel est le plus grand fleuve d'Amérique du Sud par débit ?",
    options: shuffleArray(["L'Amazone", 'Le Paraná', 'Le Rio de la Plata']),
    answer: "L'Amazone",
  },
  {
    question: "Quel est le plus grand lac d'Amérique du Sud par volume ?",
    options: shuffleArray([
      'Le lac Titicaca',
      'Le lac Maracaibo',
      'Le lac Poopó',
    ]),
    answer: 'Le lac Titicaca',
  },
  {
    question:
      "Quel est le plus grand désert d'Amérique du Sud par superficie ?",
    options: shuffleArray([
      "Le désert d'Atacama",
      'Le désert de Patagonie',
      'Le désert de Sechura',
    ]),
    answer: "Le désert d'Atacama",
  },
  {
    question: "Quel est le plus long fleuve d'Afrique ?",
    options: shuffleArray(['Le Nil', 'Le Congo', 'Le Niger']),
    answer: 'Le Nil',
  },
  {
    question: "Quel est le plus grand désert d'Afrique ?",
    options: shuffleArray(['Le Sahara', 'Le Kalahari', 'Le Namib']),
    answer: 'Le Sahara',
  },
  {
    question: "Quel est le plus haut sommet d'Afrique ?",
    options: shuffleArray(['Le Kilimandjaro', 'Le Mont Kenya', 'Le Rwenzori']),
    answer: 'Le Kilimandjaro',
  },
  {
    question: "Quel est le plus grand lac d'Afrique ?",
    options: shuffleArray([
      'Le lac Victoria',
      'Le lac Tanganyika',
      'Le lac Malawi',
    ]),
    answer: 'Le lac Victoria',
  },
  {
    question: "Quel est le plus grand pays d'Afrique par superficie ?",
    options: shuffleArray([
      "L'Algérie",
      'Le Soudan',
      'La République Démocratique du Congo',
    ]),
    answer: "L'Algérie",
  },
  {
    question: "Quel est le plus grand fleuve d'Asie ?",
    options: shuffleArray(['Le Yangtsé', 'Le Gange', 'Le Mékong']),
    answer: 'Le Yangtsé',
  },
  {
    question: "Quel est le plus grand désert d'Asie ?",
    options: shuffleArray([
      'Le désert de Gobi',
      "Le désert d'Arabie",
      'Le désert de Thar',
    ]),
    answer: 'Le désert de Gobi',
  },
  {
    question: "Quel est le plus haut sommet d'Asie ?",
    options: shuffleArray(["L'Everest", 'Le K2', 'Le Kangchenjunga']),
    answer: "L'Everest",
  },
  {
    question: "Quel est le plus grand lac d'Asie ?",
    options: shuffleArray(['La mer Caspienne', 'Le lac Baïkal', 'Le lac Aral']),
    answer: 'La mer Caspienne',
  },
  {
    question: "Quel est le plus grand pays d'Asie par superficie ?",
    options: shuffleArray(['La Russie', 'La Chine', "L'Inde"]),
    answer: 'La Russie',
  },
  {
    question: "Quel est le plus grand archipel d'Asie ?",
    options: shuffleArray(["L'Indonésie", 'Les Philippines', 'Les Maldives']),
    answer: "L'Indonésie",
  },
  {
    question: "Quel est le plus grand volcan d'Asie ?",
    options: shuffleArray(['Le Krakatoa', 'Le Mont Fuji', 'Le Mont Merapi']),
    answer: 'Le Krakatoa',
  },
  {
    question: "Quel est le plus grand fleuve d'Afrique par débit ?",
    options: shuffleArray(['Le Congo', 'Le Nil', 'Le Niger']),
    answer: 'Le Congo',
  },
  {
    question: "Quel est le plus grand lac salé d'Afrique ?",
    options: shuffleArray(['Le lac Assal', 'Le lac Natron', 'Le lac Turkana']),
    answer: 'Le lac Assal',
  },
  {
    question: "Quel est le plus grand glacier d'Afrique ?",
    options: shuffleArray([
      'Le glacier du Kilimandjaro',
      'Le glacier du Rwenzori',
      'Le glacier du Mont Kenya',
    ]),
    answer: 'Le glacier du Kilimandjaro',
  },
  {
    question: "Quel est le plus grand fleuve d'Asie par débit ?",
    options: shuffleArray(['Le Yangtsé', 'Le Gange', 'Le Mékong']),
    answer: 'Le Yangtsé',
  },
  {
    question: "Quel est le plus grand lac salé d'Asie ?",
    options: shuffleArray(['La mer Caspienne', 'Le lac Aral', 'Le lac Urmia']),
    answer: 'La mer Caspienne',
  },
  {
    question: "Quel est le plus grand glacier d'Asie ?",
    options: shuffleArray([
      'Le glacier Siachen',
      'Le glacier Baltoro',
      'Le glacier Biafo',
    ]),
    answer: 'Le glacier Siachen',
  },
  {
    question: "Quel est le plus grand désert d'Afrique par superficie ?",
    options: shuffleArray(['Le Sahara', 'Le Kalahari', 'Le Namib']),
    answer: 'Le Sahara',
  },
  {
    question: "Quel est le plus grand lac d'Afrique par volume ?",
    options: shuffleArray([
      'Le lac Tanganyika',
      'Le lac Victoria',
      'Le lac Malawi',
    ]),
    answer: 'Le lac Tanganyika',
  },
  {
    question: "Quel est le plus grand désert d'Asie par superficie ?",
    options: shuffleArray([
      'Le désert de Gobi',
      "Le désert d'Arabie",
      'Le désert de Thar',
    ]),
    answer: 'Le désert de Gobi',
  },
  {
    question: "Quel est le plus grand lac d'Asie par volume ?",
    options: shuffleArray(['La mer Caspienne', 'Le lac Baïkal', 'Le lac Aral']),
    answer: 'La mer Caspienne',
  },
  {
    question: "Quel est le plus grand fleuve d'Afrique par longueur ?",
    options: shuffleArray(['Le Nil', 'Le Congo', 'Le Niger']),
    answer: 'Le Nil',
  },
  {
    question: "Quel est le plus grand lac d'Afrique par superficie ?",
    options: shuffleArray([
      'Le lac Victoria',
      'Le lac Tanganyika',
      'Le lac Malawi',
    ]),
    answer: 'Le lac Victoria',
  },
  {
    question: "Quel est le plus grand fleuve d'Asie par longueur ?",
    options: shuffleArray(['Le Yangtsé', 'Le Gange', 'Le Mékong']),
    answer: 'Le Yangtsé',
  },
  {
    question: "Quel est le plus grand lac d'Asie par superficie ?",
    options: shuffleArray(['La mer Caspienne', 'Le lac Baïkal', 'Le lac Aral']),
    answer: 'La mer Caspienne',
  },
  {
    question: "Quel est le plus grand désert d'Afrique par volume ?",
    options: shuffleArray(['Le Sahara', 'Le Kalahari', 'Le Namib']),
    answer: 'Le Sahara',
  },
  {
    question: "Quel est le plus grand lac d'Afrique par longueur ?",
    options: shuffleArray([
      'Le lac Tanganyika',
      'Le lac Victoria',
      'Le lac Malawi',
    ]),
    answer: 'Le lac Tanganyika',
  },
  {
    question: "Quel est le plus grand désert d'Asie par volume ?",
    options: shuffleArray([
      'Le désert de Gobi',
      "Le désert d'Arabie",
      'Le désert de Thar',
    ]),
    answer: 'Le désert de Gobi',
  },
  {
    question: "Quel est le plus grand lac d'Asie par longueur ?",
    options: shuffleArray(['La mer Caspienne', 'Le lac Baïkal', 'Le lac Aral']),
    answer: 'La mer Caspienne',
  },
  {
    question: "Quel est le plus grand fleuve d'Afrique par volume ?",
    options: shuffleArray(['Le Congo', 'Le Nil', 'Le Niger']),
    answer: 'Le Congo',
  },
  {
    question: "Quel est le plus grand lac d'Afrique par volume ?",
    options: shuffleArray([
      'Le lac Tanganyika',
      'Le lac Victoria',
      'Le lac Malawi',
    ]),
    answer: 'Le lac Tanganyika',
  },
  {
    question: "Quel est le plus grand fleuve d'Asie par volume ?",
    options: shuffleArray(['Le Yangtsé', 'Le Gange', 'Le Mékong']),
    answer: 'Le Yangtsé',
  },
  {
    question: "Quel est le plus grand lac d'Asie par volume ?",
    options: shuffleArray(['La mer Caspienne', 'Le lac Baïkal', 'Le lac Aral']),
    answer: 'La mer Caspienne',
  },
  {
    question: "Quel est le plus grand pays d'Océanie par superficie ?",
    options: shuffleArray([
      "L'Australie",
      'La Nouvelle-Zélande',
      'La Papouasie-Nouvelle-Guinée',
    ]),
    answer: "L'Australie",
  },
  {
    question: "Quel est le plus grand désert d'Océanie ?",
    options: shuffleArray([
      'Le Grand Désert de Sable',
      'Le Désert de Gibson',
      'Le Désert de Simpson',
    ]),
    answer: 'Le Grand Désert de Sable',
  },
  {
    question: "Quel est le plus long fleuve d'Océanie ?",
    options: shuffleArray(['Le Murray', 'Le Darling', 'Le Murrumbidgee']),
    answer: 'Le Murray',
  },
  {
    question: "Quel est le plus grand lac d'Océanie ?",
    options: shuffleArray(['Le Lac Eyre', 'Le Lac Torrens', 'Le Lac Gairdner']),
    answer: 'Le Lac Eyre',
  },
  {
    question: "Quel est le plus haut sommet d'Océanie ?",
    options: shuffleArray([
      'Le Puncak Jaya',
      'Le Mont Kosciuszko',
      'Le Mont Wilhelm',
    ]),
    answer: 'Le Puncak Jaya',
  },
  {
    question: "Quel est le plus grand récif corallien d'Océanie ?",
    options: shuffleArray([
      'La Grande Barrière de Corail',
      'Le Récif Ningaloo',
      'Le Récif de la Nouvelle-Calédonie',
    ]),
    answer: 'La Grande Barrière de Corail',
  },
  {
    question: "Quel est le plus grand archipel d'Océanie ?",
    options: shuffleArray([
      'Les Îles Salomon',
      'Les Îles Fidji',
      'Les Îles Samoa',
    ]),
    answer: 'Les Îles Salomon',
  },
  {
    question: "Quel est le plus grand volcan d'Océanie ?",
    options: shuffleArray([
      'Le Mont Ruapehu',
      'Le Mont Taranaki',
      'Le Mont Erebus',
    ]),
    answer: 'Le Mont Ruapehu',
  },
  {
    question: "Quel est le plus grand fleuve d'Océanie par débit ?",
    options: shuffleArray(['Le Murray', 'Le Sepik', 'Le Fly']),
    answer: 'Le Sepik',
  },
  {
    question: "Quel est le plus grand lac salé d'Océanie ?",
    options: shuffleArray(['Le Lac Eyre', 'Le Lac Torrens', 'Le Lac Gairdner']),
    answer: 'Le Lac Eyre',
  },
  {
    question: "Quel est le plus grand glacier d'Océanie ?",
    options: shuffleArray([
      'Le Glacier Tasman',
      'Le Glacier Fox',
      'Le Glacier Franz Josef',
    ]),
    answer: 'Le Glacier Tasman',
  },
  {
    question: "Quel est le plus grand désert d'Océanie par superficie ?",
    options: shuffleArray([
      'Le Grand Désert de Sable',
      'Le Désert de Gibson',
      'Le Désert de Simpson',
    ]),
    answer: 'Le Grand Désert de Sable',
  },
  {
    question: "Quel est le plus grand lac d'Océanie par volume ?",
    options: shuffleArray(['Le Lac Eyre', 'Le Lac Torrens', 'Le Lac Gairdner']),
    answer: 'Le Lac Eyre',
  },
  {
    question: "Quel est le plus grand fleuve d'Océanie par longueur ?",
    options: shuffleArray(['Le Murray', 'Le Darling', 'Le Murrumbidgee']),
    answer: 'Le Murray',
  },
  {
    question: "Quel est le plus grand lac d'Océanie par superficie ?",
    options: shuffleArray(['Le Lac Eyre', 'Le Lac Torrens', 'Le Lac Gairdner']),
    answer: 'Le Lac Eyre',
  },
  {
    question: "Quel est le plus grand désert d'Océanie par volume ?",
    options: shuffleArray([
      'Le Grand Désert de Sable',
      'Le Désert de Gibson',
      'Le Désert de Simpson',
    ]),
    answer: 'Le Grand Désert de Sable',
  },
  {
    question: "Quel est le plus grand lac d'Océanie par longueur ?",
    options: shuffleArray(['Le Lac Eyre', 'Le Lac Torrens', 'Le Lac Gairdner']),
    answer: 'Le Lac Eyre',
  },
  {
    question: "Quel est le plus grand fleuve d'Océanie par volume ?",
    options: shuffleArray(['Le Murray', 'Le Sepik', 'Le Fly']),
    answer: 'Le Sepik',
  },
  {
    question: "Quel est le plus grand lac d'Océanie par volume ?",
    options: shuffleArray(['Le Lac Eyre', 'Le Lac Torrens', 'Le Lac Gairdner']),
    answer: 'Le Lac Eyre',
  },
]

export default Questions_Geographie
