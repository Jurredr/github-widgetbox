export function isValidHexColor(hexColor: string): boolean {
    return new RegExp(
        /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/
    ).test(hexColor)
}

export function getBoolean(str: string): boolean {
    return str.toLowerCase() === 'true'
}
