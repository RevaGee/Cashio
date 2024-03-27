import React, { useEffect } from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './DarkMode.css';

/**
 * @typedef {Object} DarkModeProps
 * @property {boolean} darkMode - Флаг, указывающий, включен ли темный режим.
 * @property {function} toggleDarkMode - Функция для переключения темного режима.
 */

/**
 * Компонент DarkMode.
 * @param {DarkModeProps} props - Свойства компонента.
 */
const DarkMode = ({ darkMode, toggleDarkMode }) => {
	useEffect(() => {
		if (darkMode) {
			document.querySelector('body').setAttribute('data-theme', 'dark');
		} else {
			document.querySelector('body').setAttribute('data-theme', 'light');
		}
	}, [darkMode]);

	const toggleTheme = () => {
		toggleDarkMode();
	};

	return (
		<div className="dark_mode">
			<input
				className="dark_mode_input"
				type="checkbox"
				id="darkmode-toggle"
				checked={darkMode}
				onChange={toggleTheme}
			/>
			<label className="dark_mode_label" htmlFor="darkmode-toggle">
				<Sun className="sun" />
				<Moon className="moon" />
			</label>
		</div>
	);
};

export default DarkMode;
