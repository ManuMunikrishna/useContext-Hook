import React, { useState, useContext } from 'react'
import { LoginContext } from './LoginContext'

const Login = () => {
    const {setShowProfile, setUsername}= useContext(LoginContext)
    
    const userAction =()=>{
        setShowProfile(true)
    }
  return (
    <div>
        <input type="text"
        placeholder='username'
        onChange={(e)=>{
            setUsername (e.target.value)
        }}
         />

        <input type="text"
        placeholder='password' />

        <button onClick={userAction}>Login</button>

        
    </div>
  )
}

export default Login