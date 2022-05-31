import { createAsyncThunk, createSlice, Reducer } from '@reduxjs/toolkit';

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
  products: StateProduct[];
}

const initialState: ShopState = {
  products: [],
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { openCart, closeCart, addToCart } = shopSlice.actions;

export default shopSlice.reducer as Reducer<typeof initialState>;
