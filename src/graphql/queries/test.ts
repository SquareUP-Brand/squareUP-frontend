import { gql } from 'graphql-request';

export default gql`
  query getStoreName {
    shop {
      name
    }
  }
`;
