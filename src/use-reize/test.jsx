

import React from 'react'
import useWindowResize from './page'

export default function UseWindowResizeTest() {
    const windowSize = useWindowResize();
    const { width, height } = windowSize

    return (
        <div>
            <h1>Usw Window Resize Hook</h1>
            <p>
                Width is {width}
            </p>
            <p>
                height is {height}
            </p>
        </div>
    )
}
