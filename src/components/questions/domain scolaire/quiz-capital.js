import shuffleArray from '../shuffleArray/shuffleArray'
const Questions_Capital = [
  {
    question: 'Quelle est la capitale de la France ?',
    options: shuffleArray(['Paris', 'Londres', 'Berlin']),
    answer: 'Paris',
  },
  {
    question: 'Quelle est la capitale du Nigeria ?',
    options: shuffleArray(['Abuja', 'Lagos', 'Kano']),
    answer: 'Abuja',
  },
  {
    question: "Quelle est la capitale de l'Égypte ?",
    options: shuffleArray(['Le Caire', 'Alexandrie', 'Gizeh']),
    answer: 'Le Caire',
  },
  {
    question: "Quelle est la capitale de l'Afrique du Sud ?",
    options: shuffleArray(['Pretoria', 'Le Cap', 'Johannesburg']),
    answer: 'Pretoria',
  },
  {
    question: 'Quelle est la capitale du Kenya ?',
    options: shuffleArray(['Nairobi', 'Mombasa', 'Kisumu']),
    answer: 'Nairobi',
  },
  {
    question: 'Quelle est la capitale du Ghana ?',
    options: shuffleArray(['Accra', 'Kumasi', 'Tamale']),
    answer: 'Accra',
  },
  {
    question: "Quelle est la capitale de l'Algérie ?",
    options: shuffleArray(['Alger', 'Oran', 'Constantine']),
    answer: 'Alger',
  },
  {
    question: 'Quelle est la capitale du Maroc ?',
    options: shuffleArray(['Rabat', 'Casablanca', 'Marrakech']),
    answer: 'Rabat',
  },
  {
    question: 'Quelle est la capitale de la Tunisie ?',
    options: shuffleArray(['Tunis', 'Sfax', 'Sousse']),
    answer: 'Tunis',
  },
  {
    question: "Quelle est la capitale de l'Angola ?",
    options: shuffleArray(['Luanda', 'Lobito', 'Benguela']),
    answer: 'Luanda',
  },
  {
    question: "Quelle est la capitale de la Côte d'Ivoire ?",
    options: shuffleArray(['Yamoussoukro', 'Abidjan', 'Bouaké']),
    answer: 'Yamoussoukro',
  },
  {
    question: 'Quelle est la capitale du Sénégal ?',
    options: shuffleArray(['Dakar', 'Saint-Louis', 'Thiès']),
    answer: 'Dakar',
  },
  {
    question: "Quelle est la capitale de l'Éthiopie ?",
    options: shuffleArray(['Addis-Abeba', 'Gondar', 'Mekele']),
    answer: 'Addis-Abeba',
  },
  {
    question: "Quelle est la capitale de l'Ouganda ?",
    options: shuffleArray(['Kampala', 'Entebbe', 'Jinja']),
    answer: 'Kampala',
  },
  {
    question: 'Quelle est la capitale du Zimbabwe ?',
    options: shuffleArray(['Harare', 'Bulawayo', 'Mutare']),
    answer: 'Harare',
  },
  {
    question: 'Quelle est la capitale du Mali ?',
    options: shuffleArray(['Bamako', 'Sikasso', 'Kayes']),
    answer: 'Bamako',
  },
  {
    question: 'Quelle est la capitale du Cameroun ?',
    options: shuffleArray(['Yaoundé', 'Douala', 'Garoua']),
    answer: 'Yaoundé',
  },
  {
    question: 'Quelle est la capitale du Rwanda ?',
    options: shuffleArray(['Kigali', 'Butare', 'Gisenyi']),
    answer: 'Kigali',
  },
  {
    question: 'Quelle est la capitale du Tchad ?',
    options: shuffleArray(["N'Djamena", 'Moundou', 'Sarh']),
    answer: "N'Djamena",
  },
  {
    question: 'Quelle est la capitale du Niger ?',
    options: shuffleArray(['Niamey', 'Zinder', 'Maradi']),
    answer: 'Niamey',
  },
  {
    question: 'Quelle est la capitale du Burkina Faso ?',
    options: shuffleArray(['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou']),
    answer: 'Ouagadougou',
  },
  {
    question: 'Quelle est la capitale du Gabon ?',
    options: shuffleArray(['Libreville', 'Port-Gentil', 'Franceville']),
    answer: 'Libreville',
  },
  {
    question: 'Quelle est la capitale de la Zambie ?',
    options: shuffleArray(['Lusaka', 'Kitwe', 'Ndola']),
    answer: 'Lusaka',
  },
  {
    question: 'Quelle est la capitale de la Namibie ?',
    options: shuffleArray(['Windhoek', 'Swakopmund', 'Walvis Bay']),
    answer: 'Windhoek',
  },
  {
    question: 'Quelle est la capitale du Botswana ?',
    options: shuffleArray(['Gaborone', 'Francistown', 'Maun']),
    answer: 'Gaborone',
  },
  {
    question: 'Quelle est la capitale de la Guinée ?',
    options: shuffleArray(['Conakry', 'Kankan', 'Labé']),
    answer: 'Conakry',
  },
  {
    question: 'Quelle est la capitale de la Sierra Leone ?',
    options: shuffleArray(['Freetown', 'Bo', 'Kenema']),
    answer: 'Freetown',
  },
  {
    question: 'Quelle est la capitale du Liberia ?',
    options: shuffleArray(['Monrovia', 'Gbarnga', 'Buchanan']),
    answer: 'Monrovia',
  },
  {
    question: 'Quelle est la capitale de la Mauritanie ?',
    options: shuffleArray(['Nouakchott', 'Nouadhibou', 'Kaédi']),
    answer: 'Nouakchott',
  },
  {
    question: 'Quelle est la capitale de la Libye ?',
    options: shuffleArray(['Tripoli', 'Benghazi', 'Misrata']),
    answer: 'Tripoli',
  },
  {
    question: 'Quelle est la capitale de la Somalie ?',
    options: shuffleArray(['Mogadiscio', 'Hargeisa', 'Kismayo']),
    answer: 'Mogadiscio',
  },
  {
    question: "Quelle est la capitale de l'Erythrée ?",
    options: shuffleArray(['Asmara', 'Keren', 'Massawa']),
    answer: 'Asmara',
  },
  {
    question: 'Quelle est la capitale du Soudan ?',
    options: shuffleArray(['Khartoum', 'Omdurman', 'Port-Soudan']),
    answer: 'Khartoum',
  },
  {
    question: 'Quelle est la capitale du Soudan du Sud ?',
    options: shuffleArray(['Juba', 'Malakal', 'Wau']),
    answer: 'Juba',
  },
  {
    question: 'Quelle est la capitale de la Tanzanie ?',
    options: shuffleArray(['Dodoma', 'Dar es Salaam', 'Arusha']),
    answer: 'Dodoma',
  },
  {
    question: 'Quelle est la capitale du Mozambique ?',
    options: shuffleArray(['Maputo', 'Beira', 'Nampula']),
    answer: 'Maputo',
  },
  {
    question: 'Quelle est la capitale de Madagascar ?',
    options: shuffleArray(['Antananarivo', 'Toamasina', 'Antsirabe']),
    answer: 'Antananarivo',
  },
  {
    question: "Quelle est la capitale de l'Eswatini ?",
    options: shuffleArray(['Mbabane', 'Manzini', 'Lobamba']),
    answer: 'Mbabane',
  },
  {
    question: 'Quelle est la capitale du Lesotho ?',
    options: shuffleArray(['Maseru', 'Teyateyaneng', 'Mafeteng']),
    answer: 'Maseru',
  },
  {
    question: 'Quelle est la capitale de la République centrafricaine ?',
    options: shuffleArray(['Bangui', 'Bambari', 'Berbérati']),
    answer: 'Bangui',
  },
  {
    question: "Quelle est la capitale de l'Allemagne ?",
    options: shuffleArray(['Berlin', 'Madrid', 'Rome']),
    answer: 'Berlin',
  },
  {
    question: "Quelle est la capitale de l'Espagne ?",
    options: shuffleArray(['Madrid', 'Lisbonne', 'Athènes']),
    answer: 'Madrid',
  },
  {
    question: "Quelle est la capitale de l'Italie ?",
    options: shuffleArray(['Rome', 'Vienne', 'Bruxelles']),
    answer: 'Rome',
  },
  {
    question: 'Quelle est la capitale du Portugal ?',
    options: shuffleArray(['Lisbonne', 'Oslo', 'Stockholm']),
    answer: 'Lisbonne',
  },
  {
    question: 'Quelle est la capitale des États-Unis ?',
    options: shuffleArray(['Washington D.C.', 'New York', 'Los Angeles']),
    answer: 'Washington D.C.',
  },
  {
    question: 'Quelle est la capitale du Canada ?',
    options: shuffleArray(['Ottawa', 'Toronto', 'Vancouver']),
    answer: 'Ottawa',
  },
  {
    question: 'Quelle est la capitale du Mexique ?',
    options: shuffleArray(['Mexico', 'Guadalajara', 'Monterrey']),
    answer: 'Mexico',
  },
  {
    question: 'Quelle est la capitale du Brésil ?',
    options: shuffleArray(['Brasilia', 'Rio de Janeiro', 'São Paulo']),
    answer: 'Brasilia',
  },
  {
    question: 'Quelle est la capitale de l’Argentine ?',
    options: shuffleArray(['Buenos Aires', 'Córdoba', 'Rosario']),
    answer: 'Buenos Aires',
  },
  {
    question: 'Quelle est la capitale du Chili ?',
    options: shuffleArray(['Santiago', 'Valparaíso', 'Concepción']),
    answer: 'Santiago',
  },
  {
    question: 'Quelle est la capitale de la Colombie ?',
    options: shuffleArray(['Bogotá', 'Medellín', 'Cali']),
    answer: 'Bogotá',
  },
  {
    question: 'Quelle est la capitale du Pérou ?',
    options: shuffleArray(['Lima', 'Cusco', 'Arequipa']),
    answer: 'Lima',
  },
  {
    question: 'Quelle est la capitale du Venezuela ?',
    options: shuffleArray(['Caracas', 'Maracaibo', 'Valencia']),
    answer: 'Caracas',
  },
  {
    question: 'Quelle est la capitale de l’Équateur ?',
    options: shuffleArray(['Quito', 'Guayaquil', 'Cuenca']),
    answer: 'Quito',
  },
  {
    question: 'Quelle est la capitale de la Bolivie ?',
    options: shuffleArray(['Sucre', 'La Paz', 'Santa Cruz']),
    answer: 'Sucre',
  },
  {
    question: 'Quelle est la capitale du Paraguay ?',
    options: shuffleArray(['Asunción', 'Ciudad del Este', 'Encarnación']),
    answer: 'Asunción',
  },
  {
    question: 'Quelle est la capitale de l’Uruguay ?',
    options: shuffleArray(['Montevideo', 'Salto', 'Paysandú']),
    answer: 'Montevideo',
  },
  {
    question: 'Quelle est la capitale du Panama ?',
    options: shuffleArray(['Panama', 'Colón', 'David']),
    answer: 'Panama',
  },
  {
    question: 'Quelle est la capitale du Costa Rica ?',
    options: shuffleArray(['San José', 'Alajuela', 'Cartago']),
    answer: 'San José',
  },
  {
    question: 'Quelle est la capitale du Nicaragua ?',
    options: shuffleArray(['Managua', 'León', 'Granada']),
    answer: 'Managua',
  },
  {
    question: 'Quelle est la capitale du Honduras ?',
    options: shuffleArray(['Tegucigalpa', 'San Pedro Sula', 'La Ceiba']),
    answer: 'Tegucigalpa',
  },
  {
    question: 'Quelle est la capitale du Salvador ?',
    options: shuffleArray(['San Salvador', 'Santa Ana', 'San Miguel']),
    answer: 'San Salvador',
  },
  {
    question: 'Quelle est la capitale du Guatemala ?',
    options: shuffleArray(['Guatemala', 'Antigua', 'Quetzaltenango']),
    answer: 'Guatemala',
  },
  {
    question: 'Quelle est la capitale de Cuba ?',
    options: shuffleArray(['La Havane', 'Santiago de Cuba', 'Camagüey']),
    answer: 'La Havane',
  },
  {
    question: 'Quelle est la capitale de la République dominicaine ?',
    options: shuffleArray(['Saint-Domingue', 'Santiago', 'La Romana']),
    answer: 'Saint-Domingue',
  },
  {
    question: 'Quelle est la capitale de Haïti ?',
    options: shuffleArray(['Port-au-Prince', 'Cap-Haïtien', 'Gonaïves']),
    answer: 'Port-au-Prince',
  },
  {
    question: 'Quelle est la capitale de la Jamaïque ?',
    options: shuffleArray(['Kingston', 'Montego Bay', 'Spanish Town']),
    answer: 'Kingston',
  },
  {
    question: 'Quelle est la capitale de Trinité-et-Tobago ?',
    options: shuffleArray(['Port-d’Espagne', 'San Fernando', 'Arima']),
    answer: 'Port-d’Espagne',
  },
  {
    question: 'Quelle est la capitale de la Barbade ?',
    options: shuffleArray(['Bridgetown', 'Speightstown', 'Oistins']),
    answer: 'Bridgetown',
  },
  {
    question: 'Quelle est la capitale de la Grenade ?',
    options: shuffleArray(['Saint-Georges', 'Grenville', 'Gouyave']),
    answer: 'Saint-Georges',
  },
  {
    question: 'Quelle est la capitale de Sainte-Lucie ?',
    options: shuffleArray(['Castries', 'Soufrière', 'Vieux Fort']),
    answer: 'Castries',
  },
  {
    question: 'Quelle est la capitale de Saint-Vincent-et-les-Grenadines ?',
    options: shuffleArray(['Kingstown', 'Georgetown', 'Barrouallie']),
    answer: 'Kingstown',
  },
  {
    question: 'Quelle est la capitale d’Antigua-et-Barbuda ?',
    options: shuffleArray(['Saint John’s', 'All Saints', 'Liberta']),
    answer: 'Saint John’s',
  },
  {
    question: 'Quelle est la capitale de la Dominique ?',
    options: shuffleArray(['Roseau', 'Portsmouth', 'Marigot']),
    answer: 'Roseau',
  },
  {
    question: 'Quelle est la capitale de la Russie ?',
    options: shuffleArray(['Moscou', 'Saint-Pétersbourg', 'Novossibirsk']),
    answer: 'Moscou',
  },
  {
    question: 'Quelle est la capitale de la Chine ?',
    options: shuffleArray(['Pékin', 'Shanghai', 'Canton']),
    answer: 'Pékin',
  },
  {
    question: 'Quelle est la capitale du Japon ?',
    options: shuffleArray(['Tokyo', 'Osaka', 'Kyoto']),
    answer: 'Tokyo',
  },
  {
    question: 'Quelle est la capitale de l’Inde ?',
    options: shuffleArray(['New Delhi', 'Mumbai', 'Bangalore']),
    answer: 'New Delhi',
  },
  {
    question: 'Quelle est la capitale de la Corée du Sud ?',
    options: shuffleArray(['Séoul', 'Busan', 'Incheon']),
    answer: 'Séoul',
  },
  {
    question: 'Quelle est la capitale de la Corée du Nord ?',
    options: shuffleArray(['Pyongyang', 'Kaesong', 'Nampo']),
    answer: 'Pyongyang',
  },
  {
    question: 'Quelle est la capitale de la Thaïlande ?',
    options: shuffleArray(['Bangkok', 'Chiang Mai', 'Phuket']),
    answer: 'Bangkok',
  },
  {
    question: 'Quelle est la capitale du Vietnam ?',
    options: shuffleArray(['Hanoï', 'Ho Chi Minh Ville', 'Da Nang']),
    answer: 'Hanoï',
  },
  {
    question: 'Quelle est la capitale de la Malaisie ?',
    options: shuffleArray(['Kuala Lumpur', 'George Town', 'Johor Bahru']),
    answer: 'Kuala Lumpur',
  },
  {
    question: 'Quelle est la capitale de l’Indonésie ?',
    options: shuffleArray(['Jakarta', 'Surabaya', 'Bandung']),
    answer: 'Jakarta',
  },
  {
    question: 'Quelle est la capitale des Philippines ?',
    options: shuffleArray(['Manille', 'Cebu', 'Davao']),
    answer: 'Manille',
  },
  {
    question: 'Quelle est la capitale de Singapour ?',
    options: shuffleArray(['Singapour', 'Jurong', 'Woodlands']),
    answer: 'Singapour',
  },
  {
    question: 'Quelle est la capitale de la Turquie ?',
    options: shuffleArray(['Ankara', 'Istanbul', 'Izmir']),
    answer: 'Ankara',
  },
  {
    question: 'Quelle est la capitale de l’Arabie Saoudite ?',
    options: shuffleArray(['Riyad', 'Djeddah', 'La Mecque']),
    answer: 'Riyad',
  },
  {
    question: 'Quelle est la capitale de l’Iran ?',
    options: shuffleArray(['Téhéran', 'Ispahan', 'Machhad']),
    answer: 'Téhéran',
  },
  {
    question: 'Quelle est la capitale de l’Irak ?',
    options: shuffleArray(['Bagdad', 'Bassorah', 'Mossoul']),
    answer: 'Bagdad',
  },
  {
    question: 'Quelle est la capitale de la Syrie ?',
    options: shuffleArray(['Damas', 'Alep', 'Homs']),
    answer: 'Damas',
  },
  {
    question: 'Quelle est la capitale du Liban ?',
    options: shuffleArray(['Beyrouth', 'Tripoli', 'Sidon']),
    answer: 'Beyrouth',
  },
  {
    question: 'Quelle est la capitale de la Jordanie ?',
    options: shuffleArray(['Amman', 'Aqaba', 'Irbid']),
    answer: 'Amman',
  },
  {
    question: 'Quelle est la capitale d’Israël ?',
    options: shuffleArray(['Jérusalem', 'Tel Aviv', 'Haïfa']),
    answer: 'Jérusalem',
  },
  {
    question: 'Quelle est la capitale de la Grèce ?',
    options: shuffleArray(['Athènes', 'Thessalonique', 'Patras']),
    answer: 'Athènes',
  },
  {
    question: 'Quelle est la capitale de la Norvège ?',
    options: shuffleArray(['Oslo', 'Bergen', 'Trondheim']),
    answer: 'Oslo',
  },
  {
    question: 'Quelle est la capitale de la Suède ?',
    options: shuffleArray(['Stockholm', 'Göteborg', 'Malmö']),
    answer: 'Stockholm',
  },
  {
    question: 'Quelle est la capitale du Danemark ?',
    options: shuffleArray(['Copenhague', 'Aarhus', 'Odense']),
    answer: 'Copenhague',
  },
  {
    question: 'Quelle est la capitale de la Finlande ?',
    options: shuffleArray(['Helsinki', 'Espoo', 'Tampere']),
    answer: 'Helsinki',
  },
  {
    question: 'Quelle est la capitale de l’Islande ?',
    options: shuffleArray(['Reykjavik', 'Kopavogur', 'Hafnarfjordur']),
    answer: 'Reykjavik',
  },
]

export default Questions_Capital
