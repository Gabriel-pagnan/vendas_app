import { ContainerRegister } from './register.styles';
import Input from '../../../shared/components/inputs/Input';
import Button from '../../../shared/components/buttons/Button';

const Register = () => {
    return (
        <ContainerRegister>
            <Input placeholder="Seu nome completo" leftIcon icon="person-outline" size={26} colorIcon="#E67B0F" />
            <Input placeholder="Seu Email" leftIcon icon="mail-outline" size={26} colorIcon="#E67B0F" />
            <Input placeholder="Seu Telefone" leftIcon icon="call-outline" size={26} colorIcon="#E67B0F" />
            <Input placeholder="Seu CPF" leftIcon icon="wallet-outline" size={26} colorIcon="#E67B0F" />
            <Input placeholder="Sua senha" leftIcon icon="lock-closed-outline" size={26} colorIcon="#E67B0F" rightIcon />
            <Input placeholder="Confirmar senha" leftIcon icon="lock-closed-outline" size={26} colorIcon="#E67B0F" rightIcon />

            <Button title="Cadastrar" color="#E67B0F" margin={20} />
        </ContainerRegister>
    );
};

export default Register;
