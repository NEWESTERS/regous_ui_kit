import * as React from 'react';
import moment from 'moment';

import Modal from '../Modal';
import Calendar from './Calendar';
import './index.css';

interface IProps {
    value?: moment.Moment,
    label?: string,
    onChange: (value: moment.Moment) => void
}

interface IState {
    isModalOpen: boolean
}

export default class Datepicker extends React.Component<IProps, IState> {
    public state: IState = {
        isModalOpen: false
    }

    onDayClick = (value: moment.Moment) => {
        this.props.onChange(value);

        this.setState({
            isModalOpen: false
        })
    }

    render() {
        const { value, label } = this.props,
            { isModalOpen } = this.state;

        return(
            <div className="datepicker-input">
                <div
                    className={ `clickable trigger-button${ value !== undefined ? " not-empty" : "" }` }
                    onClick={ () => this.setState({ isModalOpen: true }) }
                >
                    { label && <label className="clickable">{ label }</label> }
                    { value !== undefined && value.format("DD-MM-YYYY") }  
                </div>

                <Modal
                    open={ isModalOpen }
                    onClose={ () => this.setState({ isModalOpen: false }) }
                >
                    <div className="datepicker-modal">
                        <div className="clickable close-button" onClick={ () => this.setState({ isModalOpen: false }) } />
                        { label && <h2>{ label }</h2> }

                        <Calendar
                            value={ value }
                            onDayClick={ this.onDayClick }
                        />
                    </div>
                </Modal>
            </div>
        )
    }
}