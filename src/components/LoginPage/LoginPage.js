import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <>
      <div className="loginpage-container">
        <img src="images/company_logo.jpg" alt="" />
        <div className="loginpage-inputs">
            <div>
            <label htmlFor="email">Enter your E-Mail</label><br />
            <input type="email" />
            </div>
            <br />
            <div>
            <label htmlFor="password">Enter your Password</label><br /> 
            <input type="password" />
            </div>
            <br />
            
                <Link to="home" className='login-btn'>Login</Link>
            
        </div>
        <div id="g_id_onload"
     data-client_id="858169787759-d1ggu123r9pklkhrk2r1rg478p3rotm9.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="http://localhost:3000"
     data-itp_support="true">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="pill"
     data-theme="filled_blue"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
</div>
      </div>
    </>
  )
}

export default LoginPage
