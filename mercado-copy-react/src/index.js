import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Cart from './components/Cart'
import BaseLayout from './components/BaseLayout'
import ShowProduct from './components/ShowProduct'
import registerServiceWorker from './registerServiceWorker'
import ItemPage from './components/ItemPage'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={() => <ItemPage productMapper={() => true} />} />
        <Route path="/cart" component={Cart} />
        <Route path="/women" component={() => <ItemPage productMapper={(product) => product.gender === "women"} />}  />
        <Route path="/men"component={() => <ItemPage productMapper={(product) => product.gender === "men"} />} />
        <Route path="/clothes" component={() => <ItemPage productMapper={(product) => product.category === "clothes"} />}  />
        <Route path="/accessories" component={() => <ItemPage productMapper={(product) => product.category === "accessories"} />} />
        <Route exact path="/products/:id" component={ShowProduct} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
