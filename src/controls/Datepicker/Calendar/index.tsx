import * as React from 'react';
import moment from 'moment';

import MonthGrid from './MonthGrid';
import Input from '../../Input';
import './index.css';

interface IProps {
    value?: moment.Moment,
    onDayClick: (value: moment.Moment) => void
}

interface IState {
    calendarDate: moment.Moment,
    yearString: string,
    monthString: string
}

export default class Calendar extends React.Component<IProps, IState> {
    public selectedDate = this.props.value !== undefined ? moment(this.props.value) : moment();

    public state: IState = {
        calendarDate: this.selectedDate,
        yearString: this.selectedDate.year().toString(),
        monthString: (this.selectedDate.month() + 1).toString()
    }

    componentDidUpdate({ value }: IProps) {
        if(value !== this.props.value) {
            this.selectedDate = this.props.value !== undefined ? moment(this.props.value) : moment();
        }
    }

    handleYearChange = (yearString: string) => { 
        if(!/^[0-9]{0,4}$/.test(yearString)) return;

        const year = parseInt(yearString);
        
        this.setState(({ calendarDate }) => ({
            yearString,
            calendarDate: moment(calendarDate).year(year)
        }))
    }

    handleMonthChange = (monthString: string) => {
        const month = parseInt(monthString) - 1;

        if(month >= 0 && month <= 11) {
            this.setState(({ calendarDate }) => ({
                monthString,
                calendarDate: moment(calendarDate).month(month)
            }))
        } else if (/^[0-9]{0,2}$/.test(monthString)) {
            this.setState({ monthString });
        }
    }

    handleMonthDecrease = () => {
        const calendarDate = moment(this.state.calendarDate);

        calendarDate.subtract(1, "month");

        this.setState({ calendarDate });
    }

    handleMonthIncrease = () => {
        const calendarDate = moment(this.state.calendarDate);

        calendarDate.add(1, "month");

        this.setState({ calendarDate });
    }

    render() {
        const { calendarDate, yearString, monthString } = this.state,
            { onDayClick } = this.props;

        return(
            <div className="calendar">
                <div className="month-input">
                    <Input
                        label="Месяц"
                        value={ monthString }
                        onChange={ this.handleMonthChange }
                        width={ 60 }
                        numeric
                    />

                    <Input
                        label="Год"
                        value={ yearString }
                        onChange={ this.handleYearChange }
                        width={ 60 }
                        numeric
                    />
                </div>

                <div className="month-selector">
                    <div className="clickable left arrow" onClick={ this.handleMonthDecrease } />
                    <label className="selected-month">{ calendarDate.format("MMMM YYYY") }</label>
                    <div className="clickable right arrow" onClick={ this.handleMonthIncrease } />
                </div>

                <MonthGrid
                    selectedDate={ this.selectedDate }
                    displayedDate={ calendarDate }
                    onDayClick={ (date) => onDayClick(date) }
                />
            </div>
        )
    }
}