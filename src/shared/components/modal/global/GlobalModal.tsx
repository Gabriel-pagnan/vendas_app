import Modal from '../Modal';
import { useGlobalReducer } from '../../../../Redux-store/reducer/global-reducer/useGlobalReducer';

const GlobalModal = () => {
    const {modal, closeModal} = useGlobalReducer();

    return (
        <Modal titleButton={modal.titleButton} visible={modal.visible} title={modal.title} text={modal.text} close={closeModal} />
    );
};

export default GlobalModal;
