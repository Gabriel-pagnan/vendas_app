import { TextInputProps, TouchableOpacity } from 'react-native';
import { Container, ContainerInput, TextError, TitleInput } from './input.styles';
import { DisplayCollum } from '../../styles/globalView.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

interface InputProps extends TextInputProps {
    placeholder?: string,
    margin?: number,
    title?: string,
    rightIcon?: boolean
    leftIcon?: boolean,
    size?: number,
    colorIcon?: string,
    icon?: string,
    errorMessage?: string
}

const Input = ({ errorMessage, size, colorIcon, icon, leftIcon, rightIcon, title, placeholder, margin, ...props }: InputProps) => {
    const [secury, setSecury] = useState(true);

    return (
        <DisplayCollum>
            {title && <TitleInput>{title}</TitleInput>}
            <Container>
                {leftIcon && (
                    <Ionicons name={icon || ''} size={size} color={colorIcon} />
                )}
                <ContainerInput placeholder={placeholder} style={{ margin }} {...props} />

                {rightIcon && (
                    <TouchableOpacity onPress={() => setSecury(!secury)} >
                        <Ionicons name={secury ? 'eye-off' : 'eye'} size={size} color={'#ccc'} />
                    </TouchableOpacity>
                )}
            </Container>
            {errorMessage && <TextError>{errorMessage}</TextError>}
        </DisplayCollum>
    );
};

export default Input;
