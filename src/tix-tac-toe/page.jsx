import React, { useEffect, useState } from 'react'
import './styles.css'

function Square({ value, onClick }) {
    return <button onClick={onClick} className='squrare'>{value}</button>
}


export default function TicTacToe() {
    const [squrares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [staus, setStatus] = useState('')


    function getWinner(squrares) {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (squrares[x] && squrares[x] === squrares[y] && squrares[x] === squrares[z]) {
                return squrares[x]
            }
        }
        return null
    }

    function handleClick(getCurrentSquare) {
        let cpySquares = [...squrares];

        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;

        cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    }


    function handleRestart() {
        setIsXTurn(true);
        setSquares(Array(9).fill(''))
    }

    useEffect(() => {
        if (!getWinner(squrares) && squrares.every((item) => item !== '')) {
            setStatus('This is a draw ! Please Restart the game')
        } else if (getWinner(squrares)) {
            setStatus(`Winner is ${getWinner(squrares)} ! Please Restart the game`)
        } else {
            setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`)
        }
    }, [squrares, isXTurn])

    return (
        <div className='toeContainer'>
            <div className='row'>
                <Square value={squrares[0]} onClick={() => handleClick(0)} />
                <Square value={squrares[1]} onClick={() => handleClick(1)} />
                <Square value={squrares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className='row'>
                <Square value={squrares[3]} onClick={() => handleClick(3)} />
                <Square value={squrares[4]} onClick={() => handleClick(4)} />
                <Square value={squrares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className='row'>
                <Square value={squrares[6]} onClick={() => handleClick(6)} />
                <Square value={squrares[7]} onClick={() => handleClick(7)} />
                <Square value={squrares[8]} onClick={() => handleClick(8)} />
            </div>
            <h1>{staus}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}
