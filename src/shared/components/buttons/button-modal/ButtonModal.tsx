import { TouchableOpacityProps } from 'react-native';
import { ContainerButton, TitleButton } from './buttonModal.styles';

interface IButtonModalProps extends TouchableOpacityProps {
    title: string,
    color: string,
    margin?: number,
    fontSize?: number,
    width?: number,
}

const ButtonModal = ({ fontSize, color, title, margin, ...props }: IButtonModalProps) => {
    return (
        <ContainerButton style={{ backgroundColor: color, marginTop: margin }} {...props}>
            <TitleButton style={{ fontSize }}>{title}</TitleButton>
        </ContainerButton>
    );
};

export default ButtonModal;
