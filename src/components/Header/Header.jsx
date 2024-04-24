import React, { useContext } from "react";
import Styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import {UserContext} from '../../Context/UserContext/UserContext.js'

function Header() {

  const {userAuth,setUserAuth} =useContext(UserContext)
  const navigate =useNavigate()

  function logout(e){
    e.preventDefault()
    localStorage.removeItem("user")
    setUserAuth(false)
    navigate("/")
  }

  return (
    <nav id={Styles["nav-bar"]}>
      <h1 id={Styles["logo"]}>Quotes.io</h1>
      <ul id={Styles['nav-list']}>
        <li>
          <NavLink to={""} className={({ isActive }) => {
            return Styles['nav-btn'] + ' ' + (isActive ? Styles['active'] : '')
          }} >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to={"/Quotes"} className={({ isActive }) => {
            return Styles['nav-btn'] + ' ' + (isActive ? Styles['active'] : '')
          }}>
            Quotes
          </NavLink>
        </li>

        <li>
          {
            userAuth?<NavLink to={"/my-quotes"} className={({ isActive }) => {
              return Styles['nav-btn'] + ' ' + (isActive ? Styles['active'] : '')
            }}>
              My Quotes
            </NavLink>:
          <NavLink to={"/Login"} className={({ isActive }) => {
            return Styles['nav-btn'] + ' ' + (isActive ? Styles['active'] : '')
          }}>
            Login
          </NavLink>
        }
        </li>

        <li>
          {
            userAuth?<NavLink to={"/"} className={({ isActive }) => Styles['nav-btn']
            } onClick={logout} >
              Logout
            </NavLink>:
          <NavLink to={"/SignUp"} className={({ isActive }) => {
            return Styles['nav-btn'] + ' ' + (isActive ? Styles['active'] : '')
          }}>
            SignUp
          </NavLink>
        }
        </li>
      </ul>
    </nav>
  );
}

export default Header;
