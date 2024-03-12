import React from 'react'
import Styles from './LoginCard.module.css'

function LoginCard() {
  return (
    <div>
        <h2>Login</h2>
        <form>
            <input type="email" placeholder='Enter Your Email'>Email</input>
            <input type="password" placeholder='Enter Your Password'>Password</input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login-card