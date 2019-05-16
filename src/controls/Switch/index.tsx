import * as React from 'react';
import classnames from 'classnames';

import './index.css';

interface IProps {
    value: boolean,
    onChange: (value: boolean) => void
}

const Switch = ({ value, onChange }: IProps) =>
    <div
        className={ classnames(
            "clickable",
            "switch",
            { "active": value }
        ) }
        onClick={ () => onChange(!value) }
    >

        <div className="container">
            <div className="grip" />
        </div>
    </div>

export default Switch;