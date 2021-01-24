/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './LoadingIcon.css';
import ReactLoading from 'react-loading';



export default (props:any)=>{

    const styleDiv = {
                   marginTop: props.show ? 50 : 0,
                   display:"flex", 
                   justifyContent:"center"
                    } 

    return (
        <div style={styleDiv}>
           {props.show && 
              <ReactLoading type='spin' color='red' height={50} width={50} />}
        </div>
    )
}