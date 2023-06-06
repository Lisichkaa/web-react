import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'


const Cart = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
      <div className={"cart"}>        
            <h3>Your order <button onClick={goBack}>Edit</button></h3> 
      </div>
    );
};

export default Cart;