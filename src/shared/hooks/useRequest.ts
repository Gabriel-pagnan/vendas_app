import { useState } from 'react';
import { AuthLoginType } from '../types/authLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';
import { ReturnLoginType } from '../types/returnLogin';
import { useUserReducer } from '../../Redux-store/reducer/user-reducer/useUserReducer';
import { useGlobalReducer } from '../../Redux-store/reducer/global-reducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuURL } from '../enums/menu-url.enum';
import { setAthorizationToken } from '../functions/connection/auth';
import { URL_AUTH } from '../constants/urls';

export const useRequest = () => {
    const {reset} = useNavigation<NavigationProp<ParamListBase>>();
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoaging] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: AuthLoginType) => {
        setLoaging(true);
        await connectionAPIPost<ReturnLoginType>(URL_AUTH, body)
            .then((result) => {
                setAthorizationToken(result.accessToken);
                setUser(result.user);
                reset({
                    index: 0,
                    routes: [{name: MenuURL.HOME}],
                });
            })
            .catch(() => {
                setModal({
                    visible: true,
                    title: 'Erro',
                    titleButton: 'Tentar novamente',
                    text: ERROR_INVALID_PASSWORD,
                });
                return undefined;
            });
        setLoaging(false);
    };

    return {
        loading,
        authRequest,
        errorMessage,
        setErrorMessage,
    };
};
