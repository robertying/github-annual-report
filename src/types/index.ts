/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: All
// ====================================================

export interface All_viewer_contributionsCollection_contributionCalendar_weeks_contributionDays {
  __typename: "ContributionCalendarDay";
  /**
   * How many contributions were made by the user on this day.
   */
  contributionCount: number;
  /**
   * The day this square represents.
   */
  date: any;
}

export interface All_viewer_contributionsCollection_contributionCalendar_weeks {
  __typename: "ContributionCalendarWeek";
  /**
   * The days of contributions in this week.
   */
  contributionDays: All_viewer_contributionsCollection_contributionCalendar_weeks_contributionDays[];
}

export interface All_viewer_contributionsCollection_contributionCalendar {
  __typename: "ContributionCalendar";
  /**
   * The count of total contributions in the calendar.
   */
  totalContributions: number;
  /**
   * A list of the weeks of contributions in this calendar.
   */
  weeks: All_viewer_contributionsCollection_contributionCalendar_weeks[];
}

export interface All_viewer_contributionsCollection_commitContributionsByRepository_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface All_viewer_contributionsCollection_commitContributionsByRepository_contributions_nodes {
  __typename: "CreatedCommitContribution";
  /**
   * How many commits were made on this day to this repository by the user.
   */
  commitCount: number;
  /**
   * When this contribution was made.
   */
  occurredAt: any;
}

export interface All_viewer_contributionsCollection_commitContributionsByRepository_contributions {
  __typename: "CreatedCommitContributionConnection";
  /**
   * Identifies the total count of commits across days and repositories in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (All_viewer_contributionsCollection_commitContributionsByRepository_contributions_nodes | null)[] | null;
}

export interface All_viewer_contributionsCollection_commitContributionsByRepository {
  __typename: "CommitContributionsByRepository";
  /**
   * The repository in which the commits were made.
   */
  repository: All_viewer_contributionsCollection_commitContributionsByRepository_repository;
  /**
   * The commit contributions, each representing a day.
   */
  contributions: All_viewer_contributionsCollection_commitContributionsByRepository_contributions;
}

export interface All_viewer_contributionsCollection_popularIssueContribution_issue_timelineItems {
  __typename: "IssueTimelineItemsConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection_popularIssueContribution_issue_participants {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection_popularIssueContribution_issue_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface All_viewer_contributionsCollection_popularIssueContribution_issue {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * A list of events, comments, commits, etc. associated with the issue.
   */
  timelineItems: All_viewer_contributionsCollection_popularIssueContribution_issue_timelineItems;
  /**
   * A list of Users that are participating in the Issue conversation.
   */
  participants: All_viewer_contributionsCollection_popularIssueContribution_issue_participants;
  /**
   * The repository associated with this node.
   */
  repository: All_viewer_contributionsCollection_popularIssueContribution_issue_repository;
}

export interface All_viewer_contributionsCollection_popularIssueContribution {
  __typename: "CreatedIssueContribution";
  /**
   * The issue that was opened.
   */
  issue: All_viewer_contributionsCollection_popularIssueContribution_issue;
}

export interface All_viewer_contributionsCollection_issueContributionsByRepository_contributions {
  __typename: "CreatedIssueContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection_issueContributionsByRepository_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface All_viewer_contributionsCollection_issueContributionsByRepository {
  __typename: "IssueContributionsByRepository";
  /**
   * The issue contributions.
   */
  contributions: All_viewer_contributionsCollection_issueContributionsByRepository_contributions;
  /**
   * The repository in which the issues were opened.
   */
  repository: All_viewer_contributionsCollection_issueContributionsByRepository_repository;
}

export interface All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest_reviews {
  __typename: "PullRequestReviewConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest_commits {
  __typename: "PullRequestCommitConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest {
  __typename: "PullRequest";
  /**
   * Identifies the pull request title.
   */
  title: string;
  /**
   * A list of reviews associated with the pull request.
   */
  reviews: All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest_reviews | null;
  /**
   * A list of commits present in this pull request's head branch not present in the base branch.
   */
  commits: All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest_commits;
  /**
   * The repository associated with this node.
   */
  repository: All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest_repository;
}

