import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, TouchableOpacity } from 'react-native';
import { Container, ContainerInput, TextError, TitleInput } from './input.styles';
import { DisplayCollum } from '../../../styles/globalView.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { insertMaskInCpf } from '../../../functions/cpf';
import { insertMaskInPhone } from '../../../functions/phone';


interface InputProps extends TextInputProps {
    secureTextEntry?: boolean,
    placeholder?: string,
    margin?: number,
    title?: string,
    rightIcon?: boolean
    leftIcon?: boolean,
    size?: number,
    colorIcon?: string,
    icon?: string,
    errorMessage?: string,
    type?: 'cel-phone' | 'cpf'
}

const Input = ({ type, onChange, errorMessage, size, colorIcon, icon, leftIcon, rightIcon, title, placeholder, margin, secureTextEntry, ...props }: InputProps) => {
    const [secury, setSecury] = useState(!!secureTextEntry);

    const handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        let text = e.nativeEvent.text;
        switch (type) {
            case 'cpf':
                text = insertMaskInCpf(text);
                break;
            case 'cel-phone':
                text = insertMaskInPhone(text);
                break;
            default:
                text = insertMaskInCpf(text);
                break;
        }
        if (onChange) {
            onChange({
                ...e,
                nativeEvent: { ...e.nativeEvent, text },
            });
        }
    };
    const handleOnPressEye = () => {
        setSecury((current) => !current);
    };

    return (
        <DisplayCollum>
            {title && <TitleInput>{title}</TitleInput>}
            <Container>
                {leftIcon && (
                    <Ionicons name={icon || ''} size={size} color={colorIcon} />
                )}
                <ContainerInput
                    {...props}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                    style={{ margin }}
                    secureTextEntry={secury}
                />

                {rightIcon && (
                    <TouchableOpacity onPress={handleOnPressEye} >
                        <Ionicons name={secury ? 'eye-off' : 'eye'} size={size} color={'#ccc'} />
                    </TouchableOpacity>
                )}
            </Container>
            {errorMessage && <TextError>{errorMessage}</TextError>}
        </DisplayCollum>
    );
};

export default Input;
