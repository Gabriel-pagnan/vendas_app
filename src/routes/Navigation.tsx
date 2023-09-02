import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login';
import { MenuURL } from '../shared/enums/menu-url.enum';
import Splash from '../modules/splash/screens/Splash';
import Register from '../modules/register';
import { TabRoutes } from './TabRoutes';

const {Screen, Navigator} = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <Screen name={MenuURL.SPLASH} component={Splash} />
                <Screen name={MenuURL.LOGIN} component={Login} />
                <Screen name={MenuURL.REGISTER} component={Register} />
                <Screen name={MenuURL.TAB_ROUTES} component={TabRoutes} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
