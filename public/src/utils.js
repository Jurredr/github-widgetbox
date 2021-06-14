"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoolean = exports.isValidHexColor = void 0;
function isValidHexColor(hexColor) {
    return new RegExp(/^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/).test(hexColor);
}
exports.isValidHexColor = isValidHexColor;
function getBoolean(str) {
    return str.toLowerCase() === 'true';
}
exports.getBoolean = getBoolean;
// TODO: nice implementation of util for GitHub API requests
// export function githubRequest(method: string, dest: string, data: string, headers: string) {
//     return axios({
//         url: 'https://api.github.com/' + dest,
//         method,
//         headers,
//         data,
//     })
// }
//# sourceMappingURL=utils.js.map