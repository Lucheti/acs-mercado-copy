import React, {Component} from 'react';
import './index.css'
import {Provider} from 'react-redux';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Cart from './components/Cart'
import BaseLayout from './components/BaseLayout'
import ShowProduct from './components/ShowProduct'
import ItemPage from './components/ItemPage'
import {createStore} from 'redux';
import allReducers from "./reducers";
import Wishlist from "./components/Wishlist";

let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <BaseLayout>
                        <Switch>
                            <Route exact path="/" component={() => <ItemPage productMapper={() => true}/>}/>
                            <Route path="/cart" component={Cart}/>
                            <Route path="/wishlist" component={Wishlist}/>
                            <Route path="/women" component={() => <ItemPage
                                productMapper={(product) => product.gender === "women"}/>}/>
                            <Route path="/men"
                                   component={() => <ItemPage productMapper={(product) => product.gender === "men"}/>}/>
                            <Route path="/clothes" component={() => <ItemPage
                                productMapper={(product) => product.category === "clothes"}/>}/>
                            <Route path="/accessories" component={() => <ItemPage
                                productMapper={(product) => product.category === "accessories"}/>}/>
                            <Route exact path="/products/:id" component={ShowProduct}/>
                        </Switch>
                    </BaseLayout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App


