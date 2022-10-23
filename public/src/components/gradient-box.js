"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a gradient box.
 *
 * This method creates a box that has a gradient colour. The box contains the
 * logo of the framework, language, library, tool or IDE.
 *
 * It is important that the ID is not shared in the SVG between other gradient boxes
 * because if they share an ID they will use the same colour.
 *
 * @param id The id of the gradient box
 * @param fromColor The starting color in hexcode
 * @param toColor The final color of the gradient in hexcode
 * @param transX The x coordinate of the box
 * @param transY The y coordinate of the box
 * @returns A gradient box
 */
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