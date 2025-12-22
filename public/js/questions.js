// js/questions.js

export const questions = [
    // ============================================================
    // 🐣 SÉRIE 1 : POKÉMON MANIA (Mise en jambe)
    // TYPE : TEXTE (+1 / -0)
    // ============================================================
    {
        id: 1,
        categorie: "QUI EST CE POKÉMON ?",
        type: "text",
        question: "Quelle est l'évolution de Pikachu ?",
        reponse: "Raichu",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 2,
        categorie: "QUI EST CE POKÉMON ?",
        type: "text",
        question: "Quel Pokémon est connu pour dormir tout le temps et bloquer la route ?",
        reponse: "Ronflex",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 3,
        categorie: "POKÉMON EXPERT",
        type: "text",
        question: "Combien y avait-il de Pokémon dans la première génération (Rouge/Bleu) ?",
        reponse: "151",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 4,
        categorie: "QUI EST CE POKÉMON ?",
        type: "text",
        question: "Quel Pokémon légendaire a été créé par l'homme (clonage) ?",
        reponse: "Mewtwo",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 5,
        categorie: "POKÉMON WTF",
        type: "text",
        question: "De quelle couleur est un Léviator Shiny (Chromatique) ?",
        reponse: "Rouge",
        duree: 20, points: 1, malus: 0
    },

    // ============================================================
    // 🎵 SÉRIE 2 : BLIND TEST (Ambiance)
    // TYPE : AUDIO (+1 / -1) -> Attention au malus !
    // ============================================================
    {
        id: 6,
        categorie: "QUEL EST CE GÉNÉRIQUE ?",
        type: "audio",
        searchQuery: "Pokemon Theme Jason Paige", 
        question: "Quel est ce dessin animé culte ?",
        reponse: "Pokémon (Attrapez-les tous !)",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 7,
        categorie: "QUI CHANTE ?",
        type: "audio",
        searchQuery: "Britney Spears Toxic",
        question: "Qui est cette princesse de la Pop ?",
        reponse: "Britney Spears",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 8,
        categorie: "QUEL EST CE FILM ?",
        type: "audio",
        searchQuery: "Pirates of the Caribbean He's a Pirate",
        question: "De quelle saga vient cette musique épique ?",
        reponse: "Pirates des Caraïbes",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 9,
        categorie: "QUI EST CE GROUPE ?",
        type: "audio",
        searchQuery: "AC/DC Highway to Hell",
        question: "Quel groupe de Hard Rock australien ?",
        reponse: "AC/DC",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 10,
        categorie: "TUBE DE L'ÉTÉ",
        type: "audio",
        searchQuery: "Luis Fonsi Despacito",
        question: "Quel est ce titre qui a envahi 2017 ?",
        reponse: "Despacito",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 11,
        categorie: "RAP US",
        type: "audio",
        searchQuery: "Dr Dre Still D.R.E.",
        question: "Quel rappeur accompagne Dr. Dre sur ce piano ?",
        reponse: "Snoop Dogg",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 12,
        categorie: "QUEL EST CE JEU ?",
        type: "audio",
        searchQuery: "Super Mario Bros Theme",
        question: "De quel jeu vidéo vient cette musique ?",
        reponse: "Super Mario Bros",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 13,
        categorie: "CHANSON FRANÇAISE",
        type: "audio",
        searchQuery: "Jean-Jacques Goldman Envole-moi",
        question: "Qui chante ce tube ?",
        reponse: "Jean-Jacques Goldman",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 14,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Stranger Things Theme",
        question: "Quelle série Netflix a ce générique synthwave ?",
        reponse: "Stranger Things",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 15,
        categorie: "DISNEY",
        type: "audio",
        searchQuery: "Ce rêve bleu Aladdin",
        question: "De quel dessin animé vient ce duo ?",
        reponse: "Aladdin",
        duree: 30, points: 1, malus: -1
    },

    // ============================================================
    // ⚡ SÉRIE 3 : VRAI OU FAUX (Speed & Stress)
    // TYPE : VRAI_FAUX (+2 / -2) -> Ça passe ou ça casse !
    // ============================================================
    {
        id: 16,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Pikachu a le bout de la queue noir.",
        reponse: "FAUX (Il est jaune, ou marron à la base, mais pas le bout !)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 17,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La tomate est botaniquement un fruit.",
        reponse: "VRAI",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 18,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Dark Vador dit : 'Luke, je suis ton père'.",
        reponse: "FAUX (Il dit 'Non, je suis ton père')",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 19,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'être humain possède 4 narines.",
        reponse: "VRAI (2 externes et 2 internes !)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 20,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La capitale de l'Australie est Sydney.",
        reponse: "FAUX (C'est Canberra)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 21,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les pieuvres ont 3 cœurs.",
        reponse: "VRAI",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 22,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Mario porte une casquette car c'était dur d'animer des cheveux.",
        reponse: "VRAI (Sur les vieilles consoles)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 23,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La Grande Muraille de Chine est visible à l'œil nu depuis la Lune.",
        reponse: "FAUX (C'est une légende)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 24,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Cléopâtre a vécu plus près de l'invention de l'iPhone que des Pyramides.",
        reponse: "VRAI (Pyramides ~2500 av JC, Cléo ~30 av JC, iPhone 2007)",
        duree: 8, points: 2, malus: -2
    },
    {
        id: 25,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'eau bouillante gèle plus vite que l'eau froide.",
        reponse: "VRAI (L'effet Mpemba, dans certaines conditions)",
        duree: 6, points: 2, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 4 : EMOJI RIDDLE (Déduction)
    // TYPE : EMOJI (+2 / -1)
    // ============================================================
    {
        id: 26,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🚢 🧊 🎻",
        reponse: "Titanic",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 27,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🦁 👑 🐗",
        reponse: "Le Roi Lion",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 28,
        categorie: "DEVINE LE PAYS",
        type: "emoji",
        question: "🥖 🍷 🗼",
        reponse: "France",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 29,
        categorie: "DEVINE LE HÉROS",
        type: "emoji",
        question: "🕷️ 🕸️ 🏙️",
        reponse: "Spider-Man",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 30,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "🧪 🚐 ⚗️ 💎",
        reponse: "Breaking Bad",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 31,
        categorie: "DEVINE LE JEU",
        type: "emoji",
        question: "🧱 ⛏️ 🧟",
        reponse: "Minecraft",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 32,
        categorie: "DEVINE LE PERSONNAGE",
        type: "emoji",
        question: "⚡ 👓 🧙‍♂️",
        reponse: "Harry Potter",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 33,
        categorie: "DEVINE L'EXPRESSION",
        type: "emoji",
        question: "🌧️ 🐱 🐶",
        reponse: "Il pleut des cordes (Raining cats and dogs)",
        duree: 20, points: 2, malus: -1
    },
    {
        id: 34,
        categorie: "DEVINE LA MARQUE",
        type: "emoji",
        question: "🍔 🤡 🍟",
        reponse: "McDonald's",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 35,
        categorie: "DEVINE LE DESSIN ANIMÉ",
        type: "emoji",
        question: "🐼 🥋 👊",
        reponse: "Kung Fu Panda",
        duree: 15, points: 2, malus: -1
    },

    // ============================================================
    // 🧠 SÉRIE 5 : CULTURE GÉNÉRALE (Le Classique)
    // TYPE : TEXTE (+1 / -0)
    // ============================================================
    {
        id: 36,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel fleuve traverse Paris ?",
        reponse: "La Seine",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 37,
        categorie: "HISTOIRE",
        type: "text",
        question: "Qui a été le premier président de la Ve République ?",
        reponse: "Charles de Gaulle",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 38,
        categorie: "SPORT",
        type: "text",
        question: "Quel sport pratique-t-on à Roland Garros ?",
        reponse: "Le Tennis",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 39,
        categorie: "SCIENCE",
        type: "text",
        question: "Quel est le symbole chimique de l'oxygène ?",
        reponse: "O",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 40,
        categorie: "CINÉMA",
        type: "text",
        question: "Dans quel film entend-on 'Mon précieux' ?",
        reponse: "Le Seigneur des Anneaux",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 41,
        categorie: "GASTRONOMIE",
        type: "text",
        question: "Avec quel lait fabrique-t-on la mozzarella traditionnelle ?",
        reponse: "Lait de Bufflonne",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 42,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Quel jeune sorcier va à l'école Poudlard ?",
        reponse: "Harry Potter",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 43,
        categorie: "CORPS HUMAIN",
        type: "text",
        question: "Combien de dents a un adulte (dents de sagesse incluses) ?",
        reponse: "32",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 44,
        categorie: "JEUX VIDÉO",
        type: "text",
        question: "Comment s'appelle le frère de Mario ?",
        reponse: "Luigi",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 45,
        categorie: "ANIMAUX",
        type: "text",
        question: "Quel est le plus grand mammifère marin ?",
        reponse: "La Baleine Bleue",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 46,
        categorie: "CALCUL MENTAL",
        type: "text",
        question: "Combien font 15 + 15 + 15 ?",
        reponse: "45",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 47,
        categorie: "LANGUES",
        type: "text",
        question: "Comment dit-on 'Merci' en espagnol ?",
        reponse: "Gracias",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 48,
        categorie: "TECHNOLOGIE",
        type: "text",
        question: "Quel réseau social a un logo en forme d'oiseau bleu (historiquement) ?",
        reponse: "Twitter",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 49,
        categorie: "MYTHOLOGIE",
        type: "text",
        question: "Qui est le dieu des mers avec un trident ?",
        reponse: "Poséidon (ou Neptune)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 50,
        categorie: "QUESTION PIÈGE",
        type: "text",
        question: "De quelle couleur sont les boîtes noires des avions ?",
        reponse: "Orange (pour les retrouver facilement)",
        duree: 20, points: 1, malus: 0
    },

    // ============================================================
    // 🔥 SÉRIE 6 : DIFFICILE (Pour départager)
    // ============================================================
    {
        id: 51,
        categorie: "CAPITALE",
        type: "text",
        question: "Quelle est la capitale du Canada ?",
        reponse: "Ottawa (Pas Montréal !)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 52,
        categorie: "CINÉMA EXPERT",
        type: "text",
        question: "Quel film a gagné 11 Oscars (comme Titanic et Ben-Hur) ?",
        reponse: "Le Seigneur des Anneaux : Le Retour du Roi",
        duree: 25, points: 1, malus: 0
    },
    {
        id: 53,
        categorie: "BLIND TEST RETRO",
        type: "audio",
        searchQuery: "A-Ha Take On Me",
        question: "Quel groupe norvégien chante ce tube des années 80 ?",
        reponse: "A-Ha",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 54,
        categorie: "POKÉMON EXPERT",
        type: "text",
        question: "Quel est le numéro 001 du Pokédex National ?",
        reponse: "Bulbizarre",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 55,
        categorie: "QUESTION FINALE",
        type: "text",
        question: "En quelle année l'homme a-t-il marché sur la Lune ?",
        reponse: "1969",
        duree: 30, points: 3, malus: 0
    },
    // SUITE DU PACK DE QUESTIONS (ID 61 à 120)

    // ============================================================
    // 🐣 SÉRIE 7 : POKÉMON & JEUX VIDÉO
    // ============================================================
    {
        id: 61,
        categorie: "QUI EST CE POKÉMON ?",
        type: "text",
        question: "Quel Pokémon ressemble à une tortue avec des canons à eau ?",
        reponse: "Tortank",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 62,
        categorie: "POKÉMON TYPE",
        type: "text",
        question: "Quel type est très efficace contre le type Feu ?",
        reponse: "Eau (ou Sol / Roche)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 63,
        categorie: "OBJET POKÉMON",
        type: "text",
        question: "Quel objet utilise-t-on pour capturer un Pokémon à coup sûr ?",
        reponse: "La Master Ball",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 64,
        categorie: "JEU VIDÉO RÉTRO",
        type: "text",
        question: "Quel personnage mange des fantômes dans un labyrinthe ?",
        reponse: "Pac-Man",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 65,
        categorie: "FORTNITE",
        type: "text",
        question: "Comment s'appelle le bus qui dépose les joueurs ?",
        reponse: "Le Bus de Combat (Battle Bus)",
        duree: 20, points: 1, malus: 0
    },

    // ============================================================
    // 🎵 SÉRIE 8 : BLIND TEST VARIÉ (+1 / -1)
    // ============================================================
    {
        id: 66,
        categorie: "DESSIN ANIMÉ CULTE",
        type: "audio",
        searchQuery: "Générique Inspecteur Gadget", 
        question: "Qui est cet inspecteur plein de gadgets ?",
        reponse: "Inspecteur Gadget",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 67,
        categorie: "FILM DE SF",
        type: "audio",
        searchQuery: "Star Wars The Force Suite",
        question: "De quelle saga vient cette musique légendaire ?",
        reponse: "Star Wars",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 68,
        categorie: "TUBES 2000",
        type: "audio",
        searchQuery: "Outkast Hey Ya",
        question: "Quel est ce titre qui donne la pêche ?",
        reponse: "Hey Ya! (OutKast)",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 69,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Mission Impossible Theme",
        question: "Quelle série d'espionnage a ce thème explosif ?",
        reponse: "Mission Impossible",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 70,
        categorie: "DIVA POP",
        type: "audio",
        searchQuery: "Lady Gaga Bad Romance",
        question: "Qui chante ce tube mondial ?",
        reponse: "Lady Gaga",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 71,
        categorie: "FILM D'ACTION",
        type: "audio",
        searchQuery: "James Bond Theme Monty Norman",
        question: "Quel agent secret arrive sur cette musique ?",
        reponse: "James Bond (007)",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 72,
        categorie: "VARIÉTÉ FRANÇAISE",
        type: "audio",
        searchQuery: "Claude François Alexandrie Alexandra",
        question: "Qui chante ?",
        reponse: "Claude François",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 73,
        categorie: "JEU VIDÉO",
        type: "audio",
        searchQuery: "Tetris Theme Korobeiniki",
        question: "Quel jeu de briques a cette musique russe ?",
        reponse: "Tetris",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 74,
        categorie: "GROUPE LÉGENDAIRE",
        type: "audio",
        searchQuery: "The Beatles Help",
        question: "Quel est ce groupe anglais ?",
        reponse: "The Beatles",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 75,
        categorie: "DESSIN ANIMÉ",
        type: "audio",
        searchQuery: "Simpsons Theme Danny Elfman",
        question: "Quelle famille jaune a ce générique ?",
        reponse: "Les Simpson",
        duree: 30, points: 1, malus: -1
    },

    // ============================================================
    // ⚡ SÉRIE 9 : VRAI OU FAUX (+2 / -2)
    // ============================================================
    {
        id: 76,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les autruches mettent la tête dans le sable pour se cacher.",
        reponse: "FAUX (Légende urbaine, elles courent !)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 77,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le Mont Blanc est le plus haut sommet du monde.",
        reponse: "FAUX (C'est l'Everest)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 78,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La chauve-souris est un oiseau.",
        reponse: "FAUX (C'est un mammifère)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 79,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Il y a 50 étoiles sur le drapeau américain.",
        reponse: "VRAI",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 80,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Napoléon était très petit pour son époque.",
        reponse: "FAUX (Il avait une taille moyenne pour l'époque)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 81,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le requin est un poisson.",
        reponse: "VRAI",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 82,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "On mange des araignées en dormant.",
        reponse: "FAUX (Légende statistique totalement fausse)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 83,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La Statue de la Liberté a été offerte par la France.",
        reponse: "VRAI",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 84,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Jules César était empereur.",
        reponse: "FAUX (Il était dictateur à vie, Auguste fut le 1er empereur)",
        duree: 8, points: 2, malus: -2
    },
    {
        id: 85,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'or est un métal magnétique (attire les aimants).",
        reponse: "FAUX",
        duree: 6, points: 2, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 10 : EMOJI MYSTÈRE (+2 / -1)
    // ============================================================
    {
        id: 86,
        categorie: "DEVINE LE DESSIN ANIMÉ",
        type: "emoji",
        question: "🧜‍♀️ 🦀 🌊",
        reponse: "La Petite Sirène",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 87,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🦖 🧬 🚙",
        reponse: "Jurassic Park",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 88,
        categorie: "DEVINE LE SPORT",
        type: "emoji",
        question: "🥊 🔔 🦷",
        reponse: "La Boxe",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 89,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "🦑 🎲 💰 💀",
        reponse: "Squid Game",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 90,
        categorie: "DEVINE LE PERSONNAGE",
        type: "emoji",
        question: "🦇 🦸‍♂️ 🌃",
        reponse: "Batman",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 91,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🍫 🎫 🏭",
        reponse: "Charlie et la Chocolaterie",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 92,
        categorie: "DEVINE L'EXPRESSION",
        type: "emoji",
        question: "⚡ 🌩️ ⚡",
        reponse: "Coup de foudre",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 93,
        categorie: "DEVINE LA VILLE",
        type: "emoji",
        question: "🗽 🚕 🍎",
        reponse: "New York",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 94,
        categorie: "DEVINE LE PLAT",
        type: "emoji",
        question: "🍕 🇮🇹 🧀",
        reponse: "Pizza",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 95,
        categorie: "DEVINE LE MÉTIER",
        type: "emoji",
        question: "👨‍🚒 🚒 💦",
        reponse: "Pompier",
        duree: 15, points: 2, malus: -1
    },

    // ============================================================
    // 🧠 SÉRIE 11 : CULTURE G (+1 / 0)
    // ============================================================
    {
        id: 96,
        categorie: "CORPS HUMAIN",
        type: "text",
        question: "Combien le corps humain a-t-il de poumons ?",
        reponse: "2",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 97,
        categorie: "ASTRONOMIE",
        type: "text",
        question: "Quelle est la planète la plus proche du soleil ?",
        reponse: "Mercure",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 98,
        categorie: "DESSIN ANIMÉ",
        type: "text",
        question: "Dans quel dessin animé trouve-t-on un chat bleu nommé Tom ?",
        reponse: "Tom et Jerry",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 99,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Dans quel pays se trouvent les pyramides de Gizeh ?",
        reponse: "Égypte",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 100,
        categorie: "ANIMAUX",
        type: "text",
        question: "Quel animal a une trompe ?",
        reponse: "L'éléphant",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 101,
        categorie: "SPORT",
        type: "text",
        question: "Combien de joueurs y a-t-il dans une équipe de football ?",
        reponse: "11",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 102,
        categorie: "COULEURS",
        type: "text",
        question: "Quelles sont les trois couleurs du drapeau italien ?",
        reponse: "Vert, Blanc, Rouge",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 103,
        categorie: "CINÉMA",
        type: "text",
        question: "Comment s'appelle l'ogre vert de Dreamworks ?",
        reponse: "Shrek",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 104,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit 'Le Petit Prince' ?",
        reponse: "Antoine de Saint-Exupéry",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 105,
        categorie: "ALIMENTATION",
        type: "text",
        question: "Quel fruit est séché pour faire des raisins secs ?",
        reponse: "Le raisin",
        duree: 20, points: 1, malus: 0
    },

    // ============================================================
    // 🔥 SÉRIE 12 : LE GRAND FINAL (+1 / 0)
    // ============================================================
    {
        id: 106,
        categorie: "MYTHOLOGIE",
        type: "text",
        question: "Qui est le dieu des enfers chez les Grecs ?",
        reponse: "Hadès",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 107,
        categorie: "POKÉMON LÉGENDAIRE",
        type: "text",
        question: "Quel oiseau légendaire est de type Électrik ?",
        reponse: "Électhor",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 108,
        categorie: "INFORMATIQUE",
        type: "text",
        question: "Que signifient les lettres 'WWW' sur internet ?",
        reponse: "World Wide Web",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 109,
        categorie: "HISTOIRE DE FRANCE",
        type: "text",
        question: "Quel roi était surnommé le Roi-Soleil ?",
        reponse: "Louis XIV",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 110,
        categorie: "SUPER HÉROS",
        type: "text",
        question: "Quel est le vrai nom de Superman ?",
        reponse: "Clark Kent (ou Kal-El)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 111,
        categorie: "MUSIQUE",
        type: "text",
        question: "Combien y a-t-il de cordes sur une guitare standard ?",
        reponse: "6",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 112,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel pays a la forme d'une botte ?",
        reponse: "L'Italie",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 113,
        categorie: "ANIMAUX",
        type: "text",
        question: "Quel oiseau est capable de voler à reculons ?",
        reponse: "Le Colibri",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 114,
        categorie: "SCIENCE",
        type: "text",
        question: "À quelle température l'eau bout-elle ?",
        reponse: "100°C",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 115,
        categorie: "CULTURE INTERNET",
        type: "text",
        question: "Quel animal est le logo de Linux ?",
        reponse: "Un manchot (Tux)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 116,
        categorie: "TÉLÉVISION",
        type: "text",
        question: "Dans Koh-Lanta, que faut-il ne surtout pas éteindre ?",
        reponse: "Le feu (ou la flamme)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 117,
        categorie: "LANGUE FRANÇAISE",
        type: "text",
        question: "Quel est le pluriel de 'Cheval' ?",
        reponse: "Chevaux",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 118,
        categorie: "DESSIN ANIMÉ",
        type: "text",
        question: "Quel est le prénom du bébé dans Les Indestructibles ?",
        reponse: "Jack-Jack",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 119,
        categorie: "JEUX DE SOCIÉTÉ",
        type: "text",
        question: "Quel jeu consiste à acheter des rues et des gares ?",
        reponse: "Le Monopoly",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 120,
        categorie: "DERNIÈRE QUESTION",
        type: "text",
        question: "Combien de côtés a un triangle ?",
        reponse: "3 (C'est cadeau !)",
        duree: 20, points: 1, malus: 0
    },
    // SUITE DU PACK 3 (ID 121 à 180)

    // ============================================================
    // 🎵 SÉRIE 13 : BLIND TEST 90's & 2000 (+1 / -1)
    // ============================================================
    {
        id: 121,
        categorie: "BOYS BAND",
        type: "audio",
        searchQuery: "Backstreet Boys Everybody",
        question: "Quel est ce Boys Band culte ?",
        reponse: "Backstreet Boys",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 122,
        categorie: "FILM D'ANIMATION",
        type: "audio",
        searchQuery: "Shrek All Star Smash Mouth",
        question: "Quel ogre vert commence son film avec cette musique ?",
        reponse: "Shrek",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 123,
        categorie: "TUBE FRANÇAIS",
        type: "audio",
        searchQuery: "Kyo Dernière Danse",
        question: "Quel groupe de rock français chante ça ?",
        reponse: "Kyo",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 124,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Malcolm in the Middle Theme",
        question: "Quelle série a ce générique déjanté ?",
        reponse: "Malcolm",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 125,
        categorie: "RAP US",
        type: "audio",
        searchQuery: "50 Cent In Da Club",
        question: "C'est l'anniversaire de quel rappeur ?",
        reponse: "50 Cent",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 126,
        categorie: "DIVA",
        type: "audio",
        searchQuery: "Beyonce Crazy In Love",
        question: "Qui est cette Queen de la Pop ?",
        reponse: "Beyoncé",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 127,
        categorie: "ROCK",
        type: "audio",
        searchQuery: "Nirvana Smells Like Teen Spirit",
        question: "Quel groupe de Kurt Cobain ?",
        reponse: "Nirvana",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 128,
        categorie: "CHANSON HONTEUSE",
        type: "audio",
        searchQuery: "O-Zone Dragostea Din Tei",
        question: "Quel est ce groupe moldave (Numa Numa) ?",
        reponse: "O-Zone",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 129,
        categorie: "FILM CULTE",
        type: "audio",
        searchQuery: "Pulp Fiction Misirlou",
        question: "Quel film de Tarantino commence comme ça ?",
        reponse: "Pulp Fiction",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 130,
        categorie: "POP 90s",
        type: "audio",
        searchQuery: "Spice Girls Wannabe",
        question: "Quel groupe de filles anglais ?",
        reponse: "Spice Girls",
        duree: 30, points: 1, malus: -1
    },

    // ============================================================
    // ⚡ SÉRIE 14 : VRAI OU FAUX (+2 / -2)
    // ============================================================
    {
        id: 131,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les Vikings avaient des cornes sur leurs casques.",
        reponse: "FAUX (Invention des opéras du 19ème siècle)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 132,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La tomate contient plus de gènes que l'être humain.",
        reponse: "VRAI (31 000 contre 20 000 environ)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 133,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Manger des carottes améliore la vue la nuit.",
        reponse: "FAUX (Propagande de la 2nde Guerre Mondiale)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 134,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'Arabie Saoudite importe des chameaux d'Australie.",
        reponse: "VRAI (Pour la viande principalement)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 135,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Walt Disney est cryogénisé (congelé).",
        reponse: "FAUX (Il a été incinéré)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 136,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les poissons rouges ont une mémoire de 3 secondes.",
        reponse: "FAUX (Ils peuvent se souvenir de choses pendant des mois)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 137,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Un éclair est 5 fois plus chaud que la surface du soleil.",
        reponse: "VRAI (30 000°C contre 6 000°C)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 138,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La couleur rouge énerve les taureaux.",
        reponse: "FAUX (Ils sont daltoniens, c'est le mouvement qui les énerve)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 139,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le miel ne périme jamais.",
        reponse: "VRAI (On en a retrouvé dans des tombes égyptiennes encore comestible)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 140,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'Everest grandit chaque année.",
        reponse: "VRAI (Environ 4mm par an à cause de la tectonique)",
        duree: 6, points: 2, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 15 : EMOJI MYSTÈRE (+2 / -1)
    // ============================================================
    {
        id: 141,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "👮‍♂️ 🤖 🔫",
        reponse: "Robocop",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 142,
        categorie: "DEVINE LE SPORT",
        type: "emoji",
        question: "🏉 🏟️ 🇳🇿",
        reponse: "Rugby",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 143,
        categorie: "DEVINE LE PAYS",
        type: "emoji",
        question: "🍁 🏒 🥞",
        reponse: "Canada",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 144,
        categorie: "DEVINE LA CHANSON",
        type: "emoji",
        question: "💎 💎 💎",
        reponse: "Diamonds (Rihanna)",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 145,
        categorie: "DEVINE LE CONTE",
        type: "emoji",
        question: "🐺 👵 🧺",
        reponse: "Le Petit Chaperon Rouge",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 146,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "🧟 🏹 🏍️",
        reponse: "The Walking Dead",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 147,
        categorie: "DEVINE LE HÉROS",
        type: "emoji",
        question: "🟢 💪 😡",
        reponse: "Hulk",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 148,
        categorie: "DEVINE L'OBJET",
        type: "emoji",
        question: "⏰ 💤 💥",
        reponse: "Réveil",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 149,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🎈 🏠 👴",
        reponse: "Là-haut (Up)",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 150,
        categorie: "DEVINE LE MÉTIER",
        type: "emoji",
        question: "🔪 🥩 🩸",
        reponse: "Boucher",
        duree: 15, points: 2, malus: -1
    },

    // ============================================================
    // 🧠 SÉRIE 16 : CULTURE GÉNÉRALE (+1 / 0)
    // ============================================================
    {
        id: 151,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quelle est la capitale de l'Espagne ?",
        reponse: "Madrid",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 152,
        categorie: "HISTOIRE",
        type: "text",
        question: "Qui a découvert l'Amérique en 1492 ?",
        reponse: "Christophe Colomb",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 153,
        categorie: "CINÉMA",
        type: "text",
        question: "Quel acteur joue Jack dans Titanic ?",
        reponse: "Leonardo DiCaprio",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 154,
        categorie: "SPORT",
        type: "text",
        question: "Quel est le sport national du Japon (lutte) ?",
        reponse: "Le Sumo",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 155,
        categorie: "SCIENCE",
        type: "text",
        question: "Quel gaz respire-t-on pour vivre ?",
        reponse: "L'Oxygène (Dioxygène)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 156,
        categorie: "ANIMAUX",
        type: "text",
        question: "Combien de pattes a une araignée ?",
        reponse: "8",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 157,
        categorie: "MARVEL",
        type: "text",
        question: "Quel est le prénom de Captain America ?",
        reponse: "Steve (Rogers)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 158,
        categorie: "GASTRONOMIE",
        type: "text",
        question: "Quel pays a inventé les sushis ?",
        reponse: "Le Japon",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 159,
        categorie: "VOITURE",
        type: "text",
        question: "Quelle marque a pour logo un cheval cabré ?",
        reponse: "Ferrari",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 160,
        categorie: "MUSIQUE",
        type: "text",
        question: "Quel instrument a des touches noires et blanches ?",
        reponse: "Le Piano",
        duree: 20, points: 1, malus: 0
    },

    // ============================================================
    // 🌍 SÉRIE 17 : LE TOUR DU MONDE (+1 / 0)
    // ============================================================
    {
        id: 161,
        categorie: "CAPITALE",
        type: "text",
        question: "Quelle est la capitale du Royaume-Uni ?",
        reponse: "Londres",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 162,
        categorie: "MONUMENT",
        type: "text",
        question: "Dans quelle ville se trouve le Colisée ?",
        reponse: "Rome",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 163,
        categorie: "DRAPEAU",
        type: "text",
        question: "Quel pays a un drapeau avec une feuille d'érable ?",
        reponse: "Le Canada",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 164,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel est le plus grand pays du monde (surface) ?",
        reponse: "La Russie",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 165,
        categorie: "MONNAIE",
        type: "text",
        question: "Quelle monnaie utilise-t-on aux USA ?",
        reponse: "Le Dollar",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 166,
        categorie: "SPÉCIALITÉ",
        type: "text",
        question: "De quel pays vient la Paëlla ?",
        reponse: "Espagne",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 167,
        categorie: "LANGUE",
        type: "text",
        question: "Quelle langue parle-t-on au Brésil ?",
        reponse: "Portugais",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 168,
        categorie: "LIEU CULTE",
        type: "text",
        question: "Où se trouve la Statue de la Liberté ?",
        reponse: "New York",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 169,
        categorie: "CLIMAT",
        type: "text",
        question: "Quel est le continent le plus froid ?",
        reponse: "L'Antarctique",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 170,
        categorie: "AFRIQUE",
        type: "text",
        question: "Dans quel pays se trouve Marrakech ?",
        reponse: "Maroc",
        duree: 20, points: 1, malus: 0
    },

    // ============================================================
    // 🎲 SÉRIE 18 : VRAC FINAL (+1 / 0)
    // ============================================================
    {
        id: 171,
        categorie: "DESSIN ANIMÉ",
        type: "text",
        question: "Comment s'appelle le chien de Tintin ?",
        reponse: "Milou",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 172,
        categorie: "JEUX VIDÉO",
        type: "text",
        question: "Quelle couleur est la casquette de Luigi ?",
        reponse: "Verte",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 173,
        categorie: "CORPS HUMAIN",
        type: "text",
        question: "Quel organe pompe le sang ?",
        reponse: "Le Cœur",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 174,
        categorie: "HARRY POTTER",
        type: "text",
        question: "Quel sport pratique-t-on sur des balais ?",
        reponse: "Le Quidditch",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 175,
        categorie: "SUPER HÉROS",
        type: "text",
        question: "Quel animal a mordu Peter Parker ?",
        reponse: "Une Araignée",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 176,
        categorie: "STAR WARS",
        type: "text",
        question: "Quelle est la couleur du sabre de Yoda ?",
        reponse: "Vert",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 177,
        categorie: "DISNEY",
        type: "text",
        question: "Quel fruit empoisonne Blanche-Neige ?",
        reponse: "Une Pomme",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 178,
        categorie: "NATURE",
        type: "text",
        question: "Quel arbre produit des glands ?",
        reponse: "Le Chêne",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 179,
        categorie: "TÉLÉVISION",
        type: "text",
        question: "Dans quelle émission chante-t-on 'Libérée, Délivrée' ?",
        reponse: "N'oubliez pas les paroles (ou The Voice)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 180,
        categorie: "MATHS FACILES",
        type: "text",
        question: "Combien font 100 divisé par 2 ?",
        reponse: "50",
        duree: 20, points: 1, malus: 0
    },
    // SUITE DU PACK 4 - PARTIE 2 (ID 231 à 280)

    // ============================================================
    // 😎 SUITE EMOJI & CULTURE G (+1 / 0)
    // ============================================================
    {
        id: 231,
        categorie: "EXPRESSION",
        type: "emoji",
        question: "🐓 🦷",
        reponse: "Quand les poules auront des dents",
        duree: 20, points: 2, malus: -1
    },
    {
        id: 232,
        categorie: "EXPRESSION",
        type: "emoji",
        question: "🌧️ ☀️ 🌈",
        reponse: "Après la pluie le beau temps",
        duree: 20, points: 2, malus: -1
    },
    {
        id: 233,
        categorie: "EXPRESSION",
        type: "emoji",
        question: "🧥 🔙",
        reponse: "Retourner sa veste",
        duree: 20, points: 2, malus: -1
    },
    {
        id: 234,
        categorie: "DEVINE LA VILLE",
        type: "emoji",
        question: "🥐 🗼 🇫🇷",
        reponse: "Paris",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 235,
        categorie: "DEVINE LA VILLE",
        type: "emoji",
        question: "🎰 🎲 💒",
        reponse: "Las Vegas",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 236,
        categorie: "DEVINE LA MARQUE",
        type: "emoji",
        question: "👟 ✔️",
        reponse: "Nike",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 237,
        categorie: "DEVINE LA MARQUE",
        type: "emoji",
        question: "☕ 🧜‍♀️ 🟢",
        reponse: "Starbucks",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 238,
        categorie: "PERSONNAGE HISTORIQUE",
        type: "emoji",
        question: "👨‍🎨 👂 🌻",
        reponse: "Van Gogh",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 239,
        categorie: "PERSONNAGE HISTORIQUE",
        type: "emoji",
        question: "🚀 🌕 👨‍🚀",
        reponse: "Neil Armstrong",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 240,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "🐉 👑 ❄️",
        reponse: "Game of Thrones",
        duree: 15, points: 2, malus: -1
    },

    // ============================================================
    // 🧠 SÉRIE 22 : CULTURE GÉNÉRALE (+1 / 0)
    // ============================================================
    {
        id: 241,
        categorie: "ART",
        type: "text",
        question: "Qui a peint la Joconde ?",
        reponse: "Léonard de Vinci",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 242,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quelle est la capitale des États-Unis ?",
        reponse: "Washington D.C.",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 243,
        categorie: "ESPACE",
        type: "text",
        question: "Qui est le premier homme dans l'espace ?",
        reponse: "Youri Gagarine",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 244,
        categorie: "SCIENCE",
        type: "text",
        question: "Quel est le minéral le plus dur ?",
        reponse: "Le Diamant",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 245,
        categorie: "NATURE",
        type: "text",
        question: "Quel est l'animal le plus rapide en piqué ?",
        reponse: "Le Faucon Pèlerin",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 246,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit la saga Harry Potter ?",
        reponse: "J.K. Rowling",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 247,
        categorie: "SPORT",
        type: "text",
        question: "Quel est le record du monde du 100m (Usain Bolt) ?",
        reponse: "9.58 secondes",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 248,
        categorie: "CUISINE",
        type: "text",
        question: "Quel est l'ingrédient principal du Houmous ?",
        reponse: "Le Pois Chiche",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 249,
        categorie: "TECH",
        type: "text",
        question: "Qui a fondé Facebook ?",
        reponse: "Mark Zuckerberg",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 250,
        categorie: "MUSIQUE",
        type: "text",
        question: "Qui est surnommé le King du Rock ?",
        reponse: "Elvis Presley",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 251,
        categorie: "COMICS",
        type: "text",
        question: "Dans quelle ville habite Batman ?",
        reponse: "Gotham City",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 252,
        categorie: "CORPS HUMAIN",
        type: "text",
        question: "Quel est l'organe le plus étendu du corps ?",
        reponse: "La Peau",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 253,
        categorie: "ESPACE",
        type: "text",
        question: "Quelle est la planète Rouge ?",
        reponse: "Mars",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 254,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel est le plus long fleuve d'Afrique ?",
        reponse: "Le Nil",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 255,
        categorie: "HISTOIRE",
        type: "text",
        question: "En quelle année le Mur de Berlin est-il tombé ?",
        reponse: "1989",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 256,
        categorie: "CINÉMA",
        type: "text",
        question: "Qui a réalisé Pulp Fiction ?",
        reponse: "Quentin Tarantino",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 257,
        categorie: "ANIMAUX",
        type: "text",
        question: "Quel est l'animal le plus grand (hauteur) ?",
        reponse: "La Girafe",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 258,
        categorie: "MATHS",
        type: "text",
        question: "Quelle est la valeur approchée de Pi ?",
        reponse: "3.14",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 259,
        categorie: "LANGUE",
        type: "text",
        question: "Comment dit-on Bonjour en Allemand ?",
        reponse: "Guten Tag / Hallo",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 260,
        categorie: "CHIMIE",
        type: "text",
        question: "Quelle est la formule de l'eau ?",
        reponse: "H2O",
        duree: 20, points: 1, malus: 0
    },

    // ============================================================
    // 🎲 SÉRIE 23 : POP CULTURE & MIX (+1 / 0)
    // ============================================================
    {
        id: 261,
        categorie: "JEU VIDÉO",
        type: "text",
        question: "Quelle princesse Link doit-il sauver ?",
        reponse: "Zelda",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 262,
        categorie: "SÉRIE TV",
        type: "text",
        question: "Quel est le surnom de Walter White ?",
        reponse: "Heisenberg",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 263,
        categorie: "CINÉMA",
        type: "text",
        question: "Complétez : 'Non, je suis ton ...'",
        reponse: "Père (Star Wars)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 264,
        categorie: "DANSE",
        type: "text",
        question: "Quel pas de danse a rendu Michael Jackson célèbre ?",
        reponse: "Le Moonwalk",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 265,
        categorie: "MARQUE",
        type: "text",
        question: "Quelle marque a 3 bandes ?",
        reponse: "Adidas",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 266,
        categorie: "CUISINE",
        type: "text",
        question: "Quel plat italien est fait de pâte longue et fine ?",
        reponse: "Les Spaghettis",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 267,
        categorie: "TECH",
        type: "text",
        question: "Qui a présenté le premier iPhone ?",
        reponse: "Steve Jobs",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 268,
        categorie: "DESSIN ANIMÉ",
        type: "text",
        question: "Qui est le meilleur ami de Bob l'Éponge ?",
        reponse: "Patrick l'Étoile de Mer",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 269,
        categorie: "ANIME",
        type: "text",
        question: "Quelle est l'attaque signature de Son Goku ?",
        reponse: "Kamehameha",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 270,
        categorie: "MARVEL",
        type: "text",
        question: "Qui se cache sous l'armure d'Iron Man ?",
        reponse: "Tony Stark",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 271,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "De quel pays vient le Tango ?",
        reponse: "Argentine",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 272,
        categorie: "HISTOIRE",
        type: "text",
        question: "Quelle reine de France a été guillotinée ?",
        reponse: "Marie-Antoinette",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 273,
        categorie: "SPORT",
        type: "text",
        question: "Dans quel sport joue-t-on en NBA ?",
        reponse: "Basket-ball",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 274,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui est l'amoureuse de Roméo ?",
        reponse: "Juliette",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 275,
        categorie: "ANIMAUX",
        type: "text",
        question: "Qui est surnommé le Roi de la Jungle ?",
        reponse: "Le Lion",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 276,
        categorie: "ESPACE",
        type: "text",
        question: "Dans quelle galaxie vivons-nous ?",
        reponse: "La Voie Lactée",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 277,
        categorie: "JEU VIDÉO",
        type: "text",
        question: "Dans quel jeu explose le Creeper ?",
        reponse: "Minecraft",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 278,
        categorie: "SÉRIE TV",
        type: "text",
        question: "Quelle famille a pour devise 'Winter is Coming' ?",
        reponse: "Stark (Game of Thrones)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 279,
        categorie: "MUSIQUE",
        type: "text",
        question: "Qui était le chanteur de Queen ?",
        reponse: "Freddie Mercury",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 280,
        categorie: "FINALE",
        type: "text",
        question: "Combien de questions avons-nous ajoutées aujourd'hui ?",
        reponse: "100 !",
        duree: 30, points: 3, malus: 0
    },
    // SUITE ET FIN DU PACK (ID 281 à 300)

    // ============================================================
    // 🎵 SÉRIE 24 : BLIND TEST FINAL (+1 / -1)
    // ============================================================
    {
        id: 281,
        categorie: "DESSIN ANIMÉ",
        type: "audio",
        searchQuery: "Denver le dernier dinosaure générique",
        question: "C'est mon ami et bien plus encore...",
        reponse: "Denver, le dernier dinosaure",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 282,
        categorie: "FILM CULTE",
        type: "audio",
        searchQuery: "Ghostbusters Theme Ray Parker Jr",
        question: "Who you gonna call ?",
        reponse: "Ghostbusters (S.O.S Fantômes)",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 283,
        categorie: "RAP LÉGENDE",
        type: "audio",
        searchQuery: "IAM Je danse le Mia",
        question: "Quel groupe marseillais ?",
        reponse: "IAM",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 284,
        categorie: "DIVA",
        type: "audio",
        searchQuery: "Whitney Houston I Will Always Love You",
        question: "Qui chante cette chanson de Bodyguard ?",
        reponse: "Whitney Houston",
        duree: 30, points: 1, malus: -1
    },
    {
        id: 285,
        categorie: "TUBE 80s",
        type: "audio",
        searchQuery: "Début de Soirée Nuit de Folie",
        question: "Et tu chantes, chantes, chantes...",
        reponse: "Début de Soirée (Nuit de Folie)",
        duree: 30, points: 1, malus: -1
    },

    // ============================================================
    // ⚡ SÉRIE 25 : VRAI OU FAUX (+2 / -2)
    // ============================================================
    {
        id: 286,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'hippopotame court plus vite qu'un homme.",
        reponse: "VRAI (Il peut atteindre 30 km/h, voire plus !)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 287,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La Muraille de Chine a servi de route.",
        reponse: "VRAI (Pour transporter des troupes et des marchandises)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 288,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le poumon gauche est plus petit que le droit.",
        reponse: "VRAI (Pour laisser de la place au cœur)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 289,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Cléopâtre s'est suicidée en se faisant mordre par un serpent.",
        reponse: "VRAI (Selon la légende, un aspic)",
        duree: 6, points: 2, malus: -2
    },
    {
        id: 290,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le Coca-Cola était vert à l'origine.",
        reponse: "FAUX (C'est un mythe, il a toujours été marron)",
        duree: 6, points: 2, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 26 : EMOJI MYSTÈRE (+2 / -1)
    // ============================================================
    {
        id: 291,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🍫 🏃‍♂️ 🌲",
        reponse: "Forrest Gump",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 292,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🦁 🦓 🦒 🦛 🏝️",
        reponse: "Madagascar",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 293,
        categorie: "DEVINE LE SPORT",
        type: "emoji",
        question: "🏊‍♂️ 🚴‍♂️ 🏃‍♂️",
        reponse: "Le Triathlon",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 294,
        categorie: "DEVINE LA VILLE",
        type: "emoji",
        question: "🌉 🚃 🏳️‍🌈",
        reponse: "San Francisco",
        duree: 15, points: 2, malus: -1
    },
    {
        id: 295,
        categorie: "DEVINE L'OBJET",
        type: "emoji",
        question: "🦷 🖌️ ✨",
        reponse: "Brosse à dents",
        duree: 15, points: 2, malus: -1
    },

    // ============================================================
    // 🧠 SÉRIE 27 : DERNIÈRE LIGNE DROITE (+1 / 0)
    // ============================================================
    {
        id: 296,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Dans quel pays se trouve la ville de Tombouctou ?",
        reponse: "Mali",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 297,
        categorie: "JEU VIDÉO",
        type: "text",
        question: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
        reponse: "Minecraft (ou Tetris selon les versions)",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 298,
        categorie: "SPORT",
        type: "text",
        question: "Quelle est la distance d'un marathon ?",
        reponse: "42,195 km",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 299,
        categorie: "HISTOIRE",
        type: "text",
        question: "Quel peintre s'est coupé l'oreille ?",
        reponse: "Van Gogh",
        duree: 20, points: 1, malus: 0
    },
    {
        id: 300,
        categorie: "ULTIME QUESTION",
        type: "text",
        question: "Quelle est la réponse à la grande question sur la vie, l'univers et le reste ?",
        reponse: "42 (H2G2)",
        duree: 30, points: 3, malus: 0
    }
];