import React, { useState } from 'react';
import { ContainerLogin, ImgLogo } from './login.styles';
import Input from '../../../shared/components/inputs/Input';
import Button from '../../../shared/components/buttons/Button';
import { KeyboardAvoidingView, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    await axios.post('http://localhost:3001/auth', {email, pass})
      .catch(() => {
        setError('Usuário ou senha incorretos.');
      });
    setLoading(false);
  };

  const handleChangeMail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(e.nativeEvent.text);
  };
  const handleChangePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(e.nativeEvent.text);
  };

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
          value={pass}
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
          errorMessage={error}/>

        <Button loading={loading} onPress={handleLogin} fontSize={20} title="entrar" color="#E67B0F" margin={25} />
      </ContainerLogin>
    </KeyboardAvoidingView>
  );
};

export default Login;
