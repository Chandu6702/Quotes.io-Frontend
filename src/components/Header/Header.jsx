import React from 'react'
import Styles from './Header.module.css'

function Header() {
  return (
    <nav>
      <h1 className={Styles['logo']}>Quotes.io</h1>
      <div className={Styles['btn-box']}>
        <button className={Styles['btn']}>Home</button>
        <button className={Styles['btn']}>Quotes</button>
        <button className={Styles['btn']}>Login</button>
        <button className={Styles['btn']}>SignUp</button>
      </div>
    </nav>
  )
}

export default Header