import React from 'react'
import { useState } from'react'

export default function AuthForm() {
    const [isLogin, setLogin] = useState(true)
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle '>
                <button className={isLogin ? 'active' : ""} onClick={() => setLogin
                    (true)}>Login</button>
                <button className={!isLogin ? 'active' : ""} onClick={()=> setLogin
                    (false)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Sign Up</h2>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <a href='#'> Forget Password</a>
                <button>Login </button>
                <p> Not a Member</p> <a href='#' onClick={()=> setLogin(false)}>SignUp</a>
            </div>
            </> : <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='Confirm Password' />


                <a href='#'> Forget Password</a>
                <button>Login </button>
                <p> Not a Member</p> <a href='#' onClick={()=> setLogin(false)}>SignUp</a>
            </div>
            </>}
        </div>
    </div>
  )
}
