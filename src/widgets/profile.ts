import axios from 'axios'

export default function profileWidget(username: string): string {
    try {
        const profile = axios.get('https://api.github.com/users/' + username)

        Promise.all([profile]).then((results) => {
            console.log(results[0].data)
        })
    } catch (error) {
        console.log(error)
    }

    return `<svg></svg>`
}
