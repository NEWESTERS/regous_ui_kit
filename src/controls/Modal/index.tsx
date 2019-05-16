import * as React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './index.css';

interface IPortalProps {
    className?: string,
    onOpen?: () => void,
    onClose?: () => void
}

class Portal extends React.Component<IPortalProps> {
    public portalRef = document.createElement("div");

    componentDidMount() {
        this.portalRef.classList.add("modal-container");
        document.body.appendChild(this.portalRef);
        document.body.classList.add('no-scroll');
        document.body.ontouchmove = (e: TouchEvent) => e.preventDefault();

        this.props.onOpen && this.props.onOpen();
    }

    componentWillUnmount() {
        document.body.removeChild(this.portalRef);
        document.body.classList.remove('no-scroll');
        document.body.ontouchmove = (e: TouchEvent) => true;

        this.props.onClose && this.props.onClose();
    }

    render() {
        const { children, className, onClose } = this.props;

        return ReactDOM.createPortal(
            <>
                <div className="clickable modal-background" onClick={ onClose } />
                <div className={ classnames("modal-content", className) }>
                    { children }
                </div>
            </>,
            this.portalRef
        );
    }
}

interface IModalProps extends IPortalProps {
    open: boolean
}

const Modal: React.StatelessComponent<IModalProps> = ({ open, children, ...rest }) =>
    open ? <Portal { ...rest }>{ children }</Portal> : null

export default Modal;