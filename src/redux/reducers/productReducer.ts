import {ADD_PRODUCTS_TO_SHOPPING_CART,
        CLEAN_SHOPPING_CART,
       ShoppingCartTypes,
       ProductState} from '../types';

const initialState: ProductState={
    productsToBuy:[],
}

export default function productReducers
    (state = initialState, action:ShoppingCartTypes):ProductState
{
    switch(action.type){
        case ADD_PRODUCTS_TO_SHOPPING_CART: {
                return  {
                ...state,
                productsToBuy:[...state.productsToBuy,action.payload]
            }
        }
        case CLEAN_SHOPPING_CART: {
            return  {
            ...state,
            productsToBuy:[]
        }
        }
        default:
            return state
    }
}