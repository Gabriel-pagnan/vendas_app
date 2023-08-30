import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login';
import Home from '../modules/home';
import { MenuURL } from '../shared/enums/menu-url.enum';
import Splash from '../modules/splash/screens/Splash';
import Register from '../modules/register';

const {Screen, Navigator} = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Screen name={MenuURL.SPLASH} component={Splash} />
                <Screen name={MenuURL.LOGIN} component={Login} />
                <Screen name={MenuURL.REGISTER} component={Register} />
                <Screen name={MenuURL.HOME} component={Home} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
