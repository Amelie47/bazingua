import { MiniGame, MiniGameCategory, MiniGameEquipment, MiniGamePlayground } from '@/types';

const ABBA: MiniGame = {
    name: 'ABBA',
    slug: 'abba',
    categories: [
        MiniGameCategory.CHALLENGE, MiniGameCategory.FAST, MiniGameCategory.WORDS
    ],
    config: {
        points: 20,
        players: {
            min: 0,
            max: 0
        },
        equipment: [
            MiniGameEquipment.PAPER, MiniGameEquipment.PEN
        ],
        rules: [
            "Le jeu consiste à transformer une suite de lettres en appliquant des règles précises de réduction. À chaque tour, les joueurs modifient la chaîne en suivant ces règles jusqu'à ce qu’aucune autre transformation ne soit possible.",
            "Le but est d'obtenir la séquence la plus courte possible, et celui qui y parvient gagne la partie."
        ]
    },
    challenges: [
        {
            "points": 10,
            "challenge": "Obtenir la plus petite chaîne avec un minimum d'itérations"
        },
        {
            "points": 20,
            "challenge": "Ajouter une lettre C"
        },
        {
            "points": 30,
            "challenge": "Ajouter un timer"
        }
    ],
    play: {
        ground: [MiniGamePlayground.ABBA],
        metadata: {}
    }
}

const TARGET: MiniGame = {
    name: 'Target',
    slug: 'target',
    categories: [
        MiniGameCategory.CHALLENGE, MiniGameCategory.TURNS
    ],
    config: {
        points: 20,
        players: {
            min: 0,
            max: 0
        },
        equipment: [MiniGameEquipment.PAPER, MiniGameEquipment.PEN, MiniGameEquipment.OBJECTS],
        rules: [
            "Les joueurs dessinent une cible sur une feuille de papier qui est posée sur la table (ou par terre).",
            "Chacun choisit un objet et le lance sur la cible. Celui dont l'objet atterrit le plus près du centre marque des points.",
            "Le jeu peut se jouer en plusieurs manches, et le joueur avec le plus de points à la fin l'emporte."
        ]
    },
    challenges: [
        {
            points: 30,
            challenge: 'Chaque joueur dessine la cible d\'un autre joueur (jouer sur la taille, les zones...)'
        }
    ],
    play: {
        ground: [MiniGamePlayground.EMPTY],
        metadata: {
            duration: undefined
        }
    }
}

const PYRAMIDE: MiniGame = {
    name: 'Pyramide',
    slug: 'pyramide',
    categories: [
        MiniGameCategory.TURNS
    ],
    config: {
        points: 20,
        players: {
            min: 0,
            max: 0
        },
        equipment: [MiniGameEquipment.GLASS, MiniGameEquipment.OBJECTS],
        rules: [
            "Les joueurs placent un verre retourné au centre de la table. À tour de rôle, chacun choisit un objet et le pose sur la pile sans la faire tomber. Celui qui fait tomber la pile perd, et les autres gagnent des points."
        ]
    },
    challenges: [],
    play: {
        ground: [MiniGamePlayground.EMPTY],
        metadata: {
            duration: undefined
        }
    },
}

const PONG: MiniGame = {
    name: 'Boulettes pong',
    slug: 'pong',
    categories: [MiniGameCategory.TEAM],
    config: {
        points: 30,
        players: {
            min: 2,
            max: 6
        },
        equipment: [MiniGameEquipment.GLASS, MiniGameEquipment.PAPER],
        rules: [
            "Ce jeu se joue en 2 équipes. Si il n’y a pas un nombre impair de joueurs, une des équipes sera alors plus nombreuse.",
            "Chaque équipe place un verre à son extrémité de la table. À tour de rôle, les joueurs lancent trois boulettes en essayant de les faire atterrir dans le verre de l'équipe adverse.",
            "L'équipe qui met le plus de boulettes dans le verre adverse remporte la partie."
        ]
    },
    challenges: [
        {
            points: 10,
            challenge: 'Après chaque lancé, le prochain joueur doit reculer pour être plus loin du verre'
        }
    ],
    play: {
        ground: [MiniGamePlayground.EMPTY],
        metadata: {}
    },
}

const SPLASH: MiniGame = {
    name: 'Splash',
    slug: 'splash',
    categories: [MiniGameCategory.FAST],
    config: {
        points: 30,
        players: {
            min: 0,
            max: 0
        },
        equipment: [MiniGameEquipment.WATER],
        rules: [
            "Les joueurs se placent face à face (en cercle), ferment les yeux et gardent de l'eau dans la bouche. Un timer est lancé quand ils ferment les yeux.",
            "Les joueurs doivent ouvrir les yeux quand ils le souhaitent (au moins 1 fois pendant la partie) ce qui peut générer des situations pouvant déclencher un fou rire si les deux joueurs ouvrent les yeux en même temps.",
            "L'objectif est de ne pas rire. Le dernier joueur qui n'a pas rigolé gagne."
        ]
    },
    challenges: [
        {
            points: 10,
            challenge: 'Les joueurs portent des accessoires pour faire craquer plus vite leurs adversaires'
        },
        {
            points: 20,
            challenge: "Remplacer l'eau par une boisson pétillante"
        },
    ],
    play: {
        ground: [
            MiniGamePlayground.TIMER
        ],
        metadata: {
            duration: 30
        }
    },
}

const BATTAPOUCE: MiniGame = {
    name: 'Battapouce',
    slug: 'battapouce',
    categories: [MiniGameCategory.FAST, MiniGameCategory.TURNS],
    config: {
        points: 10,
        players: {
            min: 2,
            max: 0
        },
        equipment: [],
        rules: [
            "Deux joueurs s’affrontent en entrelaçant leurs mains, pouces levés. Le but est d'immobiliser le pouce de l'adversaire sous le sien pendant quelques secondes pour gagner.",
            "Si les joueurs sont plus de 2 ou en nombre impairs, il faut faire des manches, puis une finale avec les vainqueurs des manches précédentes."
        ]
    },
    challenges: [],
    play: {
        ground: [
            MiniGamePlayground.EMPTY
        ],
        metadata: {}
    },
}

const miniGames = [ABBA, TARGET, PYRAMIDE, PONG, SPLASH, BATTAPOUCE]

export default miniGames