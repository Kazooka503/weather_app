

export function convertKelvinToCelsius(tempInKelvin: number): number {
    const tempInFahrenheit = (tempInKelvin - 273.15) * 9/5 + 32;
    return Math.floor(tempInFahrenheit); // Removes decimal part and keeps integer part
}