export interface All_viewer_contributionsCollection_popularPullRequestContribution {
  __typename: "CreatedPullRequestContribution";
  /**
   * The pull request that was opened.
   */
  pullRequest: All_viewer_contributionsCollection_popularPullRequestContribution_pullRequest;
}

export interface All_viewer_contributionsCollection_pullRequestContributionsByRepository_contributions {
  __typename: "CreatedPullRequestContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection_pullRequestContributionsByRepository_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface All_viewer_contributionsCollection_pullRequestContributionsByRepository {
  __typename: "PullRequestContributionsByRepository";
  /**
   * The pull request contributions.
   */
  contributions: All_viewer_contributionsCollection_pullRequestContributionsByRepository_contributions;
  /**
   * The repository in which the pull requests were opened.
   */
  repository: All_viewer_contributionsCollection_pullRequestContributionsByRepository_repository;
}

export interface All_viewer_contributionsCollection_pullRequestReviewContributionsByRepository_contributions {
  __typename: "CreatedPullRequestReviewContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection_pullRequestReviewContributionsByRepository {
  __typename: "PullRequestReviewContributionsByRepository";
  /**
   * The pull request review contributions.
   */
  contributions: All_viewer_contributionsCollection_pullRequestReviewContributionsByRepository_contributions;
}

export interface All_viewer_contributionsCollection_repositoryContributions {
  __typename: "CreatedRepositoryContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_contributionsCollection {
  __typename: "ContributionsCollection";
  /**
   * Determine if there are any contributions in this collection.
   */
  hasAnyContributions: boolean;
  /**
   * Determine if the user made any contributions in this time frame whose details
   * are not visible because they were made in a private repository. Can only be
   * true if the user enabled private contribution counts.
   */
  hasAnyRestrictedContributions: boolean;
  /**
   * A calendar of this user's contributions on GitHub.
   */
  contributionCalendar: All_viewer_contributionsCollection_contributionCalendar;
  /**
   * Commit contributions made by the user, grouped by repository.
   */
  commitContributionsByRepository: All_viewer_contributionsCollection_commitContributionsByRepository[];
  /**
   * The issue the user opened on GitHub that received the most comments in the specified
   * time frame.
   */
  popularIssueContribution: All_viewer_contributionsCollection_popularIssueContribution | null;
  /**
   * Issue contributions made by the user, grouped by repository.
   */
  issueContributionsByRepository: All_viewer_contributionsCollection_issueContributionsByRepository[];
  /**
   * The pull request the user opened on GitHub that received the most comments in the
   * specified time frame.
   */
  popularPullRequestContribution: All_viewer_contributionsCollection_popularPullRequestContribution | null;
  /**
   * Pull request contributions made by the user, grouped by repository.
   */
  pullRequestContributionsByRepository: All_viewer_contributionsCollection_pullRequestContributionsByRepository[];
  /**
   * Pull request review contributions made by the user, grouped by repository.
   */
  pullRequestReviewContributionsByRepository: All_viewer_contributionsCollection_pullRequestReviewContributionsByRepository[];
  /**
   * A list of repositories owned by the user that the user created in this time range.
   */
  repositoryContributions: All_viewer_contributionsCollection_repositoryContributions;
}

export interface All_viewer_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_following {
  __typename: "FollowingConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer_starredRepositories {
  __typename: "StarredRepositoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface All_viewer {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The collection of contributions this user has made to different repositories.
   */
  contributionsCollection: All_viewer_contributionsCollection;
  /**
   * A list of users the given user is followed by.
   */
  followers: All_viewer_followers;
  /**
   * A list of users the given user is following.
   */
  following: All_viewer_following;
  /**
   * Repositories the user has starred.
   */
  starredRepositories: All_viewer_starredRepositories;
}

export interface All {
  /**
   * The currently authenticated user.
   */
  viewer: All_viewer;
}

