import { Modal as ModalReact, ModalProps, Alert } from 'react-native';
import { ContainerModal, IconModal, TextModal, TitleModal } from './modal.styles';
import Button from '../buttons/Button';

interface IModalProps extends ModalProps {
    title: string,
    text: string,
    close: () => void
}

const Modal = ({ text, title, close, ...props }: IModalProps) => {
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
                    <Button color="blue" title="ok" fontSize={20} onPress={close} />
                </ContainerModal>
        </ModalReact>
    );
};

export default Modal;
