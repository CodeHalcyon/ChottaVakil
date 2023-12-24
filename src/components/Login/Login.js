import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="login-container">
                <img className='pfp' src="images/panda.png" alt="" />
                <br />
                <table>
                <tr>
                        <td><label for="fname">First name:</label>
                            <input className='inputs'  type="text" id="fname" name="fname" /></td>
                        <td><label for="fname">Last name:</label>
                            <input className='inputs'  type="text" id="fname" name="fname" /></td>
                    </tr>

                    <tr>
                        <td><label for="fname">D.O.B:</label>
                            <input className='inputs'  type="date" id="fname" name="fname" /></td>
                        <td><label for="fname">E-Mail:</label>
                            <input  className='inputs' type="email" id="fname" name="fname" /></td>
                    </tr>

                    <tr>
                        <td><label for="fname">City name:</label>
                            <input className='inputs'  type="text" id="fname" name="fname" /></td>
                        <td><label for="fname">State name:</label>
                            <input className='inputs'  type="text" id="fname" name="fname" /></td>
                    </tr>
                    <tr>
                    <td><button type="submit">Save</button></td>
                        
                    </tr>
                </table>

            </div>
        </>
    )
}

export default Login
