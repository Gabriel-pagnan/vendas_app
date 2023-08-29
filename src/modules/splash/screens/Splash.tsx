import { useEffect } from 'react';
import { ContainerSplash, ImgSplash, LoadingSplash } from './splash.styles';
import { StatusBar } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useUserReducer } from '../../../Redux-store/reducer/user-reducer/useUserReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuURL } from '../../../shared/enums/menu-url.enum';
import { UserType } from '../../../shared/types/userType';
import { getAthorizationToken } from '../../../shared/functions/connection/auth';

const TIME_SLEEP = 5000;

const Splash = () => {
    const { request } = useRequest();
    const { setUser } = useUserReducer();
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();

    useEffect(() => {
        const findUser = async (): Promise<undefined | UserType> => {
            let returnUser;
            const token = await getAthorizationToken();
            if (token) {
                returnUser = await request<UserType>({
                    url: URL_USER,
                    method: MethodsEnum.GET,
                    saveGlobal: setUser,
                });
            }
            return returnUser;
        };

        const verifyLogin = async () => {
            const [returnUser] = await Promise.all([
                findUser(),
                new Promise<void>((r) => setTimeout(r, TIME_SLEEP)),
            ]);

            if (returnUser) {
                reset({
                    index: 0,
                    routes: [{ name: MenuURL.HOME }],
                });
            } else {
                reset({
                    index: 0,
                    routes: [{ name: MenuURL.LOGIN }],
                });
            }
        };

        verifyLogin();
    }, []);


    return (
        <ContainerSplash>
            <StatusBar backgroundColor="transparent" hidden />
            <ImgSplash resizeMode="contain" source={require('../../../assets/images/splash.png')} />
            <LoadingSplash size={'large'} color="#fff" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}/>
        </ContainerSplash>
    );
};

export default Splash;

