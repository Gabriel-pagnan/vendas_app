import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ProductType } from '../../../shared/types/productType';

interface ProductState {
    products: ProductType[]
}

const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setProductsActions: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },
    },

});

export const { setProductsActions } = productSlice.actions;

export default productSlice.reducer;
