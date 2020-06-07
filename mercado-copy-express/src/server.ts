import 'dotenv/config';
import App from './app';
import * as NeDB from 'nedb';
import validateEnv from './utils/validateEnv';
import WishlistRoute from './routes/wishlist.route';
import SessionRoute from './routes/session.route'
import CartRoute from './routes/cart.route'
import ProductsRoute from './routes/products.route'

validateEnv();

export const database = new NeDB('./data');
database.loadDatabase();

const app = new App([
  new SessionRoute(),
  new WishlistRoute(),
  new CartRoute(),
  new ProductsRoute()
]);

app.listen();
