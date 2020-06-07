import 'dotenv/config';
import App from './app';
import * as NeDB from 'nedb';
import validateEnv from './utils/validateEnv';
import WishlistRoute from './routes/wishlist.route';
import SessionRoute from './routes/session.route'

validateEnv();

export const database = new NeDB('./data');
database.loadDatabase();

const app = new App([
  new SessionRoute(),
  new WishlistRoute(),
]);

app.listen();
