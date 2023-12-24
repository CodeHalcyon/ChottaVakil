import React from 'react'
import FooterIcon from './footer_icons';
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h1>Chota Vakil</h1>
                </div>
                <div className="footer-links">
                <ul>
                    <div>
                    <Link to="home"><li>Home</li></Link>
                    <Link to="videos"><li>Videos</li></Link>
                    <Link to="games"><li>Games</li></Link>
                    <Link to="about"><li>About Us</li></Link>
                    </div>
                </ul>
                </div>
                <div className="footer-contacts">
                    <div>Contact: 1234567890</div>
                    <div>E-Mail: company@gmail.com</div>
                    <div>Address: Hyderabad</div>
                </div>
                <div className="footer-right">
                    <a href="#">
                        <FooterIcon img="images/instagram.png"/></a>
                        <a href="">
                        <FooterIcon img="images/facebook.png"/>
                        </a>
                        <a href="">
                        <FooterIcon img="images/linkedin.png"/>

                        </a>
                </div>
            </div>
        </div>
    );
}