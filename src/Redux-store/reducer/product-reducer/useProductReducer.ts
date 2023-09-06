import { setProductsActions, setSearchProductsActions } from '.';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { ProductType } from '../../../shared/types/productType';
import { PaginationType } from '../../../shared/types/paginationType';

export const useProductReducer = () => {
    const dispatch = useDispatch();
    const { products, searchProducts } = useAppSelector((state) => state.productReducer);

    const setProducts = (currentProducts: ProductType[]) => {
        dispatch(setProductsActions(currentProducts));
    };
    const setSearchProducts = (currentProducts: PaginationType<ProductType[]>) => {
        dispatch(setSearchProductsActions(currentProducts));
    };

    return {
        products,
        setProducts,
        searchProducts,
        setSearchProducts,
    };
};
