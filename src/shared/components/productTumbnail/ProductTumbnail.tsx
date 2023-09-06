import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ProductType } from '../../types/productType';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { convertNumberToMoney } from '../../functions/money';
import { AddCart, ContainerTumbnail, ImageProduct, InfoProduct, NameProduct, PriceProduct } from './tumbnail.styles';
import { useNavigation } from '@react-navigation/native';
import { ProductNavigationProp } from '../../../modules/product/screens/Product';
import { MenuURL } from '../../enums/menu-url.enum';
import { useRequest } from '../../hooks/useRequest';
import { URL_CART } from '../../constants/urls';
import { MethodsEnum } from '../../enums/methods.enum';
import { CartRequest } from '../../types/cartRequest';

interface IProductTumbnail extends TouchableOpacityProps {
    product: ProductType,
    margin?: string,
}

const ProductTumbnail = ({ product, margin, ...props }: IProductTumbnail) => {
    const { request, loading } = useRequest();
    const { navigate } = useNavigation<ProductNavigationProp>();

    const insertProduct = () => {
        request<unknown, CartRequest>({
            url: URL_CART,
            method: MethodsEnum.POST,
            body: {
                productId: product.id,
                amount: 1,
            },
            message: 'Adicionado ao carrinho!',
        });
    };

    const handleGoToProduct = () => {
        navigate(MenuURL.PRODUCT, {
            product,
        });
    };

    return (
        <ContainerTumbnail onPress={handleGoToProduct} {...props} margin={margin}>
            <ImageProduct resizeMode="center" source={{ uri: product.image }} />
            <InfoProduct>
                <NameProduct>{product.name}</NameProduct>
                <PriceProduct>{convertNumberToMoney(product.price)}</PriceProduct>
            </InfoProduct>
            <AddCart onPress={insertProduct}>
                {loading ?
                    (<ActivityIndicator color="orangered" size="large" />) :
                    (<Icon name="cart-plus" color="orangered" size={24} />)
                }
            </AddCart>
        </ContainerTumbnail>
    );
};

export default ProductTumbnail;
