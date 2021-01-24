/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import { IProductGet } from '../dto/IProduct'
import ProductDetails from '../screens/ProductDetails'
import './ProductCard.css'

type Props={
    product:IProductGet
}

export default (props:Props)=>{

    const [openDetails, setOpenDetails] = useState<boolean>(false);

    return (
         <>
        {
            openDetails &&
            <ProductDetails product={props.product} close={()=>{setOpenDetails(false)}} /> 
              }

        <div className="card">
            <img className="image" onClick={()=>{setOpenDetails(true)}} src={props.product.imageUrl} alt="Imagem"/>
            <p>{props.product.name}</p>
            <p>R$ {Number(props.product.price).toFixed(2).replaceAll('.',',')}</p>
        </div>
        </>
    )
}