
import React, { useRef } from 'react'
import useFetch from '../useFetch/page';
import { use } from 'react';

export default function ScrollTopBottom() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products?limit=100', {});

    const bottomRef = useRef(null)

    if (pending) {
        return <h1>Loading, please wait</h1>
    }

    if (error) {
        return <h1>Error occured! please try again.</h1>
    }

    function handleTopScroll() {
        window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
        })
    }

    function handleBottomScroll() {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <h2>Scroll To Top and Bottom</h2>
            <h2>This is the top section</h2>
            <button onClick={handleBottomScroll}>Scroll Bottom</button>
            <ul style={{ listStyle: 'none' }}>
                {
                    data && data.products && data.products.length ?
                        data.products.map(item => <li>{item.title}</li>)
                        : null
                }
            </ul>
            <button onClick={handleTopScroll}>Scroll To Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page</h3>
        </div>
    )
}
