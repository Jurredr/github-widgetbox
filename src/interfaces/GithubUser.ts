import { ContributionsCollection, ContributedRepositories } from './Contributions'
import { Repositories } from './Repositories'

export default interface GithubUserRequest {
    data: GithubUserData
}

export interface GithubUserData {
    user: GithubUser
}

export interface GithubUser {
    name: string
    login: string
    contributionsCollection: ContributionsCollection
    repositoriesContributedTo: ContributedRepositories
    followers: Followers
    repositories: Repositories
}

export interface Followers {
    totalCount: number
}
