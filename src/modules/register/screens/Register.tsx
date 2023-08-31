import { BtnLogin, ContainerLogin, ContainerRegister, ContainerSlider, TitleBtn, TitleLogin } from './register.styles';

import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import AppIntoSlider from '../components/AppIntoSlider';
import { ScrollView } from 'react-native';


const Register = () => {
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <ContainerRegister>
            <ScrollView>
                <ContainerSlider>
                    <AppIntoSlider />
                </ContainerSlider>
            </ScrollView>

            <ContainerLogin>
                <TitleLogin>Já possui conta?</TitleLogin>
                <BtnLogin onPress={() => navigate('Login')}>
                    <TitleBtn>Entrar</TitleBtn>
                </BtnLogin>
            </ContainerLogin>
        </ContainerRegister>
    );
};

export default Register;
