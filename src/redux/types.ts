import { IProductGet } from "../dto/IProduct";

export const ADD_PRODUCTS_TO_SHOPPING_CART = "ADD_PRODUCTS_TO_SHOPPING_CART"; 
export const CLEAN_SHOPPING_CART = "CLEAN_SHOPPING_CART"; 


export  interface AddProductsToShoppingCartAction{
    type: typeof ADD_PRODUCTS_TO_SHOPPING_CART;
    payload:IProductGet;
}

export  interface CleanShoppingCartAction{
    type: typeof CLEAN_SHOPPING_CART;
    payload:IProductGet;
}

export interface ProductState{
    productsToBuy: Array<IProductGet>,
}

export type ShoppingCartTypes = AddProductsToShoppingCartAction | CleanShoppingCartAction
