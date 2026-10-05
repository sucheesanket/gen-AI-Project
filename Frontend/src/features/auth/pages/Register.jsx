import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router';
import Login from './Login';
import { useAuth } from '../hooks/useAuth';



const Register = () => {
  const {loading,handleRegister}=useAuth()
  const navigate=useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 const handleSubmit=async (e)=>{
    e.preventDefault();
    await handleRegister({username,email,password})
    navigate("/")


  }
  if(loading){
    return (<main><h1>Loading....</h1></main>)
  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} >
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
            onClick={(e)=>{setUsername(e.target.value)}}
            type="text" id='username' name='username' placeholder='Enter your username..' />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
            onClick={(e)=>{setEmail(e.target.value)}}
            type="email" id='email' name='email' placeholder='Enter email address..' />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            onClick={(e)=>{setPassword(e.target.value)}}
            type="password" id='password' name='password' placeholder='Enter password..' />
          </div>
          <button className='button primary-button'>Submit</button>
        </form>
        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    </main>
  )
}

export default Register
