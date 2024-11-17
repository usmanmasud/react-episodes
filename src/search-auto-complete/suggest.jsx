

export default function Suggestions({ data, handleClick }) {



    return <ul>
        {
            data && data.length ?
                data.map((item, i) => <li onClick={handleClick} key={i}>{item}</li>)
                : null
        }
    </ul>
}