import React from 'react'
import Styles from './SignUp.module.css'
function SignUp() {
  return (
  <div className={Styles['container']}>
    <div className={Styles['heading']}>
      <h2>SignUp</h2>
      <div className={Styles['signup-card']}>
        <form>
          <label for='Your-name'>Name:
          <input type="text" name="Your-name" placeholder="enter your name" id={Styles['Your-name']} />
          </label>
          <label for='email'>Email:
          <input type="email" name="email" placeholder='Enter Your Email' id={Styles['email']}/>
          </label>
          <label for='password'>Password:
          <input type="password" name="password" placeholder='Enter Your Password' id={Styles['password']}/>
          </label>
          <label for='retype-password'>ReType-Password:
          <input type="password" name="retypepassword" placeholder='Re-enter the Password' id={Styles['Retype-password']}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp