import React from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
    return(
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign up</h1>
                <div className='loginsignup-feild'>
                    <input type='text' placeholder='Your Name'/>
                    <input type='email' placeholder='Your Email'/>
                    <input type='password' placeholder='password'/>
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
                <div className='loginsignup-agree'>
                    <input type='checkbox' name='' id=''/>
                     <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup