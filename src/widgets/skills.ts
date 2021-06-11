import buildCard from '../components/card'
import buildGradientBox from '../components/gradient-box'
import errorWidget from './error'

export default function skillsWidget(languageString: string): string {
    const width = 842
    const height = 468
    const languages: Array<string> = languageString.split(',')

    if (languages === undefined) {
        return errorWidget('Skills languages are undefined')
    }

    function getBoxes() {
        let boxes = ''
        for (let i = 0; i < languages.length; i++) {
            if (i > 6) {
                boxes += buildGradientBox(i, '#FFF', 'gray', 102 * (i - 7), 114)
            } else {
                boxes += buildGradientBox(i, '#FFF', 'gray', 102 * i, 0)
            }
        }
        return boxes
    }

    return `
    <svg width="842" height="468" viewBox="0 0 ${width} ${height}"
    xmlns="http://www.w3.org/2000/svg">
        ${buildCard(width, height, '#FFFFFF')}
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
