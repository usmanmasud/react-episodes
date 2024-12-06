import RandomColor from "../random-color/page"
import ThemeSwitch from "../theme-switch/page"
import TicTacToe from "../tix-tac-toe/page"
import Accordian from '../accordian/Page'
import TreeView from '../Tree-view/page'
import { useContext } from "react"
import { FeatureFlagContext } from "./context"
import menus from '../Tree-view/data'
import TabTest from "../custom-tabs/tab-test"

export default function FeatureFlag() {

    const { enableFlags, loading } = useContext(FeatureFlagContext)

    const componentToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <ThemeSwitch />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'randomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        },
        {
            key: 'showTabs',
            component: <TabTest />
        },

    ]

    function checkEnabledFlgas(getcurrentKey) {
        return enableFlags[getcurrentKey]
    }

    if (loading) return <h1>Loading data, please wait!!</h1>

    return (
        <div>
            <h1>Feature Flags</h1>

            {
                componentToRender.map(componentItem => checkEnabledFlgas(componentItem.key) ? componentItem.component : null)
            }


        </div>
    )
}