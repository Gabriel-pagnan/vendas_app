import { useState } from 'react';
import { AuthLoginType } from '../types/authLogin';
import ConnectionAPI, { MethodType, connectionAPIPost } from '../functions/connection/connectionAPI';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';
import { ReturnLoginType } from '../types/returnLogin';
import { useUserReducer } from '../../Redux-store/reducer/user-reducer/useUserReducer';
import { useGlobalReducer } from '../../Redux-store/reducer/global-reducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuURL } from '../enums/menu-url.enum';
import { setAthorizationToken } from '../functions/connection/auth';
import { URL_AUTH } from '../constants/urls';

interface IRequestProps <T, B = unknown>{
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: B,
    message?: string
}

export const useRequest = () => {
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoaging] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const {reset} = useNavigation<NavigationProp<ParamListBase>>();

    const request = async <T, B = unknown>({url, method, saveGlobal, body, message}: IRequestProps<T, B>): Promise<T | undefined> => {
        setLoaging(true);
        const returnObject: T | undefined = await ConnectionAPI.connect<T, B>(url, method, body)
            .then((result) => {
                if (saveGlobal) {saveGlobal(result);}
                if (message) {
                    setModal({
                        visible: true,
                        title: 'Sucesso!',
                        titleButton: 'ok',
                        text: message,
                    });
                }
                return result;
            })
            .catch((error: Error) => {
                setModal({
                    visible: true,
                    title: 'Erro',
                    titleButton: 'ok',
                    text: error.message,
                });
                return undefined;
            });
        setLoaging(false);

        return returnObject;
    };

    const authRequest = async (body: AuthLoginType) => {
        setLoaging(true);
        await connectionAPIPost<ReturnLoginType>(URL_AUTH, body)
            .then((result) => {
                setAthorizationToken(result.access_token);
                setUser(result.user);
                reset({
                    index: 0,
                    routes: [{name: MenuURL.TAB_ROUTES}],
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
        request,
        authRequest,
        errorMessage,
        setErrorMessage,
    };
};
