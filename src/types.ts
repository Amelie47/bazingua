export type MiniGameSm = {
    name: string,
    slug: string
}

export interface MiniGame extends MiniGameSm {
    config: MiniGameConfig
    challenges: MiniGameChallenge[]
    play: MiniGamePlay
}

export type MiniGameConfig = {
    points: number,
    players: MiniGameConfigPlayers
    equipment: MiniGameEquipment
    rules: string[]
}

export enum MiniGameEquipment {
    PAPER, PEN
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
    empty: MiniGamePlayBase
    questions: MiniGamePlayBase
    timer: MiniGamePlayTimer
    stopwatch: MiniGamePlayBase
    words: MiniGamePlayBase
    operations: MiniGamePlayBase
}

export type MiniGamePlayBase = {
    set: boolean
}

export interface MiniGamePlayTimer extends MiniGamePlayBase {
    duration: number // in ms
}