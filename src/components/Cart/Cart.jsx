import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'
import ProductList from '../ProductList/ProductList';


function Cart (totalAmount) {

  const {tg} = telegramUse();   
  const addedItems = ProductList();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
     
  const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            //totalAmount: totalAmount
        }
        tg.sendData(JSON.stringify(data));
    }, [addedItems, totalAmount]) 

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
      return () => {
          tg.offEvent('mainButtonClicked', onSendData)
      }
  }, [onSendData])


  return (
      <div className={"cart"}>        
            <h3>Your order <button onClick={goBack}>Edit</button></h3> 
           
      </div>
    );
};

export default Cart;