import Button from "../Button/Button";
import './ProductItem.css';
import React, {useState} from 'react';

const ProductItem = ({product, onRemove, onAdd}) => {
    const [count, setCount] = useState(0);
    const {title, Image, amount,id} = product;     

    const handleIncrement = () => {               
        setCount(count + 1);             
        onAdd(product);
      };

    const handleDecrement = () => {              
        setCount(count - 1);
        onRemove(product);
      };

    return (
        <div className="itemCard">
          <span
            className={`${count !== 0 ? "itemCard__badge" : "itemCard__badge--hidden"}`} //это иконка количества 
          >{count}
          </span>
          <div className="image__container">
            <img src={Image} alt={title} />
          </div>
          <h4 className="itemCard__title">
            {title}
          </h4>          
    
          <div className="btn-container">            
            { (count === 0 && title != "23 награды на профиль") ? (              
              <div>   
                <Button title={"Add"} type={"add"} onClick={handleIncrement}/>  
               </div>
            ) : (
              <Button title={"-"} type={"remove"} onClick={handleDecrement} /> 
            )}   
            { (count === 0 && title === "23 награды на профиль") ? (  
                <Button title={"Add"} type={"add"} onClick={handleIncrement}/> 
            ) : (
              <div>              
              <Button title={"-"} type={"remove"} onClick={handleDecrement} />         
              <Button title={"+"} type={"add"} onClick={handleIncrement} />   
              </div>
            )}     
          </div>
        </div>
    );
};

export default ProductItem;
