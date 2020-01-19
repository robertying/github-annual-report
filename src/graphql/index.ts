import gql from "graphql-tag";
import * as basics from "./basics";
import * as contributions from "./contributions";
import * as social from "./social";

export const QUERY_ALL = gql`
  query All($from: DateTime!, $to: DateTime!) {
    viewer {
      ...BasicInfo
      contributionsCollection(from: $from, to: $to) {
        ...ContributionAvailable
        ...CommitSummary
        ...CommitContribution
        ...IssueContribution
        ...PullRequestContribution
        ...NewRepositoryCount
      }
      ...FollowStatus
      ...StarredRepository
    }
  }
  ${basics.GET_BASIC_INFO}
  ${contributions.GET_COMMIT_CONTRIBUTION}
  ${contributions.GET_CONTRIBUTION_AVAILABLE}
  ${contributions.GET_CONTRIBUTION_SUMMARY}
  ${contributions.GET_ISSUE_CONTRIBUTION}
  ${contributions.GET_NEW_REPOSITORY_COUNT}
  ${contributions.GET_PULL_REQUEST_CONTRIBUTION}
  ${social.GET_FOLLOW_STATUS}
  ${social.GET_STARRED_REPOSITORIES}
`;
