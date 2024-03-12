import React from 'react'
import Styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className={Styles['nav-bar']}>
        <h1 className={Styles['logo']}>Quotes.io</h1>
        <NavLink to={''} className={Styles['nav-btn']}>Home</NavLink>
        <NavLink to={'/Quotes'} className={Styles['nav-btn']}>Quotes</NavLink>
        <NavLink to={'/Login'} className={Styles['nav-btn']}>Login</NavLink>
        <NavLink to={'/SignUp'} className={Styles['nav-btn']}>SignUp</NavLink>
      </nav>
  )
}

export default Header