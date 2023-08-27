import { Modal as ModalReact, ModalProps, Alert } from 'react-native';
import { ContainerModal, IconModal, TextModal, TitleModal } from './modal.styles';
import ButtonModal from '../buttons/button-modal/ButtonModal';
import { theme } from '../../theme/theme';

interface IModalProps extends ModalProps {
    title: string,
    text: string,
    titleButton: string,
    close: () => void
}

const Modal = ({titleButton, text, title, close, ...props }: IModalProps) => {
    return (
        <ModalReact
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('ola');
                close();
            }}
            {...props}>
                <ContainerModal>
                    <TitleModal>{title}</TitleModal>
                    <IconModal name="close-circle" onPress={close} />
                    <TextModal>{text}</TextModal>
                    <ButtonModal margin={25} color={theme.colors.orangeTheme.orange600} title={titleButton} fontSize={20} onPress={close} />
                </ContainerModal>
        </ModalReact>
    );
};

export default Modal;
