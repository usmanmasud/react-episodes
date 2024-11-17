

export default function Suggestions({ data }) {

    return <ul>
        {
            data && data.length ?
                data.map((item, i) => <li key={i}>{item}</li>)
                : null
        }
    </ul>
}