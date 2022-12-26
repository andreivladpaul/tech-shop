import React, {useContext} from 'react';
import "./cartItem.css";
import Col from 'react-bootstrap/Col';
import {ShopContext} from "../../context/shop-context";

export const CartItem = (props) => {
    const {productName, id, price, productImage} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <Col lg="6" className="cartItem d-flex justify-content-center align-items-center">
        <img src={productImage} alt={productName} />
        <div className="description ">
            <p>{productName}</p>
            <p>${price}</p>
            <div className="countHandler">
                <button className="minus" onClick={() => removeFromCart(id)}>-</button>
                <input type="text" value={cartItems[id]} onChange={(e) =>updateCartItemCount(Number(e.target.value),id) } />
                <button className="plus" onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </Col>
  )
}
