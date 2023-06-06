import React from 'react';
import './CartItem.css';

const CartItem = (addedItems) => {

    const {title, Image, amount, id, typeId, quantity} = addedItems.products;  

    return (
        <div className="order_item_card">          
          <div className="order_image__container">
            <img src={Image} alt={title} />
          </div>
          <h4 className="order_item__title">
            {title} x{quantity}
          </h4>
        </div>
    );
};

export default CartItem;
