import Home from '../modules/home';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../shared/theme/theme';

export const TabRoutes = () => {
    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    alignItems: 'center',
                    height: 60,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderTopWidth: 0.5,
                    shadowColor: 'rgba( 31, 38, 135, 0.7 )',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
            }}>

            <Screen name="Home" component={Home} options={{
                tabBarShowLabel: false,
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
            <Screen name="Perfil" component={Home} options={{
                tabBarShowLabel: false,
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
            <Screen name="Buscar" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="notifications" color={theme.colors.orangeTheme.orange600} size={30} />
                        ) : (
                            <Icon name="notifications-outline" color={theme.colors.grayTheme.gray100} size={30} />
                        )}
                    </View>
                ),
            }} />
            <Screen name="Configuração" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="settings" color={theme.colors.orangeTheme.orange600} size={30} />
                        ) : (
                            <Icon name="settings-outline" color={theme.colors.grayTheme.gray100} size={30} />
                        )}
                    </View>
                ),
            }} />
        </Navigator>
    );
};
