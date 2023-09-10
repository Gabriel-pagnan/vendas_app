import Home from '../modules/home';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../shared/theme/theme';
import Profile from '../modules/profile';
import Order from '../modules/order';
import { MenuURL } from '../shared/enums/menu-url.enum';
import Cart from '../modules/cart';

export const TabRoutes = () => {
    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderTopWidth: 0.5,
                    shadowColor: 'rgba( 31, 38, 135, 0.7 )',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarHideOnKeyboard: true,
            }}>

            <Screen name={MenuURL.HOME} component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="home" color={theme.colors.orangeTheme.orange600} size={30} />
                        ) : (
                            <Icon name="home-outline" color={theme.colors.grayTheme.gray100} size={30} />
                        )}
                    </View>
                ),
            }} />
            <Screen name={MenuURL.CART} component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="receipt" color={theme.colors.orangeTheme.orange600} size={30} />
                            ) : (
                                <Icon name="receipt-outline" color={theme.colors.grayTheme.gray100} size={30} />
                                )}
                    </View>
                ),
            }} />
            <Screen name={MenuURL.ORDER} component={Order} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="cart" color={theme.colors.orangeTheme.orange600} size={32} />
                        ) : (
                            <Icon name="cart-outline" color={theme.colors.grayTheme.gray100} size={32} />
                        )}
                    </View>
                ),
            }} />
            <Screen name={MenuURL.PROFILE} component={Profile} options={{
                headerShown: true,
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="person" color={theme.colors.orangeTheme.orange600} size={30} />
                        ) : (
                            <Icon name="person-outline" color={theme.colors.grayTheme.gray100} size={30} />
                        )}
                    </View>
                ),
            }} />
        </Navigator>
    );
};
