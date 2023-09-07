import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ProductType } from '../../../shared/types/productType';
import { PaginationType } from '../../../shared/types/paginationType';

interface ProductState {
    products: ProductType[],
    searchProducts?: PaginationType<ProductType[]>,
}

const initialState: ProductState = {
    products: [],
    searchProducts: undefined,
};

export const productSlice = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setProductsActions: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },
        setSearchProductsActions: (
            state,
            action: PayloadAction<PaginationType<ProductType[]> | undefined>) => {
            state.searchProducts = action.payload;
        },
    },

});

export const { setProductsActions, setSearchProductsActions } = productSlice.actions;

export default productSlice.reducer;
