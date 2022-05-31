import * as Types from 'graphql/generated/types-operations';

import { api } from 'services/utils/shopifyBaseApi';

export const GetStoreNameDocument = `
    query getStoreName {
  shop {
    name
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStoreName: build.query<Types.GetStoreNameQuery, Types.GetStoreNameQueryVariables | void>({
      query: (variables) => ({ document: GetStoreNameDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetStoreNameQuery, useLazyGetStoreNameQuery } = injectedRtkApi;

