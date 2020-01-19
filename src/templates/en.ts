import pluralize from "pluralize";
import { generateEnglishListing } from "../helpers";
import { Info } from "../data";

export const generateReport = (year: number, i: Info) => `

# ${i.name ?? i.login}'s GitHub Annual Report

In year _${year}_, you've created **${i.newRepositoryCount}** ${pluralize(
  "new repository",
  i.newRepositoryCount
)} and made **${i.contributionCount}** ${pluralize(
  "contribution",
  i.contributionCount
)} in total.

**${i.maxContributionDay.format(
  "MMM D"
)}** is a special day on which you made **${
  i.maxContributionPerDay
}** ${pluralize(
  "contribution",
  i.maxContributionPerDay
)}, marking itself as the most fruitful day of _${year}_.

## Commits

Your commits mostly went to ${generateEnglishListing(
  i.topCommitRepositories
)}. On **${i.maxCommitDay?.format("MMM D")}**, you made **${
  i.maxCommitPerDayForRepository
}** ${pluralize("commit", i.maxCommitPerDayForRepository)} to \`${
  i.topCommitRepositories[0]
}\` and you have accumulatively committed **${
  i.commitCountForTopRepository
}** ${pluralize("time", i.commitCountForTopRepository)} to this repository.

## Issues

The most popular issue you have created was \`${i.popularIssue}\` in \`${
  i.popularIssueRepository
}\`, which has **${i.popularIssueParticipantCount}** ${pluralize(
  "participant",
  i.popularIssueParticipantCount
)} and **${i.popularIssueReplyCount}** ${pluralize(
  "reply",
  i.popularIssueReplyCount
)}.

Throughout _${year}_, you have opened **${i.issueCount}** ${pluralize(
  "issue",
  i.issueCount
)} in ${generateEnglishListing(i.topIssueRepositories)}, etc.

## Pull Requests

You worked very hard on the pull request \`${i.popularPullRequest}\` in \`${
  i.popularPullRequestRepository
}\`. It contains **${i.popularPullRequestCommitCount}** ${pluralize(
  "commit",
  i.popularPullRequestCommitCount
)} and received **${i.popularPullRequestReviewCount}** ${pluralize(
  "review",
  i.popularPullRequestReviewCount
)}.

\`${
  i.topPullRequestRepositories[0]
}\` and other repositories have benefited from your **${
  i.pullRequestCount
}** ${pluralize(
  "pull request",
  i.pullRequestCount
)}. You also made others' work better by giving **${
  i.pullRequestReviewCount
}** ${pluralize("pull request review", i.pullRequestReviewCount)}.

## Community

At the end of _${year}_, you are following **${i.followingCount}** ${pluralize(
  "person",
  i.followingCount
)} and **${i.followedCount}** ${pluralize(
  "person",
  i.followedCount
)} are following you for what you share on GitHub.

You have starred **${i.starredRepositoryCount}** ${pluralize(
  "repository",
  i.starredRepositoryCount
)} since you joined GitHub.

## ${year + 1}

_${year + 1}_ has already come. **Keep up!**

`;
