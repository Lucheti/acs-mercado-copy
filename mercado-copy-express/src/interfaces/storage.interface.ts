import { Product } from './product.interface';

export interface Storage {
  storageId: number;
  products: Product[];
  location: string;
  postalCode: string;
  city: string;
}
