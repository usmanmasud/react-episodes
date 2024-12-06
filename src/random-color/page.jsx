import { useEffect, useState } from 'react'
// import './styles.module.css'

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, SetColor] = useState('#000000');


    function handleRandomColor(length) {
        return Math.floor(Math.random() * 6)
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[handleRandomColor(hex.length)]
        }
        console.log(hexColor)
        SetColor(hexColor)
    }

    function handleCreateRandomRgbColor() {
        const r = handleRandomColor(256);
        const g = handleRandomColor(256);
        const b = handleRandomColor(256);

        SetColor(`rgb(${r},${g},${b})`)
    }
    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor
    }, [typeOfColor])

    return <div style={{
        width: '100vw',
        height: '100vh',
        background: color
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            color: '#fff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'center'
        }}>
            <h1>{color}</h1>
            <h2>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h2>
        </div>
    </div>
}