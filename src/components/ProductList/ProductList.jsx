import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { telegramUse } from '../../telegram/telegramm';
import {useCallback, useEffect} from "react";
import {useNavigate} from 'react-router-dom'

const { getData } = require("../../db/db");
const products = getData();

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId, onClose, user} = telegramUse();   
    const totalAmount = addedItems.reduce((a,c)=>a + c.amount * c.quantity, 0);
    
    var data = {
        products: addedItems,
        totalAmount: totalAmount
    };
    sessionStorage.setItem('cart', JSON.stringify(data));   
    sessionStorage.setItem('items', addedItems);
    sessionStorage.setItem('total', totalAmount);
    

    const navigate = useNavigate();
    const goNext = () => navigate('ordersummary');  
    
    useEffect(() => {
        tg.onEvent('mainButtonClicked', goNext)
        return () => {
            tg.offEvent('mainButtonClicked', goNext)
        }
    }, [goNext])


    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.map( (item) =>
            item.id === product.id ? {...alreadyAdded, quantity: alreadyAdded.quantity + 1} : item)
      } else {
            newItems = [...addedItems, {...product, quantity: 1}];
        }

        setAddedItems(newItems)

        if(newItems.length >= 1) {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Continue`
              });            
        } else {
            tg.MainButton.hide();            
        }
    }

    const onRemove = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded.quantity === 1) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = addedItems.map(item => 
                item.id === product.id ? {...alreadyAdded, quantity: alreadyAdded.quantity - 1} : item      
              );           
        }

        setAddedItems(newItems)

        if(newItems.length >= 1) {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Continue`
              });
        } else {
            tg.MainButton.hide();            
        }
    }
    tg.MainButton.setParams({
        text: `Continue`
      });

    return (
        <>
        <h1 className="heading">Order points!</h1>
        <div className='products__container'>
            {products.map(item => (
                <ProductItem
                    product={item}
                    //key = {item.id} - хз что это...
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            ))}
        </div>     
        <div className="totalAmount__container">     
          <br /> 
          <div className="total">Total amount of points: {totalAmount}</div>                        
        </div> 
        </>
    );
};

export default ProductList;
