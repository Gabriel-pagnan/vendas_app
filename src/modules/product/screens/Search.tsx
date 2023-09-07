import React, { useEffect, useState } from 'react';
import { theme } from '../../../shared/theme/theme';
import { useRequest } from '../../../shared/hooks/useRequest';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductType } from '../../../shared/types/productType';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { PaginationType } from '../../../shared/types/paginationType';
import InputSearch from '../../../shared/components/inputs/search/Search';
import { ContainerSearchProducts, Header, SearchProductScrollView } from '../styles/search.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ProductTumbnail from '../../../shared/components/productTumbnail/ProductTumbnail';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { StatusBar, NativeSyntheticEvent, TextInputChangeEventData, ScrollView, NativeScrollEvent } from 'react-native';
import { ActivityIndicator } from '../../../shared/components/buttons/button.styles';

export type SearchNavigationProp = NativeStackNavigationProp<Record<string, ISearchParams>>;

export interface ISearchParams {
    search?: string
}

const Search = () => {
    const { request, loading } = useRequest();
    const { searchProducts, setSearchProducts, insertSearcProducts } = useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, ISearchParams>>>();
    const [value, setValue] = useState<string>(params?.search || '');

    useEffect(() => {
        setValue(params?.search || '');
    }, [params]);

    useEffect(() => {
        setSearchProducts(undefined);
        request<PaginationType<ProductType[]>>({
            url: `${URL_PRODUCT_PAGE}?search=${value}&size=10&page=1`,
            method: MethodsEnum.GET,
            saveGlobal: setSearchProducts,
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

    return (
        <>
            <Header>
                <StatusBar backgroundColor={theme.colors.orangeTheme.orange600} />
                <InputSearch
                    value={value}
                    rightIcon
                    placeholder="Buscar product..."
                    onChange={handleChange} />
            </Header>
            <ContainerSearchProducts>
                {searchProducts && searchProducts.data && (
                    <ScrollView onScroll={handleScroll}>
                        <SearchProductScrollView>
                            {searchProducts.data.map((product) => (
                                <ProductTumbnail key={product.id} product={product} />
                            ))}
                        </SearchProductScrollView>
                    </ScrollView>
                )}
                {loading && <ActivityIndicator style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color={theme.colors.orangeTheme.orange600} />}
            </ContainerSearchProducts >
        </>
    );
};

export default Search;
