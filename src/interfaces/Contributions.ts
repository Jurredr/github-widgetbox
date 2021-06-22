export interface ContributionsCollection {
    totalCommitContributions: number
    restrictedContributionsCount: number
    contributionCalendar: ContributionCalendar
}

export interface ContributionCalendar {
    totalContributions: number
}

export interface ContributedRepositories {
    repositoriesContributedTo: number
}
