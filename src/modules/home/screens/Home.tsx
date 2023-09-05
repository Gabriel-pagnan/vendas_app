import { View, StatusBar, FlatList } from 'react-native';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { useEffect } from 'react';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';
import ProductTumbnail from '../../../shared/components/productTumbnail/ProductTumbnail';
import { theme } from '../../../shared/theme/theme';
import { FlatListContainer, IconCart, Tumbnail } from './home.styles';
import Search from '../../../shared/components/inputs/search/Search';
import Icon from 'react-native-vector-icons/Ionicons';


const Home = () => {
    const { request } = useRequest();
    const { products, setProducts } = useProductReducer();

    useEffect(() => {
        request<ProductType[]>({
            url: URL_PRODUCT,
            method: MethodsEnum.GET,
            saveGlobal: setProducts,
        });
    }, []);

    return (
        <View>
            <StatusBar backgroundColor={theme.colors.redTheme.orangeRed} />

            <Tumbnail>
                <Search placeholder="Buscar produto..." rightIcon margin="25px 70px 0 0" />
                <IconCart>
                    <Icon name="cart" size={34} color={'#ffff'} />
                </IconCart>
                <FlatListContainer>
                    <FlatList
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
