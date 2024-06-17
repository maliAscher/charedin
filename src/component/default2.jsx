import React from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
export default function Demo2_ProductDetails() {
    const [product, setProduct] = useState({})
    const params = useParams()
    // {id: 1}
    console.log(params.id)

    const getProduct = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products/${params.id}`)
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])


    return (
        <div style={{ backgroundColor: "olive", width: "100%", height: "400px" }}>
            <h2>Details</h2>

            <div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <img width={"100px"} height={"100px"}src={product.thumbnail} alt="" />
            </div>

        </div>
    )
}
