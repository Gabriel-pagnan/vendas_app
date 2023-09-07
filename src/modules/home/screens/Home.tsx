import { View, StatusBar, FlatList, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { useEffect, useState } from 'react';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';
import ProductTumbnail from '../../../shared/components/productTumbnail/ProductTumbnail';
import { theme } from '../../../shared/theme/theme';
import { ContainerSearch, FlatListContainer, IconCart, Tumbnail } from './home.styles';
import InputSearch from '../../../shared/components/inputs/search/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { MenuURL } from '../../../shared/enums/menu-url.enum';
import { SearchNavigationProp } from '../../product/screens/Search';


const Home = () => {
    const { request } = useRequest();
    const [search, setSearch] = useState<string>('');
    const { products, setProducts } = useProductReducer();
    const { navigate } = useNavigation<SearchNavigationProp>();

    useEffect(() => {
        request<ProductType[]>({
            url: URL_PRODUCT,
            method: MethodsEnum.GET,
            saveGlobal: setProducts,
        });
    }, [search]);

    const handleSearch = () => {
        navigate(MenuURL.SEARCH_PRODUCT, {
            search,
        });
    };

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setSearch(e.nativeEvent.text);
    };

    return (
        <View>
            <StatusBar backgroundColor={theme.colors.redTheme.orangeRed} />

            <ContainerSearch>
                <InputSearch
                    onPress={handleSearch}
                    onChange={handleChange}
                    value={search}
                    placeholder="Buscar produto..."
                    rightIcon />

                <IconCart>
                    <Icon name="cart" size={34} color={'#ffff'} />
                </IconCart>
            </ContainerSearch>

            <Tumbnail>
                <FlatListContainer>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={products}
                        horizontal
                        renderItem={({ item }) =>
                            <ProductTumbnail
                                key={item.id}
                                product={item}
                                margin={'60px 0 0 20px'}
                            />
                        } />
                </FlatListContainer>
            </Tumbnail>
        </View>
    );
};

export default Home;
