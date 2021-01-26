/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import './ShoppingCart.css';
import {CgShoppingCart} from 'react-icons/cg';
import { Dropdown } from 'react-bootstrap';

const mapState = (state:any) => ({
    productsToBuy: state.product.productsToBuy
  })

  const mapDispatch = {
   cleanShoppingCart: () => ({ type: 'CLEAN_SHOPPING_CART'})
 }

  const connector = connect(mapState, mapDispatch)

  type PropsFromRedux = ConnectedProps<typeof connector>

  type Props = PropsFromRedux;


const ShoppingCart = (props:Props) =>{

    function closeShoppingCart(){
       if(props.productsToBuy.length > 0){
          props.cleanShoppingCart();
          alert('Compra efetuada com sucesso!')
       }
    }

    return (<>
    
            <Dropdown >
         <Dropdown.Toggle variant="success" id="dropdown-basic">
         <div className="ShoppingCart">
               <span style={{marginLeft:'12px'}}>
                  {props.productsToBuy.length}
               </span><CgShoppingCart size={20} style={{color:'white'}}/>
            </div>
         </Dropdown.Toggle>
         
         <Dropdown.Menu>
         <Dropdown.Item ><div className="arrow-up"></div></Dropdown.Item>
         <Dropdown.Item  onClick={()=>{ closeShoppingCart()}}>Encerrar Compra</Dropdown.Item>
         <Dropdown.Item >Preferências </Dropdown.Item> 
         <Dropdown.Item >Sair </Dropdown.Item>   
         </Dropdown.Menu>
         </Dropdown>
      </>
            )
}

export default connector(ShoppingCart);  