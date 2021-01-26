import {ADD_PRODUCTS_TO_SHOPPING_CART,
        CLEAN_SHOPPING_CART,
        CLEAN_FILTER,
        FILTER,
        ProductTypes,
       ProductState} from '../types';
import { act } from 'react-dom/test-utils';

const initialState: ProductState={
    productsToBuy:[],
    filter: ''
}

export default function productReducers
    (state = initialState, action:ProductTypes):ProductState
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
        case FILTER: {
            return  {
            ...state,
            filter:String(action.payload)
        }
        }
        case CLEAN_FILTER: {
            return  {
            ...state,
            filter:''
        }
        }
        default:
            return state
    }
}