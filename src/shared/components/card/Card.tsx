import { TouchableOpacityProps } from 'react-native';
import { ProductType } from '../../types/productType';
import { ContainerCard, InfoCard, ProductName } from './card.styles';
import { ImageProduct, PriceProduct } from '../productTumbnail/tumbnail.styles';
import { convertNumberToMoney } from '../../functions/money';
import { MenuURL } from '../../enums/menu-url.enum';
import { useNavigation } from '@react-navigation/native';
import { ProductNavigationProp } from '../../../modules/product/screens/Product';

interface ICardProps extends TouchableOpacityProps {
    product: ProductType,
}

const Card = ({ product, ...props }: ICardProps) => {
    const { navigate } = useNavigation<ProductNavigationProp>();
    const handleGoToProduct = () => {
        navigate(MenuURL.PRODUCT, {
            product,
        });
    };

    return (
        <ContainerCard onPress={handleGoToProduct} {...props}>
            <ImageProduct resizeMode="center" source={{ uri: product.image }} />
            <InfoCard>
                <ProductName>{product.name}</ProductName>
                <PriceProduct>{convertNumberToMoney(product.price)}</PriceProduct>
            </InfoCard>
        </ContainerCard>
    );
};

export default Card;
