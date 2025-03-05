export type MiniGameSm = {
    name: string,
    slug: string
}

export interface MiniGame extends MiniGameSm {
    config: MiniGameConfig
    challenges: MiniGameChallenge[]
    play: MiniGamePlay
    categories: MiniGameCategory[]
}

export enum MiniGameCategory {
    CHALLENGE = "Défi",
    FAST = "Partie rapide",
    WORDS = "Jouer avec les mots",
    TURNS = "Tour par tour",
    TEAM = "En équipe",
    CLASSIC = "Grand classique"
}

export type MiniGameConfig = {
    points: number,
    players: MiniGameConfigPlayers
    equipment: MiniGameEquipment[]
    rules: string[]
}

export enum MiniGameEquipment {
    PAPER = "Papier",
    PEN = "Crayon",
    OBJECTS = "Objets divers",
    GLASS = "Verre",
    WATER = "Eau"
}

export type MiniGameConfigPlayers = {
    min: number
    max: number
}

export type MiniGameChallenge = {
    points: number
    challenge: string
}

// -- Play

export type MiniGamePlay = {
    ground: MiniGamePlayground[]
    metadata: MiniGamePlaMetadata
}

export enum MiniGamePlayground {
    EMPTY, QUESTIONS, TIMER, STOPWATCH, WORDS, OPERATIONS, ABBA
}

export type MiniGamePlaMetadata = {
    duration?: number
}