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
	const [isXNext, setXisNext] = useState(true);
	// const [winner,setWinner]=useState(null);

	function handleClick(i) {
		const nextSquare = squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		if (isXNext) {
			nextSquare[i] = 'X';
		} else {
			nextSquare[i] = 'O';
		}

		setXisNext(!isXNext);
		setSquare(nextSquare);
		console.log('index:', i);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Winner is:' + winner;
	} else {
		status = 'Next player: ' + (isXNext ? 'X' : 'O');
	}

	return (
		<>
			<div>{status}</div>
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

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export default TicTacToe;
