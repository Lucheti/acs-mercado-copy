import { Product } from './product';

export interface Storage {
  storageId: number;
  products: Product[];
  location: string;
  postalCode: string;
  city: string;
}
