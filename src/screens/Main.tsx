import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import TopBar from '../components/TopBar';
import './Main.css';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Search from '../components/Search';

type MyProps={};
    
type MyState = {};


export default class Main extends Component<MyProps, MyState>{
   


    render(){
        return(
            <Provider store={store}>
               <div className="Main">   
                    <TopBar/> 
                    <Search />  
                    <ProductList/>
                </div>
                </Provider>)
    }
}