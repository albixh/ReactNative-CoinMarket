export function isNumeric(num) {
    if (typeof num != "string")
        return false
    return !isNaN(num)
}

export function round(val, dec) {
    return Number(Math.round(val +'e'+ dec) +'e-'+ dec).toFixed(dec);
}