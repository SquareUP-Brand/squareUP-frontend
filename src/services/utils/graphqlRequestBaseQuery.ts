import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import {
  ClientError,
  GraphQLClient,
  RequestDocument,
  Variables,
} from 'graphql-request';

export default ({ client }: { client: GraphQLClient }):BaseQueryFn =>
  async ({
    document,
    variables,
  }: {
    document: RequestDocument;
    variables: Variables;
  }) => {
    try {
      const result = await client.request(document, variables);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        const { name, message, stack, request, response } = error;
        return { error: { name, message, stack }, meta: { request, response } };
      }
      // TODO might need to be: return { error: { status: 500, data: error } } (https://redux-toolkit.js.org/rtk-query/usage/customizing-queries)
      throw error;
    }
  };
