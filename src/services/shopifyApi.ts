import * as Types from 'services/graphql/generated/types-operations';

import { api } from 'services/utils/shopifyBaseApi';

export const CreateCartDocument = `
    mutation createCart($quantity: Int!, $merchandiseId: ID!) {
  cartCreate(
    input: {lines: [{quantity: $quantity, merchandiseId: $merchandiseId}]}
  ) {
    cart {
      id
      createdAt
    }
  }
}
    `;
export const GetAllProductsDocument = `
    query getAllProducts {
  products(first: 250) {
    nodes {
      id
      description
      handle
      title
      images(first: 10) {
        nodes {
          url
        }
      }
      variants(first: 1) {
        nodes {
          id
          priceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
    `;
export const GetProductByHandleDocument = `
    query getProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    description
    title
    variants(first: 1) {
      nodes {
        id
        priceV2 {
          amount
          currencyCode
        }
      }
    }
    images(first: 10) {
      nodes {
        url
      }
    }
  }
}
    `;
export const IsCartCreatedDocument = `
    query isCartCreated($id: ID!) {
  cart(id: $id) {
    id
    createdAt
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createCart: build.mutation<Types.CreateCartMutation, Types.CreateCartMutationVariables>({
      query: (variables) => ({ document: CreateCartDocument, variables })
    }),
    getAllProducts: build.query<Types.GetAllProductsQuery, Types.GetAllProductsQueryVariables | void>({
      query: (variables) => ({ document: GetAllProductsDocument, variables })
    }),
    getProductByHandle: build.query<Types.GetProductByHandleQuery, Types.GetProductByHandleQueryVariables>({
      query: (variables) => ({ document: GetProductByHandleDocument, variables })
    }),
    isCartCreated: build.query<Types.IsCartCreatedQuery, Types.IsCartCreatedQueryVariables>({
      query: (variables) => ({ document: IsCartCreatedDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useCreateCartMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery, useGetProductByHandleQuery, useLazyGetProductByHandleQuery, useIsCartCreatedQuery, useLazyIsCartCreatedQuery } = injectedRtkApi;

