import React from 'react';
import {PRODUCTS} from "../../assets/products";
import {Product} from "../../components/product/products";
import "./shop.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const Shop = () => {
  return (
    <Container className='shop'>
        <Row className='shopTitle'>
            <h1>Tech Shop</h1>
        </Row>
        <Row className='products'>
            {PRODUCTS.map(product => <Product 
                data={product}
                key={product.id}
            />)}
        </Row>
    </Container>
  )
}

export default Shop
