import React, {useContext} from 'react';
import {PRODUCTS} from "../../assets/products";
import {ShopContext} from "../../context/shop-context";
import { CartItem } from '../../components/cartItem/cartItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  return (
    
    <Container className="cart">
      <Row>
        <div>
          <h1>Your Cart items</h1>
        </div>
      </Row>
      <Row className="cartItems d-flex justify-content-center align-items-center">
        {PRODUCTS.map(product => {
          if(cartItems[product.id] !== 0) {
            return <CartItem 
              key = {product.id}
              data={product}
            />
          }
        })}
      </Row>
      
        <Row>
        {
          totalAmount > 0 ?
            <Col>
              <p>Subtotal: $ {totalAmount}</p>
            </Col>
        : <p>Your cart is empty</p> }
        <div className="checkout d-flex justify-content-center align-items-center">
          <button onClick={() =>navigate("/") }>Continue shopping</button>
          {totalAmount > 0 ? <button>Checkout</button> : null}
          
        </div>
      </Row>
    </Container>
  )
}

export default Cart
