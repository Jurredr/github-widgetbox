"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildCard(width, height, bg) {
    return `<defs>
                <filter id="card" x="0" y="0" width="${width}" height="${height}" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="5" result="blur"/>
                    <feFlood flood-opacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            <g id="card" transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#card)">
                <rect id="card" data-name="card" width="${width - 30}" height="${height - 30}" rx="30" transform="translate(15 12)" fill="${bg}"/>
            </g>`;
}
exports.default = buildCard;
//# sourceMappingURL=card.js.map