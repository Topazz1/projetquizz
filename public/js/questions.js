// js/questions.js

export const questions = [
    // ==========================================
    // 🎵 SÉRIE 1 : BLIND TEST (10 Questions)
    // ==========================================
    {
        id: 1,
        categorie: "BLIND TEST 80s",
        type: "audio",
        searchQuery: "Michael Jackson Billie Jean",
        question: "Qui est le roi de la Pop ?",
        reponse: "Michael Jackson (Billie Jean)",
        duree: 30,
        points: 2
    },
    {
        id: 2,
        categorie: "DESSIN ANIMÉ",
        type: "audio",
        searchQuery: "Libérée Délivrée Anaïs Delva",
        question: "Quel Disney vous a cassé les oreilles ?",
        reponse: "La Reine des Neiges",
        duree: 30,
        points: 2
    },
    {
        id: 3,
        categorie: "ROCK LEGEND",
        type: "audio",
        searchQuery: "Queen Bohemian Rhapsody",
        question: "Quel est ce groupe légendaire ?",
        reponse: "Queen",
        duree: 30,
        points: 2
    },
    {
        id: 4,
        categorie: "RAP US",
        type: "audio",
        searchQuery: "Eminem Lose Yourself",
        question: "De quel film vient ce titre ?",
        reponse: "8 Mile (Eminem)",
        duree: 30,
        points: 2
    },
    {
        id: 5,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Game of Thrones Main Title",
        question: "Quelle série ?",
        reponse: "Game of Thrones",
        duree: 30,
        points: 2
    },
    {
        id: 6,
        categorie: "CHANSON FRANÇAISE",
        type: "audio",
        searchQuery: "Céline Dion Pour que tu m'aimes encore",
        question: "Qui chante ?",
        reponse: "Céline Dion",
        duree: 30,
        points: 2
    },
    {
        id: 7,
        categorie: "DISCO",
        type: "audio",
        searchQuery: "Earth Wind & Fire September",
        question: "Quel est ce classique du Funk ?",
        reponse: "September",
        duree: 30,
        points: 2
    },
    {
        id: 8,
        categorie: "ANIME",
        type: "audio",
        searchQuery: "Naruto Blue Bird",
        question: "De quel manga vient cet opening ?",
        reponse: "Naruto Shippuden",
        duree: 30,
        points: 2
    },
    {
        id: 9,
        categorie: "FILM CULTE",
        type: "audio",
        searchQuery: "Eye of the Tiger Survivor",
        question: "Dans quel film de boxe entend-on ça ?",
        reponse: "Rocky",
        duree: 30,
        points: 2
    },
    {
        id: 10,
        categorie: "ELECTRO",
        type: "audio",
        searchQuery: "Daft Punk One More Time",
        question: "Quel duo français se cache sous des casques ?",
        reponse: "Daft Punk",
        duree: 30,
        points: 2
    },

    // ==========================================
    // ⚡ SÉRIE 2 : VRAI OU FAUX (15 Questions Speed)
    // ==========================================
    {
        id: 11,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "L'eau bout à 90°C au niveau de la mer.",
        reponse: "FAUX (100°C)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 12,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Mickey Mouse a 4 doigts par main.",
        reponse: "VRAI",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 13,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Le soleil tourne autour de la Terre.",
        reponse: "FAUX (C'est l'inverse)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 14,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Les dauphins sont des mammifères.",
        reponse: "VRAI",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 15,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "La capitale de l'Australie est Sydney.",
        reponse: "FAUX (C'est Canberra)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 16,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Zidane a marqué 3 buts en finale de 98.",
        reponse: "FAUX (2 buts)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 17,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "La Muraille de Chine est visible depuis la Lune.",
        reponse: "FAUX (Légende urbaine)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 18,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Un octogone a 8 côtés.",
        reponse: "VRAI",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 19,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Harry Potter a une cicatrice en forme de lune.",
        reponse: "FAUX (En forme d'éclair)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 20,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "La Tour Eiffel devait être détruite après 20 ans.",
        reponse: "VRAI",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 21,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Les tomates sont originaires d'Italie.",
        reponse: "FAUX (Amérique du Sud)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 22,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Cléopâtre était Égyptienne.",
        reponse: "FAUX (Elle était d'origine Grecque/Macédonienne)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 23,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Le 'O' de Mario Bros veut dire 'Origine'.",
        reponse: "FAUX (Ça n'existe pas, c'est Mario & Luigi)",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 24,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "Un piano standard a 88 touches.",
        reponse: "VRAI",
        duree: 5, points: 2, malus: -2
    },
    {
        id: 25,
        categorie: "VRAI OU FAUX",
        type: "vrai_faux",
        question: "L'Homme partage 50% de son ADN avec la banane.",
        reponse: "VRAI (Environ)",
        duree: 5, points: 2, malus: -2
    },

    // ==========================================
    // 😎 SÉRIE 3 : EMOJI QUIZ (10 Questions)
    // ==========================================
    {
        id: 26,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🚢 🧊 🎻",
        reponse: "Titanic",
        duree: 15, points: 1
    },
    {
        id: 27,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🦁 👑 🐗",
        reponse: "Le Roi Lion",
        duree: 15, points: 1
    },
    {
        id: 28,
        categorie: "DEVINE LE PAYS",
        type: "emoji",
        question: "🥖 🍷 🗼",
        reponse: "France",
        duree: 15, points: 1
    },
    {
        id: 29,
        categorie: "DEVINE LE HÉROS",
        type: "emoji",
        question: "🕷️ 🕸️ 🏙️",
        reponse: "Spider-Man",
        duree: 15, points: 1
    },
    {
        id: 30,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "👻 🚫 🚐",
        reponse: "S.O.S Fantômes (Ghostbusters)",
        duree: 15, points: 1
    },
    {
        id: 31,
        categorie: "EXPRESSION",
        type: "emoji",
        question: "👀 🦷 👀 🦷",
        reponse: "Oeil pour oeil, dent pour dent",
        duree: 20, points: 1
    },
    {
        id: 32,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "💸 👺 🏦 🇪🇸",
        reponse: "La Casa de Papel",
        duree: 15, points: 1
    },
    {
        id: 33,
        categorie: "DEVINE LE JEU",
        type: "emoji",
        question: "🧱 ⛏️ 🧟",
        reponse: "Minecraft",
        duree: 15, points: 1
    },
    {
        id: 34,
        categorie: "DEVINE LE PERSONNAGE",
        type: "emoji",
        question: "⚡ 👓 🧙‍♂️",
        reponse: "Harry Potter",
        duree: 15, points: 1
    },
    {
        id: 35,
        categorie: "DEVINE LA MARQUE",
        type: "emoji",
        question: "🍎 📱 💻",
        reponse: "Apple",
        duree: 15, points: 1
    },

    // ==========================================
    // 🧠 SÉRIE 4 : CULTURE G (15 Questions)
    // ==========================================
    {
        id: 36,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel est le plus grand océan du monde ?",
        reponse: "L'Océan Pacifique",
        duree: 20, points: 1
    },
    {
        id: 37,
        categorie: "HISTOIRE",
        type: "text",
        question: "En quelle année a eu lieu la Révolution Française ?",
        reponse: "1789",
        duree: 20, points: 1
    },
    {
        id: 38,
        categorie: "SPORT",
        type: "text",
        question: "Quel pays a remporté la Coupe du Monde 2018 ?",
        reponse: "La France",
        duree: 20, points: 1
    },
    {
        id: 39,
        categorie: "SCIENCE",
        type: "text",
        question: "Combien de planètes y a-t-il dans le système solaire ?",
        reponse: "8 (Pluton n'en est plus une)",
        duree: 20, points: 1
    },
    {
        id: 40,
        categorie: "CINÉMA",
        type: "text",
        question: "Qui a réalisé le film Avatar ?",
        reponse: "James Cameron",
        duree: 20, points: 1
    },
    {
        id: 41,
        categorie: "GASTRONOMIE",
        type: "text",
        question: "Quel est l'ingrédient principal du guacamole ?",
        reponse: "L'avocat",
        duree: 20, points: 1
    },
    {
        id: 42,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit 'Les Misérables' ?",
        reponse: "Victor Hugo",
        duree: 20, points: 1
    },
    {
        id: 43,
        categorie: "ANATOMIE",
        type: "text",
        question: "Quel est l'os le plus long du corps humain ?",
        reponse: "Le fémur",
        duree: 20, points: 1
    },
    {
        id: 44,
        categorie: "JEUX VIDÉO",
        type: "text",
        question: "Quel est le métier de Mario ?",
        reponse: "Plombier",
        duree: 20, points: 1
    },
    {
        id: 45,
        categorie: "ANIMAUX",
        type: "text",
        question: "Quel est l'animal le plus rapide au monde (terre) ?",
        reponse: "Le guépard",
        duree: 20, points: 1
    },
    {
        id: 46,
        categorie: "MATHS",
        type: "text",
        question: "Combien font 7 x 8 ?",
        reponse: "56",
        duree: 20, points: 1
    },
    {
        id: 47,
        categorie: "LANGUES",
        type: "text",
        question: "Quelle est la langue la plus parlée au monde ?",
        reponse: "Le Mandarin (Chinois) ou Anglais selon le critère",
        duree: 20, points: 1
    },
    {
        id: 48,
        categorie: "TECHNOLOGIE",
        type: "text",
        question: "Qui a fondé Microsoft ?",
        reponse: "Bill Gates (et Paul Allen)",
        duree: 20, points: 1
    },
    {
        id: 49,
        categorie: "MYTHOLOGIE",
        type: "text",
        question: "Qui est le dieu de la foudre chez les Grecs ?",
        reponse: "Zeus",
        duree: 20, points: 1
    },
    {
        id: 50,
        categorie: "FINALE",
        type: "text",
        question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
        reponse: "Blanc (Question piège !)",
        duree: 15, points: 3
    }
];