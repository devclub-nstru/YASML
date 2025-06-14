import { createStore } from './Basicstore';
import { counterReducer } from './BasicReducer';

export const store = createStore(counterReducer, { value: 0 });
