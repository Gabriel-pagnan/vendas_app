import { View, TouchableOpacity, Text } from 'react-native';
import { useProductReducer } from '../../../Redux-store/reducer/product-reducer/useProductReducer';
import { useEffect } from 'react';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';
import { MenuURL } from '../../../shared/enums/menu-url.enum';
import { ProductNavigationProp } from '../../product/screens/Product';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const {request} = useRequest();
    const {products, setProducts} = useProductReducer();
    const {navigate} = useNavigation<ProductNavigationProp>();

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
            {products?.map((product) => (
                <TouchableOpacity key={product.id} onPress={() => handleProduct(product)}>
                    <Text>{product.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Home;
