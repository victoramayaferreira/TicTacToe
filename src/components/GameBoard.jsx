import { useState } from "react"

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [board, setBoard] = useState(initialBoard);

    function handleSymbolChange(rowIndex, colIndex) {
        setBoard((prevBoard) => {
            const updatedBoard = [...prevBoard.map((row) => [...row])];
            updatedBoard[rowIndex][colIndex] = "X";
            return updatedBoard;
        });
    }

    return <ol id="game-board">
        {board.map((row, rowIndex) =>
            <ol key={rowIndex}>
                {row.map((symbol, colIndex) => 
                <ol key={colIndex}>
                    <button onClick={() => handleSymbolChange(rowIndex, colIndex)}>{symbol}</button>
                </ol>)}
            </ol>)}
    </ol>
}