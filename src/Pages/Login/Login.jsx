import React, { useState } from 'react'
import "./login.css"
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'

const Login = () => {

  const user_auth = async (event)=>{
    event.preventDefault()
    if (SignState === "Sign In"){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [SignState, setSignState] = useState('Sign In')

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{SignState}</h1>
        <form action="">
          {SignState==="Sign Up"?<input value={name} onChange={(e)=>{
            setName(e.target.value)
          }} type="text" placeholder='Your Name' />:<></>}
          <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={user_auth} type='submit'>{SignState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {SignState==='Sign In'?<p>New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up Now</span></p>
          :<p>Already have account? <span onClick={()=>{setSignState('Sign In')}}>Sign in now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login