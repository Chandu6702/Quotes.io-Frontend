import React from 'react'
import Styles from './MyQuotes.module.css'

function MyQuotes() {
  return (
    <div id={Styles['container']}>
      <div id={Styles['search-bar']}>
        <input type='search' placeholder='Type here to search'/>
        <button type='submit'>Search</button>
      </div>
    </div>
  )
}

export default MyQuotes