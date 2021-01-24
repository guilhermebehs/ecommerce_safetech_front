/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect, ConnectedProps} from 'react-redux';
import { IProductGet } from '../dto/IProduct';
import './ProductDetails.css';


const mapState = (state: any) => ({
  productsToBuy: state.product.productsToBuy
})

const mapDispatch = {
  addProduct: (product: IProductGet) => ({ type: 'ADD_PRODUCTS_TO_SHOPPING_CART', payload:product }),
  cleanShoppingCart: () => ({ type: 'CLEAN_SHOPPING_CART'})
}

const connector = connect(mapState, mapDispatch)

type Props = ConnectedProps<typeof connector> & {
  product: IProductGet
  close: Function
};


const ProductDetails= (props:Props) =>{
   

  let name = '';
  let price = '';
  let description = '';
  let imageUrl = '';

    
    if(props.product){
      name = props.product.name || '';
      price = Number(props.product.price).toFixed(2).replaceAll('.',',');
      description = props.product.description || '';
      imageUrl = props.product.imageUrl || '';
    }

    return (
           <Modal.Dialog >
            <Modal.Body>
            <button className="closeButton" onClick={()=> props.close()}>X</button>
            <h2 className="titleDetails">{name}</h2>
              <div className="details">
                <div className="imageDetails">
                  <img src={imageUrl} alt="imagem" />
                </div>
                <div className="infoDetails">
                  <p style={{  borderBottom: "3px solid #bbb"}}>{description}</p>
                  <p className="priceDetails">R$ {price}</p>
                    <button className="buyButton" onClick={()=> props.addProduct(props.product)}>Adicionar ao carrinho</button>
                </div>
              </div>
            </Modal.Body>
           </Modal.Dialog>
           )
}

export default connector(ProductDetails);  