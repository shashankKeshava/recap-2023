import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function MyButton() {
	const [buttonName, setbuttonName] = useState('Test');

	return <button type="button">{buttonName}</button>;
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<MyButton />
			</header>
		</div>
	);
}

export default App;
