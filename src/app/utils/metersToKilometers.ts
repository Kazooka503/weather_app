
export function metersToKilometers(visibilityInMeters: number): string {
    const visibilityInKilometers= visibilityInMeters / 1.609344;
    return `${visibilityInKilometers.toFixed(0)}km`
}