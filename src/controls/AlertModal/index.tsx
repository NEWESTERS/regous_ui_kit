import * as React from 'react';

import Modal from '../Modal';
import './index.css';

interface IProps {
    text: string | undefined,
    onClose: () => void
}

const AlertModal = ({ text, onClose }: IProps) =>
    <Modal
        open={ text !== undefined }
    >
        <div className="alert-modal">
            <p>{ text }</p>
            <button className="main" onClick={ onClose }>Закрыть</button>
        </div>
    </Modal>

export default AlertModal;