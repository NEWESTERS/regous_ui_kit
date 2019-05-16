import * as React from 'react';
import classnames from 'classnames';

import './index.css';

export interface IOption {
    key: number,
    value: any,
    text: string
}

interface IProps {
    data: IOption[],
    selectedKey?: number,
    onChange: (key: number) => void,
    label?: string
}

interface IState {
    isActive: boolean
}

export default class Dropdown extends React.Component<IProps, IState> {
    public state: IState = {
        isActive: false
    }

    public dropdownRef: HTMLInputElement | null = null;

    handleDropdownClick = () => {
        if(this.dropdownRef === null) {
            return
        }

        if(this.state.isActive) {
            this.dropdownRef.blur();
        } else {
            this.dropdownRef.focus();
        }
    }

    handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();

        if(this.state.isActive) {
            this.dropdownRef!.blur();
        } else {
            this.dropdownRef!.focus();
        }
    }

    render() {
        const { isActive } = this.state,
            { data, selectedKey, onChange, label } = this.props,
            displayedValue = selectedKey !== undefined ? data.find(item => item.key === selectedKey)!.text : undefined;

        return(
            <div
                className={ 
                    "clickable dropdown " +
                    classnames({
                        "active": isActive,
                        "empty": selectedKey === undefined
                    })
                }
                title={ displayedValue }
            >
                { label && <label>{ label }</label> }
                <input
                    type="text"
                    className="clickable fake-input"
                    ref={ ref => this.dropdownRef = ref }
                    onBlur={ (e) => { e.preventDefault(); this.setState({ isActive: false }) } }
                    onFocus={ (e) => { e.preventDefault(); this.setState({ isActive: true }) } }
                    onMouseDown={ this.handleInputClick }
                    readOnly
                />
                { displayedValue && <div className="displayed-value">{ displayedValue }</div> }
                <div className="arrow" />

                <div className="list">
                {
                    data.map(option => 
                        <div
                            key={ option.key }
                            className={ `option${ option.key === selectedKey ? " selected": "" }` }
                            onMouseDown={ () => onChange(option.key) }
                        >{ option.text }</div>
                    )
                }
                </div>
            </div>
        )
    }
}