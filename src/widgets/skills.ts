function skillWidget() {
    return `
    <svg width="842" height="468" viewBox="0 0 842 468">
        <defs>
            <filter id="Card" x="0" y="0" width="842" height="468" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="5" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
            </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Card)">
            <rect id="Card-2" data-name="Card" width="812" height="438" rx="30" transform="translate(15 12)" fill="#fff"/>
        </g>
    </svg>
  `
}

module.exports = skillWidget
