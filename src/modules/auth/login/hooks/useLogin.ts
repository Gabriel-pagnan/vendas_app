import { useState } from 'react';
import { useRequest } from '../../../../shared/hooks/useRequest';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {authRequest, loading, errorMessage, setErrorMessage} = useRequest();

    const handleLogin = async () => {
        authRequest({email, password});
    };

    const handleChangeMail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(e.nativeEvent.text);
    };
    const handleChangePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setPassword(e.nativeEvent.text);
    };

    return {
        email,
        loading,
        password,
        handleLogin,
        errorMessage,
        handleChangeMail,
        handleChangePass,
    };
};
