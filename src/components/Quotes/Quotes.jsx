import React from 'react';
import Styles from './Quotes.module.css';
import Card from './Card/Card.jsx';
import Filter from './Filter/Filter.jsx';
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from 'react-router-dom';


function Quotes() {

  const [searchParam,setSearchParam]=useSearchParams();

  const handleChange=(e)=>{
    setSearchParam((prev)=>{
        prev.set("search",e.target.value);
        return prev;
      });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(searchParam.get("search"));
  }

  return (
    <div id={Styles['container']}>

      <div id={Styles['search-bar']}>
        <label className={Styles['wrapper']}> 
        <FiSearch color='grey' size="25"/>
        <input type='search' placeholder='Type here to search' value={searchParam.get("search")} onChange={handleChange} maxLength="50"/>
        </label>
        <button type='submit' onClick={handleSubmit}>Search</button>
      </div>

      <div id={Styles['section']}>
        <div id={Styles['filter']}>
            <Filter/>
        </div>
        <div id={Styles['cards']}>
            <Card text="hgghuybghhgbbhhnbbbbbffsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"/>
            <Card text="khjhmvbcj jhgkvjhg.b.lkhkhkhk"/>
            <Card text="hgghuybghhgbbhhjvjmbjhkh,n,j"/>
            <Card text="hgghuybghnvjbvhn jbmmb"/>
            <Card text="hgghuybkbhbcb  vhigvjgh vbvjbcb"/>
            <Card text="hgghuybkbhbcb  vhigvjgh vbvjbcb"/>
        </div>
      </div>
    </div>
  )
}

export default Quotes