export interface AllVariables {
  from: any;
  to: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicInfo
// ====================================================

export interface BasicInfo {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The user's public profile name.
   */
  name: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContributionAvailable
// ====================================================

export interface ContributionAvailable {
  __typename: "ContributionsCollection";
  /**
   * Determine if there are any contributions in this collection.
   */
  hasAnyContributions: boolean;
  /**
   * Determine if the user made any contributions in this time frame whose details
   * are not visible because they were made in a private repository. Can only be
   * true if the user enabled private contribution counts.
   */
  hasAnyRestrictedContributions: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommitReport
// ====================================================

export interface CommitReport_contributionCalendar_weeks_contributionDays {
  __typename: "ContributionCalendarDay";
  /**
   * How many contributions were made by the user on this day.
   */
  contributionCount: number;
  /**
   * The day this square represents.
   */
  date: any;
}

export interface CommitReport_contributionCalendar_weeks {
  __typename: "ContributionCalendarWeek";
  /**
   * The days of contributions in this week.
   */
  contributionDays: CommitReport_contributionCalendar_weeks_contributionDays[];
}

export interface CommitReport_contributionCalendar {
  __typename: "ContributionCalendar";
  /**
   * The count of total contributions in the calendar.
   */
  totalContributions: number;
  /**
   * A list of the weeks of contributions in this calendar.
   */
  weeks: CommitReport_contributionCalendar_weeks[];
}

export interface CommitReport {
  __typename: "ContributionsCollection";
  /**
   * A calendar of this user's contributions on GitHub.
   */
  contributionCalendar: CommitReport_contributionCalendar;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommitContribution
// ====================================================

export interface CommitContribution_commitContributionsByRepository_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface CommitContribution_commitContributionsByRepository_contributions_nodes {
  __typename: "CreatedCommitContribution";
  /**
   * How many commits were made on this day to this repository by the user.
   */
  commitCount: number;
  /**
   * When this contribution was made.
   */
  occurredAt: any;
}

export interface CommitContribution_commitContributionsByRepository_contributions {
  __typename: "CreatedCommitContributionConnection";
  /**
   * Identifies the total count of commits across days and repositories in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (CommitContribution_commitContributionsByRepository_contributions_nodes | null)[] | null;
}

export interface CommitContribution_commitContributionsByRepository {
  __typename: "CommitContributionsByRepository";
  /**
   * The repository in which the commits were made.
   */
  repository: CommitContribution_commitContributionsByRepository_repository;
  /**
   * The commit contributions, each representing a day.
   */
  contributions: CommitContribution_commitContributionsByRepository_contributions;
}

export interface CommitContribution {
  __typename: "ContributionsCollection";
  /**
   * Commit contributions made by the user, grouped by repository.
   */
  commitContributionsByRepository: CommitContribution_commitContributionsByRepository[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: IssueContribution
// ====================================================

export interface IssueContribution_popularIssueContribution_issue_timelineItems {
  __typename: "IssueTimelineItemsConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface IssueContribution_popularIssueContribution_issue_participants {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface IssueContribution_popularIssueContribution_issue_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface IssueContribution_popularIssueContribution_issue {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * A list of events, comments, commits, etc. associated with the issue.
   */
  timelineItems: IssueContribution_popularIssueContribution_issue_timelineItems;
  /**
   * A list of Users that are participating in the Issue conversation.
   */
  participants: IssueContribution_popularIssueContribution_issue_participants;
  /**
   * The repository associated with this node.
   */
  repository: IssueContribution_popularIssueContribution_issue_repository;
}

export interface IssueContribution_popularIssueContribution {
  __typename: "CreatedIssueContribution";
  /**
   * The issue that was opened.
   */
  issue: IssueContribution_popularIssueContribution_issue;
}

export interface IssueContribution_issueContributionsByRepository_contributions {
  __typename: "CreatedIssueContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface IssueContribution_issueContributionsByRepository_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface IssueContribution_issueContributionsByRepository {
  __typename: "IssueContributionsByRepository";
  /**
   * The issue contributions.
   */
  contributions: IssueContribution_issueContributionsByRepository_contributions;
  /**
   * The repository in which the issues were opened.
   */
  repository: IssueContribution_issueContributionsByRepository_repository;
}

export interface IssueContribution {
  __typename: "ContributionsCollection";
  /**
   * The issue the user opened on GitHub that received the most comments in the specified
   * time frame.
   */
  popularIssueContribution: IssueContribution_popularIssueContribution | null;
  /**
   * Issue contributions made by the user, grouped by repository.
   */
  issueContributionsByRepository: IssueContribution_issueContributionsByRepository[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PullRequestContribution
// ====================================================

export interface PullRequestContribution_popularPullRequestContribution_pullRequest_reviews {
  __typename: "PullRequestReviewConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface PullRequestContribution_popularPullRequestContribution_pullRequest_commits {
  __typename: "PullRequestCommitConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface PullRequestContribution_popularPullRequestContribution_pullRequest_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface PullRequestContribution_popularPullRequestContribution_pullRequest {
  __typename: "PullRequest";
  /**
   * Identifies the pull request title.
   */
  title: string;
  /**
   * A list of reviews associated with the pull request.
   */
  reviews: PullRequestContribution_popularPullRequestContribution_pullRequest_reviews | null;
  /**
   * A list of commits present in this pull request's head branch not present in the base branch.
   */
  commits: PullRequestContribution_popularPullRequestContribution_pullRequest_commits;
  /**
   * The repository associated with this node.
   */
  repository: PullRequestContribution_popularPullRequestContribution_pullRequest_repository;
}

export interface PullRequestContribution_popularPullRequestContribution {
  __typename: "CreatedPullRequestContribution";
  /**
   * The pull request that was opened.
   */
  pullRequest: PullRequestContribution_popularPullRequestContribution_pullRequest;
}

export interface PullRequestContribution_pullRequestContributionsByRepository_contributions {
  __typename: "CreatedPullRequestContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface PullRequestContribution_pullRequestContributionsByRepository_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface PullRequestContribution_pullRequestContributionsByRepository {
  __typename: "PullRequestContributionsByRepository";
  /**
   * The pull request contributions.
   */
  contributions: PullRequestContribution_pullRequestContributionsByRepository_contributions;
  /**
   * The repository in which the pull requests were opened.
   */
  repository: PullRequestContribution_pullRequestContributionsByRepository_repository;
}

export interface PullRequestContribution_pullRequestReviewContributionsByRepository_contributions {
  __typename: "CreatedPullRequestReviewContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface PullRequestContribution_pullRequestReviewContributionsByRepository {
  __typename: "PullRequestReviewContributionsByRepository";
  /**
   * The pull request review contributions.
   */
  contributions: PullRequestContribution_pullRequestReviewContributionsByRepository_contributions;
}

export interface PullRequestContribution {
  __typename: "ContributionsCollection";
  /**
   * The pull request the user opened on GitHub that received the most comments in the
   * specified time frame.
   */
  popularPullRequestContribution: PullRequestContribution_popularPullRequestContribution | null;
  /**
   * Pull request contributions made by the user, grouped by repository.
   */
  pullRequestContributionsByRepository: PullRequestContribution_pullRequestContributionsByRepository[];
  /**
   * Pull request review contributions made by the user, grouped by repository.
   */
  pullRequestReviewContributionsByRepository: PullRequestContribution_pullRequestReviewContributionsByRepository[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NewRepositoryCount
// ====================================================

export interface NewRepositoryCount_repositoryContributions {
  __typename: "CreatedRepositoryContributionConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface NewRepositoryCount {
  __typename: "ContributionsCollection";
  /**
   * A list of repositories owned by the user that the user created in this time range.
   */
  repositoryContributions: NewRepositoryCount_repositoryContributions;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FollowStatus
// ====================================================

export interface FollowStatus_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface FollowStatus_following {
  __typename: "FollowingConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface FollowStatus {
  __typename: "User";
  /**
   * A list of users the given user is followed by.
   */
  followers: FollowStatus_followers;
  /**
   * A list of users the given user is following.
   */
  following: FollowStatus_following;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: StarredRepository
// ====================================================

export interface StarredRepository_starredRepositories {
  __typename: "StarredRepositoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface StarredRepository {
  __typename: "User";
  /**
   * Repositories the user has starred.
   */
  starredRepositories: StarredRepository_starredRepositories;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
