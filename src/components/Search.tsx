import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './Search.css';

const mapState = (state: any) => ({
    filter: state.product.filter,
  })
  
  const mapDispatch = {
    cleanFilter: () => ({ type: 'CLEAN_FILTER'}),
    setFilter: (value:string)=>({type: 'FILTER',payload: value})
  }
 
   const connector = connect(mapState, mapDispatch)
 
   type Props = ConnectedProps<typeof connector>
 
 

const Search = (props:Props) =>{

    const [filter, setFilter] = useState('');

    function filterSearch(){
        props.setFilter(filter);
    }

    function cleanFilter(){
        props.cleanFilter();
        setFilter('');
    }
  
    return (
        <div className="Search">
            <input placeholder="Digite o título" value={filter} 
                className="inputSearch" type="text"
                onChange={(e)=> setFilter(e.target.value)}  />
            <button onClick={()=> filterSearch()} 
                      disabled={filter.length === 0}
                      className="buttonSearch">Pesquisar</button>
            <button onClick={()=> cleanFilter()} 
                      className="buttonSearch">Limpar </button>
        </div>
    )
}

export default connector(Search);