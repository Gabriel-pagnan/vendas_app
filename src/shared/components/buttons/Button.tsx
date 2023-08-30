import { TouchableOpacityProps } from 'react-native';
import { ActivityIndicator, ContainerButton, TitleButton } from './button.styles';

interface IButtonProps extends TouchableOpacityProps {
    title: string,
    color: string,
    margin?: number,
    fontSize?: number,
    width?: number,
    loading?: boolean,
    onPress?: () => void
}

const Button = ({onPress, loading, fontSize, color, title, margin, ...props }: IButtonProps) => {
    const handlePress = () => {
        if (!loading && onPress) {onPress();}
    };

    const renderLoading = () => (
        <>
            {loading && <ActivityIndicator color="#fff" /> }
            <TitleButton style={{ fontSize }}>{title}</TitleButton>
        </>
    );

    return (
        <ContainerButton onPress={handlePress} style={{ backgroundColor: color, marginTop: margin }} {...props}>
            {renderLoading()}
        </ContainerButton>
    );
};

export default Button;
