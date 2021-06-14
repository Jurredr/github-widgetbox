"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildGradientBox(id, fromColor, toColor, transX, transY) {
    return `<defs>
                <linearGradient id="linear-gradient${id}" x1="0.085" y1="0.941" x2="0.939" y2="0.123" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="${fromColor}"/>
                    <stop offset="1" stop-color="${toColor}"/>
                </linearGradient>
            </defs>
            <rect id="gradient-box${id}" transform="translate(${transX} ${transY})" data-name="gradient-box${id}" width="80" height="80" rx="20" fill="url(#linear-gradient${id})"/>
`;
}
exports.default = buildGradientBox;
//# sourceMappingURL=gradient-box.js.map