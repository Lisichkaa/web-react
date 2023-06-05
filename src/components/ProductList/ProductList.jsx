import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { telegramUse } from '../../telegram/telegramm';
import {useCallback, useEffect} from "react";
//import axios from "axios";
// import squirrelImg from "../../images/belochka.jpg";
// import coffeeImg from "../../images/coffee.png";
// import questionImg from "../../images/question.png";
// import cakeImg from "../../images/cake.jpg";

// const products = [
//     { title: "Белочка", amount: 100, Image: squirrelImg, id:1 },
//     { title: "Вопросики", amount: 1000, Image: questionImg,id:2 },
//     { title: "Булочка с листиком", amount: 99999, Image: cakeImg, id:6 },
//     { title: "Кофе", amount: 10000, Image: coffeeImg , id:3},
//     { title: "Булочка с листиком", amount: 0, Image: cakeImg, id:5 },
// ]

const { getData } = require("../../db/db");
const products = getData();

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId, onClose} = telegramUse();

    

//      const onSendData = useCallback(() => {
//         const data = {
//             //products: addedItems,
//             //totalPrice: getTotalPrice(addedItems),
//             queryId: queryId ,
//         }
//         fetch('http://77.105.172.214:8000/web-data', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         })
//     }, [queryId])

//    const onSendData = useCallback(() => {
//         const article = {
//             queryId: queryId
//         };
//         const headers = { 
//             'Content-Type': 'application/json'
//         };

//         axios.post("http://77.105.172.214:8000/web-data", article, {headers} ).then((response) => {
//       console.log(response.status, response.data.token);
//     });
        // axios.post('http://77.105.172.214:8000/web-data', article, { headers })
        // .then(response => this.setState({ articleId: response.data.id })) 

//         fetch('http://77.105.172.214:8000/web-data', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         })
//     })

    // const onSendData = useCallback(() => {
    //     const data = {
    //         user
    //     }
    //     tg.sendData(JSON.stringify(data));
    // }, [user])
    
    // useEffect(() => {
    //     tg.onEvent('mainButtonClicked', onSendData)
    //     return () => {
    //         tg.offEvent('mainButtonClicked', onSendData)
    //     }
    // }, [onSendData])

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
                text: `Купить ${queryId}`
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
                text: `Купить ${queryId}`
            })
        } else {
            tg.MainButton.hide();            
        }
    }

    return (
        <>
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
        </>
    );
};

export default ProductList;
