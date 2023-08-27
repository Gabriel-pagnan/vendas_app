import { useState } from 'react';
import { AuthLoginType } from '../types/authLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';
import { ReturnLoginType } from '../types/returnLogin';
import { UserType } from '../types/userType';

export const useRequest = () => {
    const [loading, setLoaging] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [user, setUser] = useState<UserType>();

    const authRequest = async (body: AuthLoginType) => {
        setLoaging(true);
        await connectionAPIPost<ReturnLoginType>('http://192.168.100.14:3001/auth', body)
            .then((result) => {
                setUser(result.user);
            })
            .catch(() => {
                setErrorMessage(ERROR_INVALID_PASSWORD);
            });
        setLoaging(false);
    };

    return {
        user,
        loading,
        authRequest,
        errorMessage,
        setErrorMessage,
    };
};
