export function formatPoints(points: number) {
    if (points > 0) return `+${points}`
    else return points
}