import React, { useState } from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './DarkMode.css';

const DarkMode = () => {
	const setDarkMode = () => {
		document.querySelector('body').setAttribute('data-theme', 'dark');
	};
	const setLightMode = () => {
		document.querySelector('body').setAttribute('data-theme', 'light');
	};
	const toggleTheme = e => {
		if (e.target.checked) setDarkMode();
		else setLightMode();
	};
	return (
		<div className='dark_mode'>
			<label className='dark_mode_label' for='darkmode-toggle'>
				<input
					className='dark_mode_input'
					type='checkbox'
					id='darkmode-toggle'
					onChange={toggleTheme}
				/>
				<Sun/>
				<Moon/>
			</label>
		</div>
	);
};

export default DarkMode;
