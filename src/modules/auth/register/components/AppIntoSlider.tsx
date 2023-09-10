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
                                leftIcon
                                size={26}
                                icon="mail-outline"
                                placeholder="Seu Email"
                                value={createUser.email}
                                keyboardType="email-address"
                                onChange={(e) => handleChange(e, 'email')}
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
                                leftIcon
                                size={26}
                                type="cel-phone"
                                icon="call-outline"
                                value={createUser.phone}
                                keyboardType="number-pad"
                                placeholder="Seu telefone"
                                onChange={(e) => handleChange(e, 'phone')}
                                colorIcon="#E67B0F" />
                            <Input
                                leftIcon
                                size={26}
                                type="cpf"
                                value={createUser.cpf}
                                placeholder="Seu CPF"
                                icon="wallet-outline"
                                keyboardType="number-pad"
                                onChange={(e) => handleChange(e, 'cpf')}
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
