import { IProductGet } from "../dto/IProduct";

export const ADD_PRODUCTS_TO_SHOPPING_CART = "ADD_PRODUCTS_TO_SHOPPING_CART"; 
export const CLEAN_SHOPPING_CART = "CLEAN_SHOPPING_CART"; 
export const CLEAN_FILTER = "CLEAN_FILTER";
export const FILTER = "FILTER";


export  interface AddProductsToShoppingCartAction{
    type: typeof ADD_PRODUCTS_TO_SHOPPING_CART;
    payload:IProductGet;
}

export  interface CleanFilterAction{
    type: typeof CLEAN_FILTER;
    payload:IProductGet;
}

export  interface FilterAction{
    type: typeof FILTER;
    payload:string;
}

export  interface CleanShoppingCartAction{
    type: typeof CLEAN_SHOPPING_CART;
    payload:IProductGet;
}

export interface ProductState{
    productsToBuy: Array<IProductGet>,
    filter: string
}

export type ProductTypes = AddProductsToShoppingCartAction | 
                           CleanShoppingCartAction |
                           FilterAction |
                            CleanFilterAction
