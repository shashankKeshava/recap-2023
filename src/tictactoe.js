import React, { useState } from 'react';
import './tictactoe.css';

function Square({ value, handleSquareClick }) {
	return (
		<button className="square" onClick={handleSquareClick}>
			{value}
		</button>
	);
}

function Board() {
	const [squares, setSquare] = useState(Array(9).fill(null));
	// console.log(squares);

	function handleClick(i) {
		const nextSquare = squares.slice();
		nextSquare[i] = 'X';
		setSquare(nextSquare);
		console.log('index:', i);
	}

	return (
		<>
			<div className="board-row">
				<Square value={squares[0]} handleSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} handleSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} handleSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} handleSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} handleSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} handleSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} handleSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} handleSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} handleSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}

function TicTacToe() {
	return <Board />;
}

export default TicTacToe;
