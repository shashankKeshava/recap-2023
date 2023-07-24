import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function MyButton({ count, handleParentCount }) {
	// const [count, setCount] = useState(0);

	function handleCount() {
		handleParentCount(count + 1);
	}

	return (
		<button type="button" onClick={handleCount}>
			Your count is {count}
		</button>
	);
}

function App() {
	const [parentCount, setParentCount] = useState(0);
	return (
		<div className="App">
			<header className="App-header">
				Check you count
				<MyButton count={parentCount} handleParentCount={setParentCount} />
				<MyButton count={parentCount} handleParentCount={setParentCount} />
			</header>
		</div>
	);
}

export default App;
