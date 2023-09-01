import { useEffect, useState } from 'react';
import { CreateUserType } from '../../../shared/types/createUserType';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { validateCPF } from '../../../shared/functions/cpf';
import { validatePhone } from '../../../shared/functions/phone';
import { validateEmail } from '../../../shared/functions/email';

export const DEFAULT_CREATE_USER = {
    confirmPassword: '',
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
};

export const useRegister = () => {
    const { request, loading } = useRequest();
    const [disable, setDisable] = useState<boolean>(true);
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const [createUser, setCreateUser] = useState<CreateUserType>(DEFAULT_CREATE_USER);

    useEffect(() => {
        if (
            createUser.name !== '' &&
            createUser.password !== '' &&
            validateCPF(createUser.cpf) &&
            validateEmail(createUser.email) &&
            validatePhone(createUser.phone) &&
            createUser.password === createUser.confirmPassword
        ) {
            setDisable(false);
        } else { setDisable(true); }
    }, [createUser]);

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) => {
        setCreateUser((current) => ({
            ...current,
            [name]: e.nativeEvent.text,
        }));
    };

    const handleRegister = async () => {
        const result = await request({
            url: URL_USER,
            method: MethodsEnum.POST,
            body: createUser,
            message: 'Seu cadastro foi concluido.',
        });
        if (result) {
            reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }
    };

    return {
        disable,
        loading,
        createUser,
        handleChange,
        handleRegister,
    };
};
