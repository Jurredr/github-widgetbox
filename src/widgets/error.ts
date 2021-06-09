export default function errorWidget(message: string): string {
    return `
    <svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #FF0033; }
            .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525; }
            .gray { fill: #858585 }
        </style>
        <rect x="0.5" y="0.5" width="399" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
        <text x="25" y="45" class="text">Something went wrong!</text>
        <text x="25" y="60" class="text small">
            <tspan x="25" dy="18">${message}</tspan>
        </text>
    </svg>
  `
}
