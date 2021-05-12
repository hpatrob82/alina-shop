import Types from './Types';
import { handleAddToCart, handleRemoveCartItem, handleReducerCartItem } from './CartUtils';

const INITIAL_STATE = {
    cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            return {
                ...state,
                cartItems: handleAddToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            }
            case Types.REDUCE_CART_ITEM:
                return {
                    ...state,
                    cartItems: handleReducerCartItem({
                        prevCartItems: state.cartItems,
                        cartItemToReduce: action.payload
                    })
                }
            case Types.REMOVE_CART_ITEM:
                return {
                    ...state,
                    cartItems: handleReducerCartItem({
                        prevCartItems: state.cartItems,
                        cartItemToReduce: action.payload
                    })
                };
                case Types.CLEAR_CART:
                    return {
                        ...state,
                        ...INITIAL_STATE
                    }
                    default:
                        return state;
    }

}
export default CartReducer;