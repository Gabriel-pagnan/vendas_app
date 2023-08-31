import { useEffect, useState } from 'react';
import { CreateUserType } from '../../../shared/types/createUserType';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export const useRegister = () => {
    const { request, loading } = useRequest();
    const [disable, setDisable] = useState<boolean>(true);
    const {reset} = useNavigation<NavigationProp<ParamListBase>>();
    const [createUser, setCreateUser] = useState<CreateUserType>({
        confirmPassword: '',
        cpf: '',
        email: '',
        name: '',
        password: '',
        phone: '',
    });

    useEffect(() => {
        if (
            createUser.name !== '' &&
            createUser.cpf !== '' &&
            createUser.email !== '' &&
            createUser.phone !== '' &&
            createUser.password !== '' &&
            createUser.password === createUser.confirmPassword
        ) {
            setDisable(false);
        } else {setDisable(true);}
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
        if (result){
            reset({
                index: 0,
                routes: [{name: 'Login'}],
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
