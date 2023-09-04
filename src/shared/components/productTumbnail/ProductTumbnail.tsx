import { Text, TouchableOpacityProps, View } from 'react-native';
import { ProductType } from '../../types/productType';
import { ContainerTumbnail, ImageProduct } from './tumbnail.styles';

interface IProductTumbnail extends TouchableOpacityProps {
    product: ProductType,
    margin?: string
}

const ProductTumbnail = ({ product, margin, ...props }: IProductTumbnail) => {
    return (
        <ContainerTumbnail {...props} margin={margin}>
            <ImageProduct resizeMode="center" source={{ uri: product.image }} />
            <View>
                <Text>{product.name}</Text>
                <Text>{product.price}</Text>
            </View>
        </ContainerTumbnail>
    );
};

export default ProductTumbnail;
