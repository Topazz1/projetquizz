// js/questions.js

export const questions = [
    // ============================================================
    // 🎵 SÉRIE 1 : BLIND TEST EXPERT (40%)
    // BARÈME : +2 Pts / -2 Pts
    // ============================================================
    {
        id: 1,
        categorie: "MUSIQUE DE FILM",
        type: "audio",
        searchQuery: "Hans Zimmer Time Inception",
        question: "De quel film de Christopher Nolan vient ce titre ?",
        reponse: "Inception",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 2,
        categorie: "ROCK PROGRESSIF",
        type: "audio",
        searchQuery: "Pink Floyd Money",
        question: "Quel groupe légendaire entend-on ici ?",
        reponse: "Pink Floyd",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 3,
        categorie: "COVER MYSTÈRE",
        type: "audio",
        searchQuery: "Alien Ant Farm Smooth Criminal",
        question: "Quel est le titre original de cette reprise rock ?",
        reponse: "Smooth Criminal (Michael Jackson)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 4,
        categorie: "CLASSIQUE",
        type: "audio",
        searchQuery: "Vivaldi Four Seasons Summer Presto",
        question: "Quelle saison de Vivaldi est-ce ?",
        reponse: "L'Été (L'Orage)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 5,
        categorie: "RAP US OLD SCHOOL",
        type: "audio",
        searchQuery: "Grandmaster Flash The Message",
        question: "Quel est ce titre pionnier du Hip-Hop ?",
        reponse: "The Message",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 6,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Succession Main Title Theme",
        question: "Quelle série HBO a ce générique au piano ?",
        reponse: "Succession",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 7,
        categorie: "JAZZ",
        type: "audio",
        searchQuery: "Dave Brubeck Take Five",
        question: "Quel est ce standard de Jazz en 5 temps ?",
        reponse: "Take Five",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 8,
        categorie: "ELECTRO 90s",
        type: "audio",
        searchQuery: "Fatboy Slim The Rockafeller Skank",
        question: "Quel DJ britannique a produit ce titre ?",
        reponse: "Fatboy Slim",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 9,
        categorie: "CHANSON FRANÇAISE",
        type: "audio",
        searchQuery: "Alain Bashung La nuit je mens",
        question: "Qui interprète ce chef-d'œuvre ?",
        reponse: "Alain Bashung",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 10,
        categorie: "JEU VIDÉO",
        type: "audio",
        searchQuery: "Skyrim Dragonborn Theme",
        question: "De quel RPG épique vient ce chant ?",
        reponse: "Skyrim (The Elder Scrolls V)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 11,
        categorie: "OPÉRA",
        type: "audio",
        searchQuery: "Mozart Reine de la Nuit",
        question: "Dans quel opéra de Mozart entend-on cet air ?",
        reponse: "La Flûte Enchantée",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 12,
        categorie: "SOUL",
        type: "audio",
        searchQuery: "Otis Redding Sittin On The Dock of the Bay",
        question: "Qui siffle à la fin de cette chanson ?",
        reponse: "Otis Redding",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 13,
        categorie: "METAL",
        type: "audio",
        searchQuery: "System of a Down Chop Suey",
        question: "Quel groupe de Metal arméno-américain ?",
        reponse: "System of a Down",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 14,
        categorie: "BO FILM",
        type: "audio",
        searchQuery: "Ennio Morricone The Ecstasy of Gold",
        question: "Dans quel film de Sergio Leone entend-on ça ?",
        reponse: "Le Bon, la Brute et le Truand",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 15,
        categorie: "POP 80s",
        type: "audio",
        searchQuery: "Kate Bush Running Up That Hill",
        question: "Quelle chanteuse revenue à la mode grâce à Stranger Things ?",
        reponse: "Kate Bush",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 16,
        categorie: "DESSIN ANIMÉ",
        type: "audio",
        searchQuery: "Code Lyoko Un monde sans danger",
        question: "Quel dessin animé français ?",
        reponse: "Code Lyoko",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 17,
        categorie: "DISCO FUNK",
        type: "audio",
        searchQuery: "Boney M Rasputin",
        question: "De quel personnage historique russe parle cette chanson ?",
        reponse: "Raspoutine",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 18,
        categorie: "HIP HOP FR",
        type: "audio",
        searchQuery: "MC Solaar Bouge de la",
        question: "Quel poète du rap français ?",
        reponse: "MC Solaar",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 19,
        categorie: "RÉPLIQUE CULTE",
        type: "audio",
        searchQuery: "20th Century Fox Fanfare",
        question: "Quel studio de cinéma a cette intro ?",
        reponse: "20th Century Fox",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 20,
        categorie: "AUTO-TUNE",
        type: "audio",
        searchQuery: "Cher Believe",
        question: "Quelle chanteuse a popularisé l'Auto-Tune avec ce titre ?",
        reponse: "Cher",
        duree: 30, points: 2, malus: -2
    },

    // ============================================================
    // ⚡ SÉRIE 2 : VRAI OU FAUX (MORT SUBITE) (25%)
    // BARÈME : +2 Pts / -4 Pts
    // ============================================================
    {
        id: 21,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La France a sa plus longue frontière terrestre avec l'Espagne.",
        reponse: "FAUX (C'est avec le Brésil, via la Guyane !)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 22,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Frankenstein est le nom du monstre.",
        reponse: "FAUX (C'est le nom du créateur, le monstre n'a pas de nom)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 23,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Il y a plus de faux flamants roses en plastique sur Terre que de vrais.",
        reponse: "VRAI (Statistique surprenante mais réelle)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 24,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'Arabie Saoudite importe du sable.",
        reponse: "VRAI (Un sable spécial pour la construction qu'ils n'ont pas)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 25,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le Mont Saint-Michel est en Bretagne.",
        reponse: "FAUX (Il est en Normandie, le Couesnon a fait sa folie)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 26,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les sushis sont traditionnellement au saumon.",
        reponse: "FAUX (C'est une invention norvégienne des années 80 pour vendre leur poisson)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 27,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "On peut plier une feuille de papier plus de 7 fois.",
        reponse: "VRAI (Le record est de 12 fois, mais c'est très dur)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 28,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La capitale de la Turquie est Istanbul.",
        reponse: "FAUX (C'est Ankara)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 29,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le briquet a été inventé avant les allumettes.",
        reponse: "VRAI (Briquet : 1823, Allumettes : 1826)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 30,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Hello Kitty est un chat.",
        reponse: "FAUX (Selon les créateurs, c'est une petite fille britannique !)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 31,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'eau salée bout plus vite que l'eau douce.",
        reponse: "FAUX (Le sel augmente la température d'ébullition, donc c'est plus long)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 32,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Un mille-pattes a exactement 1000 pattes.",
        reponse: "FAUX (Ça varie de 30 à 400 environ)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 33,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La Muraille de Chine est la seule construction humaine visible de la Lune.",
        reponse: "FAUX (Aucune construction n'est visible de la Lune à l'œil nu)",
        duree: 8, points: 2, malus: -4
    },

    // ============================================================
    // 🧠 SÉRIE 3 : CULTURE GÉNÉRALE DIFFICILE (25%)
    // BARÈME : +1 Pt / -2 Pts
    // ============================================================
    {
        id: 34,
        categorie: "HISTOIRE",
        type: "text",
        question: "Quelle guerre a duré de 1337 à 1453 ?",
        reponse: "La Guerre de Cent Ans",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 35,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel pays a le plus de fuseaux horaires (territoires inclus) ?",
        reponse: "La France (12 fuseaux)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 36,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit '1984' ?",
        reponse: "George Orwell",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 37,
        categorie: "BIOLOGIE",
        type: "text",
        question: "Quel est le seul mammifère capable de pondre des œufs ?",
        reponse: "L'Ornithorynque (et l'Échidné)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 38,
        categorie: "CHIMIE",
        type: "text",
        question: "Quel est le symbole chimique de l'Or ?",
        reponse: "Au (Aurum)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 39,
        categorie: "MYTHOLOGIE",
        type: "text",
        question: "Qui a tué le Minotaure ?",
        reponse: "Thésée",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 40,
        categorie: "ART",
        type: "text",
        question: "Dans quelle ville se trouve le musée du Prado ?",
        reponse: "Madrid",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 41,
        categorie: "SPORT",
        type: "text",
        question: "En quelle année la France a-t-elle gagné sa première Coupe du Monde ?",
        reponse: "1998",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 42,
        categorie: "CINÉMA",
        type: "text",
        question: "Quel film a reçu l'Oscar du meilleur film par erreur en 2017 ?",
        reponse: "La La Land (Le vrai gagnant était Moonlight)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 43,
        categorie: "TECHNOLOGIE",
        type: "text",
        question: "Que signifie l'acronyme 'PDF' ?",
        reponse: "Portable Document Format",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 44,
        categorie: "GASTRONOMIE",
        type: "text",
        question: "Quel est l'ingrédient principal de la Tapenade ?",
        reponse: "L'Olive (Noire ou Verte)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 45,
        categorie: "POLITIQUE",
        type: "text",
        question: "Combien y a-t-il d'étoiles sur le drapeau chinois ?",
        reponse: "5",
        duree: 25, points: 1, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 4 : EMOJI ABSTRAIT (10%)
    // BARÈME : +3 Pts / -3 Pts
    // ============================================================
    {
        id: 46,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🔴 💊 🔵",
        reponse: "Matrix",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 47,
        categorie: "DEVINE L'EXPRESSION",
        type: "emoji",
        question: "👀 ⛏️ 😵",
        reponse: "Crever les yeux (C'est évident)",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 48,
        categorie: "DEVINE LE PAYS",
        type: "emoji",
        question: "🧛‍♂️ 🏰 🇷🇴",
        reponse: "Roumanie",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 49,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "🧪 🚐 🏜️ 💎",
        reponse: "Breaking Bad",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 50,
        categorie: "DEVINE LE PERSONNAGE",
        type: "emoji",
        question: "🕵️‍♂️ 🇬🇧 🎻 💊",
        reponse: "Sherlock Holmes",
        duree: 20, points: 3, malus: -3
    },
    // SUITE DU PACK 2 (ID 51 à 100)

    // ============================================================
    // 🎵 SÉRIE 5 : BLIND TEST (Niveau Confirmé)
    // BARÈME : +2 / -2
    // ============================================================
    {
        id: 51,
        categorie: "ROCK 70s",
        type: "audio",
        searchQuery: "Led Zeppelin Immigrant Song",
        question: "Quel groupe hurle ce cri de guerre ?",
        reponse: "Led Zeppelin",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 52,
        categorie: "FILM D'HORREUR",
        type: "audio",
        searchQuery: "Halloween Theme John Carpenter",
        question: "Quel tueur en série a ce thème musical ?",
        reponse: "Michael Myers (Halloween)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 53,
        categorie: "DISCO",
        type: "audio",
        searchQuery: "Bee Gees Stayin Alive",
        question: "Quel groupe de frères chante ce tube ?",
        reponse: "Bee Gees",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 54,
        categorie: "POP 2000",
        type: "audio",
        searchQuery: "Gwen Stefani Hollaback Girl",
        question: "Qui chante ce titre produit par Pharrell ?",
        reponse: "Gwen Stefani",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 55,
        categorie: "RAP US",
        type: "audio",
        searchQuery: "Kendrick Lamar Humble",
        question: "Quel rappeur demande d'être humble ?",
        reponse: "Kendrick Lamar",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 56,
        categorie: "JEU VIDÉO",
        type: "audio",
        searchQuery: "Tetris Theme A",
        question: "Quel est le titre original de cette musique russe ?",
        reponse: "Korobeiniki (Tetris)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 57,
        categorie: "FRENCH TOUCH",
        type: "audio",
        searchQuery: "Justice D.A.N.C.E.",
        question: "Quel duo électro français ?",
        reponse: "Justice",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 58,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Stranger Things Theme",
        question: "Quelle série Netflix a ce générique synthwave ?",
        reponse: "Stranger Things",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 59,
        categorie: "REGGAE",
        type: "audio",
        searchQuery: "Bob Marley Buffalo Soldier",
        question: "Quel est ce titre de Bob Marley ?",
        reponse: "Buffalo Soldier",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 60,
        categorie: "DESSIN ANIMÉ",
        type: "audio",
        searchQuery: "Oggy et les Cafards Générique",
        question: "Quel est ce dessin animé sans dialogues ?",
        reponse: "Oggy et les Cafards",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 61,
        categorie: "HARD ROCK",
        type: "audio",
        searchQuery: "Guns N Roses Sweet Child O Mine",
        question: "Quel groupe commence par ce riff de guitare ?",
        reponse: "Guns N' Roses",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 62,
        categorie: "R'N'B",
        type: "audio",
        searchQuery: "Destiny's Child Survivor",
        question: "Quel groupe mené par Beyoncé ?",
        reponse: "Destiny's Child",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 63,
        categorie: "VARIÉTÉ INTER.",
        type: "audio",
        searchQuery: "Elton John I'm Still Standing",
        question: "Qui est ce chanteur anglais ?",
        reponse: "Elton John",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 64,
        categorie: "RAP FRANÇAIS",
        type: "audio",
        searchQuery: "Orelsan Basique",
        question: "Simple. Basique. Qui est-ce ?",
        reponse: "Orelsan",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 65,
        categorie: "FILM CULTE",
        type: "audio",
        searchQuery: "Rocky Gonna Fly Now",
        question: "Quel boxeur s'entraîne sur cette musique ?",
        reponse: "Rocky Balboa",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 66,
        categorie: "NEW WAVE",
        type: "audio",
        searchQuery: "Depeche Mode Enjoy the Silence",
        question: "Quel groupe chante ce tube ?",
        reponse: "Depeche Mode",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 67,
        categorie: "LATINO",
        type: "audio",
        searchQuery: "Shakira Hips Don't Lie",
        question: "Qui chante 'Hips Don't Lie' ?",
        reponse: "Shakira",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 68,
        categorie: "GRUNGE",
        type: "audio",
        searchQuery: "Nirvana Come As You Are",
        question: "Quel est ce titre de Nirvana ?",
        reponse: "Come As You Are",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 69,
        categorie: "CHANSON FRANÇAISE",
        type: "audio",
        searchQuery: "Edith Piaf La vie en rose",
        question: "Qui est cette légende de la chanson ?",
        reponse: "Édith Piaf",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 70,
        categorie: "SÉRIE CULTE",
        type: "audio",
        searchQuery: "Friends Theme Song",
        question: "Quelle série commence par ces applaudissements ?",
        reponse: "Friends",
        duree: 30, points: 2, malus: -2
    },

    // ============================================================
    // ⚡ SÉRIE 6 : VRAI OU FAUX (Pièges)
    // BARÈME : +2 / -4
    // ============================================================
    {
        id: 71,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Cléopâtre était égyptienne.",
        reponse: "FAUX (Elle était d'origine grecque macédonienne, dynastie des Ptolémées)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 72,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le 'O' de Mario Bros veut dire 'Origine'.",
        reponse: "FAUX (Ça n'existe pas, c'est juste Mario & Luigi)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 73,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les taureaux détestent la couleur rouge.",
        reponse: "FAUX (Ils sont daltoniens, c'est le mouvement de la cape qui les énerve)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 74,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Il pleut des diamants sur Neptune.",
        reponse: "VRAI (La pression atmosphérique est telle que le carbone se cristallise)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 75,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le soleil est une étoile jaune.",
        reponse: "FAUX (Il est blanc, c'est l'atmosphère terrestre qui le rend jaune)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 76,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Mickey Mouse a 4 doigts à chaque main.",
        reponse: "VRAI (Pour gagner du temps à l'animation)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 77,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'Everest est le sommet le plus éloigné du centre de la Terre.",
        reponse: "FAUX (C'est le Chimborazo en Équateur, car la Terre est aplatie aux pôles)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 78,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les pingouins vivent au Pôle Nord.",
        reponse: "VRAI (Les pingouins oui, les manchots non ! C'est la différence)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 79,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le nom complet de Barbie est Barbara Millicent Roberts.",
        reponse: "VRAI",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 80,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'humain partage 50% de son ADN avec la banane.",
        reponse: "VRAI (Environ 50% de gènes communs)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 81,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La Muraille de Chine a servi de route.",
        reponse: "VRAI (Pour le transport de troupes et marchandises)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 82,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Coca-Cola a inventé le Père Noël rouge.",
        reponse: "FAUX (Il était déjà représenté en rouge avant, mais ils ont popularisé l'image)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 83,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les poissons rouges ont une mémoire de 3 secondes.",
        reponse: "FAUX (Ils peuvent se souvenir de choses pendant plusieurs mois)",
        duree: 8, points: 2, malus: -4
    },

    // ============================================================
    // 🧠 SÉRIE 7 : CULTURE GÉNÉRALE (Pointue)
    // BARÈME : +1 / -2
    // ============================================================
    {
        id: 84,
        categorie: "SCIENCE",
        type: "text",
        question: "Quel est l'élément chimique le plus abondant dans l'univers ?",
        reponse: "L'Hydrogène",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 85,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quelle est la capitale de l'Australie ?",
        reponse: "Canberra (Pas Sydney !)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 86,
        categorie: "HISTOIRE",
        type: "text",
        question: "Qui a été le premier président des États-Unis ?",
        reponse: "George Washington",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 87,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Quel est le prénom de Mr Darcy dans Orgueil et Préjugés ?",
        reponse: "Fitzwilliam",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 88,
        categorie: "SPORT",
        type: "text",
        question: "Dans quel sport utilise-t-on un volant ?",
        reponse: "Le Badminton",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 89,
        categorie: "ART",
        type: "text",
        question: "Qui a peint 'La Nuit Étoilée' ?",
        reponse: "Vincent Van Gogh",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 90,
        categorie: "ANATOMIE",
        type: "text",
        question: "Quel est l'os le plus long du corps humain ?",
        reponse: "Le Fémur",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 91,
        categorie: "CINÉMA",
        type: "text",
        question: "Quel film a remporté 11 Oscars en 1959 ?",
        reponse: "Ben-Hur",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 92,
        categorie: "GASTRONOMIE",
        type: "text",
        question: "De quel pays vient le Tiramisu ?",
        reponse: "Italie",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 93,
        categorie: "MUSIQUE",
        type: "text",
        question: "Combien de touches a un piano standard ?",
        reponse: "88",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 94,
        categorie: "TECHNOLOGIE",
        type: "text",
        question: "En quelle année le premier iPhone a-t-il été lancé ?",
        reponse: "2007",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 95,
        categorie: "MYTHOLOGIE",
        type: "text",
        question: "Qui est le dieu romain de la guerre ?",
        reponse: "Mars (Arès chez les Grecs)",
        duree: 25, points: 1, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 8 : EMOJI (Casse-tête)
    // BARÈME : +3 / -3
    // ============================================================
    {
        id: 96,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "👴 🎈 🏠 ☁️",
        reponse: "Là-haut (Up)",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 97,
        categorie: "DEVINE LE PAYS",
        type: "emoji",
        question: "🍁 🏒 🥞",
        reponse: "Canada",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 98,
        categorie: "DEVINE L'EXPRESSION",
        type: "emoji",
        question: "🦶 🍄",
        reponse: "Appuyer sur le champignon (Accélérer)",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 99,
        categorie: "DEVINE LE JEU",
        type: "emoji",
        question: "🧱 ⛏️ 🧟",
        reponse: "Minecraft",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 100,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "🦑 🎲 🚦 💀",
        reponse: "Squid Game",
        duree: 20, points: 3, malus: -3
    },
    // SUITE DU PACK 3 (ID 101 à 150)

    // ============================================================
    // 🎵 SÉRIE 9 : BLIND TEST (Génération 90-2000)
    // BARÈME : +2 / -2
    // ============================================================
    {
        id: 101,
        categorie: "ELECTRO POP",
        type: "audio",
        searchQuery: "MGMT Kids",
        question: "Quel est ce tube électro-pop des années 2000 ?",
        reponse: "Kids (MGMT)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 102,
        categorie: "FILM ROMANTIQUE",
        type: "audio",
        searchQuery: "Céline Dion My Heart Will Go On",
        question: "De quel film catastrophe vient cette chanson ?",
        reponse: "Titanic",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 103,
        categorie: "RAP US",
        type: "audio",
        searchQuery: "Dr Dre The Next Episode",
        question: "Quel est ce classique de Dr. Dre & Snoop Dogg ?",
        reponse: "The Next Episode",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 104,
        categorie: "ROCK ANGLAIS",
        type: "audio",
        searchQuery: "Blur Song 2",
        question: "Quel groupe crie 'Woo-Hoo' ?",
        reponse: "Blur",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 105,
        categorie: "CINÉMA FANTASTIQUE",
        type: "audio",
        searchQuery: "Harry Potter Hedwig's Theme",
        question: "Quelle saga commence avec ces notes ?",
        reponse: "Harry Potter",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 106,
        categorie: "TUBE BELGE",
        type: "audio",
        searchQuery: "Stromae Tous les mêmes",
        question: "Qui chante ce titre ?",
        reponse: "Stromae",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 107,
        categorie: "NEW WAVE 80s",
        type: "audio",
        searchQuery: "Eurythmics Sweet Dreams",
        question: "Quel est ce duo iconique ?",
        reponse: "Eurythmics",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 108,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Game of Thrones Main Title",
        question: "Quelle série se déroule à Westeros ?",
        reponse: "Game of Thrones",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 109,
        categorie: "GIRL POWER",
        type: "audio",
        searchQuery: "Spice Girls Wannabe",
        question: "Quel groupe de filles anglais ?",
        reponse: "Spice Girls",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 110,
        categorie: "CLASSIQUE",
        type: "audio",
        searchQuery: "Mozart Rondo Alla Turca",
        question: "Quel est le nom de cette marche de Mozart ?",
        reponse: "La Marche Turque",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 111,
        categorie: "POP ROCK",
        type: "audio",
        searchQuery: "Coldplay Viva La Vida",
        question: "Quel groupe chante cet hymne ?",
        reponse: "Coldplay",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 112,
        categorie: "SOUL",
        type: "audio",
        searchQuery: "Ray Charles Hit the Road Jack",
        question: "Qui est ce chanteur et pianiste aveugle ?",
        reponse: "Ray Charles",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 113,
        categorie: "FILM CULTE",
        type: "audio",
        searchQuery: "Ghostbusters Theme",
        question: "Qui appelez-vous ? (Nom du film)",
        reponse: "S.O.S Fantômes (Ghostbusters)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 114,
        categorie: "FRENCH TOUCH",
        type: "audio",
        searchQuery: "Daft Punk One More Time",
        question: "Quel titre des Daft Punk ?",
        reponse: "One More Time",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 115,
        categorie: "ROCK FRANÇAIS",
        type: "audio",
        searchQuery: "Indochine L'Aventurier",
        question: "Quel groupe chante les exploits de Bob Morane ?",
        reponse: "Indochine",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 116,
        categorie: "HIP HOP",
        type: "audio",
        searchQuery: "Snoop Dogg Drop It Like It's Hot",
        question: "Quel rappeur a ce flow nonchalant ?",
        reponse: "Snoop Dogg",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 117,
        categorie: "DESSIN ANIMÉ",
        type: "audio",
        searchQuery: "Simpsons Theme Danny Elfman",
        question: "Quelle famille habite à Springfield ?",
        reponse: "Les Simpson",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 118,
        categorie: "HIT RÉCENT",
        type: "audio",
        searchQuery: "The Weeknd Blinding Lights",
        question: "Qui est ce chanteur canadien ?",
        reponse: "The Weeknd",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 119,
        categorie: "SLOW ROCK",
        type: "audio",
        searchQuery: "Scorpions Still Loving You",
        question: "Quel groupe allemand chante ce slow ?",
        reponse: "Scorpions",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 120,
        categorie: "ACTION",
        type: "audio",
        searchQuery: "Mission Impossible Theme Lalo Schifrin",
        question: "Quel espion a ce thème musical ?",
        reponse: "Ethan Hunt (Mission Impossible)",
        duree: 30, points: 2, malus: -2
    },

    // ============================================================
    // ⚡ SÉRIE 10 : VRAI OU FAUX (Mythes Tenaces)
    // BARÈME : +2 / -4 (Ne pas répondre si pas sûr !)
    // ============================================================
    {
        id: 121,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Sherlock Holmes dit 'Élémentaire, mon cher Watson' dans les livres.",
        reponse: "FAUX (Il ne le dit jamais dans l'œuvre de Conan Doyle)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 122,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le croissant est une invention française.",
        reponse: "FAUX (Il est autrichien, pour fêter une victoire contre les Ottomans)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 123,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'être humain et la girafe ont le même nombre de vertèbres dans le cou.",
        reponse: "VRAI (7 vertèbres chacun, juste plus grandes chez la girafe)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 124,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Botaniquement, la fraise n'est pas un fruit.",
        reponse: "VRAI (C'est un faux-fruit, les vrais fruits sont les petits grains jaunes)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 125,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Charlie Chaplin a participé à un concours de sosies de lui-même et a perdu.",
        reponse: "VRAI (Il est arrivé 20ème ou 3ème selon les légendes, mais il a perdu)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 126,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les chauves-souris sont aveugles.",
        reponse: "FAUX (Elles voient très bien, parfois mieux que les humains la nuit)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 127,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les Vikings portaient des casques à cornes.",
        reponse: "FAUX (Invention des opéras du 19ème siècle, c'est pas pratique au combat)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 128,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le mot 'Sushi' désigne le poisson cru.",
        reponse: "FAUX (Ça désigne le riz vinaigré. Le poisson cru c'est le Sashimi)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 129,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La vanille provient d'une orchidée.",
        reponse: "VRAI (Le vanillier est une orchidée liane)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 130,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les arachides (cacahuètes) poussent dans des arbres.",
        reponse: "FAUX (Elles poussent sous la terre, ce sont des légumineuses)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 131,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La boîte noire des avions est de couleur noire.",
        reponse: "FAUX (Elle est orange vif pour être retrouvée facilement)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 132,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le savon lave mieux à l'eau chaude qu'à l'eau froide.",
        reponse: "VRAI (La chaleur aide à dissoudre les graisses)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 133,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les caméléons changent de couleur pour se camoufler.",
        reponse: "FAUX (C'est surtout pour exprimer leurs émotions ou réguler leur température)",
        duree: 8, points: 2, malus: -4
    },

    // ============================================================
    // 🧠 SÉRIE 11 : CULTURE GÉNÉRALE (Expert)
    // BARÈME : +1 / -2
    // ============================================================
    {
        id: 134,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quelle est la capitale du Brésil ?",
        reponse: "Brasilia (Pas Rio, ni Sao Paulo !)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 135,
        categorie: "HISTOIRE",
        type: "text",
        question: "Quel roi de France était surnommé 'Saint Louis' ?",
        reponse: "Louis IX",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 136,
        categorie: "ART",
        type: "text",
        question: "Qui a peint le tableau 'Guernica' ?",
        reponse: "Pablo Picasso",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 137,
        categorie: "SCIENCE",
        type: "text",
        question: "Quel est le minéral naturel le plus dur ?",
        reponse: "Le Diamant",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 138,
        categorie: "ASTRONOMIE",
        type: "text",
        question: "Quelle planète est la plus proche du Soleil ?",
        reponse: "Mercure",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 139,
        categorie: "SPORT",
        type: "text",
        question: "Combien de joueurs y a-t-il dans une équipe de Rugby à XV ?",
        reponse: "15",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 140,
        categorie: "CHIMIE",
        type: "text",
        question: "Quel est le symbole chimique du Fer ?",
        reponse: "Fe",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 141,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit 'L'Étranger' ?",
        reponse: "Albert Camus",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 142,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel est le sommet le plus haut d'Afrique ?",
        reponse: "Le Kilimandjaro",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 143,
        categorie: "ÉCONOMIE",
        type: "text",
        question: "Quelle est la monnaie du Japon ?",
        reponse: "Le Yen",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 144,
        categorie: "HISTOIRE",
        type: "text",
        question: "Qui fut le premier Président de la Ve République française ?",
        reponse: "Charles de Gaulle",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 145,
        categorie: "INFORMATIQUE",
        type: "text",
        question: "Que signifie le sigle USB ?",
        reponse: "Universal Serial Bus",
        duree: 25, points: 1, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 12 : EMOJI (Ciné & Culture)
    // BARÈME : +3 / -3
    // ============================================================
    {
        id: 146,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🚢 🧊 🎻 💔",
        reponse: "Titanic",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 147,
        categorie: "DEVINE LE HÉROS",
        type: "emoji",
        question: "🕸️ 🕷️ 🔴 🔵",
        reponse: "Spider-Man",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 148,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🦖 🧬 🚙 🌴",
        reponse: "Jurassic Park",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 149,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "👻 🚫 🚐 🔫",
        reponse: "S.O.S Fantômes (Ghostbusters)",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 150,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🌧️ 🎤 🕺 ☔",
        reponse: "Chantons sous la pluie (Singin' in the Rain)",
        duree: 20, points: 3, malus: -3
    },
    // SUITE DU PACK 4 (ID 151 à 200)

    // ============================================================
    // 🎵 SÉRIE 13 : BLIND TEST (Hymnes & Classiques)
    // BARÈME : +2 / -2
    // ============================================================
    {
        id: 151,
        categorie: "POP LEGEND",
        type: "audio",
        searchQuery: "Michael Jackson Thriller",
        question: "Quel est ce tube de l'album le plus vendu au monde ?",
        reponse: "Thriller",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 152,
        categorie: "ROCK ANTHEM",
        type: "audio",
        searchQuery: "Survivor Eye of the Tiger",
        question: "Quel est ce titre culte de la BO de Rocky ?",
        reponse: "Eye of the Tiger",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 153,
        categorie: "DISNEY",
        type: "audio",
        searchQuery: "Hakuna Matata Le Roi Lion",
        question: "Quelle phrase signifie 'Pas de soucis' ?",
        reponse: "Hakuna Matata",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 154,
        categorie: "RAP US",
        type: "audio",
        searchQuery: "Eminem Lose Yourself",
        question: "Quel est ce titre oscarisé d'Eminem ?",
        reponse: "Lose Yourself",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 155,
        categorie: "DANCE 90s",
        type: "audio",
        searchQuery: "Gala Freed from Desire",
        question: "Tout le monde la chante dans les stades. Titre ?",
        reponse: "Freed from Desire",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 156,
        categorie: "VARIÉTÉ FRANÇAISE",
        type: "audio",
        searchQuery: "Johnny Hallyday Allumer le feu",
        question: "Qui est le taulier qui chante ça ?",
        reponse: "Johnny Hallyday",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 157,
        categorie: "POP 2010",
        type: "audio",
        searchQuery: "Pharrell Williams Happy",
        question: "Quel titre donne la pêche ?",
        reponse: "Happy",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 158,
        categorie: "ELECTRO",
        type: "audio",
        searchQuery: "Avicii Wake Me Up",
        question: "Quel DJ suédois a composé ce mix Country/Electro ?",
        reponse: "Avicii",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 159,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "La Casa de Papel Bella Ciao",
        question: "Quel chant partisan est l'hymne de La Casa de Papel ?",
        reponse: "Bella Ciao",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 160,
        categorie: "ROCK BRITISH",
        type: "audio",
        searchQuery: "The Verve Bitter Sweet Symphony",
        question: "Quel groupe marche dans la rue dans le clip ?",
        reponse: "The Verve",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 161,
        categorie: "REGGAETON",
        type: "audio",
        searchQuery: "Luis Fonsi Despacito",
        question: "Quel est le tube de l'été 2017 ?",
        reponse: "Despacito",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 162,
        categorie: "FILM CULTE",
        type: "audio",
        searchQuery: "Star Wars Imperial March",
        question: "Quel personnage arrive sur cette musique ?",
        reponse: "Dark Vador (Darth Vader)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 163,
        categorie: "ANIME JAPONAIS",
        type: "audio",
        searchQuery: "Naruto Blue Bird",
        question: "De quel manga vient cet opening célèbre ?",
        reponse: "Naruto (Shippuden)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 164,
        categorie: "SOUL/R&B",
        type: "audio",
        searchQuery: "Amy Winehouse Rehab",
        question: "Quelle chanteuse dit 'No, No, No' ?",
        reponse: "Amy Winehouse",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 165,
        categorie: "DISCO",
        type: "audio",
        searchQuery: "Earth Wind and Fire September",
        question: "Do you remember? Quel mois est cité ?",
        reponse: "September (Septembre)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 166,
        categorie: "CHANSON PAILLARDE",
        type: "audio",
        searchQuery: "Patrick Sébastien Les Sardines",
        question: "Qu'est-ce qu'on est serré, au fond de cette boîte...",
        reponse: "Les Sardines (Patrick Sébastien)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 167,
        categorie: "ROCK 90s",
        type: "audio",
        searchQuery: "Red Hot Chili Peppers Californication",
        question: "Quel groupe californien chante ça ?",
        reponse: "Red Hot Chili Peppers",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 168,
        categorie: "MUSIQUE DE PUBC",
        type: "audio",
        searchQuery: "The Dandy Warhols Bohemian Like You",
        question: "Quel titre connu pour une pub Vodafone/Citroën ?",
        reponse: "Bohemian Like You",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 169,
        categorie: "JEU VIDÉO",
        type: "audio",
        searchQuery: "Zelda Ocarina of Time Lost Woods",
        question: "Dans quel jeu se perd-on dans ces bois ?",
        reponse: "Zelda (Ocarina of Time)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 170,
        categorie: "RAP US CLASSIC",
        type: "audio",
        searchQuery: "50 Cent In Da Club",
        question: "Go Shorty, it's your birthday. Qui chante ?",
        reponse: "50 Cent",
        duree: 30, points: 2, malus: -2
    },

    // ============================================================
    // ⚡ SÉRIE 14 : VRAI OU FAUX (Science & Nature)
    // BARÈME : +2 / -4
    // ============================================================
    {
        id: 171,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les requins possèdent des os.",
        reponse: "FAUX (Leur squelette est fait de cartilage, comme nos oreilles)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 172,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La foudre ne tombe jamais deux fois au même endroit.",
        reponse: "FAUX (L'Empire State Building est frappé 25 fois par an)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 173,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'eau bout toujours à 100°C.",
        reponse: "FAUX (En altitude, avec moins de pression, elle bout plus vite, vers 90°C)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 174,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les humains n'ont que 5 sens.",
        reponse: "FAUX (On en a plus : l'équilibre, la température, la douleur, la proprioception...)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 175,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La tomate est un fruit.",
        reponse: "VRAI (Botaniquement parlant, car elle contient des graines)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 176,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Albert Einstein a échoué en maths à l'école.",
        reponse: "FAUX (C'est un mythe, il était excellent en maths dès le jeune âge)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 177,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les autruches mettent la tête dans le sable quand elles ont peur.",
        reponse: "FAUX (Elles s'enfuient ou se battent. Si elles faisaient ça, elles étoufferaient)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 178,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le Mont Blanc est le plus haut sommet d'Europe (géographiquement).",
        reponse: "FAUX (C'est l'Elbrouz dans le Caucase russe, à 5642m)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 179,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Manger avant de nager augmente le risque de noyade (crampe).",
        reponse: "FAUX (C'est une vieille croyance, aucune preuve scientifique sérieuse)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 180,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le sang est bleu à l'intérieur du corps.",
        reponse: "FAUX (Il est toujours rouge, rouge foncé quand désoxygéné, mais jamais bleu)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 181,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Van Gogh s'est coupé l'oreille entière.",
        reponse: "FAUX (Seulement le lobe de l'oreille gauche)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 182,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Salieri a assassiné Mozart.",
        reponse: "FAUX (Rumeur popularisée par le film Amadeus, mais historiquement infondée)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 183,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les chiens voient en noir et blanc.",
        reponse: "FAUX (Ils voient les couleurs, mais surtout en nuances de jaune et bleu)",
        duree: 8, points: 2, malus: -4
    },

    // ============================================================
    // 🧠 SÉRIE 15 : CULTURE GÉNÉRALE (Divers)
    // BARÈME : +1 / -2
    // ============================================================
    {
        id: 184,
        categorie: "HISTOIRE",
        type: "text",
        question: "En quelle année le Mur de Berlin est-il tombé ?",
        reponse: "1989",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 185,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit 'Les Misérables' ?",
        reponse: "Victor Hugo",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 186,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel fleuve traverse Londres ?",
        reponse: "La Tamise (The Thames)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 187,
        categorie: "SCIENCE",
        type: "text",
        question: "Quelle est la vitesse de la lumière (environ) ?",
        reponse: "300 000 km/s",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 188,
        categorie: "ART",
        type: "text",
        question: "Qui a peint La Joconde ?",
        reponse: "Léonard de Vinci",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 189,
        categorie: "SPORT",
        type: "text",
        question: "Quel est le logo de la NBA (la silhouette de quel joueur) ?",
        reponse: "Jerry West",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 190,
        categorie: "INVENTION",
        type: "text",
        question: "Qui est crédité de l'invention de l'ampoule électrique ?",
        reponse: "Thomas Edison",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 191,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quelle est la capitale de l'Inde ?",
        reponse: "New Delhi",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 192,
        categorie: "BIOLOGIE",
        type: "text",
        question: "Quel est le plus grand organe du corps humain ?",
        reponse: "La Peau",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 193,
        categorie: "PRIX NOBEL",
        type: "text",
        question: "Qui fut la première femme à recevoir un Prix Nobel ?",
        reponse: "Marie Curie",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 194,
        categorie: "CINÉMA",
        type: "text",
        question: "Quel film détient le record d'entrées en France ?",
        reponse: "Titanic",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 195,
        categorie: "ANIMAUX",
        type: "text",
        question: "Quel est l'animal terrestre le plus rapide ?",
        reponse: "Le Guépard",
        duree: 25, points: 1, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 16 : EMOJI (Devinettes)
    // BARÈME : +3 / -3
    // ============================================================
    {
        id: 196,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🍫 🎫 🏭 🎩",
        reponse: "Charlie et la Chocolaterie",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 197,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🐀 👨‍🍳 🍲 🗼",
        reponse: "Ratatouille",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 198,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "👽 🚲 🌕 👉",
        reponse: "E.T. l'extra-terrestre",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 199,
        categorie: "DEVINE LE DESSIN ANIMÉ",
        type: "emoji",
        question: "🐼 🥋 🍜 👊",
        reponse: "Kung Fu Panda",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 200,
        categorie: "DEVINE LE DESSIN ANIMÉ",
        type: "emoji",
        question: "🧜‍♀️ 🦀 🐠 🍴",
        reponse: "La Petite Sirène",
        duree: 20, points: 3, malus: -3
    },
    // SUITE DU PACK 5 (ID 201 à 250)

    // ============================================================
    // 🎵 SÉRIE 17 : BLIND TEST (Grands Classiques & Pépites)
    // BARÈME : +2 / -2
    // ============================================================
    {
        id: 201,
        categorie: "ROCK LÉGENDE",
        type: "audio",
        searchQuery: "The Rolling Stones Satisfaction",
        question: "Quel groupe anglais chante 'I Can't Get No...' ?",
        reponse: "The Rolling Stones",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 202,
        categorie: "POP 80s",
        type: "audio",
        searchQuery: "Cyndi Lauper Girls Just Want To Have Fun",
        question: "Qui chante cet hymne féminin des années 80 ?",
        reponse: "Cyndi Lauper",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 203,
        categorie: "RAP US",
        type: "audio",
        searchQuery: "Jay-Z Empire State of Mind",
        question: "Quelle ville est célébrée dans ce titre de Jay-Z ?",
        reponse: "New York",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 204,
        categorie: "VARIÉTÉ FRANÇAISE",
        type: "audio",
        searchQuery: "Charles Aznavour La Bohème",
        question: "Qui chante ce classique indémodable ?",
        reponse: "Charles Aznavour",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 205,
        categorie: "DANCE 2000",
        type: "audio",
        searchQuery: "Modjo Lady Hear Me Tonight",
        question: "Quel groupe français chante ce tube House ?",
        reponse: "Modjo",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 206,
        categorie: "SÉRIE TV",
        type: "audio",
        searchQuery: "Breaking Bad Theme",
        question: "Quelle série a ce générique court et percutant ?",
        reponse: "Breaking Bad",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 207,
        categorie: "CINÉMA",
        type: "audio",
        searchQuery: "Pulp Fiction You Never Can Tell",
        question: "Sur quel film danse-t-on le twist sur cette musique ?",
        reponse: "Pulp Fiction",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 208,
        categorie: "DISCO",
        type: "audio",
        searchQuery: "Village People YMCA",
        question: "Quel groupe costumé chante ça ?",
        reponse: "Village People",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 209,
        categorie: "REGGAE",
        type: "audio",
        searchQuery: "Bob Marley No Woman No Cry",
        question: "Quel est ce titre légendaire enregistré en live ?",
        reponse: "No Woman, No Cry",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 210,
        categorie: "POP ROCK",
        type: "audio",
        searchQuery: "R.E.M. Losing My Religion",
        question: "Quel groupe américain chante ce titre ?",
        reponse: "R.E.M.",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 211,
        categorie: "CHANSON FRANÇAISE",
        type: "audio",
        searchQuery: "Renaud Mistral Gagnant",
        question: "Qui chante 'A m'asseoir sur un banc...' ?",
        reponse: "Renaud",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 212,
        categorie: "METAL",
        type: "audio",
        searchQuery: "Metallica Enter Sandman",
        question: "Quel groupe de Heavy Metal joue ce riff ?",
        reponse: "Metallica",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 213,
        categorie: "DIVA SOUL",
        type: "audio",
        searchQuery: "Aretha Franklin Respect",
        question: "Qui demande un peu de R-E-S-P-E-C-T ?",
        reponse: "Aretha Franklin",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 214,
        categorie: "JEU VIDÉO",
        type: "audio",
        searchQuery: "Street Fighter II Guile Theme",
        question: "De quel jeu de combat vient ce thème culte ?",
        reponse: "Street Fighter II (Thème de Guile)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 215,
        categorie: "DESSIN ANIMÉ",
        type: "audio",
        searchQuery: "Générique Bob l'éponge",
        question: "Qui vit dans un ananas dans la mer ?",
        reponse: "Bob l'Éponge",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 216,
        categorie: "ELECTRO POP",
        type: "audio",
        searchQuery: "M83 Midnight City",
        question: "Quel groupe français chante ce tube mondial ?",
        reponse: "M83",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 217,
        categorie: "FILM D'ACTION",
        type: "audio",
        searchQuery: "Top Gun Anthem",
        question: "Quel film d'avions a ce thème héroïque ?",
        reponse: "Top Gun",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 218,
        categorie: "RAP US 90s",
        type: "audio",
        searchQuery: "Tupac California Love",
        question: "Quel rappeur légende chante California Love ?",
        reponse: "2Pac (Tupac Shakur)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 219,
        categorie: "ROCK INDÉ",
        type: "audio",
        searchQuery: "The White Stripes Seven Nation Army",
        question: "Quel duo joue ce riff de stade ?",
        reponse: "The White Stripes",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 220,
        categorie: "POP 2010",
        type: "audio",
        searchQuery: "Sia Chandelier",
        question: "Quelle chanteuse australienne pousse sa voix ici ?",
        reponse: "Sia",
        duree: 30, points: 2, malus: -2
    },

    // ============================================================
    // ⚡ SÉRIE 18 : VRAI OU FAUX (Culture & Science)
    // BARÈME : +2 / -4
    // ============================================================
    {
        id: 221,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'Everest a été découvert en 1953.",
        reponse: "FAUX (Il a été gravi en 1953, mais découvert et mesuré bien avant, au 19ème siècle)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 222,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les taureaux ne voient pas le rouge.",
        reponse: "VRAI (Ils sont daltoniens, c'est le mouvement de la cape qui les excite)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 223,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Molière est mort sur scène.",
        reponse: "FAUX (Il a fait un malaise sur scène mais est mort chez lui quelques heures plus tard)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 224,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le Sahara est le plus grand désert du monde.",
        reponse: "FAUX (C'est l'Antarctique ! Un désert se définit par ses précipitations, pas par le sable)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 225,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La capitale du Brésil est Rio de Janeiro.",
        reponse: "FAUX (C'est Brasilia depuis 1960)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 226,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les chiens transpirent par la langue.",
        reponse: "VRAI (Et aussi un peu par les coussinets)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 227,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Napoléon était petit.",
        reponse: "FAUX (Il mesurait 1m68, ce qui était la moyenne, voire un peu plus, pour l'époque)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 228,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "On avale en moyenne 8 araignées par an en dormant.",
        reponse: "FAUX (C'est une légende urbaine totalement inventée)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 229,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le son se propage plus vite dans l'eau que dans l'air.",
        reponse: "VRAI (Environ 4 fois plus vite car l'eau est plus dense)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 230,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La Tour Eiffel grandit en été.",
        reponse: "VRAI (Le métal se dilate avec la chaleur, elle peut gagner jusqu'à 15 cm)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 231,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Einstein a eu le Prix Nobel pour la Théorie de la Relativité.",
        reponse: "FAUX (Il l'a eu pour l'effet photoélectrique)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 232,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Il y a plus de cellules bactériennes que de cellules humaines dans notre corps.",
        reponse: "VRAI (C'est environ 1 pour 1, voire un peu plus de bactéries)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 233,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le 'S' de Harry S. Truman ne veut rien dire.",
        reponse: "VRAI (C'était un compromis entre les noms de ses deux grands-pères)",
        duree: 8, points: 2, malus: -4
    },

    // ============================================================
    // 🧠 SÉRIE 19 : CULTURE GÉNÉRALE (Pointue)
    // BARÈME : +1 / -2
    // ============================================================
    {
        id: 234,
        categorie: "HISTOIRE",
        type: "text",
        question: "Quel pays a offert la Statue de la Liberté aux États-Unis ?",
        reponse: "La France",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 235,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit 'Le Comte de Monte-Cristo' ?",
        reponse: "Alexandre Dumas",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 236,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quel est le plus grand océan du monde ?",
        reponse: "L'Océan Pacifique",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 237,
        categorie: "CINÉMA",
        type: "text",
        question: "Qui a réalisé le film 'Les Dents de la Mer' ?",
        reponse: "Steven Spielberg",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 238,
        categorie: "SCIENCE",
        type: "text",
        question: "Quelle planète du système solaire a le plus de lunes ?",
        reponse: "Saturne (En 2023, elle a dépassé Jupiter)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 239,
        categorie: "SPORT",
        type: "text",
        question: "Quel pays a remporté la Coupe du Monde de foot en 2014 ?",
        reponse: "L'Allemagne (7-1 contre le Brésil, souvenir douloureux)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 240,
        categorie: "MUSIQUE",
        type: "text",
        question: "Combien de cordes a une guitare basse standard ?",
        reponse: "4",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 241,
        categorie: "INVENTION",
        type: "text",
        question: "Qui a inventé l'imprimerie en Europe ?",
        reponse: "Gutenberg",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 242,
        categorie: "ANATOMIE",
        type: "text",
        question: "Quel est le muscle le plus fort du corps humain (proportionnellement) ?",
        reponse: "La Langue (ou le Masséter pour la mâchoire)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 243,
        categorie: "MYTHOLOGIE",
        type: "text",
        question: "Qui est le dieu grec de la foudre et du ciel ?",
        reponse: "Zeus",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 244,
        categorie: "GASTRONOMIE",
        type: "text",
        question: "Quel est l'ingrédient principal du Guacamole ?",
        reponse: "L'Avocat",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 245,
        categorie: "PEINTURE",
        type: "text",
        question: "Qui a peint le plafond de la Chapelle Sixtine ?",
        reponse: "Michel-Ange",
        duree: 25, points: 1, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 20 : EMOJI (Devinettes)
    // BARÈME : +3 / -3
    // ============================================================
    {
        id: 246,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🧙‍♂️ ⚡ 🏰 🧹",
        reponse: "Harry Potter",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 247,
        categorie: "DEVINE L'EXPRESSION",
        type: "emoji",
        question: "👀 🦷 👁️ 🦷",
        reponse: "Œil pour œil, dent pour dent",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 248,
        categorie: "DEVINE LA SÉRIE",
        type: "emoji",
        question: "🧟‍♂️ 🏹 🏍️ 🏚️",
        reponse: "The Walking Dead",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 249,
        categorie: "DEVINE LE PERSONNAGE",
        type: "emoji",
        question: "🦇 🦸‍♂️ 🌃 🃏",
        reponse: "Batman",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 250,
        categorie: "DEVINE LE PAYS",
        type: "emoji",
        question: "🦘 🐨 🏄‍♂️ 🏜️",
        reponse: "Australie",
        duree: 20, points: 3, malus: -3
    },
    // SUITE DU PACK 6 (ID 251 à 300)

    // ============================================================
    // 🎵 SÉRIE 21 : BLIND TEST (Légendes & Variétés)
    // BARÈME : +2 / -2
    // ============================================================
    {
        id: 251,
        categorie: "NU METAL",
        type: "audio",
        searchQuery: "Linkin Park Numb",
        question: "Quel groupe chante ce cri du cœur ?",
        reponse: "Linkin Park",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 252,
        categorie: "HIP HOP 2000",
        type: "audio",
        searchQuery: "Outkast Ms. Jackson",
        question: "À qui ce groupe demande-t-il pardon ?",
        reponse: "Ms. Jackson (OutKast)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 253,
        categorie: "ROCK DÉPRIME",
        type: "audio",
        searchQuery: "Radiohead Creep",
        question: "Quel est ce titre culte de Radiohead ?",
        reponse: "Creep",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 254,
        categorie: "DISCO POP",
        type: "audio",
        searchQuery: "ABBA Mamma Mia",
        question: "Quel groupe suédois chante ça ?",
        reponse: "ABBA",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 255,
        categorie: "PUNK ROCK",
        type: "audio",
        searchQuery: "The Offspring The Kids Aren't Alright",
        question: "Quel groupe californien d'énergie pure ?",
        reponse: "The Offspring",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 256,
        categorie: "HARD ROCK FM",
        type: "audio",
        searchQuery: "Europe The Final Countdown",
        question: "Quel groupe a fait ce compte à rebours ?",
        reponse: "Europe",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 257,
        categorie: "SOFT ROCK",
        type: "audio",
        searchQuery: "Toto Africa",
        question: "Quel continent est célébré ici ?",
        reponse: "Africa (Toto)",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 258,
        categorie: "METAL SYMPHO",
        type: "audio",
        searchQuery: "Evanescence Bring Me To Life",
        question: "Quel groupe chante 'Wake Me Up Inside' ?",
        reponse: "Evanescence",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 259,
        categorie: "POP 90s",
        type: "audio",
        searchQuery: "Britney Spears Baby One More Time",
        question: "Le premier tube de quelle superstar ?",
        reponse: "Britney Spears",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 260,
        categorie: "BO FILM",
        type: "audio",
        searchQuery: "Jurassic Park Theme John Williams",
        question: "Dans quel parc entend-on cette mélodie ?",
        reponse: "Jurassic Park",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 261,
        categorie: "ANIME",
        type: "audio",
        searchQuery: "Dragon Ball Z Chala Head Chala",
        question: "Quel manga légendaire a ce générique ?",
        reponse: "Dragon Ball Z",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 262,
        categorie: "CLASSIQUE ROCK",
        type: "audio",
        searchQuery: "The Beatles Hey Jude",
        question: "Quel groupe de Liverpool ?",
        reponse: "The Beatles",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 263,
        categorie: "STADE",
        type: "audio",
        searchQuery: "Queen We Will Rock You",
        question: "Quel groupe fait taper des mains ?",
        reponse: "Queen",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 264,
        categorie: "COMÉDIE MUSICALE",
        type: "audio",
        searchQuery: "Grease You're The One That I Want",
        question: "De quel film vient ce duo Travolta/Newton-John ?",
        reponse: "Grease",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 265,
        categorie: "RAP FUN",
        type: "audio",
        searchQuery: "Macklemore Thrift Shop",
        question: "Qui va faire du shopping en friperie ?",
        reponse: "Macklemore",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 266,
        categorie: "ELECTRO BELGE",
        type: "audio",
        searchQuery: "Stromae Papaoutai",
        question: "Quel est ce tube de Stromae ?",
        reponse: "Papaoutai",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 267,
        categorie: "TUBE DE L'ÉTÉ",
        type: "audio",
        searchQuery: "Lou Bega Mambo No 5",
        question: "Quel est ce Mambo ?",
        reponse: "Mambo No. 5",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 268,
        categorie: "BO ÉPIQUE",
        type: "audio",
        searchQuery: "Hans Zimmer Gladiator Now We Are Free",
        question: "Quel péplum a cette musique de fin ?",
        reponse: "Gladiator",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 269,
        categorie: "INTERNET TROLL",
        type: "audio",
        searchQuery: "Rick Astley Never Gonna Give You Up",
        question: "Quel est ce titre utilisé pour le Rickroll ?",
        reponse: "Never Gonna Give You Up",
        duree: 30, points: 2, malus: -2
    },
    {
        id: 270,
        categorie: "REGGAETON",
        type: "audio",
        searchQuery: "Daddy Yankee Gasolina",
        question: "Quel est ce classique du Reggaeton ?",
        reponse: "Gasolina",
        duree: 30, points: 2, malus: -2
    },

    // ============================================================
    // ⚡ SÉRIE 22 : VRAI OU FAUX (Science & Croyances)
    // BARÈME : +2 / -4
    // ============================================================
    {
        id: 271,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'alcool réchauffe le corps.",
        reponse: "FAUX (Il dilate les vaisseaux, donnant une sensation de chaleur, mais refroidit le corps)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 272,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Le sucre rend les enfants hyperactifs.",
        reponse: "FAUX (Aucune étude scientifique ne le prouve, c'est l'excitation de la fête)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 273,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Nous n'utilisons que 10% de notre cerveau.",
        reponse: "FAUX (On utilise 100% de notre cerveau, mais pas tout en même temps)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 274,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Faire craquer ses doigts donne de l'arthrite.",
        reponse: "FAUX (C'est juste du gaz qui éclate, aucun lien prouvé)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 275,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Se raser fait repousser les poils plus épais.",
        reponse: "FAUX (Le bout coupé est juste plus piquant, mais l'épaisseur ne change pas)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 276,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Une pièce jetée du haut de l'Empire State Building peut tuer quelqu'un.",
        reponse: "FAUX (Sa forme la ralentit trop, ça ferait juste mal)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 277,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les cheveux et les ongles continuent de pousser après la mort.",
        reponse: "FAUX (C'est la peau qui se rétracte, donnant cette illusion)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 278,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les oiseaux sont les descendants des dinosaures.",
        reponse: "VRAI (Ce sont techniquement des dinosaures théropodes)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 279,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les pieuvres ont trois cœurs.",
        reponse: "VRAI (Un principal et deux pour les branchies)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 280,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les bananes sont naturellement radioactives.",
        reponse: "VRAI (Elles contiennent du Potassium-40, mais c'est infime et sans danger)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 281,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "La planète Vénus tourne à l'envers (par rapport aux autres).",
        reponse: "VRAI (Le soleil s'y lève à l'Ouest)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 282,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "L'eau pure conduit l'électricité.",
        reponse: "FAUX (L'eau pure est isolante, ce sont les minéraux dedans qui conduisent)",
        duree: 8, points: 2, malus: -4
    },
    {
        id: 283,
        categorie: "VRAI OU FAUX ?",
        type: "vrai_faux",
        question: "Les crocodiles pleurent vraiment.",
        reponse: "VRAI (Pour lubrifier leurs yeux quand ils mangent, d'où l'expression)",
        duree: 8, points: 2, malus: -4
    },

    // ============================================================
    // 🧠 SÉRIE 23 : CULTURE GÉNÉRALE (Classiques)
    // BARÈME : +1 / -2
    // ============================================================
    {
        id: 284,
        categorie: "GÉOGRAPHIE",
        type: "text",
        question: "Quelle est la capitale du Canada ?",
        reponse: "Ottawa",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 285,
        categorie: "HISTOIRE",
        type: "text",
        question: "Qui fut le premier homme à marcher sur la Lune ?",
        reponse: "Neil Armstrong",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 286,
        categorie: "ASTRONOMIE",
        type: "text",
        question: "Quelle est la distance approximative Terre-Soleil ?",
        reponse: "150 millions de km (1 UA)",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 287,
        categorie: "LITTÉRATURE",
        type: "text",
        question: "Qui a écrit 'Le Petit Prince' ?",
        reponse: "Antoine de Saint-Exupéry",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 288,
        categorie: "SPORT",
        type: "text",
        question: "Combien y a-t-il d'anneaux sur le drapeau olympique ?",
        reponse: "5",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 289,
        categorie: "ART",
        type: "text",
        question: "Qui a peint 'Le Cri' ?",
        reponse: "Edvard Munch",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 290,
        categorie: "CORPS HUMAIN",
        type: "text",
        question: "Combien de dents a un adulte (sagesse incluses) ?",
        reponse: "32",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 291,
        categorie: "CINÉMA",
        type: "text",
        question: "Qui a réalisé le film 'Avatar' ?",
        reponse: "James Cameron",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 292,
        categorie: "CUISINE",
        type: "text",
        question: "Quel est l'ingrédient principal du Pesto ?",
        reponse: "Le Basilic",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 293,
        categorie: "MUSIQUE",
        type: "text",
        question: "Combien y avait-il de Beatles ?",
        reponse: "4",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 294,
        categorie: "TECH",
        type: "text",
        question: "Qui a fondé Amazon ?",
        reponse: "Jeff Bezos",
        duree: 25, points: 1, malus: -2
    },
    {
        id: 295,
        categorie: "MYTHOLOGIE",
        type: "text",
        question: "Quel dieu nordique possède un marteau ?",
        reponse: "Thor",
        duree: 25, points: 1, malus: -2
    },

    // ============================================================
    // 😎 SÉRIE 24 : EMOJI (Final)
    // BARÈME : +3 / -3
    // ============================================================
    {
        id: 296,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🏃‍♂️ 🍫 🦐 🏓",
        reponse: "Forrest Gump",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 297,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "💍 🌋 🦅 🧙‍♂️",
        reponse: "Le Seigneur des Anneaux",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 298,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🦁 👑 🐗 🐵",
        reponse: "Le Roi Lion",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 299,
        categorie: "DEVINE LE FILM",
        type: "emoji",
        question: "🕒 🔙 🚗 ⚡",
        reponse: "Retour vers le Futur",
        duree: 20, points: 3, malus: -3
    },
    {
        id: 300,
        categorie: "DEVINE L'EXPRESSION",
        type: "emoji",
        question: "🌧️ 🐱 🐶",
        reponse: "Il pleut des cordes (It's raining cats and dogs)",
        duree: 20, points: 3, malus: -3
    }
];