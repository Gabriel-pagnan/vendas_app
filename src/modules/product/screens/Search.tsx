import React, { useEffect, useState } from 'react';
import { theme } from '../../../shared/theme/theme';
import { useRequest } from '../../../shared/hooks/useRequest';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductType } from '../../../shared/types/productType';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { PaginationType } from '../../../shared/types/paginationType';
import { ContainerSearchProducts, Header } from '../styles/search.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InputSearch from '../../../shared/components/inputs/search/Search';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { Text, StatusBar, NativeSyntheticEvent, TextInputChangeEventData, ScrollView } from 'react-native';
import ProductTumbnail from '../../../shared/components/productTumbnail/ProductTumbnail';

export type SearchNavigationProp = NativeStackNavigationProp<Record<string, ISearchParams>>;

export interface ISearchParams {
    search?: string
}

const Search = () => {
    const { request } = useRequest();
    const { searchProducts, setSearchProducts } = useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, ISearchParams>>>();
    const [value, setValue] = useState<string>(params?.search || '');

    useEffect(() => {
        setValue(params?.search || '');
    }, [params]);

    useEffect(() => {
        if (value) {
            request<PaginationType<ProductType[]>>({
                url: `${URL_PRODUCT_PAGE}?search=${value}&size=&page=`,
                method: MethodsEnum.GET,
                saveGlobal: setSearchProducts,
            });
        }
    }, [value]);

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(e.nativeEvent.text);
    };

    console.log(searchProducts);
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
                    <ScrollView>
                        {searchProducts.data.map((product) => (
                            <ProductTumbnail key={product.id} product={product} />
                        ))}
                    </ScrollView>
                )}
                <Text>teste</Text>
            </ContainerSearchProducts >
        </>
    );
};

export default Search;
