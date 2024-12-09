

import React from 'react'
import useFetch from './page'

function UseFetchHookTest() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products', {});

    console.log(error, data, pending)


    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {
                pending ? <h3>Pending. please wait</h3> : null
            }
            {
                data && data.products && data.products.length ?
                    data.products.map(product => <p key={product.key}>{product.title}</p>) : null
            }
            {
                error ? <h3>{error}</h3> : null
            }
        </div>
    )
}

export default UseFetchHookTest
