import buildCard from '../components/card'
import buildGradientBox from '../components/gradient-box'
import { find } from '../data/languages'
import errorWidget from './error'

export default function skillsWidget(
    languageString: string,
    includeNames: boolean
): string {

    if (languageString === 'undefined') {
        return errorWidget('Skills languages are undefined')
    }

    const languages: Array<string> = languageString.split(',')

    if (languages === undefined) {
        return errorWidget('Skills languages are undefined')
    }

    const width = 842
    const height = 354 + 114 * Math.floor(languages.length / 7)

    function getBoxes() {
        let boxes = ''
        for (let i = 0; i < languages.length; i++) {
            let foundData = find(languages[i])
            if (foundData === undefined) {
                foundData = {
                    name: ['None'],
                    colorFrom: '#FFFFFF',
                    colorTo: '#808080',
                    icon: 'undefined',
                    width: -1,
                    height: -1,
                }
            }

            const transX = 102 * (i - Math.floor(i / 7) * 7)
            const transY = 114 * Math.floor(i / 7)

            boxes += buildGradientBox(
                i,
                foundData.colorFrom,
                foundData.colorTo,
                transX,
                transY
            )

            boxes +=
                foundData.icon != 'Undefined'
                    ? `<g transform="translate(${
                          transX + (80 - foundData.width) / 2
                      } ${transY + (80 - foundData.height) / 2})">` +
                      foundData.icon +
                      '</g>'
                    : ''

            if (includeNames) {
                boxes += `<g id="header-text" transform="translate(${
                    transX + (80 - foundData.name[0].length * 7.5) / 2.3
                } 60)">
                    <text id="Skills" fill="${
                        foundData.colorTo
                    }" transform="translate(0 44)" font-size="16" font-family="Roboto-Light, Roboto" font-weight="300">
                        <tspan x="0" y="0">${foundData.name[0]}</tspan>
                    </text>
                </g>`
            }
        }
        return boxes
    }

    return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"
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
