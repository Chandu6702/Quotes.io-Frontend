import React from "react";
import Styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav id={Styles["nav-bar"]}>
      <h1 id={Styles["logo"]}>Quotes.io</h1>
      <ul id={Styles['nav-list']}>
        <li>
          <NavLink to={""} className={({isActive})=>{
            return Styles['nav-btn']+' '+(isActive?Styles['active']:'')
          } } >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to={"/Quotes"} className={({isActive})=>{
            return Styles['nav-btn']+' '+(isActive?Styles['active']:'')
          } }>
            Quotes
          </NavLink>
        </li>

        <li>
          <NavLink to={"/Login"} className={({isActive})=>{
            return Styles['nav-btn']+' '+(isActive?Styles['active']:'')
          } }>
            Login
          </NavLink>
        </li>

        <li>
          <NavLink to={"/SignUp"} className={({isActive})=>{
            return Styles['nav-btn']+' '+(isActive?Styles['active']:'')
          } }>
            SignUp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
