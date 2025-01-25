import shuffleArray from '../shuffleArray/shuffleArray.js'

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
      "Quel est le nom du système d'exploitation utilisé par les ordinateurs Apple avant macOS?",
    options: shuffleArray(['Mac OS', 'Windows', 'Linux']),
    answer: 'Mac OS',
  },
  {
    question:
      "Quel est le rôle du gestionnaire de périphériques dans un système d'exploitation?",
    options: shuffleArray([
      'Gérer les pilotes de périphériques',
      'Compiler le code source',
      'Exécuter les applications',
    ]),
    answer: 'Gérer les pilotes de périphériques',
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
  {
    question:
      "Quel est le nom du système d'exploitation utilisé par les ordinateurs personnels dans les années 1980?",
    options: shuffleArray(['MS-DOS', 'Windows', 'Linux']),
    answer: 'MS-DOS',
  },
  {
    question:
      "Quel est le rôle du gestionnaire de réseau dans un système d'exploitation?",
    options: shuffleArray([
      'Gérer les connexions réseau',
      'Compiler le code source',
      'Gérer les fichiers',
    ]),
    answer: 'Gérer les connexions réseau',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour transférer des fichiers sur Internet?',
    options: shuffleArray(['FTP', 'HTTP', 'SMTP']),
    answer: 'FTP',
  },
  {
    question: 'Quel est le nom du protocole utilisé pour envoyer des emails?',
    options: shuffleArray(['SMTP', 'POP3', 'IMAP']),
    answer: 'SMTP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour sécuriser les communications sur Internet?',
    options: shuffleArray(['HTTPS', 'HTTP', 'FTP']),
    answer: 'HTTPS',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour résoudre les noms de domaine?',
    options: shuffleArray(['DNS', 'DHCP', 'IP']),
    answer: 'DNS',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour attribuer des adresses IP dynamiques?',
    options: shuffleArray(['DHCP', 'DNS', 'ARP']),
    answer: 'DHCP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour accéder à distance à un autre ordinateur?',
    options: shuffleArray(['SSH', 'FTP', 'SMTP']),
    answer: 'SSH',
  },
  {
    question: 'Quel est le nom du protocole utilisé pour récupérer des emails?',
    options: shuffleArray(['IMAP', 'SMTP', 'FTP']),
    answer: 'IMAP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour diffuser des vidéos en direct?',
    options: shuffleArray(['RTMP', 'HTTP', 'FTP']),
    answer: 'RTMP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication en temps réel sur Internet?',
    options: shuffleArray(['WebRTC', 'HTTP', 'FTP']),
    answer: 'WebRTC',
  },
  {
    question:
      "Quel est le nom du protocole utilisé pour la synchronisation de l'heure sur Internet?",
    options: shuffleArray(['NTP', 'HTTP', 'FTP']),
    answer: 'NTP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la gestion des réseaux?',
    options: shuffleArray(['SNMP', 'HTTP', 'FTP']),
    answer: 'SNMP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la transmission de données en temps réel?',
    options: shuffleArray(['RTP', 'HTTP', 'FTP']),
    answer: 'RTP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les applications web?',
    options: shuffleArray(['SOAP', 'HTTP', 'FTP']),
    answer: 'SOAP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les services web?',
    options: shuffleArray(['REST', 'HTTP', 'FTP']),
    answer: 'REST',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les appareils IoT?',
    options: shuffleArray(['MQTT', 'HTTP', 'FTP']),
    answer: 'MQTT',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux locaux?',
    options: shuffleArray(['Ethernet', 'HTTP', 'FTP']),
    answer: 'Ethernet',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux sans fil?',
    options: shuffleArray(['Wi-Fi', 'HTTP', 'FTP']),
    answer: 'Wi-Fi',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux mobiles?',
    options: shuffleArray(['LTE', 'HTTP', 'FTP']),
    answer: 'LTE',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de téléphonie?',
    options: shuffleArray(['VoIP', 'HTTP', 'FTP']),
    answer: 'VoIP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de télévision?',
    options: shuffleArray(['IPTV', 'HTTP', 'FTP']),
    answer: 'IPTV',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de radio?',
    options: shuffleArray(['DAB', 'HTTP', 'FTP']),
    answer: 'DAB',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de satellites?',
    options: shuffleArray(['DVB-S', 'HTTP', 'FTP']),
    answer: 'DVB-S',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de capteurs?',
    options: shuffleArray(['Zigbee', 'HTTP', 'FTP']),
    answer: 'Zigbee',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de véhicules?',
    options: shuffleArray(['V2X', 'HTTP', 'FTP']),
    answer: 'V2X',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de drones?',
    options: shuffleArray(['UAV', 'HTTP', 'FTP']),
    answer: 'UAV',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de robots?',
    options: shuffleArray(['ROS', 'HTTP', 'FTP']),
    answer: 'ROS',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de réalité virtuelle?',
    options: shuffleArray(['VRPN', 'HTTP', 'FTP']),
    answer: 'VRPN',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de réalité augmentée?',
    options: shuffleArray(['ARKit', 'HTTP', 'FTP']),
    answer: 'ARKit',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de jeux vidéo?',
    options: shuffleArray(['GGP', 'HTTP', 'FTP']),
    answer: 'GGP',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour la communication entre les réseaux de blockchain?',
    options: shuffleArray(['Ethereum', 'HTTP', 'FTP']),
    answer: 'Ethereum',
  },
  {
    question: "Quel est le rôle d'un serveur web?",
    options: shuffleArray([
      'Héberger et servir des pages web',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Héberger et servir des pages web',
  },
  {
    question:
      'Quel est le nom du langage de balisage utilisé pour créer des pages web?',
    options: shuffleArray(['HTML', 'CSS', 'JavaScript']),
    answer: 'HTML',
  },
  {
    question: 'Quel est le rôle du CSS dans le développement web?',
    options: shuffleArray([
      'Styliser les pages web',
      'Créer des bases de données',
      'Compiler le code source',
    ]),
    answer: 'Styliser les pages web',
  },
  {
    question: 'Quel est le rôle du JavaScript dans le développement web?',
    options: shuffleArray([
      "Ajouter de l'interactivité aux pages web",
      'Créer des bases de données',
      'Compiler le code source',
    ]),
    answer: "Ajouter de l'interactivité aux pages web",
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour transférer des pages web?',
    options: shuffleArray(['HTTP', 'FTP', 'SMTP']),
    answer: 'HTTP',
  },
  {
    question: "Quel est le rôle d'un navigateur web?",
    options: shuffleArray([
      'Afficher et interpréter les pages web',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Afficher et interpréter les pages web',
  },
  {
    question:
      'Quel est le nom du langage de script côté serveur le plus populaire?',
    options: shuffleArray(['PHP', 'Python', 'Ruby']),
    answer: 'PHP',
  },
  {
    question: "Quel est le rôle d'une API web?",
    options: shuffleArray([
      'Permettre la communication entre différentes applications',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Permettre la communication entre différentes applications',
  },
  {
    question:
      'Quel est le nom du format de données léger utilisé pour échanger des données entre un client et un serveur?',
    options: shuffleArray(['JSON', 'XML', 'CSV']),
    answer: 'JSON',
  },
  {
    question: "Quel est le rôle d'un CDN (Content Delivery Network)?",
    options: shuffleArray([
      'Distribuer le contenu web plus rapidement',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Distribuer le contenu web plus rapidement',
  },
  {
    question:
      'Quel est le nom du langage utilisé pour interroger des bases de données?',
    options: shuffleArray(['SQL', 'HTML', 'CSS']),
    answer: 'SQL',
  },
  {
    question: "Quel est le rôle d'un framework web?",
    options: shuffleArray([
      "Faciliter le développement d'applications web",
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: "Faciliter le développement d'applications web",
  },
  {
    question:
      'Quel est le nom du framework JavaScript le plus populaire pour le développement front-end?',
    options: shuffleArray(['React', 'Angular', 'Vue']),
    answer: 'React',
  },
  {
    question: "Quel est le rôle d'un CMS (Content Management System)?",
    options: shuffleArray([
      'Gérer et publier du contenu web',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Gérer et publier du contenu web',
  },
  {
    question: 'Quel est le nom du CMS le plus populaire?',
    options: shuffleArray(['WordPress', 'Joomla', 'Drupal']),
    answer: 'WordPress',
  },
  {
    question: "Quel est le rôle d'un certificat SSL?",
    options: shuffleArray([
      'Sécuriser les communications sur Internet',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Sécuriser les communications sur Internet',
  },
  {
    question:
      'Quel est le nom du protocole utilisé pour sécuriser les communications sur Internet?',
    options: shuffleArray(['HTTPS', 'HTTP', 'FTP']),
    answer: 'HTTPS',
  },
  {
    question: "Quel est le rôle d'un serveur DNS?",
    options: shuffleArray([
      'Résoudre les noms de domaine en adresses IP',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Résoudre les noms de domaine en adresses IP',
  },
  {
    question:
      'Quel est le nom du langage utilisé pour créer des styles de page web?',
    options: shuffleArray(['CSS', 'HTML', 'JavaScript']),
    answer: 'CSS',
  },
  {
    question: "Quel est le rôle d'un serveur de base de données?",
    options: shuffleArray([
      'Stocker et gérer les données',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Stocker et gérer les données',
  },
  {
    question: "Quel est le rôle d'un logiciel de traitement de texte?",
    options: shuffleArray([
      'Créer et éditer des documents textuels',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Créer et éditer des documents textuels',
  },
  {
    question: "Quel est le rôle d'un logiciel de tableur?",
    options: shuffleArray([
      'Gérer et analyser des données sous forme de tableaux',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Gérer et analyser des données sous forme de tableaux',
  },
  {
    question: "Quel est le rôle d'un logiciel de présentation?",
    options: shuffleArray([
      'Créer des diapositives pour des présentations',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Créer des diapositives pour des présentations',
  },
  {
    question: "Quel est le rôle d'un logiciel de gestion de projet?",
    options: shuffleArray([
      "Planifier et suivre l'avancement des projets",
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: "Planifier et suivre l'avancement des projets",
  },
  {
    question: "Quel est le rôle d'un logiciel de messagerie électronique?",
    options: shuffleArray([
      'Envoyer et recevoir des emails',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Envoyer et recevoir des emails',
  },
  {
    question: "Quel est le rôle d'un logiciel de gestion de base de données?",
    options: shuffleArray([
      'Créer et gérer des bases de données',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Créer et gérer des bases de données',
  },
  {
    question: "Quel est le rôle d'un logiciel de dessin vectoriel?",
    options: shuffleArray([
      'Créer des illustrations et des graphiques vectoriels',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Créer des illustrations et des graphiques vectoriels',
  },
  {
    question: "Quel est le rôle d'un logiciel de retouche photo?",
    options: shuffleArray([
      'Modifier et améliorer des images',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Modifier et améliorer des images',
  },
  {
    question: "Quel est le rôle d'un logiciel de montage vidéo?",
    options: shuffleArray([
      'Éditer et assembler des séquences vidéo',
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: 'Éditer et assembler des séquences vidéo',
  },
  {
    question: "Quel est le rôle d'un logiciel antivirus?",
    options: shuffleArray([
      "Protéger l'ordinateur contre les virus et les malwares",
      'Compiler le code source',
      'Gérer les connexions réseau',
    ]),
    answer: "Protéger l'ordinateur contre les virus et les malwares",
  },
  {
    question: 'Quel est le modèle de langage développé par OpenAI?',
    options: shuffleArray(['GPT-3', 'BERT', 'T5']),
    answer: 'GPT-3',
  },
]

export default Questions_Informatique
