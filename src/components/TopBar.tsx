import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import './TopBar.css';



export default class TopBar extends Component{

    render(){
        return(
            <div className="TopBar">
                <div className="pageTitle">Tudo Barato</div>
                <ShoppingCart/>
            </div>
        )
    }
}
