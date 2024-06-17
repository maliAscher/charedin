import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Demo2Products() {
    const [products, setProducts] = useState([
        { id: 1, name: "iPhone 9" },
        { id: 2, name: "iPhone X"},
        { id: 3, name: "Samsung" },
    ])




    return (
        <div style={{ width: "100%", height: "300px", backgroundColor: "magenta" }}>
            <h2>Master</h2>
            <ul>
                {products.map((product) => {
                    return <li key={product.id}>  <Link to={`/product/${product.id}`}>{product.name}</Link> </li>
                })}

            </ul>

        </div>
    )
}
