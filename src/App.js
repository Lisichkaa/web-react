import './App.css';
import {useEffect} from "react";
import {telegramUse} from "./telegram/telegramUse";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";

function App() {
    const {tg} = telegramUse();

    useEffect(() => {
        tg.ready();
    }, [tg])

    return (
        <div className="App">
           { <Routes>
                <Route index element={<ProductList />}/>
            </Routes> }
        </div>
    );
}

export default App;
