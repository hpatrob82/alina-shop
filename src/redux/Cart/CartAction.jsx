import Types from './Types';

export const addProduct = (nextCartItem) => ({
    type: Types.ADD_TO_CART,
    payload: nextCartItem
});

export const removeCartItem = (cartItem) => ({
    type: Types.REMOVE_CART_ITEM,
    payload: cartItem
});

export const reducerCartItem = (cartItem) => ({
    type: Types.REDUCE_CART_ITEM,
    payload: cartItem
});

export const clearCart= () => ({
    type: Types.CLEAR_CART
});

