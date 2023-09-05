import AppIntroSlider from 'react-native-app-intro-slider';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRegister } from '../hooks/useRegister';
import { ImageSlider } from '../screens/register.styles';
import Input from '../../../../shared/components/inputs/default/Input';
import Button from '../../../../shared/components/buttons/Button';

const AppIntoSlider = () => {
    const { handleChange, createUser, loading, handleRegister, disable } = useRegister();
    const renderSlides = ({ item }: any) => {
        return (
            <View style={{ alignItems: 'center' }}>
                {item.image}
                {item.render}
            </View>
        );
    };
    return (
        <AppIntroSlider
            renderItem={renderSlides}
            data={[
                {
                    key: '1',
                    image: <ImageSlider resizeMode="center" source={require('../../../../assets/images/page1.png')} />,
                    render: (
                        <>
                            <Input
                                value={createUser.name}
                                onChange={(e) => handleChange(e, 'name')}
                                placeholder="Seu nome completo"
                                leftIcon
                                icon="person-outline"
                                size={26}
                                colorIcon="#E67B0F" />
                            <Input
                                value={createUser.email}
                                onChange={(e) => handleChange(e, 'email')}
                                placeholder="Seu Email"
                                leftIcon
                                icon="mail-outline"
                                size={26}
                                colorIcon="#E67B0F" />
                        </>
                    ),
                },
                {
                    key: '2',
                    image: <ImageSlider resizeMode="center" source={require('../../../../assets/images/page2.png')} />,
                    render: (
                        <>
                            <Input
                                type="cel-phone"
                                value={createUser.phone}
                                onChange={(e) => handleChange(e, 'phone')}
                                placeholder="Seu telefone"
                                leftIcon
                                icon="call-outline"
                                size={26}
                                colorIcon="#E67B0F" />
                            <Input
                                type="cpf"
                                value={createUser.cpf}
                                onChange={(e) => handleChange(e, 'cpf')}
                                placeholder="Seu CPF"
                                leftIcon
                                icon="wallet-outline"
                                size={26}
                                colorIcon="#E67B0F" />
                        </>
                    ),
                },
                {
                    key: '3',
                    image: <ImageSlider resizeMode="center" source={require('../../../../assets/images/page3.png')} />,
                    render: (
                        <>
                            <Input
                                value={createUser.password}
                                onChange={(e) => handleChange(e, 'password')}
                                placeholder="Sua senha"
                                leftIcon
                                icon="lock-closed-outline"
                                size={26}
                                secureTextEntry
                                colorIcon="#E67B0F"
                                rightIcon />
                            <Input
                                value={createUser.confirmPassword}
                                onChange={(e) => handleChange(e, 'confirmPassword')}
                                placeholder="Confirmar senha"
                                leftIcon
                                icon="lock-closed-outline"
                                size={26}
                                secureTextEntry
                                colorIcon="#E67B0F"
                                rightIcon />

                            <Button disable={disable} loading={loading} onPress={handleRegister} title="Cadastrar" color="#E67B0F" margin={20} />
                        </>
                    ),
                },
            ]}
            activeDotStyle={{
                backgroundColor: '#E67B0F',
                width: 30,
            }}
            renderNextButton={() => (createUser.name ? <Ionicons name="arrow-forward-outline" size={40} color="#E67B0F" /> : '')}
            showDoneButton={false} />
    );
};

export default AppIntoSlider;
