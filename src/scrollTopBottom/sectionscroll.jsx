
import React, { useRef } from 'react'

export default function Sectionscroll() {
    const ref = useRef()


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

    function handleScrollToSection() {
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <h1>Scroll to a scetion</h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button>
            {
                data.map((item, index) => <div style={item.style} ref={index === 3 ? ref : null}>
                    <h3>{item.label}</h3>
                </div>)
            }
        </div>
    )
}
