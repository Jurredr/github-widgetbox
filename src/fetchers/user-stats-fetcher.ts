import fetch from 'node-fetch'
import GithubUserRequest from '../interfaces/GithubUser'

export default async function getGithubUserStats(
    token: string | undefined,
    username: string
): Promise<GithubUserRequest> {

    const headers = {
        Authorization: `bearer ${token}`,
    }

    const body = {
        query: `
        query {
            user(login: "${username}") {
              name
              login
              contributionsCollection {
                totalCommitContributions
                restrictedContributionsCount
                contributionCalendar {
                    totalContributions
                }
              }
              repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
                totalCount
              }
              followers {
                totalCount
              }
              repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
                totalCount
                nodes {
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
          `,
    }

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers,
    })

    return await response.json()
}
