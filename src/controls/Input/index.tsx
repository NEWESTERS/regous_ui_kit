import * as React from 'react';
import classnames from 'classnames';

import './index.css';

interface IDefaultProps {
    valid: boolean,
    defaultFocused: boolean
}

interface IProps extends IDefaultProps {
    value: string | number,
    onChange: (value: string) => void,
    label?: string,
    pattern?: string,
    width?: string | number,
    numeric?: boolean,
    dotted?: boolean,
    className?: string
}

interface IState {
    isFocused: boolean;
}

export default class Input extends React.Component<IProps, IState> {
    static defaultProps: IDefaultProps = {
        valid: true,
        defaultFocused: false
    }

    public state: IState = {
        isFocused: this.props.defaultFocused
    }

    public inputRef: HTMLInputElement | null = null;
    
    focus = () => {
        this.inputRef && this.inputRef.focus();
    }

    render() {
        const { valid, value, onChange, label, pattern, width, numeric, dotted, className } = this.props,
            { isFocused } = this.state,
            type = 
                dotted ? "password" :
                    numeric ? "tel":
                        "text";

        return(
            <div
                className={ classnames(className, {
                    "text-input": true,
                    "invalid": !valid,
                    "focused": isFocused,
                    "not-empty": value !== ""
                }) }
                onClick={ this.focus }
                style={ { width } }
            >
                { label && <label>{ label }</label> }

                <input
                    type={ type }
                    ref={ ref => this.inputRef = ref }
                    value={ value }
                    onChange={ ({ currentTarget: { value } }) => onChange(value) }
                    autoFocus={ isFocused }
                    onFocus={ () => this.setState({ isFocused: true }) }
                    onBlur={ () => this.setState({ isFocused: false }) }
                    pattern={ pattern }
                />
            </div>
        )
    }
}