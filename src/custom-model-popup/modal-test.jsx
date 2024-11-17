import { useState } from "react"
import Modal from "./model"


export default function ModalTest() {
    const [showPopup, setShowPopup] = useState(false)

    function handleTogglePop() {
        setShowPopup(!showPopup)
    }

    function onClose() {
        setShowPopup(false)
    }

    return <div>
        <button onClick={handleTogglePop}>Open Modal Popup</button>
        {
            showPopup && <Modal
                body={<div>Customized Body</div>}
                header={<h2>This is my customized header</h2>}
                footer={<h2>This is my customized footer</h2>}
                onClose={onClose}
            />
        }
    </div>
}