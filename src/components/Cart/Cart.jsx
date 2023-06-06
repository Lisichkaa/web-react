import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'
import ProductList from '../ProductList/ProductList';
import CartItem from '../CartItem/CartItem';
import {useCallback, useEffect} from "react";
import { telegramUse } from '../../telegram/telegramm';
//

function Cart () {
  const {tg, onSetName } = telegramUse();   

  // useEffect(() => {
  //   tg.ready();
  // }, [])

  tg.MainButton.setParams({
    text: `Оформить заказ`
  });

  const navigate = useNavigate();
  const goBack = () => navigate(-1);   

  const total = sessionStorage.getItem('total');
  const addedItems = sessionStorage.getItem('cart');
  const total = addedItems.totalAmount
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
    <>
    <div class="order_header_wrap">      
      <h2 class="order_header">Your Order</h2>
      <div class="order_edit"> 
           <h3><button onClick={goBack}>Edit</button></h3>       
      </div>      
    </div>

    {/* <div className='order_container'>    
            {addedItems.products.map(item => (
                <CartItem
                    product={item}
                />
            ))}
    </div>     */}

    <div className="totalAmount__container">     
          <br /> 
          <div className="total">Total amount of points: {total}</div>                        
    </div>  

    </>
    
    );
};

export default Cart;