import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login';
import Home from '../modules/home';
import { MenuURL } from '../shared/enums/menu-url.enum';

const {Screen, Navigator} = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName={MenuURL.LOGIN} screenOptions={{headerShown: false}}>
                <Screen name={MenuURL.LOGIN} component={Login} />
                <Screen name={MenuURL.HOME} component={Home} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
