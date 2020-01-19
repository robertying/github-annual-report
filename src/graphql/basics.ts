import gql from "graphql-tag";

export const GET_BASIC_INFO = gql`
  fragment BasicInfo on User {
    login
    avatarUrl
    name
  }
`;
