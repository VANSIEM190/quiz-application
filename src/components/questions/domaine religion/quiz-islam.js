import shuffleArray from '../shuffleArray/shuffleArray'

const Questions_Islam = [
  {
    question: "Quel est le premier pilier de l'Islam?",
    options: shuffleArray(['La Shahada', 'La Salat', 'La Zakat']),
    answer: 'La Shahada',
  },
  {
    question: 'Combien de fois par jour un musulman doit-il prier?',
    options: shuffleArray(['5 fois', '3 fois', '7 fois']),
    answer: '5 fois',
  },
  {
    question: "Quel est le livre sacré de l'Islam?",
    options: shuffleArray(['Le Coran', 'La Bible', 'La Torah']),
    answer: 'Le Coran',
  },
  {
    question: "Quel est le mois de jeûne dans l'Islam?",
    options: shuffleArray(['Ramadan', 'Shawwal', 'Dhul-Hijjah']),
    answer: 'Ramadan',
  },
  {
    question: 'Quel est le lieu de pèlerinage sacré pour les musulmans?',
    options: shuffleArray(['La Mecque', 'Médine', 'Jérusalem']),
    answer: 'La Mecque',
  },
  {
    question: 'Combien de chapitres (sourates) y a-t-il dans le Coran?',
    options: shuffleArray(['114', '99', '120']),
    answer: '114',
  },
  {
    question: "Quel est le nom du prophète de l'Islam?",
    options: shuffleArray(['Muhammad', 'Isa', 'Musa']),
    answer: 'Muhammad',
  },
  {
    question: "Quel est le deuxième pilier de l'Islam?",
    options: shuffleArray(['La Salat', 'La Zakat', 'Le Hajj']),
    answer: 'La Salat',
  },
  {
    question: "Quel est le troisième pilier de l'Islam?",
    options: shuffleArray(['La Zakat', 'La Shahada', 'Le Hajj']),
    answer: 'La Zakat',
  },
  {
    question: "Quel est le quatrième pilier de l'Islam?",
    options: shuffleArray(['Le Sawm', 'La Salat', 'La Zakat']),
    answer: 'Le Sawm',
  },
  {
    question: "Quel est le cinquième pilier de l'Islam?",
    options: shuffleArray(['Le Hajj', 'La Salat', 'La Shahada']),
    answer: 'Le Hajj',
  },
  {
    question: 'Quel est le jour saint de la semaine pour les musulmans?',
    options: shuffleArray(['Vendredi', 'Samedi', 'Dimanche']),
    answer: 'Vendredi',
  },
  {
    question: 'Quel est le nom de la prière du matin?',
    options: shuffleArray(['Fajr', 'Dhuhr', 'Asr']),
    answer: 'Fajr',
  },
  {
    question: 'Quel est le nom de la prière du midi?',
    options: shuffleArray(['Dhuhr', 'Asr', 'Maghrib']),
    answer: 'Dhuhr',
  },
  {
    question: "Quel est le nom de la prière de l'après-midi?",
    options: shuffleArray(['Asr', 'Maghrib', 'Isha']),
    answer: 'Asr',
  },
  {
    question: 'Quel est le nom de la prière du coucher du soleil?',
    options: shuffleArray(['Maghrib', 'Isha', 'Fajr']),
    answer: 'Maghrib',
  },
  {
    question: 'Quel est le nom de la prière de la nuit?',
    options: shuffleArray(['Isha', 'Fajr', 'Dhuhr']),
    answer: 'Isha',
  },
  {
    question: 'Quel est le nom de la fête qui marque la fin du Ramadan?',
    options: shuffleArray(['Eid al-Fitr', 'Eid al-Adha', 'Mawlid']),
    answer: 'Eid al-Fitr',
  },
  {
    question: 'Quel est le nom de la fête du sacrifice?',
    options: shuffleArray(['Eid al-Adha', 'Eid al-Fitr', 'Mawlid']),
    answer: 'Eid al-Adha',
  },
  {
    question: 'Quel est le nom de la ville où le prophète Muhammad est né?',
    options: shuffleArray(['La Mecque', 'Médine', 'Jérusalem']),
    answer: 'La Mecque',
  },
  {
    question: 'Quel est le nom de la ville où le prophète Muhammad a émigré?',
    options: shuffleArray(['Médine', 'La Mecque', 'Jérusalem']),
    answer: 'Médine',
  },
  {
    question: 'Quel est le nom de la nuit où le Coran a été révélé?',
    options: shuffleArray([
      'Laylat al-Qadr',
      'Isra et Miraj',
      "Laylat al-Bara'at",
    ]),
    answer: 'Laylat al-Qadr',
  },
  {
    question:
      "Quel est le nom de l'ange qui a révélé le Coran au prophète Muhammad?",
    options: shuffleArray(['Gabriel', 'Mikael', 'Israfil']),
    answer: 'Gabriel',
  },
  {
    question: 'Quel est le nom de la première femme du prophète Muhammad?',
    options: shuffleArray(['Khadija', 'Aisha', 'Fatima']),
    answer: 'Khadija',
  },
  {
    question: 'Quel est le nom de la fille du prophète Muhammad?',
    options: shuffleArray(['Fatima', 'Aisha', 'Khadija']),
    answer: 'Fatima',
  },
  {
    question:
      'Quel est le nom de la bataille où les musulmans ont remporté leur première victoire?',
    options: shuffleArray([
      'Bataille de Badr',
      'Bataille de Uhud',
      'Bataille du Fossé',
    ]),
    answer: 'Bataille de Badr',
  },
  {
    question:
      'Quel est le nom de la bataille où le prophète Muhammad a été blessé?',
    options: shuffleArray([
      'Bataille de Uhud',
      'Bataille de Badr',
      'Bataille du Fossé',
    ]),
    answer: 'Bataille de Uhud',
  },
  {
    question:
      'Quel est le nom de la bataille où les musulmans ont défendu Médine contre une coalition?',
    options: shuffleArray([
      'Bataille du Fossé',
      'Bataille de Badr',
      'Bataille de Uhud',
    ]),
    answer: 'Bataille du Fossé',
  },
  {
    question: 'Quel est le nom de la sourate la plus courte du Coran?',
    options: shuffleArray(['Al-Kawthar', 'Al-Ikhlas', 'Al-Falaq']),
    answer: 'Al-Kawthar',
  },
  {
    question: 'Quel est le nom de la sourate la plus longue du Coran?',
    options: shuffleArray(['Al-Baqara', 'Al-Imran', 'An-Nisa']),
    answer: 'Al-Baqara',
  },
  {
    question: "Quel est le nom de la sourate qui commence par 'Bismillah'?",
    options: shuffleArray(['Al-Fatiha', 'Al-Baqara', 'Al-Ikhlas']),
    answer: 'Al-Fatiha',
  },
  {
    question: 'Quel est le nom de la sourate qui parle de la lumière?',
    options: shuffleArray(['An-Nur', 'Al-Falaq', 'Al-Ikhlas']),
    answer: 'An-Nur',
  },
  {
    question: "Quel est le nom de la sourate qui parle de l'unicité de Dieu?",
    options: shuffleArray(['Al-Ikhlas', 'Al-Falaq', 'An-Nas']),
    answer: 'Al-Ikhlas',
  },
  {
    question:
      'Quel est le nom de la sourate qui parle de la protection contre le mal?',
    options: shuffleArray(['Al-Falaq', 'An-Nas', 'Al-Ikhlas']),
    answer: 'Al-Falaq',
  },
  {
    question:
      'Quel est le nom de la sourate qui parle de la protection contre les mauvais esprits?',
    options: shuffleArray(['An-Nas', 'Al-Falaq', 'Al-Ikhlas']),
    answer: 'An-Nas',
  },
  {
    question: 'Quel est le nom de la sourate qui parle de la caverne?',
    options: shuffleArray(['Al-Kahf', 'Al-Falaq', 'An-Nas']),
    answer: 'Al-Kahf',
  },
  {
    question: 'Quel est le nom de la sourate qui parle de la résurrection?',
    options: shuffleArray(['Al-Qiyamah', 'Al-Falaq', 'An-Nas']),
    answer: 'Al-Qiyamah',
  },
  {
    question: 'Quel est le nom de la sourate qui parle de la miséricorde?',
    options: shuffleArray(['Ar-Rahman', 'Al-Falaq', 'An-Nas']),
    answer: 'Ar-Rahman',
  },
  {
    question: "Quel est le nom de la sourate qui parle de la famille d'Imran?",
    options: shuffleArray(['Al-Imran', 'Al-Falaq', 'An-Nas']),
    answer: 'Al-Imran',
  },
  {
    question:
      'Quel est le pays avec la plus grande population musulmane en Afrique?',
    options: shuffleArray(['Nigeria', 'Égypte', 'Algérie']),
    answer: 'Nigeria',
  },
  {
    question:
      'Quel est le pays avec la plus grande population musulmane en Asie?',
    options: shuffleArray(['Indonésie', 'Pakistan', 'Inde']),
    answer: 'Indonésie',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Afrique?',
    options: shuffleArray([
      'Mosquée de Djenné',
      'Mosquée Hassan II',
      'Mosquée Al-Azhar',
    ]),
    answer: 'Mosquée de Djenné',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Asie?',
    options: shuffleArray([
      'Mosquée Istiqlal',
      'Mosquée Faisal',
      'Mosquée Badshahi',
    ]),
    answer: 'Mosquée Istiqlal',
  },
  {
    question: "Quel est le pays africain où l'Islam est la religion d'État?",
    options: shuffleArray(['Mauritanie', 'Sénégal', 'Mali']),
    answer: 'Mauritanie',
  },
  {
    question: "Quel est le pays asiatique où l'Islam est la religion d'État?",
    options: shuffleArray(['Malaisie', 'Bangladesh', 'Maldives']),
    answer: 'Maldives',
  },
  {
    question: "Quel est le nom de l'université islamique célèbre en Égypte?",
    options: shuffleArray([
      'Al-Azhar',
      'Cairo University',
      'Ain Shams University',
    ]),
    answer: 'Al-Azhar',
  },
  {
    question: "Quel est le nom de l'université islamique célèbre en Inde?",
    options: shuffleArray([
      'Jamia Millia Islamia',
      'Aligarh Muslim University',
      'Osmania University',
    ]),
    answer: 'Aligarh Muslim University',
  },
  {
    question:
      "Quel est le nom de la fête musulmane célébrée en Afrique de l'Ouest?",
    options: shuffleArray(['Tabaski', 'Eid al-Fitr', 'Eid al-Adha']),
    answer: 'Tabaski',
  },
  {
    question: 'Quel est le nom de la fête musulmane célébrée en Asie du Sud?',
    options: shuffleArray(['Eid al-Fitr', 'Eid al-Adha', 'Mawlid']),
    answer: 'Eid al-Fitr',
  },
  {
    question:
      'Quel est le nom de la dynastie islamique qui a régné en Afrique du Nord?',
    options: shuffleArray(['Fatimides', 'Omeyyades', 'Abbassides']),
    answer: 'Fatimides',
  },
  {
    question: 'Quel est le nom de la dynastie islamique qui a régné en Inde?',
    options: shuffleArray(['Moghols', 'Ghaznavides', 'Ghorides']),
    answer: 'Moghols',
  },
  {
    question:
      "Quel est le nom de la ville sainte pour les musulmans en Afrique de l'Ouest?",
    options: shuffleArray(['Tombouctou', 'Dakar', 'Bamako']),
    answer: 'Tombouctou',
  },
  {
    question:
      'Quel est le nom de la ville sainte pour les musulmans en Asie du Sud?',
    options: shuffleArray(['Ajmer', 'Delhi', 'Lahore']),
    answer: 'Ajmer',
  },
  {
    question:
      "Quel est le nom de l'empire islamique qui a régné en Afrique de l'Ouest?",
    options: shuffleArray([
      'Empire du Mali',
      'Empire du Ghana',
      'Empire Songhaï',
    ]),
    answer: 'Empire du Mali',
  },
  {
    question:
      "Quel est le nom de l'empire islamique qui a régné en Asie du Sud?",
    options: shuffleArray(['Empire Moghol', 'Empire Gupta', 'Empire Maurya']),
    answer: 'Empire Moghol',
  },
  {
    question:
      'Quel est le nom de la langue utilisée pour les écrits islamiques en Afrique?',
    options: shuffleArray(['Arabe', 'Swahili', 'Hausa']),
    answer: 'Arabe',
  },
  {
    question:
      'Quel est le nom de la langue utilisée pour les écrits islamiques en Asie du Sud?',
    options: shuffleArray(['Urdu', 'Hindi', 'Bengali']),
    answer: 'Urdu',
  },
  {
    question:
      "Quel est le nom de la confrérie soufie célèbre en Afrique de l'Ouest?",
    options: shuffleArray(['Tidjaniya', 'Qadiriyya', 'Mouridiyya']),
    answer: 'Tidjaniya',
  },
  {
    question: 'Quel est le nom de la confrérie soufie célèbre en Asie du Sud?',
    options: shuffleArray(['Chishtiyya', 'Suhrawardiyya', 'Naqshbandiyya']),
    answer: 'Chishtiyya',
  },
  {
    question:
      'Quel est le nom de la capitale islamique historique en Afrique du Nord?',
    options: shuffleArray(['Fès', 'Marrakech', 'Alger']),
    answer: 'Fès',
  },
  {
    question:
      'Quel est le nom de la capitale islamique historique en Asie du Sud?',
    options: shuffleArray(['Delhi', 'Agra', 'Lahore']),
    answer: 'Delhi',
  },
  {
    question:
      'Quel est le nom de la célèbre bibliothèque islamique en Afrique?',
    options: shuffleArray([
      'Bibliothèque de Tombouctou',
      "Bibliothèque d'Alexandrie",
      'Bibliothèque de Fès',
    ]),
    answer: 'Bibliothèque de Tombouctou',
  },
  {
    question: 'Quel est le nom de la célèbre bibliothèque islamique en Asie?',
    options: shuffleArray([
      'Bibliothèque de Hyderabad',
      'Bibliothèque de Lahore',
      'Bibliothèque de Delhi',
    ]),
    answer: 'Bibliothèque de Hyderabad',
  },
  {
    question:
      "Quel est le nom de la célèbre université islamique en Afrique de l'Ouest?",
    options: shuffleArray([
      'Université de Sankoré',
      'Université de Dakar',
      'Université de Bamako',
    ]),
    answer: 'Université de Sankoré',
  },
  {
    question:
      'Quel est le nom de la célèbre université islamique en Asie du Sud?',
    options: shuffleArray([
      'Université de Deoband',
      'Université de Karachi',
      'Université de Lahore',
    ]),
    answer: 'Université de Deoband',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Afrique du Nord?',
    options: shuffleArray([
      'Mosquée Hassan II',
      'Mosquée Al-Azhar',
      'Mosquée de Kairouan',
    ]),
    answer: 'Mosquée de Kairouan',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Asie du Sud?',
    options: shuffleArray([
      'Mosquée Badshahi',
      'Mosquée Faisal',
      'Mosquée Jama',
    ]),
    answer: 'Mosquée Badshahi',
  },
  {
    question: "Quel est le nom de la célèbre mosquée en Afrique de l'Ouest?",
    options: shuffleArray([
      'Mosquée de Djenné',
      'Mosquée de Tombouctou',
      'Mosquée de Bamako',
    ]),
    answer: 'Mosquée de Djenné',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Asie du Sud-Est?',
    options: shuffleArray([
      'Mosquée Istiqlal',
      'Mosquée Sultan',
      'Mosquée Omar Ali Saifuddien',
    ]),
    answer: 'Mosquée Istiqlal',
  },
  {
    question: "Quel est le nom de la célèbre mosquée en Afrique de l'Est?",
    options: shuffleArray([
      'Mosquée de Kilwa',
      'Mosquée de Zanzibar',
      'Mosquée de Nairobi',
    ]),
    answer: 'Mosquée de Kilwa',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Asie Centrale?',
    options: shuffleArray([
      'Mosquée Bibi-Khanym',
      'Mosquée Hazrat Sultan',
      'Mosquée Tilla-Kari',
    ]),
    answer: 'Mosquée Bibi-Khanym',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Afrique du Sud?',
    options: shuffleArray([
      'Mosquée Nizamiye',
      'Mosquée Auwal',
      'Mosquée Grey Street',
    ]),
    answer: 'Mosquée Nizamiye',
  },
  {
    question: "Quel est le nom de la célèbre mosquée en Asie de l'Est?",
    options: shuffleArray([
      'Mosquée Niujie',
      'Mosquée Tokyo Camii',
      'Mosquée Kobe',
    ]),
    answer: 'Mosquée Niujie',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Afrique Centrale?',
    options: shuffleArray([
      'Mosquée de Yaoundé',
      "Mosquée de N'Djamena",
      'Mosquée de Bangui',
    ]),
    answer: 'Mosquée de Yaoundé',
  },
  {
    question: "Quel est le nom de la célèbre mosquée en Asie de l'Ouest?",
    options: shuffleArray([
      'Mosquée Sultan Ahmed',
      'Mosquée Umayyade',
      'Mosquée Al-Aqsa',
    ]),
    answer: 'Mosquée Sultan Ahmed',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Afrique du Nord-Est?',
    options: shuffleArray([
      'Mosquée Al-Nour',
      'Mosquée Al-Anwar',
      'Mosquée Al-Sahaba',
    ]),
    answer: 'Mosquée Al-Nour',
  },
  {
    question: 'Quel est le nom de la célèbre mosquée en Asie du Sud-Ouest?',
    options: shuffleArray([
      'Mosquée Sheikh Zayed',
      'Mosquée Al-Haram',
      'Mosquée Al-Nabawi',
    ]),
    answer: 'Mosquée Sheikh Zayed',
  },
  {
    question:
      'Quel est le pays européen avec la plus grande population musulmane?',
    options: shuffleArray(['France', 'Allemagne', 'Royaume-Uni']),
    answer: 'France',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en France?',
    options: shuffleArray([
      'Grande Mosquée de Paris',
      'Mosquée de Lyon',
      'Mosquée de Marseille',
    ]),
    answer: 'Grande Mosquée de Paris',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Allemagne?',
    options: shuffleArray([
      'Mosquée de Cologne',
      'Mosquée de Berlin',
      'Mosquée de Munich',
    ]),
    answer: 'Mosquée de Cologne',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre au Royaume-Uni?',
    options: shuffleArray([
      'Mosquée de Londres',
      'Mosquée de Birmingham',
      'Mosquée de Manchester',
    ]),
    answer: 'Mosquée de Londres',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Espagne?',
    options: shuffleArray([
      'Mosquée de Cordoue',
      'Mosquée de Madrid',
      'Mosquée de Grenade',
    ]),
    answer: 'Mosquée de Cordoue',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Italie?',
    options: shuffleArray([
      'Grande Mosquée de Rome',
      'Mosquée de Milan',
      'Mosquée de Naples',
    ]),
    answer: 'Grande Mosquée de Rome',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre aux Pays-Bas?',
    options: shuffleArray([
      'Mosquée de Rotterdam',
      'Mosquée de La Haye',
      'Mosquée de Utrecht',
    ]),
    answer: 'Mosquée de Rotterdam',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Belgique?',
    options: shuffleArray([
      'Grande Mosquée de Bruxelles',
      'Mosquée de Liège',
      'Mosquée de Gand',
    ]),
    answer: 'Grande Mosquée de Bruxelles',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Suède?',
    options: shuffleArray([
      'Mosquée de Stockholm',
      'Mosquée de Göteborg',
      'Mosquée de Malmö',
    ]),
    answer: 'Mosquée de Stockholm',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Suisse?',
    options: shuffleArray([
      'Mosquée de Genève',
      'Mosquée de Zurich',
      'Mosquée de Lausanne',
    ]),
    answer: 'Mosquée de Genève',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Autriche?',
    options: shuffleArray([
      'Mosquée de Vienne',
      'Mosquée de Graz',
      'Mosquée de Linz',
    ]),
    answer: 'Mosquée de Vienne',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Norvège?',
    options: shuffleArray([
      'Mosquée de Oslo',
      'Mosquée de Bergen',
      'Mosquée de Trondheim',
    ]),
    answer: 'Mosquée de Oslo',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre au Danemark?',
    options: shuffleArray([
      'Mosquée de Copenhague',
      'Mosquée de Aarhus',
      'Mosquée de Odense',
    ]),
    answer: 'Mosquée de Copenhague',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Finlande?',
    options: shuffleArray([
      'Mosquée de Helsinki',
      'Mosquée de Espoo',
      'Mosquée de Tampere',
    ]),
    answer: 'Mosquée de Helsinki',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Grèce?',
    options: shuffleArray([
      'Mosquée de Athènes',
      'Mosquée de Thessalonique',
      'Mosquée de Patras',
    ]),
    answer: 'Mosquée de Athènes',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Turquie?',
    options: shuffleArray([
      'Mosquée Bleue',
      'Mosquée de Süleymaniye',
      'Mosquée de Hagia Sophia',
    ]),
    answer: 'Mosquée Bleue',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Russie?',
    options: shuffleArray([
      'Mosquée de Moscou',
      'Mosquée de Saint-Pétersbourg',
      'Mosquée de Kazan',
    ]),
    answer: 'Mosquée de Moscou',
  },
  {
    question:
      'Quel est le nom de la mosquée la plus célèbre en Bosnie-Herzégovine?',
    options: shuffleArray([
      'Mosquée de Gazi Husrev-beg',
      'Mosquée de Ferhadija',
      'Mosquée de Aladža',
    ]),
    answer: 'Mosquée de Gazi Husrev-beg',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Albanie?',
    options: shuffleArray([
      'Mosquée Et’hem Bey',
      'Mosquée de Tirana',
      'Mosquée de Berat',
    ]),
    answer: 'Mosquée Et’hem Bey',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre en Bulgarie?',
    options: shuffleArray([
      'Mosquée Banya Bashi',
      'Mosquée de Plovdiv',
      'Mosquée de Varna',
    ]),
    answer: 'Mosquée Banya Bashi',
  },
  {
    question:
      'Quel est le pays avec la plus grande population musulmane en Amérique du Nord?',
    options: shuffleArray(['États-Unis', 'Canada', 'Mexique']),
    answer: 'États-Unis',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre aux États-Unis?',
    options: shuffleArray([
      'Mosquée de Washington',
      'Mosquée de New York',
      'Mosquée de Los Angeles',
    ]),
    answer: 'Mosquée de Washington',
  },
  {
    question: 'Quel est le nom de la mosquée la plus célèbre au Canada?',
    options: shuffleArray([
      'Mosquée de Toronto',
      'Mosquée de Montréal',
      'Mosquée de Vancouver',
    ]),
    answer: 'Mosquée de Toronto',
  },
]

export default Questions_Islam
