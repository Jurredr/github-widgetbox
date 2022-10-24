import { Theme } from "../interfaces/Theme";

const themes:Theme[] = [
    {
        name:['dark', 'darkmode'],
        background: '#18191A',
        title: '#E4E6EB',
        subtitle: '#bfbfbf'
    },
    {
        name:['default', 'light'],
        background: '#FFFFFF',
        title: '#000000',
        subtitle: '#bfbfbf'
    },
    {
        name:['radical'],
        background: '#141321',
        title: '#fe428e',
        subtitle: '#a9fef7'
    },
    {
        name: ['transparent'],
        title: "006AFF",
        subtitle: "417E87",
        background: "ffffff00",
    },
]

export default themes;