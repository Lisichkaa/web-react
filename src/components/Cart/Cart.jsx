import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'
import ProductList from '../ProductList/ProductList';
import {useCallback, useEffect} from "react";
import { telegramUse } from '../../telegram/telegramm';
//

function Cart () {
  const {tg, onSetName } = telegramUse();   

  useEffect(() => {
    tg.ready();
  }, [])

  const navigate = useNavigate();
  const goBack = () => navigate(-1);   

  const addedItems = sessionStorage.getItem('cart');
  const onSendData = useCallback(() => {       
        tg.sendData(addedItems);
  }, [addedItems]) 

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
      return () => {
        tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData]) 

  return (
    <div class="order_header_wrap">      
      <h2 class="order_header">Your Order</h2>
      <div class="order_edit"> 
           <h3><button onClick={goBack}>Edit</button></h3>       
      </div>
      
  </div>
    );
};

export default Cart;