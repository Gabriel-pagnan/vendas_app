import { TouchableOpacityProps } from 'react-native';
import { ActivityIndicator, ButtonDisable, ContainerButton, TitleButton } from './button.styles';

interface IButtonProps extends TouchableOpacityProps {
    title: string,
    color: string,
    margin?: number,
    fontSize?: number,
    width?: number,
    loading?: boolean,
    onPress?: () => void,
    disable?: boolean
}

const Button = ({ disable, onPress, loading, fontSize, color, title, margin, ...props }: IButtonProps) => {
    const handlePress = () => {
        if (!loading && onPress) { onPress(); }
    };

    const renderLoading = () => (
        <>
            {loading && <ActivityIndicator color="#fff" />}
            <TitleButton style={{ fontSize }}>{title}</TitleButton>
        </>
    );

    if (disable) {
        return (
            <ButtonDisable disabled={true} style={{ marginTop: margin }} {...props}>
                <TitleButton style={{ fontSize }}>{title}</TitleButton>
            </ButtonDisable>
        );
    }

    return (
        <ContainerButton onPress={handlePress} style={{ backgroundColor: color, marginTop: margin }} {...props}>
            {renderLoading()}
        </ContainerButton>
    );
};

export default Button;
