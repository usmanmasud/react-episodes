import { useEffect, useState } from "react"
import './styles.css'
import User from "./user";

export default function GithubFinder() {
    const [username, setUsername] = useState('usmanmasud');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()

        if (data) {
            setUserData(data);
            setLoading(false)
            setUsername('')
        }


        console.log(data)
    }

    function handleSubmit() {
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return <h1>Loading data...</h1>
    }

    return <div className="git-container">
        <div className="input-wrapper">
            <input
                name="serach-byusername"
                type="text"
                placeholder="Search Github username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData} /> : null
        }
    </div>
}