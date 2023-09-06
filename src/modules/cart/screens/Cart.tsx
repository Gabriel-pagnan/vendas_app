import { Text } from 'react-native';
import React, { useEffect } from 'react';
import { useCartReducer } from '../../../Redux-store/reducer/cart-reducer/useCartReducer';
import { useRequest } from '../../../shared/hooks/useRequest';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { URL_CART } from '../../../shared/constants/urls';
import { CartType } from '../../../shared/types/cartType';
import { CartEmpty, ContainerCart } from './cart.styles';

const Cart = () => {
    const { cart, setCart } = useCartReducer();
    const { request } = useRequest();

    useEffect(() => {
        request<CartType>({
            url: URL_CART,
            method: MethodsEnum.GET,
            saveGlobal: setCart,
        });
    }, []);

    return (
        <ContainerCart>
            {cart?.cartProduct ?
                <Text>
                    {cart?.id}
                </Text> :

                <CartEmpty resizeMode="contain" source={require('../../../assets/images/cart-empty.png')} />
            }
        </ContainerCart>
    );
};

export default Cart;
