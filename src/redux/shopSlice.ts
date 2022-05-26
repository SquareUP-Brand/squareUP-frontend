import { createAsyncThunk, createSlice, Reducer } from '@reduxjs/toolkit';
import Client, { Image, LineItem, Product, ProductVariant } from 'shopify-buy';

// todo remove export when done testing
export const client = Client.buildClient({
  domain: 'squareup-brand.myshopify.com',
  storefrontAccessToken: import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN,
});

export const fetchAllProducts = createAsyncThunk(
  'shop/fetchAllProducts',
  async () => {
    const products = await client.product.fetchAll();

    return products.map((product: Product) => ({
      id: product.id,
      variantId: product.variants[0].id,
      title: product.title,
      description: product.description,
      price: product.variants[0].price, // FIXME if we are using variants instead of products
      handle: product.handle,
      images: product.images.map(imageArray => ({
        id: imageArray.id,
        position: imageArray.position,
        src: imageArray.src,
      })),
    }));
  }
);

export const fetchProduct = createAsyncThunk(
  'shop/product',
  // TODO use patch-package to fix the thinger
  // @ts-ignore
  async (productId: Product['id']) => client.product.fetch(productId)
);

export interface StateProduct {
  id: Product['id'];
  variantId: ProductVariant['id'];
  title: Product['title'];
  description: Product['description'];
  price: ProductVariant['price'];
  handle: Product['handle'];
  images: { id: Image['id']; position: Image['position']; src: Image['src'] }[];
}

interface ShopState {
  isCartOpen: boolean;
  checkout: { lineItems: LineItem[] };
  products: StateProduct[];
  cartCount: number;
}

const initialState: ShopState = {
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  cartCount: 0,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    openCart: state => {
      state.isCartOpen = true;
    },
    closeCart: state => {
      state.isCartOpen = false;
    },
    addToCart: (state, action) => {
      // TODO add it to the checkout
      state.cartCount += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { openCart, closeCart, addToCart } = shopSlice.actions;

export default shopSlice.reducer as Reducer<typeof initialState>;
