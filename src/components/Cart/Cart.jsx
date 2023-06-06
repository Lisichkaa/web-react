import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'


function Cart (addedItems) {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
     
  // const onSendData = useCallback(() => {
  //       const data = {
  //           products: addedItems,
  //           totalAmount: totalAmount
  //       }
  //       tg.sendData(JSON.stringify(data));
  //   }, [addedItems, totalAmount]) 

  return (
      <div className={"cart"}>        
            <h3>Your order <button onClick={goBack}>Edit</button></h3> 
           
      </div>
    );
};

export default Cart;