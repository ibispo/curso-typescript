import { Mostravel } from './Mostravel';
import { Igualavel } from './Igualavel';

export interface MyObject<T> extends Mostravel, Igualavel<T> {


    
}