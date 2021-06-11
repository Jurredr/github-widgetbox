export function find(name: string): { name: string; colorFrom: string; colorTo: string; icon: string; } {
    return languages.filter(function (languages) {
        return languages.name.toUpperCase() == name.toUpperCase()
    })[0]
}

const languages = [
    {
        name: 'JavaScript',
        colorFrom: '#FFE69F',
        colorTo: '#DBA343',
        icon: '../../assets/icons/languages/javascript.svg',
    },
    {
        name: 'TypeScript',
        colorFrom: '#B7D4F8',
        colorTo: '#4179C1',
        icon: '../../assets/icons/languages/typescript.svg',
    },
]

export default languages
