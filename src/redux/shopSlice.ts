import { createAsyncThunk, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import Client, { Product, LineItem } from 'shopify-buy';

// todo remove export when done testing
export const client = Client.buildClient({
  domain: 'squareup-brand.myshopify.com',
  storefrontAccessToken: import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN,
});

export const fetchAllProducts = createAsyncThunk('shop/fetchAllProducts', async () => {
  const products = await client.product.fetchAll();

  return products.map(product => ({
    id: product.id,
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
});

export const fetchProduct = createAsyncThunk('shop/product', async productId =>
  client.product.fetch(productId)
);

interface ShopState {
  isCartOpen: boolean;
  checkout: { lineItems: LineItem[] };
  products: Product[];
}

const initialState: ShopState = {
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
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
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { openCart, closeCart, addProduct } = shopSlice.actions;

export default shopSlice.reducer as Reducer<typeof initialState>;
