import { useEffect, useState } from "react"
import './styles.css'


export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts(data.products)
                setLoading(false)
            }
            console.log(data)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) setDisableBtn(true)
    }, [products])

    if (loading) {
        <div>Loading data! please wait</div>
    }

    return <div className="lm-container">
        <div className="products-container">
            {
                products && products.length ?
                    products.map(item => <div key={item.id} className="products" >
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>)
                    : null
            }
        </div>
        <div className="btn-container">
            <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load More Products</button>
        </div>
    </div>
}