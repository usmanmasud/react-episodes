import { useEffect, useState } from "react"
import Suggestions from "./suggest";


export default function AutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);



    function handleChange(e) {
        const query = e.target.value.toLowerCase()
        setSearchParam(query)
        if (query.length > 1) {
            const filteredData = users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilteredUsers(filteredData)
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json()

            console
                .log(data)
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(item => item.firstName))
                setLoading(false)
                setError(null)
            }
        } catch (e) {
            setLoading(false)
            console.log(e);
            setError(e);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(users, filteredUsers)

    return <div className="container-auto">
        {
            loading ? <h1>Please wait while we load data</h1> : null
        }
        <input
            name="search-users"
            placeholder="search users..."
            value={searchParam}
            onChange={handleChange}
        />
        {
            showDropdown && <Suggestions data={filteredUsers} />
        }
    </div>
}