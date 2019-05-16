import React from 'react';
import moment from 'moment';

import Input from '../controls/Input';
import Input2 from '../controls/Input2';
import Datepicker from '../controls/Datepicker';
import SegmentedSwitch from '../controls/SegmentedSwitch';
import Switch from '../controls/Switch';
import Dropdown, { IOption } from '../controls/Dropdown';
import './index.css';

interface IState {
	firstInputText: string,
	secondInputText: string,
	date?: moment.Moment,
	switchSelectedKey?: number,
	switchEnabled: boolean,
	dropdownSelectedKey?: number
}

const switchData: IOption[] = [
	{ key: 0, value: 1, text: "Левый" },
	{ key: 1, value: 2, text: "Правый" }
]

const dropdownData: IOption[] = [
	{ key: 0, value: 1, text: "Красный" },
	{ key: 1, value: 2, text: "Синий" },
	{ key: 2, value: 3, text: "Чёрный" },
	{ key: 3, value: 4, text: "Белый" },
	{ key: 4, value: 5, text: "Жёлтый" },
	{ key: 5, value: 6, text: "Прозрачный" },
]

class App extends React.Component<{}, IState> {
	public state: IState = {
		firstInputText: "",
		secondInputText: "",
		switchEnabled: false
	}

	render() {
		const {
			firstInputText, secondInputText,
			date,
			switchSelectedKey, switchEnabled, dropdownSelectedKey
		} = this.state;

		return (
			<div className="app">
				<h1>UI-элементы</h1>

				<h2>Текстовые поля</h2>
				
				<Input
					label="Текстовое поле"
					value={ firstInputText }
					onChange={ (firstInputText) => this.setState({ firstInputText }) }
					valid={ firstInputText.toLowerCase()[0] !== "х" }
				/>

				<br />

				<Input2
					label="Другое текстовое поле"
					placeholder="Тут можно писать"
					value={ secondInputText }
					onChange={ (secondInputText) => this.setState({ secondInputText }) }
					valid={ secondInputText.toLowerCase()[0] !== "х" }
				/>

				<p className="hint">Слова, начинающиеся на "х", считаются неправильными</p>

				<div className="divider" />

				<h2>Выбор даты</h2>

				<Datepicker
					label="Дата"
					value={ date }
					onChange={ (date) => this.setState({ date }) }
				/>

				<div className="divider" />

				<h2>Переключатели</h2>

				<Dropdown
					label="Любимый цвет"
					data={ dropdownData }
					selectedKey={ dropdownSelectedKey }
					onChange={ (dropdownSelectedKey) => this.setState({ dropdownSelectedKey }) }
				/>

				<br />

				<div className="labeled-switch">
					<label className="app-label">Просто пощёлкать</label>
					<Switch
						value={ switchEnabled }
						onChange={ (switchEnabled) => this.setState({ switchEnabled }) }
					/>
				</div>

				<br />

				<SegmentedSwitch
					label="Левый или правый?"
					width={ 200 }
					data={ switchData }
					selectedKey={ switchSelectedKey }
					onChange={ (switchSelectedKey) => this.setState({ switchSelectedKey }) }
				/>
			</div>
		);
	}
}

export default App;
