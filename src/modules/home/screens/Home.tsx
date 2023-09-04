import { View, StatusBar, FlatList } from 'react-native';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { useEffect } from 'react';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';
import { MenuURL } from '../../../shared/enums/menu-url.enum';
import { ProductNavigationProp } from '../../product/screens/Product';
import { useNavigation } from '@react-navigation/native';
import ProductTumbnail from '../../../shared/components/productTumbnail/ProductTumbnail';
import { theme } from '../../../shared/theme/theme';
import { FlatListContainer, Tumbnail } from './home.styles';


const Home = () => {
    const { request } = useRequest();
    const { products, setProducts } = useProductReducer();
    const { navigate } = useNavigation<ProductNavigationProp>();

    useEffect(() => {
        request<ProductType[]>({
            url: URL_PRODUCT,
            method: MethodsEnum.GET,
            saveGlobal: setProducts,
        });
    }, []);

    const handleProduct = (product: ProductType) => {
        navigate(MenuURL.PRODUCT, {
            product,
        });
    };

    return (
        <View>
            <StatusBar backgroundColor={theme.colors.orangeTheme.orange600} />

            <Tumbnail>
                <FlatListContainer>
                    <FlatList
                        data={products}
                        horizontal
                        renderItem={({ item }) =>
                            <ProductTumbnail
                                key={item.id}
                                product={item}
                                margin={'60px 0 0 20px'}
                                onPress={() => handleProduct}
                            />
                        } />
                </FlatListContainer>
            </Tumbnail>
        </View>
    );
};

export default Home;
