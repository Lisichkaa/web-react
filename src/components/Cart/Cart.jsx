import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'
import ProductList from '../ProductList/ProductList';

const obj2 = sessionStorage.getItem('cart');

function Cart (totalAmount) {
  
  const navigate = useNavigate();
  const goBack = () => navigate(-1);    
  
  //это метод для отправки данных в бот сообщением
  const onSendData = useCallback(() => {       
        tg.sendData(JSON.stringify(obj2));
    }, [obj2]) 
//здесь ожидаем эвент нажатие на главную кнопку
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