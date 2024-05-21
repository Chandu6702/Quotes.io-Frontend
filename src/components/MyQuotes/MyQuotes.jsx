import React from 'react'
import Styles from './MyQuotes.module.css'
import Filter from './Filter/Filter.jsx';
import Card from "../utils/Card/Card.jsx"

function MyQuotes() {
  return (
    <div id={Styles['container']}>
      
      <div id={Styles['wrapper']}>

      <div id={Styles['menu']}>
        <Filter/>
        <button id={Styles['add-btn']}>Add new Quote +</button>
      </div>

      <div id={Styles['cards']}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      </div>
    </div>
  )
}

export default MyQuotes