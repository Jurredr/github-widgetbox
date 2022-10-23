"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const error_1 = __importDefault(require("../src/widgets/error"));
const routes_1 = __importDefault(require("./routes"));
// Setup express
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Use routing on the /api prefix
app.use('/api', routes_1.default);
// Send error widget for incorrect request URL
app.use('*', (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.send((0, error_1.default)('Unknown', '-28%', 'Invalid API URL!', '-19%'));
});
// Start listening on defined port
app.listen(process.env.PORT, () => {
    console.log(`Github-WidgetBox listening at http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map