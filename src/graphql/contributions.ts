import gql from "graphql-tag";

export const GET_CONTRIBUTION_AVAILABLE = gql`
  fragment ContributionAvailable on ContributionsCollection {
    hasAnyContributions
    hasAnyRestrictedContributions
  }
`;

export const GET_CONTRIBUTION_REPORT = gql`
  fragment CommitReport on ContributionsCollection {
    contributionCalendar {
      totalContributions
      weeks {
        contributionDays {
          contributionCount
          date
        }
      }
    }
  }
`;

export const GET_COMMIT_CONTRIBUTION = gql`
  fragment CommitContribution on ContributionsCollection {
    commitContributionsByRepository(maxRepositories: 3) {
      repository {
        nameWithOwner
      }
      contributions(
        first: 1
        orderBy: { field: COMMIT_COUNT, direction: DESC }
      ) {
        totalCount
        nodes {
          commitCount
          occurredAt
        }
      }
    }
  }
`;

export const GET_ISSUE_CONTRIBUTION = gql`
  fragment IssueContribution on ContributionsCollection {
    popularIssueContribution {
      issue {
        title
        timelineItems {
          totalCount
        }
        participants {
          totalCount
        }
        repository {
          nameWithOwner
        }
      }
    }
    issueContributionsByRepository(maxRepositories: 3) {
      contributions {
        totalCount
      }
      repository {
        nameWithOwner
      }
    }
  }
`;

export const GET_PULL_REQUEST_CONTRIBUTION = gql`
  fragment PullRequestContribution on ContributionsCollection {
    popularPullRequestContribution {
      pullRequest {
        title
        reviews {
          totalCount
        }
        commits {
          totalCount
        }
        repository {
          nameWithOwner
        }
      }
    }
    pullRequestContributionsByRepository(maxRepositories: 3) {
      contributions {
        totalCount
      }
      repository {
        nameWithOwner
      }
    }
    pullRequestReviewContributionsByRepository {
      contributions {
        totalCount
      }
    }
  }
`;

export const GET_NEW_REPOSITORY_COUNT = gql`
  fragment NewRepositoryCount on ContributionsCollection {
    repositoryContributions {
      totalCount
    }
  }
`;
