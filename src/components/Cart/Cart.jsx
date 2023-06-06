import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'


const Cart = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
      <div className={"cart"}>        
            <h3>Your order</h3> <br/><button onClick={goBack}>Edit</button>
      </div>
    );
};

export default Cart;