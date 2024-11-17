import { useState } from "react"
import Modal from "./model"


export default function ModalTest() {
    const [showPopup, setShowPopup] = useState(false)

    function handleTogglePop() {
        setShowPopup(!showPopup)
    }

    return <div>
        <button onClick={handleTogglePop}>Open Modal Popup</button>
        {
            showPopup && <Modal />
        }
    </div>
}