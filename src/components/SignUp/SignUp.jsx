import React from 'react'
import Styles from './SignUp.module.css'
function SignUp() {
  return (
    <div className={Styles['container']}>

      <div className={Styles['login-card']}>
        <h2>Sign Up</h2>
        <form>
          <input type="email" name="email" placeholder='Enter Your Email' id={Styles['email']} />
          <input type="password" name="password" placeholder='Enter Your Password' id={Styles['password']} />
          <input type="text" name="repassword" placeholder='Enter Your Password Again' id={Styles['password']} />
          <button type="submit">Submit</button>
        </form>
      </div>

      <img src='/reading.svg' />

    </div>
  )
}

export default SignUp