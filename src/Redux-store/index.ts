import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducer/user-reducer';
import globalReducer from './reducer/global-reducer';
import productReducer from './reducer/product-reducer';
import cartReducer from './reducer/cart-reducer';

export const store = configureStore({
    reducer: {
        cartReducer,
        userReducer,
        globalReducer,
        productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
