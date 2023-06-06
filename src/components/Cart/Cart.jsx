import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'
import ProductList from '../ProductList/ProductList';


function Cart (totalAmount) {
  
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
     
  //это метод для отправки данных в бот сообщением
  // const onSendData = useCallback(() => {
  //       const data = {
  //           products: addedItems,
  //           totalAmount: totalAmount
  //       }
  //       tg.sendData(JSON.stringify(data));
  //   }, [addedItems, totalAmount]) 
//здесь ожидаем эвент нажатие на главную кнопку
  // useEffect(() => {
  //   tg.onEvent('mainButtonClicked', onSendData)
  //     return () => {
  //       tg.offEvent('mainButtonClicked', onSendData)
  //   }
  // }, [onSendData])


  return (
    <div class="order_header_wrap">
      <h2 class="order_header">Your Order</h2>
      <span class="order_edit">Edit</span>
  </div>
    );
};

export default Cart;