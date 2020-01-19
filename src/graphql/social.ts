import gql from "graphql-tag";

export const GET_FOLLOW_STATUS = gql`
  fragment FollowStatus on User {
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
`;

export const GET_STARRED_REPOSITORIES = gql`
  fragment StarredRepository on User {
    starredRepositories {
      totalCount
    }
  }
`;
