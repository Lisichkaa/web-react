import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'


const Cart = () => {

  const goBack = () => navigate(-1);

  return (
      <div className={"cart"}>
        <button onClick={goBack}>Edit</button>
            <h3>Your order</h3>
      </div>
    );
};

export default Cart;