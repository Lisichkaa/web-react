import './App.css';
import {useEffect} from "react";
import {telegramUse} from "./telegram/telegramm";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
    const {tg} = telegramUse();

    useEffect(() => {
        tg.ready();
    }, [tg])

    return (
        <div className="App">
           { <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'Cart'} element={<Cart />}/>
            </Routes> }
        </div>
    );
}

export default App;
