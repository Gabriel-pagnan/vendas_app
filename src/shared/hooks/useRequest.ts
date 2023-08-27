import { useState } from 'react';
import { AuthLoginType } from '../types/authLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';
import { ReturnLoginType } from '../types/returnLogin';
import { useUserReducer } from '../../Redux-store/reducer/user-reducer/useUserReducer';
import { useGlobalReducer } from '../../Redux-store/reducer/global-reducer/useGlobalReducer';

export const useRequest = () => {
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoaging] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: AuthLoginType) => {
        setLoaging(true);
        await connectionAPIPost<ReturnLoginType>('http://192.168.100.14:3001/auth', body)
            .then((result) => {
                setUser(result.user);
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
