import React from "react"

function Product(props) {
    return (
        <div className="product">
            <img src={props.product.imgUrl}/>
            <h2>{props.product.name}</h2>
            <h3>{props.product.price.toLocaleString("lt-LT", { style: "currency", currency: "EUR" })}</h3>
            <button>Delete Item</button>
        </div>
    )
}

export default Product