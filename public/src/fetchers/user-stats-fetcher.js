"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
async function getGithubUserStats(token, username) {
    const headers = {
        Authorization: `bearer ${token}`,
    };
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
    };
    const response = await (0, node_fetch_1.default)('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers,
    });
    return await response.json();
}
exports.default = getGithubUserStats;
//# sourceMappingURL=user-stats-fetcher.js.map