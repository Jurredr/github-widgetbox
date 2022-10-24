"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("../components/card"));
const gradient_box_1 = __importDefault(require("../components/gradient-box"));
const utils_1 = require("../utils");
const languages_1 = __importDefault(require("../data/languages"));
const frameworks_1 = __importDefault(require("../data/frameworks"));
const libraries_1 = __importDefault(require("../data/libraries"));
const tools_1 = __importDefault(require("../data/tools"));
const software_ides_1 = __importDefault(require("../data/software-ides"));
const themes_1 = __importDefault(require("../data/themes"));
/**
 * Builds the skill widget page
 *
 * This method builds a SVG file that contains all the languages, frameworks,
 * libraries, tools and other software that can be found in the data folder and
 * are passed by the calling method.
 *
 * @param languagesString The string with all the languages
 * @param frameworksString The string with all the frameworks
 * @param librariesString The string with all the libraries
 * @param toolsString The string with all the tools
 * @param softwareString The string with all the software
 * @param includeNames The boolean that determines whether or not to include names
 * @returns The SVG with all the skills that were passed.
 */
function skillsWidget(languagesString, frameworksString, librariesString, toolsString, softwareString, includeNames, themeString) {
    const BASE_HEIGHT = 125;
    const BASE_WIDTH = 812;
    const FIRST_ROW = 90;
    const ROW = 114;
    const PAD = 60;
    if (!languagesString) {
        languagesString = 'undefined';
    }
    if (!frameworksString) {
        frameworksString = 'undefined';
    }
    if (!librariesString) {
        librariesString = 'undefined';
    }
    if (!toolsString) {
        toolsString = 'undefined';
    }
    if (!softwareString) {
        softwareString = 'undefined';
    }
    // Set the theme
    let theme = (0, utils_1.getTheme)(themes_1.default, 'default');
    if (themeString) {
        theme = (0, utils_1.getTheme)(themes_1.default, themeString);
    }
    if (!theme) {
        theme = (0, utils_1.getTheme)(themes_1.default, 'default');
    }
    const languageList = languagesString.split(',');
    const frameworkList = frameworksString.split(',');
    const libraryList = librariesString.split(',');
    const toolsList = toolsString.split(',');
    const softwareList = softwareString.split(',');
    const rowHeightLanguages = Math.round((languageList.length - 0.1) / 7) > 1 ? Math.round((languageList.length - 0.1) / 7) : 1;
    const languagesTitleHeight = FIRST_ROW;
    const rowHeightFrameworks = Math.round((frameworkList.length - 0.1) / 7) > 1 ? Math.round((frameworkList.length - 0.1) / 7) : 1;
    const frameworkTitleHeight = languagesTitleHeight
        + ((languageList.length > 1 || languageList[0] !== 'undefined' ? 1 : 0) * PAD)
        + ((languageList.length > 1 || languageList[0] !== 'undefined' ? rowHeightLanguages : 0) * ROW)
        + (includeNames && (languageList.length > 1 || languageList[0] !== 'undefined') ? (rowHeightFrameworks) * 25 : 0);
    const rowHeightLibraries = Math.round((libraryList.length - 0.1) / 7) > 1 ? Math.round((libraryList.length - 0.1) / 7) : 1;
    const libraryTitleHeight = frameworkTitleHeight
        + ((frameworkList.length > 1 || frameworkList[0] !== 'undefined' ? 1 : 0) * PAD)
        + ((frameworkList.length > 1 || frameworkList[0] !== 'undefined' ? rowHeightFrameworks : 0) * ROW)
        + (includeNames && (frameworkList.length > 1 || frameworkList[0] !== 'undefined') ? (rowHeightLibraries) * 25 : 0);
    const rowHeightTools = Math.round((toolsList.length - 0.1) / 7) > 1 ? Math.round((toolsList.length - 0.1) / 7) : 1;
    const toolsTitleHeight = libraryTitleHeight
        + ((libraryList.length > 1 || libraryList[0] !== 'undefined' ? 1 : 0) * PAD)
        + ((libraryList.length > 1 || libraryList[0] !== 'undefined' ? rowHeightLibraries : 0) * ROW)
        + (includeNames && (libraryList.length > 1 || libraryList[0] !== 'undefined') ? (rowHeightTools) * 25 : 0);
    const rowHeightSoftware = Math.round((softwareList.length - 0.1) / 7) > 1 ? Math.round((softwareList.length - 0.1) / 7) : 1;
    const softwareTitleHeight = toolsTitleHeight
        + ((toolsList.length > 1 || toolsList[0] !== 'undefined' ? 1 : 0) * PAD)
        + ((toolsList.length > 1 || toolsList[0] !== 'undefined' ? rowHeightTools : 0) * ROW)
        + (includeNames && (toolsList.length > 1 || toolsList[0] !== 'undefined') ? (rowHeightSoftware) * 25 : 0);
    // Set the size of the main SVG container
    const width = BASE_WIDTH;
    const height = BASE_HEIGHT +
        (ROW * ((languageList.length > 1 || languageList[0] !== 'undefined' ? rowHeightLanguages : 0) +
            (frameworkList.length > 1 || frameworkList[0] !== 'undefined' ? rowHeightFrameworks : 0) +
            (libraryList.length > 1 || libraryList[0] !== 'undefined' ? rowHeightLibraries : 0) +
            (toolsList.length > 1 || toolsList[0] !== 'undefined' ? rowHeightTools : 0) +
            (softwareList.length > 1 || softwareList[0] !== 'undefined' ? rowHeightSoftware : 0)))
        + (PAD * (1 +
            (languageList.length > 1 || languageList[0] !== 'undefined' ? 1 : 0) +
            (frameworkList.length > 1 || frameworkList[0] !== 'undefined' ? 1 : 0) +
            (libraryList.length > 1 || libraryList[0] !== 'undefined' ? 1 : 0) +
            (toolsList.length > 1 || toolsList[0] !== 'undefined' ? 1 : 0) +
            (softwareList.length > 1 || softwareList[0] !== 'undefined' ? 1 : 0)))
        // Add space for the names if true.
        + (includeNames ? (Math.round(((languageList.length + libraryList.length + frameworkList.length + toolsList.length + softwareList.length) - 0.1) / 7) + 1) * 25 : 0);
    /**
     * Builds the gradient boxes and sets the names.
     * @param listToBuild The list of items to build the boxes with
     * @param type Indicates which type of list it is (languages, frameworks, libraries, tools, etc.). It is important that the type is not used twice.
     * @returns The gradient boxes with the icons
     */
    function getBoxes(listToBuild, type) {
        let boxes = '';
        for (let i = 0; i < listToBuild.length; i++) {
            // Check the data and add the first result that isn't defined.
            // It checks the languages first, then the frameworks, and then the libraries.
            let foundData = (0, utils_1.findData)(languages_1.default, listToBuild[i]) || (0, utils_1.findData)(frameworks_1.default, listToBuild[i]) || (0, utils_1.findData)(libraries_1.default, listToBuild[i]) || (0, utils_1.findData)(tools_1.default, listToBuild[i]) || (0, utils_1.findData)(software_ides_1.default, listToBuild[i]);
            if (foundData === undefined) {
                foundData = {
                    name: [''],
                    colorFrom: '#FFFFFF',
                    colorTo: '#808080',
                    icon: 'undefined',
                    width: -1,
                    height: -1,
                    xOffset: 0,
                };
            }
            const row = Math.floor(i / 7);
            const transX = 102 * (i - row * 7);
            const transY = ROW * row + (includeNames && row > 0 ? 25 * row : 0);
            boxes += (0, gradient_box_1.default)(
            // Combine the index and the type number.
            (i * Math.pow(10, Math.floor(Math.log10(type)) + 1) + type), foundData.colorFrom, foundData.colorTo, transX, transY);
            boxes +=
                foundData.icon != 'Undefined'
                    ? `<g transform="translate(${transX + (80 - foundData.width) / 2} ${transY + (80 - foundData.height) / 2})">` +
                        foundData.icon +
                        '</g>'
                    : '';
            if (includeNames) {
                boxes += `<g id="header-text" transform="translate(${transX +
                    (80 - foundData.name[0].length * 7.5) / 2.3 +
                    foundData.xOffset} ${60 + 140 * row})">
                    <text id="languages" fill="${foundData.colorTo}" transform="translate(0 44)" font-size="16" font-family="Roboto-Light, Roboto, sans-serif" font-weight="300">
                        <tspan x="0" y="0">${foundData.name[0]}</tspan>
                    </text>
                </g>`;
            }
        }
        return boxes;
    }
    return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"
    xmlns="http://www.w3.org/2000/svg">
        ${(0, card_1.default)(width, height, theme.background)}
        <g id="header-text" transform="translate(60 60)">
            <text id="skills" fill="${theme.title}" transform="translate(0 44)" font-size="42" font-family="Roboto-Medium, Roboto, sans-serif" font-weight="500">
                <tspan x="0" y="0">Skills</tspan>
            </text>
            <text style="display:${languageList.length <= 1 && languageList[0] === 'undefined' ? "none" : "block"}" id="languages" transform="translate(0 ${FIRST_ROW})" fill="${theme.subtitle}" font-size="24" font-family="Roboto-Regular, Roboto, sans-serif">
                <tspan x="0" y="0">Languages</tspan>
            </text>
            <text style="display:${frameworkList.length <= 1 && frameworkList[0] === 'undefined' ? "none" : "block"}" id="frameworks" transform="translate(0 ${frameworkTitleHeight})" fill="${theme.subtitle}" font-size="24" font-family="Roboto-Regular, Roboto, sans-serif">
                <tspan x="0" y="0">Frameworks</tspan>
            </text>
            <text style="display:${libraryList.length <= 1 && libraryList[0] === 'undefined' ? "none" : "block"}" id="libraries" transform="translate(0 ${libraryTitleHeight})" fill="${theme.subtitle}" font-size="24" font-family="Roboto-Regular, Roboto, sans-serif">
                <tspan x="0" y="0">Libraries</tspan>
            </text>
            <text style="display:${toolsList.length <= 1 && toolsList[0] === 'undefined' ? "none" : "block"}" id="tools" transform="translate(0 ${toolsTitleHeight})" fill="${theme.subtitle}" font-size="24" font-family="Roboto-Regular, Roboto, sans-serif">
                <tspan x="0" y="0">Tools</tspan>
            </text>
            <text style="display:${softwareList.length <= 1 && softwareList[0] === 'undefined' ? "none" : "block"}" id="software" transform="translate(0 ${softwareTitleHeight})" fill="${theme.subtitle}" font-size="24" font-family="Roboto-Regular, Roboto, sans-serif">
                <tspan x="0" y="0">Software</tspan>
            </text>
        </g>
        <g style="display:${languageList.length <= 1 && languageList[0] === 'undefined' ? "none" : "block"}" id="boxes" transform="translate(60 190)">
            ${getBoxes(languageList, 1)}
        </g>
        <g style="display:${frameworkList.length <= 1 && frameworkList[0] === 'undefined' ? "none" : "block"}" id="boxes" transform="translate(60 ${frameworkTitleHeight + 100})">
            ${getBoxes(frameworkList, 2)}
        </g>
        <g style="display:${libraryList.length <= 1 && libraryList[0] === 'undefined' ? "none" : "block"}" id="boxes" transform="translate(60 ${libraryTitleHeight + 100})">
            ${getBoxes(libraryList, 3)}
        </g>
        <g style="display:${toolsList.length <= 1 && toolsList[0] === 'undefined' ? "none" : "block"}" id="boxes" transform="translate(60 ${toolsTitleHeight + 100})">
            ${getBoxes(toolsList, 4)}
        </g>
        <g style="display:${softwareList.length <= 1 && softwareList[0] === 'undefined' ? "none" : "block"}" id="boxes" transform="translate(60 ${softwareTitleHeight + 100})">
            ${getBoxes(softwareList, 5)}
        </g>
        
    </svg>
  `;
}
exports.default = skillsWidget;
//# sourceMappingURL=skills.js.map