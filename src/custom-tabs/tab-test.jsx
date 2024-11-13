import Tabs from "./tabs";


function RandomComponent() {
    return <h1>
        some Random Content
    </h1>
}


export default function TabTest() {



    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content for tab1</div>
        },
        {
            label: "Tab 2",
            content: <div>This is content for tab2</div>
        },
        {
            label: "Tab 3",
            content:
                <RandomComponent />
        },
    ]


    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />
}