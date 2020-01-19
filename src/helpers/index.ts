import dayjs from "dayjs";
import {
  All_viewer_contributionsCollection_contributionCalendar_weeks,
  All_viewer_contributionsCollection_commitContributionsByRepository_contributions_nodes,
  All_viewer_contributionsCollection_issueContributionsByRepository,
  All_viewer_contributionsCollection_pullRequestContributionsByRepository,
  All_viewer_contributionsCollection_pullRequestReviewContributionsByRepository
} from "../types";

export const generateEnglishListing = (input: string[]) => {
  if (input.length === 1) {
    return `\`${input[0]}\``;
  } else if (input.length === 2) {
    return `\`${input[0]}\` and \`${input[1]}\``;
  } else {
    return `\`${input[0]}\`, \`${input[1]}\` and \`${input[2]}\``;
  }
};

interface NameWithLink {
  name: string;
  url: string;
}

export const generateEnglishListingLinks = (input: NameWithLink[]) => {
  if (input.length === 1) {
    return `[\`${input[0].name}\`](${input[0].url})`;
  } else if (input.length === 2) {
    return `[\`${input[0].name}\`](${input[0].url}) and [\`${input[1].name}\`](${input[1].url})`;
  } else {
    return `[\`${input[0].name}\`](${input[0].url}), [\`${input[1].name}\`](${input[1].url}) and [\`${input[2].name}\`](${input[2].url})`;
  }
};

export const getEnglishTimeDescription = (hour: number) => {
  return hour >= 6 && hour < 12
    ? "in the morning"
    : hour === 12
    ? "at noon"
    : hour <= 18
    ? "in the afternoon"
    : hour <= 22
    ? "in the evening"
    : "at midnight";
};

export const getMaxContributionDayAndCount = (
  weeks: All_viewer_contributionsCollection_contributionCalendar_weeks[]
) => {
  const w = weeks.map(w => w.contributionDays).flat(1);
  const ww = w.sort((a, b) => b.contributionCount - a.contributionCount);
  return [ww[0]?.date, ww[0]?.contributionCount];
};

export const getMaxCommitDayAndCountForRepository = (
  nodes:
    | (All_viewer_contributionsCollection_commitContributionsByRepository_contributions_nodes | null)[]
    | null
) => {
  if (!nodes) {
    return [undefined, undefined];
  }
  const n = nodes
    .filter(i => i !== null)
    .sort((a, b) => a!.commitCount - b!.commitCount);
  return [n[0]?.occurredAt as Date, n[0]?.commitCount];
};

export const getIssueCount = (
  repositories: All_viewer_contributionsCollection_issueContributionsByRepository[]
) => {
  const c = repositories.map(i => i.contributions.totalCount);
  return c.reduce((pre, cur) => pre + cur);
};

export const getPullRequestCount = (
  repositories: All_viewer_contributionsCollection_pullRequestContributionsByRepository[]
) => {
  const c = repositories.map(i => i.contributions.totalCount);
  return c.reduce((pre, cur) => pre + cur);
};

export const getPullRequestReviewCount = (
  repositories: All_viewer_contributionsCollection_pullRequestReviewContributionsByRepository[]
) => {
  const c = repositories.map(i => i.contributions.totalCount);
  return c.reduce((pre, cur) => pre + cur);
};

export const getPushEventMaxTime = (events: any[]) => {
  const eventTime = events.map(i => dayjs(i.created_at).hour()) as number[];
  const distribution = Array.from({ length: 24 }, (v, i) => i).map(
    i => eventTime.filter(h => h === i).length
  );
  return distribution.indexOf(Math.max(...distribution));
};
