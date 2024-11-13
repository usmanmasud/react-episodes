import { useState } from "react"


export default function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)


    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return <div className="wrapper">
        <div className="heading"></div>
        <div className="heading">
            {
                tabsContent.map((tabItem, index) => <div onClick={() => handleOnClick(index)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                </div>)
            }
        </div>
        <div className="content" style={{ color: 'red' }}>
            {
                tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
            }
        </div>
    </div>
}