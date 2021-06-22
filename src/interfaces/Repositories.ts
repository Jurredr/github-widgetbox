export interface Repositories {
    totalCount: number
    nodes: Repository[]
}

export interface Repository {
    stargazers: Stargazers
}

export interface Stargazers {
    totalCount: number
}
