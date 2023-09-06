import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';

export type SearchNavigationProp = NativeStackNavigationProp<Record<string, ISearchParams>>;

export interface ISearchParams {
    search?: string
}

const Search = () => {
    const {request} = useRequest();
    const { searchProducts, setSearchProducts } = useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, ISearchParams>>>();
    const {search} = params;
    useEffect(() => {
        request<PaginationType<ProductType[]>>({
            url: `${URL_PRODUCT_PAGE}?search=${search}&size=1&page=1`,
            method: MethodsEnum.GET,
            saveGlobal: setSearchProducts,
        });
    }, [search]);
    return (
        <View>
            {searchProducts && <Text>product</Text>}
            <Text>teste</Text>
        </View>
    );
};

export default Search;
