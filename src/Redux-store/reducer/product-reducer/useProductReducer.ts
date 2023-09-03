import { setProductsActions } from '.';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { ProductType } from '../../../shared/types/productType';

export const useProductReducer = () => {
    const dispatch = useDispatch();
    const { products } = useAppSelector((state) => state.productReducer);

    const setProducts = (currentProducts: ProductType[]) => {
        dispatch(setProductsActions(currentProducts));
    };

    return {
        products,
        setProducts,
    };
};
