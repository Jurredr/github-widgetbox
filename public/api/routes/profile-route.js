"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const profile_1 = __importDefault(require("../../src/widgets/profile"));
const error_1 = __importDefault(require("../../src/widgets/error"));
const githubUsernameRegex = require("github-username-regex");
// Primary profile route
router.get('/', function (req, res) {
    const { username, data } = req.query;
    // Set the header's type to svg/xml
    res.setHeader('Content-Type', 'image/svg+xml');
    // Check if username argument is not present
    if (username === undefined || username === null) {
        res.send((0, error_1.default)('Profile', '-25%', 'Username is undefined!', '-26%'));
        return;
    }
    // Check validity based on GitHub's username rules
    if (!githubUsernameRegex.test(username)) {
        res.send((0, error_1.default)('Profile', '-25%', 'Username is invalid!', '-22%'));
        return;
    }
    // Check if data argument is not present
    if (data === undefined || data === null) {
        res.send((0, error_1.default)('Profile', '-25%', 'Data option is missing!', '-25%'));
        return;
    }
    // Grab the Profile widget
    (0, profile_1.default)(String(username), String(data)).then((response) => {
        if (response === undefined || response === null) {
            res.send((0, error_1.default)('Profile', '-25%', 'GitHub API-call error!', '-24%'));
        }
        else {
            res.send(response);
        }
    });
});
exports.default = router;
//# sourceMappingURL=profile-route.js.map