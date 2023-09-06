import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuURL } from '../shared/enums/menu-url.enum';
import Splash from '../modules/splash/screens/Splash';
import { TabRoutes } from './TabRoutes';
import Register from '../modules/auth/register';
import Login from '../modules/auth/login';
import Product from '../modules/product/screens/Product';
import Search from '../modules/product/screens/Search';

const { Screen, Navigator } = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Navigator initialRouteName={MenuURL.SPLASH} screenOptions={{ headerShown: false }}>
                <Screen name={MenuURL.SPLASH} component={Splash} />
                <Screen name={MenuURL.LOGIN} component={Login} />
                <Screen name={MenuURL.REGISTER} component={Register} />
                <Screen name={MenuURL.TAB_ROUTES} component={TabRoutes} />
                <Screen name={MenuURL.SEARCH_PRODUCT} component={Search} />
                <Screen name={MenuURL.PRODUCT} options={{
                    title: '',
                    headerShown: true,
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: '#E67B0F',
                    },
                }} component={Product} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
