// This is a template API used by graqphql-codegen to generate an RTK api by running `npm run generate`.
// The output directory can be found in codegen.yml

import { createApi } from '@reduxjs/toolkit/query/react';
import { GraphQLClient } from 'graphql-request';
import graphqlRequestBaseQuery from './graphqlRequestBaseQuery';

export const client = new GraphQLClient(
  import.meta.env.VITE_STOREFRONT_API_GRAPHQL_ENDPOINT,
  {
    headers: {
      Accept: 'application/json',
      'x-shopify-storefront-access-token': import.meta.env.VITE_STOREFRONT_API_ACCESS_TOKEN,
    },
  }
);

export const api = createApi({
  reducerPath: 'shopifyApi',
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});
