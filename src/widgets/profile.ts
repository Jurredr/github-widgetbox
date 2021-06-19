import axios from 'axios'
import { requestInBase64 } from '../utils'
import errorWidget from './error'
import buildCard from '../components/card'

export default async function profileWidget(
    username: string,
    data: string
): Promise<String> {
    const dataOptions: Array<string> = data.split(',')

    // Return error if dataOptions argument is undefined
    if (dataOptions === undefined) {
        return new Promise<String>((res) => {
            res(errorWidget('Profile', '-25%', 'Data option is missing!', '-25%'))
        })
    }

    // Return error if more than 4 dataOptions were supplied
    if (dataOptions.length > 4) {
        return new Promise<String>((res) => {
            res(errorWidget('Profile', '-25%', `Can't have more than 4 data-options!`, '-40%'))
        })
    }

    const width = 842
    const height = 165

    function getDataOptions() {
        let dataBoxes = ''

        for (let i = 0; i < dataOptions.length; i++) {
            switch (dataOptions[i].toLowerCase()) {
                case 'followers':
                    dataBoxes += `<g id="followers" transform="translate(${(dataOptions.length - 1 - i) * -108} 0)">
                        <rect id="followers-box" width="90" height="37" rx="18.5" transform="translate(-90 0)" fill="#CAF0FF"/>
                        <text id="followers-text" data-name="followers-text" transform="translate(-47 25)" fill="#00C6FF" font-size="16" font-family="Roboto-Regular, Roboto, sans-serif"><tspan x="0" y="0">100</tspan></text>
                        <path id="followers-icon" transform="translate(-71 8)" fill="#00C6FF" d="M3.625,9.5A2.417,2.417,0,1,0,1.208,7.084,2.419,2.419,0,0,0,3.625,9.5Zm16.919,0a2.417,2.417,0,1,0-2.417-2.417A2.419,2.419,0,0,0,20.544,9.5Zm1.208,1.208H19.336a2.41,2.41,0,0,0-1.7.7,5.524,5.524,0,0,1,2.836,4.132h2.493a1.207,1.207,0,0,0,1.208-1.208V13.126A2.419,2.419,0,0,0,21.753,10.709Zm-9.668,0a4.23,4.23,0,1,0-4.23-4.23A4.228,4.228,0,0,0,12.085,10.709Zm2.9,1.208h-.313a5.84,5.84,0,0,1-5.174,0H9.185a4.352,4.352,0,0,0-4.351,4.351v1.088a1.813,1.813,0,0,0,1.813,1.813H17.523a1.813,1.813,0,0,0,1.813-1.813V16.269A4.352,4.352,0,0,0,14.985,11.918Zm-8.448-.506a2.41,2.41,0,0,0-1.7-.7H2.417A2.419,2.419,0,0,0,0,13.126v1.208a1.207,1.207,0,0,0,1.208,1.208H3.7A5.538,5.538,0,0,1,6.537,11.412Z"/>
                    </g>`
                    break
                case 'repositories':
                    dataBoxes += `<g id="repositories" transform="translate(${(dataOptions.length - 1 - i) * -108} 0)">
                        <rect id="repositories-box" width="90" height="37" rx="18.5" transform="translate(-90 0)" fill="#FFCEE4"/>
                        <text id="repostiories-text" data-name="repositories-text" transform="translate(-47 25)" fill="#FF0774" font-size="16" font-family="Roboto-Regular, Roboto, sans-serif"><tspan x="0" y="0">100</tspan></text>
                        <path id="repositories-icon" transform="translate(-71 8)" fill="#FF0774" d="M7.106,3A2.106,2.106,0,0,0,5,5.106V17.74a.7.7,0,0,0,.207.5,2.026,2.026,0,0,0,1.9,1.608h.7v-1.4h-.7a.7.7,0,0,1,0-1.4H17.634a1.4,1.4,0,0,0,1.4-1.4V4.4a1.4,1.4,0,0,0-1.4-1.4Zm.7,2.106h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,5.106Zm0,3.51h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,8.615Zm0,3.51h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,12.125Zm1.4,6.317v3.51l2.106-1.4,2.106,1.4v-3.51Zm5.615,0v1.4h3.51a.7.7,0,0,0,0-1.4Z"/>
                    </g>`
                    break
                case 'stars':
                    dataBoxes += `<g id="stars" transform="translate(${(dataOptions.length - 1 - i) * -108} 0)">
                        <rect id="stars-box" width="90" height="37" rx="18.5" transform="translate(-90 0)" fill="#FFEFCD"/>
                        <text id="stars-text" data-name="stars-text" transform="translate(-47 25)" fill="#FFA100" font-size="16" font-family="Roboto-Regular, Roboto, sans-serif"><tspan x="0" y="0">10</tspan></text>
                        <path id="stars-icon" transform="translate(-71 10)" fill="#FFA100" d="M9.6.608,7.369,5.131l-4.992.728a1.094,1.094,0,0,0-.6,1.865l3.611,3.519L4.53,16.215a1.093,1.093,0,0,0,1.585,1.151l4.465-2.347,4.465,2.347a1.094,1.094,0,0,0,1.585-1.151l-.854-4.971,3.611-3.519a1.094,1.094,0,0,0-.6-1.865l-4.992-.728L11.561.608A1.094,1.094,0,0,0,9.6.608Z"/>
                    </g>`
                    break
                case 'contributions':
                case 'commits':
                    dataBoxes += `<g id="contributions" transform="translate(${(dataOptions.length - 1 - i) * -108} 0)">
                        <rect id="contributions-box" width="90" height="37" rx="18.5" transform="translate(-90 0)" fill="#C5FFD9"/>
                        <text id="contributions-text" data-name="contributions-text" transform="translate(-47 25)" fill="#00F14F" font-size="16" font-family="Roboto-Regular, Roboto, sans-serif"><tspan x="0" y="0">100</tspan></text>
                        <g id="contributions-icon" transform="translate(-71 8)">
                            <path id="path1" data-name="path1" d="M0,0H20.592V20.592H0Z" fill="none"/>
                            <path id="path2" data-name="path2" d="M12.438,14.87v5.148H10.722V14.87H8.148l3.432-4.29,3.432,4.29Zm1.716,1.716h2.574V14.012h-.686L11.58,8.435,6.987,14.012H6a1.287,1.287,0,0,0,0,2.574h3V18.3H6a3,3,0,0,1-3-3V4.574A2.574,2.574,0,0,1,5.574,2H17.586a.858.858,0,0,1,.858.858V17.444a.858.858,0,0,1-.858.858H14.154ZM6.432,4.574V6.29H8.148V4.574Zm0,2.574V8.864H8.148V7.148Z" transform="translate(-0.426 -0.284)" fill="#00F14F"/>
                        </g>
                    </g>`
                    break

                // Incorrect data item found
                default:
                    return new Promise<String>((res) => {
                        res(errorWidget('Profile', '-25%', `Invalid data item found!`, '-26%'))
                    })
            }
        }

        return dataBoxes
    }

    try {
        const dataBoxes = getDataOptions()
        if (typeof dataBoxes != 'string') {
            return dataBoxes
        }
        const response = await axios
            .get('https://api.github.com/users/' + username)
        const avatar = await requestInBase64(response.data.avatar_url)
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                                    <defs>
                                        <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 200 200">
                                            <image width="200" height="200" xlink:href="data:image/jpeg;base64,${avatar}"/>
                                        </pattern>
                                    </defs>
                                    ${buildCard(width, height, '#FFFFFF')}
                                    <g id="profile-card">
                                        <rect id="profile-image" width="65" height="65" rx="30" transform="translate(52 47)" fill="url(#pattern)"/>
                                        <text id="text-name" data-name="text-name" transform="translate(145 78)" font-size="26" font-family="Roboto-Medium, Roboto, sans-serif" font-weight="500"><tspan x="0" y="0">${response.data.name}</tspan></text>
                                        <text id="text-url" data-name="text-url" transform="translate(145 102)" fill="#bfbfbf" font-size="16" font-family="Roboto-Regular, Roboto, sans-serif"><tspan x="0" y="0">GitHub.com/${response.data.login}</tspan></text>
                                        <g id="data-boxes" transform="translate(${width - 52} ${(height - 37) / 2})">
                                            ${dataBoxes}
                                        </g>
                                    </g>
                                </svg>`
    } catch (error) {
        return new Promise<String>((res) => {
            res(errorWidget(
                'Profile',
                '-25%',
                'GitHub API-call error!',
                '-24%'
            ))
        })
    }
}
