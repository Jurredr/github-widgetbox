const axios = require('axios')

function isValidHexColor(hexColor: string) {
    return new RegExp(
        /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/
    ).test(hexColor)
}

function parseStringToArray(str: string, delimiter: string) {
    if (!str) return []
    return str.split(delimiter)
}

function githubRequest(method: string, data: string, headers: string) {
    return axios({
        url: 'https://api.github.com/',
        method,
        headers,
        data,
    })
}

module.exports = {
    isValidHexColor,
    parseStringToArray,
    githubRequest,
}
