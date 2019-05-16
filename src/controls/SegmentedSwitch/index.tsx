import * as React from 'react';
import classnames from 'classnames';

import { IOption } from '../Dropdown';
import './index.css';

interface IProps {
    data: IOption[],
    selectedKey?: number,
    width?: number,
    onChange: (selectedKey: number) => void,
    label?: string
}

const SegmentedSwitch = ({ data, selectedKey, onChange, label, width }: IProps) => {
    const segmentWidth = `${ 100 / data.length }%`;

    return(   
        <div
            className="segmented-switch"
            style={ { minWidth: width } }
        >
            { label && <label className="segments-label">{ label }</label> }
            <div className="segments-container">
            {
                data.map(segment =>
                    <div
                        key={ segment.key }
                        className={ classnames(
                            "clickable segment",
                            { "active": segment.key === selectedKey }
                        ) }
                        onClick={ () => onChange(segment.key) }
                        style={ { width: segmentWidth } }
                    >
                        { segment.text }
                    </div>
                )
            }
            </div>
        </div>
    )
}


export default SegmentedSwitch;