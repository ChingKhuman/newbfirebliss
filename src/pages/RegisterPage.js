import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


function RegisterPage() {
  const [email, setEmail] =useState('')
  const [password, setPassword]= useState('')
  const [cpassword, setCpassword]= useState('')
  const auth= getAuth();
  
  const register=async ()=>{
    try{
     const result= await createUserWithEmailAndPassword(auth, email, password)
      alert('Registration success')
      setEmail('')
      setPassword('')
      setCpassword('')
    } catch(error) {
      console.log(error)
      alert('Registration failed')

    }
  }
  return (
    <div className='register-parent'>
    <div className='row'>
      <div className='col-md-5'>
       
      </div>
      <div className='col-md-5'>
        <div className='register-form'>
          <h2>Register</h2>
          <hr/>
          <input type='text' className='form-control' placeholder='email'
            value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          
          <input type='password' className='form-control' placeholder='password'
             value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
             <input type='text' className='form-control' placeholder='confirm password'
             value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>

             <button className='my-3' onClick={register}>REGISTER</button>
             <hr/>
             <Link to='/login'>Click here to Login</Link>
          

        </div>
      </div>
      </div>
    </div>
  )
}

export default RegisterPage