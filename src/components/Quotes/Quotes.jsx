import React from 'react'
import Styles from './Quotes.module.css'
import Card from './Card/Card.jsx'
import Filter from './Filter/Filter.jsx'

function Quotes() {
  return (
    <div id={Styles['container']}>
      <div id={Styles['search-bar']}>
        <input type='search' placeholder='🔎Type here to search'/>
        <button type='submit'>Search</button>
      </div>
      <div id={Styles['section']}>
        <div id={Styles['filter']}>
            <Filter/>
        </div>
        <div id={Styles['cards']}>
            <Card text="hgghuybghhgbbhhnbbbbb"/>
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