import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { telegramUse } from '../../telegram/telegramm';
import {useCallback, useEffect} from "react";

const { getData } = require("../../db/db");
const products = getData();

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId, onClose, user} = telegramUse();   
    const totalAmount = addedItems.reduce((a,c)=>a + c.amount * c.quantity, 0);

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalAmount: totalAmount
        }
        tg.sendData(JSON.stringify(data));
    }, [addedItems, totalAmount])  
    
    
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

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
                text: `Купить`
            })
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
                text: `Купить`
            })
        } else {
            tg.MainButton.hide();            
        }
    }

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
