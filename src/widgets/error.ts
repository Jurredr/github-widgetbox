export default function errorWidget(
    widgetName: string,
    nameX: string,
    reason: string,
    reasonX: string
): string {
    return `<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="483" height="426" viewBox="0 0 483 426">
    <defs>
        <filter id="card-bottom" x="0" y="309" width="483" height="117" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="card-top" x="0" y="0" width="483" height="339" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="5" result="blur-2"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur-2"/>
            <feComposite in="SourceGraphic"/>
        </filter>
    </defs>
    <g id="error-card" transform="translate(-187 -87)">
        <g transform="matrix(1, 0, 0, 1, 187, 87)" filter="url(#card-bottom)">
            <path id="card-bottom-2" data-name="card-bottom" d="M0,0H453a0,0,0,0,1,0,0V57a30,30,0,0,1-30,30H30A30,30,0,0,1,0,57V0A0,0,0,0,1,0,0Z" transform="translate(15 321)" fill="#ff4951"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, 187, 87)" filter="url(#card-top)">
            <path id="card-top-2" data-name="card-top" d="M30,0H423a30,30,0,0,1,30,30V309a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V30A30,30,0,0,1,30,0Z" transform="translate(15 12)" fill="#fff"/>
        </g>
        <text id="error-text" data-name="error-text" transform="translate(310 269)" fill="#ff4951" font-size="42" font-family="Roboto-Medium, Roboto, sans-serif" font-weight="500">
            <tspan x="0" y="0">Error… Oops!</tspan>
        </text>
        <text id="error-desc" data-name="There was an error trying to
load the name widget." transform="translate(428 315)" fill="#bfbfbf" font-size="24" font-family="Roboto-Regular, Roboto, sans-serif">
            <tspan x="-149.086" y="0">There was an error trying to </tspan>
            <tspan x="${nameX}" y="32">load the </tspan>
            <tspan y="32" font-family="Roboto-Bold, Roboto, sans-serif" font-weight="700">${widgetName}</tspan>
            <tspan y="32"> widget.</tspan>
        </text>
        <text id="error-reason" data-name="error-reason" transform="translate(428 461)" fill="#fff" font-size="24" font-family="Roboto-Regular, Roboto, sans-serif">
            <tspan x="${reasonX}" y="0">${reason}</tspan>
        </text>
        <path id="error-icon" d="M28.316,3A25.316,25.316,0,1,0,53.632,28.316,25.325,25.325,0,0,0,28.316,3Zm2.532,37.974H25.784V35.911h5.063Zm0-10.126H25.784V15.658h5.063Z" transform="translate(400.044 161.368)" fill="#ff4951"/>
    </g>
    </svg>`
}
