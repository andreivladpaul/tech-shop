import React,{ useContext } from 'react';
import Col from 'react-bootstrap/Col';
import {ShopContext} from "../../context/shop-context";

export const Product = (props) => {
  const {productName, id, price, productImage} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <Col  className='product'>
      <img src={productImage} alt={productName} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </Col>
  )
}
