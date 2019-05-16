import * as React from 'react';
import moment from 'moment';
import classnames from 'classnames';

import './index.css';

interface IProps {
    selectedDate: moment.Moment,
    displayedDate: moment.Moment,
    onDayClick: (date: moment.Moment) => void
}

const DAYS_OF_WEEK = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

export default class MonthGrid extends React.Component<IProps> {
    getDaysForMonth = () => {
        const date = moment(this.props.displayedDate),
            weeks = 6,
            arr = [],
            offset = parseInt(date.date(1).format('e')),
            days = date.daysInMonth();

        let buf = [],
            num;
    
        for(let i = 0; i < weeks; i++) {
            buf = [];

            for(let j = 0; j < 7; j++) {
                num = i * 7 + j + 1;
                if (num > offset && num - offset <= days) {
                    buf.push(moment(date).date(num - offset))
                } else {
                    buf.push(undefined)
                }
            };

            arr.push(buf)
        };
    
        return arr
    }

    renderDay = (day: moment.Moment | undefined, dayIndex: number) => {
        if(day === undefined) { 
            return <div key={ dayIndex } className="day placeholder" />
        }

        const { selectedDate, onDayClick } = this.props;

        return(
            <div
                key={ dayIndex }
                className={
                    "clickable day " +
                    classnames({
                        "selected": selectedDate.isSame(day, "day"),
                        "weekend": day.weekday() >= 5
                    })
                }
                onClick={ () => { onDayClick(day.startOf("D")) } }
            >{ day.date() }</div>
        )
    }

    render() {
        return(
            <div className="month">
                <div className="week">
                    { DAYS_OF_WEEK.map((weekday, index) =>
                        <div key={ index } className="weekday">{ weekday }</div>
                    ) }
                </div>

                { this.getDaysForMonth().map((week, weekIndex) =>
                    <div className="week" key={ weekIndex }>{
                        week.map(this.renderDay)
                    }</div>
                ) }
            </div>
        )
    }
}