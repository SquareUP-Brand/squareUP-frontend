import { initializeCart } from 'redux/cartSlice';
import { fetchAllProducts } from 'redux/shopSlice';
import store from 'redux/store';

export default () => {
    store.dispatch(fetchAllProducts());
    store.dispatch(initializeCart());
}
