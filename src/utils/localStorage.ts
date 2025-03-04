import { MiniGame } from '@/types';

export function storeMini(mini: MiniGame) {
    localStorage.setItem('mini', JSON.stringify(mini))
}

export function getMini(): MiniGame {
    return JSON.parse(localStorage.getItem('mini') || "")
}

export function clearMini() {
    localStorage.removeItem('mini')
}