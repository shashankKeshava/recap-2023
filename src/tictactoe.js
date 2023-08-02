import React, { useState } from 'react';
import "./tictactoe.css"

function Sqaure() {
	const [value, setValue] = useState(null);
	function handleClick() {
		setValue('X');
		console.log('Clicked!');
	}
	return (
		<button className="square" onClick={handleClick}>
			{value}
		</button>
	);
}

function Board() {
	return (
		<>
			<div className="board-row">
				<Sqaure value="1" />
				<Sqaure value="2" />
				<Sqaure value="3" />
			</div>
			<div className="board-row">
				<Sqaure value="4" />
				<Sqaure value="5" />
				<Sqaure value="6" />
			</div>
			<div className="board-row">
				<Sqaure value="7" />
				<Sqaure value="8" />
				<Sqaure value="9" />
			</div>
		</>
	);
}

function TicTacToe() {
	return <Board />;
}

export default TicTacToe;
