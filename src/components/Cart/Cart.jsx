import React from 'react';
import './Cart.css';
import {useNavigate} from 'react-router-dom'


function Cart (addedItems) {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
     
  return (
      <div className={"cart"}>        
            <h3>Your order <button onClick={goBack}>Edit</button></h3> 
            <h4 className="itemCard__title">
            {title}
          </h4>  
          {/* <div className='products__container'>
            {products.map(item => (
                <ProductItem
                    product={item}
                    //key = {item.id} - хз что это...
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            ))}
        </div>   */}
      </div>
    );
};

export default Cart;