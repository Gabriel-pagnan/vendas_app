import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductType } from '../../../shared/types/productType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../../../shared/theme/theme';

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, IProductParams>>;

export interface IProductParams {
    product: ProductType
}

const Product = () => {
    const {params} = useRoute<RouteProp<Record<string, IProductParams>>>();

    return (
        <View>
            <StatusBar backgroundColor={theme.colors.orangeTheme.orange600} />
            <Text>{params.product.name}</Text>
        </View>
    );
};

export default Product;
