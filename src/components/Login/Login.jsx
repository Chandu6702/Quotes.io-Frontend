import React from 'react'
import Styles from './Login.module.css'

function Login() {
  return (
    <div className={Styles['container']}>
      <h2>Login</h2>
      <div className={Styles['login-card']}>
        <form>
          <label for='email'>Email:</label>
          <input type="email" name="email" placeholder='Enter Your Email' id={Styles['email']}/>
          <label for='password'>Password:</label>
          <input type="password" name="password" placeholder='Enter Your Password' id={Styles['password']}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login