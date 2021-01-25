/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import './ProductList.css';
import LoadingIcon from './LoadingIcon';
import { IProductGet } from '../dto/IProduct';
import ProductService from '../services/ProductService';
import ProductCard from './ProductCard';


export default (props: any) =>{

    const [productList, setProductList] = useState<JSX.Element[]>([]);
    const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
 

    useEffect(()=>{    
        getData();
    },[offset, limit])
   
    async function getData(){
        const productService = new ProductService();
        const data:Array<IProductGet> = await productService.getAll();
        const list = data.map((product:IProductGet)=>{          
            return (
                <ProductCard product={product}/>
            )
          })
          setShowLoadingIcon(false);
          setProductList(list);

     }


    return (   
        <>     
            <div className="list">
            
            {productList}
            
            </div>
            <div className="buttons">
              <button className="button-back" disabled={offset <= 0} 
                  onClick={()=> setOffset(offset - limit)}> {"<"} </button>
              <button className="button-next" disabled={productList.length < limit}
                  onClick={()=> setOffset(offset + limit)}>{">"}</button>
            </div>  
            <LoadingIcon show={showLoadingIcon}/>
         </>
    )
}