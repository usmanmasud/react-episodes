
import React from 'react'

export default function Sectionscroll() {
    const data = [
        {
            label: 'first card',
            style: {
                width: "100%",
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'second card',
            style: {
                width: "100%",
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'third card',
            style: {
                width: "100%",
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'fourt card',
            style: {
                width: "100%",
                height: '600px',
                background: 'black',
                color: 'white'
            }
        },
        {
            label: 'firth card',
            style: {
                width: "100%",
                height: '600px',
                background: 'orange'
            }
        },
    ]

    return (
        <div>
            <h1>Scroll to a scetion</h1>
            <button>Click To Scroll</button>
            {
                data.map(item => <div style={item.style}>
                    <h3>{item.label}</h3>
                </div>)
            }
        </div>
    )
}
