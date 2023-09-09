import { RouteProp, useRoute } from '@react-navigation/native';
import { useDebounce } from '../../../shared/hooks/useDebouce';
import { useRequest } from '../../../shared/hooks/useRequest';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { useEffect, useState } from 'react';
import { ProductType } from '../../../shared/types/productType';
import { PaginationType } from '../../../shared/types/paginationType';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { NativeScrollEvent, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export type SearchNavigationProp = NativeStackNavigationProp<Record<string, ISearchParams>>;

export interface ISearchParams {
    search?: string
}

export const useSearchProducts = () => {
    const { request, loading } = useRequest();
    const { debounce } = useDebounce(500);
    const { params } = useRoute<RouteProp<Record<string, ISearchParams>>>();
    const [value, setValue] = useState<string>(params?.search || '');
    const { searchProducts, setSearchProducts, insertSearcProducts } = useProductReducer();

    useEffect(() => {
        setValue(params?.search || '');
    }, [params]);

    useEffect(() => {
        setSearchProducts(undefined);
        debounce(() => {
            request<PaginationType<ProductType[]>>({
                url: `${URL_PRODUCT_PAGE}?search=${value}&size=10&page=1`,
                method: MethodsEnum.GET,
                saveGlobal: setSearchProducts,
            });
        });
    }, [value]);

    const findPageProducts = () => {
        if (searchProducts && searchProducts.meta.currentPage < searchProducts.meta.totalPages) {
            request<PaginationType<ProductType[]>>({
                url: `${URL_PRODUCT_PAGE}?search=${value}&size=10&page=${searchProducts.meta.currentPage + 1}`,
                method: MethodsEnum.GET,
                saveGlobal: insertSearcProducts,
            });
        }
    };

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(e.nativeEvent.text);
    };

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
        const endScroll = contentOffset.y >= contentSize.height - layoutMeasurement.height;

        if (endScroll && !loading) {
            findPageProducts();
        }
    };


    return {
        value,
        loading,
        handleChange,
        handleScroll,
        searchProducts,
    };
};
