import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] =useState('')
  const [password, setPassword]= useState('')
  const auth = getAuth();

  const login=async ()=>{
    try{
     const result= await signInWithEmailAndPassword(auth, email, password)
     localStorage.setItem('currentUser', JSON.stringify(result))

      alert('Login success')
      window.location.href='/'
    } catch(error) {
      console.log(error)
      alert('Login failed')

    }
  }
  
  return (
    <div className='login-parent'>
    <div className='row'>
      <div className='col-md-5'>
       
      </div>
      <div className='col-md-5'>
        <div className='register-form'>
          <h2>Login</h2>
          <hr/>
          <input type='text' className='form-control' placeholder='email'
            value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          
          <input type='password' className='form-control' placeholder='password'
             value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
             

             <button className='my-3' onClick={login}>Login</button>
             <hr/>
             <Link to='/Register'>Click here to Register</Link>
          

        </div>
      </div>
      </div>
    </div>
  )
}

export default LoginPage