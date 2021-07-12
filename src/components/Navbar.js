import logo from '../images/airopay-logo.svg';
import '../css/navbar.css';

import $ from 'jquery'

const Navbar = () => {
    $(window).scroll(function () {
        $('nav.trans-nav').toggleClass('scrolled-nav', $(this).scrollTop() > 50);
    });
    
    return ( 
        <nav className="trans-nav">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#home" className="brand-logo">
                        <img src={logo} alt="Airopay" className="logo" />
                    </a>
        
                    <ul id="nav-mobile" className="right hide-on-med-and-down ul-nav">
                        <li>
                            <a href="#sect-1" className="">About</a>
                        </li>
                        <li>
                            <a href="#faq" className="">FAQ</a>
                        </li>
                        <li>
                            <a href="#contact" className="">Contact</a>
                        </li>
                        <li>
                            <button className="nav-pry-btn-2 btn pointer">Sign in</button>
                        </li>
                        <li>
                            <button className="nav-pry-btn black-bg btn pointer">
                                Get the App <span className="next-arr">&#10095;</span>
                            </button>
                        </li>
                    </ul>
                    <ul className="right dn-mobile ul-nav">
                        {/* <li>
                            <button className="nav-pry-btn-2 btn pointer">Sign in</button>
                        </li> */}
                        <li>
                            <button className="nav-pry-btn black-bg btn pointer">
                                Get the App <span className="next-arr">&#10095;</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;