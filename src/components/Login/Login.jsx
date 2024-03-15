import React from 'react'
import Styles from './Login.module.css'

function Login() {
  return (
    <div className={Styles['container']}>

      <img src='Computer login-pana.svg' />

      <div className={Styles['login-card']}>
        <h2>Log In</h2>
        <form>
          <input type="email" name="email" placeholder='Enter Your Email' id={Styles['email']} />
          <input type="password" name="password" placeholder='Enter Your Password' id={Styles['password']} />
          <button type="submit">Log In</button>
        </form>

      </div>

    </div>
  )
}

export default Login