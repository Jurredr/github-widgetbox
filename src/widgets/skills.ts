function skillsWidget() {

    function getBoxes() {
        return `<rect id="lang-box1" data-name="lang-box1" width="80" height="80" rx="20" fill="url(#linear-gradient)"/>`
    }

    return `
    <svg width="842" height="468" viewBox="0 0 842 468"
    xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="Card" x="0" y="0" width="842" height="468" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="5" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
            </filter>
            <linearGradient id="linear-gradient" x1="0.085" y1="0.941" x2="0.939" y2="0.123" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="1" stop-color="gray"/>
            </linearGradient>
        </defs>
        <g id="card" transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Card)">
            <rect id="Card" data-name="Card" width="812" height="438" rx="30" transform="translate(15 12)" fill="#fff"/>
        </g>
        <g id="header-text" transform="translate(60 60)">
            <text id="Skills" transform="translate(0 44)" font-size="42" font-family="Roboto-Medium, Roboto" font-weight="500">
                <tspan x="0" y="0">Skills</tspan>
            </text>
            <text id="Languages" transform="translate(0 83)" fill="#bfbfbf" font-size="24" font-family="Roboto-Regular, Roboto">
                <tspan x="0" y="0">Languages</tspan>
            </text>
        </g>
        <g id="boxes" transform="translate(60 184)">
            ${getBoxes()}
        </g>
    </svg>
  `
}

module.exports = skillsWidget
