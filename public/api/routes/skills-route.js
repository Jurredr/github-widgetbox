"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const skills_1 = __importDefault(require("../../src/widgets/skills"));
const utils_1 = require("../../src/utils");
const error_1 = __importDefault(require("../../src/widgets/error"));
/**
 * Primary skill path.
 *
 * This path is for the primary skill screen. It has the following possible queries
 * @param languages the list of languages to show.
 * @param frameworks the list of frameworks to show.
 * @param libraries the list of libraries to show.
 * @param tools the list of tools to show.
 * @param software the list of software to show
 * @param includeNames the option if it has to include names.
 * @param theme the theme of the widget.
 * @param names @deprecated the full list of all skills it needs to show. deprecated from version 1.1.0 onwards.
 */
router.get('/', function (req, res) {
    const { names, languages, frameworks, libraries, tools, software, includeNames, theme } = req.query;
    // Set the header's type to svg/xml
    res.setHeader('Content-Type', 'image/svg+xml');
    // Check if languages argument is not present
    if (!languages && !frameworks && !libraries && !names && !tools && !software) {
        res.send((0, error_1.default)('Skills', '-24%', 'Languages are undefined!', '-28%'));
        return;
    }
    if (names) {
        res.send((0, skills_1.default)(String(names), undefined, undefined, undefined, undefined, (0, utils_1.getBoolean)(String(includeNames)), String(theme)));
    }
    else {
        res.send((0, skills_1.default)(String(languages), String(frameworks), String(libraries), String(tools), String(software), (0, utils_1.getBoolean)(String(includeNames)), String(theme)));
    }
    // Grab the Skills widget
});
exports.default = router;
//# sourceMappingURL=skills-route.js.map