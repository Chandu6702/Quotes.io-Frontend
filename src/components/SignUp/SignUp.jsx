import React, { useState,useContext } from 'react'
import axios from 'axios'
import Styles from './SignUp.module.css'
import {UserContext} from '../../Context/UserContext/UserContext.js'

function SignUp() {

  const {setUser,setUserAuth}=useContext(UserContext)

  const[signupInfo,setSignupInfo]=useState({
    email:'',
    password:'',
    repassword:''
  })

  function handleChange(e){
    setSignupInfo({...signupInfo,[e.target.name]:e.target.value});
  }

  async function handleSubmit(e){
    e.preventDefault();

    if(signupInfo.email==="" || signupInfo.password==="" || signupInfo.repassword===""){
      alert("Enter Required Fields")
      return
    }

    if(signupInfo.password!==signupInfo.repassword){
      alert("Password doesn't match")
      return 
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!signupInfo.email.match(validRegex)){
      alert("Invalid Email");
      return
    }

    const response=await axios.post('http://127.0.0.1:3000/signup',signupInfo);

    if(!response.data.status){
      alert(response.data.error)
      return;
    }

    alert("Account created Successfully");

    setUserAuth(true);
    setUser({email:signupInfo.email})
    localStorage.setItem("user",signupInfo.email);

  }

  return (
    <div className={Styles['container']}>

      <img src='/signup.svg' />

      <div className={Styles['signup-card']}>
        <h2>Sign Up</h2>
        <form>
          <input type="email" name="email" placeholder='Enter Your Email' id={Styles['email']} onChange={handleChange} />
          <input type="password" name="password" placeholder='Enter Your Password' id={Styles['password']} onChange={handleChange}/>
          <input type="text" name="repassword" placeholder='Enter Your Password Again' id={Styles['password']} onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>


    </div>
  )
}

export default SignUp