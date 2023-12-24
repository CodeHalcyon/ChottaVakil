import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <nav>
            <div className="nav-left">
                <Link to="/" className='headLink'>
                    {/* <h1>Company Name</h1> */}
                    <img className='company-logo' src="images/company_logo.jpg" alt="" />
                    </Link>
            </div>
            <div className="nav-right">
                <ul>
                    <div>
                    <Link to="home"><li>Home</li></Link>
                    <Link to="videos"><li>Videos</li></Link>
                    <Link to="games"><li>Games</li></Link>
                    <Link to="about"><li>About Us</li></Link>
                    </div>
                    <div>
                    <Link to="profile"><li><img src="images/panda.png" alt="profile pic" /></li></Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

