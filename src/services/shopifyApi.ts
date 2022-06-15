import * as Types from 'services/graphql/generated/types-operations';

import { api } from 'services/utils/shopifyBaseApi';

export const AddToCartDocument = `
    mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      updatedAt
    }
  }
}
    `;
export const CreateCartDocument = `
    mutation createCart {
  cartCreate {
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

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation<Types.AddToCartMutation, Types.AddToCartMutationVariables>({
      query: (variables) => ({ document: AddToCartDocument, variables })
    }),
    createCart: build.mutation<Types.CreateCartMutation, Types.CreateCartMutationVariables | void>({
      query: (variables) => ({ document: CreateCartDocument, variables })
    }),
    getAllProducts: build.query<Types.GetAllProductsQuery, Types.GetAllProductsQueryVariables | void>({
      query: (variables) => ({ document: GetAllProductsDocument, variables })
    }),
    getProductByHandle: build.query<Types.GetProductByHandleQuery, Types.GetProductByHandleQueryVariables>({
      query: (variables) => ({ document: GetProductByHandleDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAddToCartMutation, useCreateCartMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery, useGetProductByHandleQuery, useLazyGetProductByHandleQuery } = injectedRtkApi;

