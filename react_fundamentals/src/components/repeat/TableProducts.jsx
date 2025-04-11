import React from "react";
import {products} from "../../data/products"
export default function TableProducts(props){
    
    const tr = products.map(product=>{
        return(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    });

    return(
        <table border="1">
            <thead>Products</thead>
            <tbody>
                {tr}
            </tbody>
        </table>
    )
}