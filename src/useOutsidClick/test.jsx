

import React, { useRef, useState } from 'react'
import useOutClick from './page';

function UseOnClickOutTest() {
    const ref = useRef();
    const [showContent, setShowContent] = useState(false);

    useOutClick(ref, () => setShowContent(false))

    return (
        <div>
            {
                showContent ? <div ref={ref}>
                    <h1>This is the content</h1>
                    <p>Please click outside to close. It wont close if you click inside of this content</p>
                </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}

export default UseOnClickOutTest
