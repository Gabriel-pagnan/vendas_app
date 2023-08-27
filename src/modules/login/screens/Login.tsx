import { ContainerLogin, ImgLogo } from './login.styles';
import Input from '../../../shared/components/inputs/Input';
import Button from '../../../shared/components/buttons/Button';
import { KeyboardAvoidingView } from 'react-native';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const {email,errorMessage, password, loading, handleLogin, handleChangeMail, handleChangePass} = useLogin();

  return (
    <KeyboardAvoidingView>
      <ContainerLogin>
        <ImgLogo resizeMode="contain" source={require('../../../assets/images/login.png')} />

        <Input
          value={email}
          leftIcon
          icon="mail-outline"
          size={30}
          colorIcon="#E67B0F"
          placeholder="Seu e-mail"
          margin={10}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={handleChangeMail}/>

        <Input
          value={password}
          leftIcon
          rightIcon
          colorIcon="#E67B0F"
          icon="lock-closed-outline"
          size={30}
          placeholder="Sua senha"
          margin={10}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChange={handleChangePass}
          errorMessage={errorMessage}/>

        <Button loading={loading} onPress={handleLogin} fontSize={20} title="entrar" color="#E67B0F" margin={25} />
      </ContainerLogin>
    </KeyboardAvoidingView>
  );
};

export default Login;
