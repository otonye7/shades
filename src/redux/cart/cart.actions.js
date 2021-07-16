import CartActionTypes from './cart.types';

export const addItem = (item) => ({
    type: CartActionTypes.addItem,
    payload: item
})