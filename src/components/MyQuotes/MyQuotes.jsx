import React, { useState } from 'react'
import Styles from './MyQuotes.module.css'
import Filter from './Filter/Filter.jsx';
import Card from "../utils/Card/Card.jsx"
import AddQuote from './AddQuote/AddQuote.jsx';

function MyQuotes() {

  const [addQuote, setAddQuote] = useState(false);

  return (
    <div id={Styles['container']}>

      <div id={Styles['wrapper']}>

        <div id={Styles['menu']}>
          <Filter />
          <button id={Styles['add-btn']} onClick={() => setAddQuote(!addQuote)}>Add new Quote +</button>
        </div>

        {
          addQuote ?
            <AddQuote fun={setAddQuote} />
            : ""
        }

        <div id={Styles['cards-wrapper']}>
          <div id={Styles['cards']}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyQuotes