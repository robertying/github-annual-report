import dayjs, { Dayjs } from "dayjs";
import { All_viewer } from "../types";
import {
  getMaxContributionDayAndCount,
  getMaxCommitDayAndCountForRepository,
  getIssueCount,
  getPullRequestCount,
  getPullRequestReviewCount
} from "../helpers";

export interface Info {
  avatarUrl: string;
  newRepositoryCount: number;
  contributionCount: number;
  maxContributionDay: Dayjs;
  maxContributionPerDay: number;
  topCommitRepositories: string[];
  maxCommitDay?: Dayjs;
  maxCommitPerDayForRepository?: number;
  commitCountForTopRepository: number;
  popularIssue?: string;
  popularIssueRepository?: string;
  popularIssueParticipantCount?: number;
  popularIssueReplyCount?: number;
  issueCount: number;
  topIssueRepositories: string[];
  popularPullRequest?: string;
  popularPullRequestRepository?: string;
  popularPullRequestCommitCount?: number;
  popularPullRequestReviewCount?: number;
  topPullRequestRepositories: string[];
  pullRequestCount: number;
  pullRequestReviewCount: number;
  followingCount: number;
  followedCount: number;
  starredRepositoryCount: number;
}

export const getInfo = async (root: All_viewer) => {
  const contributionsCollection = root.contributionsCollection;
  const maxContributionDayAndCount = getMaxContributionDayAndCount(
    contributionsCollection.contributionCalendar.weeks
  );
  const maxCommitDayAndCountForRepository = getMaxCommitDayAndCountForRepository(
    contributionsCollection.commitContributionsByRepository[0]?.contributions
      .nodes
  );

  const i: Info = {
    avatarUrl: root.avatarUrl,
    newRepositoryCount:
      contributionsCollection.repositoryContributions.totalCount,
    contributionCount:
      contributionsCollection.contributionCalendar.totalContributions,
    maxContributionDay: dayjs(maxContributionDayAndCount[0]),
    maxContributionPerDay: maxContributionDayAndCount[1],
    topCommitRepositories: contributionsCollection.commitContributionsByRepository.map(
      i => i.repository.nameWithOwner
    ),
    maxCommitDay: dayjs(maxCommitDayAndCountForRepository[0]),
    maxCommitPerDayForRepository: maxCommitDayAndCountForRepository[1] as
      | number
      | undefined,
    commitCountForTopRepository:
      contributionsCollection.commitContributionsByRepository[0]?.contributions
        .totalCount,
    popularIssue: contributionsCollection.popularIssueContribution?.issue.title.replace(
      /`/g,
      ""
    ),
    popularIssueRepository:
      contributionsCollection.popularIssueContribution?.issue.repository
        .nameWithOwner,
    popularIssueParticipantCount:
      contributionsCollection.popularIssueContribution?.issue.participants
        .totalCount,
    popularIssueReplyCount:
      contributionsCollection.popularIssueContribution?.issue.timelineItems
        .totalCount,
    issueCount: getIssueCount(
      contributionsCollection.issueContributionsByRepository
    ),
    topIssueRepositories: contributionsCollection.issueContributionsByRepository.map(
      i => i.repository.nameWithOwner
    ),
    popularPullRequest: contributionsCollection.popularPullRequestContribution?.pullRequest.title.replace(
      /`/g,
      ""
    ),
    popularPullRequestRepository:
      contributionsCollection.popularPullRequestContribution?.pullRequest
        .repository.nameWithOwner,
    popularPullRequestCommitCount:
      contributionsCollection.popularPullRequestContribution?.pullRequest
        .commits.totalCount,
    popularPullRequestReviewCount:
      contributionsCollection.popularPullRequestContribution?.pullRequest
        .reviews?.totalCount,
    topPullRequestRepositories: contributionsCollection.pullRequestContributionsByRepository.map(
      i => i.repository.nameWithOwner
    ),
    pullRequestCount: getPullRequestCount(
      contributionsCollection.pullRequestContributionsByRepository
    ),
    pullRequestReviewCount: getPullRequestReviewCount(
      contributionsCollection.pullRequestReviewContributionsByRepository
    ),
    followingCount: root.following.totalCount,
    followedCount: root.followers.totalCount,
    starredRepositoryCount: root.starredRepositories.totalCount
  };

  return i;
};
