export function getRandomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomABBAString() {
    const length = 12
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.random() < 0.5 ? 'A' : 'B';
    }
    return result;
}