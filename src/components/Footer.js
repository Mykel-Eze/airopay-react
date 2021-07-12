import '../css/footer.css';

const Footer = () => {
    return ( 
        <footer id="contact" className="scrollspy">
            <div className="row">
                <div className="container">
                    <div className="col s12 pad0 flex-m-l-only">
                        <div className="col s12 m7 l8 pad0-xs">
                            <h1 className="signup-title bold-txt">
                                Sign up for free. <br className="hidden-xs-sm" />
                                Join millions of users.
                            </h1>
                        </div>
                        <div className="col s12 m5 l4 pad0-xs align-self-center">
                            <form className="flex-div signup-form">
                                <input type="tel" placeholder="+234 812 345 6789" id="phone-number" className="signup-inp" />
                                <button className="btn pry-btn signup-btn">Text me the App</button>
                            </form>
                        </div>
                    </div>
                    <div className="col s12 footer-hr-div pad0-xs">
                        <hr />
                    </div>
                    <div className="col s12 pad0-xs">
                        <div>Transact and make payments on the go with Airopay.</div>
                    </div>
                    <div className="col s12 pad0-xs f-links-wrapper">
                        <div className="ddf">
                            <h5 className="footer-title">Company</h5>
                            <ul className="footer-links-li">
                                <li>
                                    <a href="#" className="">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="">Terms</a>
                                </li>
                                <li>
                                    <a href="#" className="">Privacy Policiy</a>
                                </li>
                                <li>
                                    <a href="#" className="">Loan Terms</a>
                                </li>
                                <li>
                                    <a href="#" className="">Savings Terms</a>
                                </li>
                                <li>
                                    <a href="#" className="">Disclaimers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ddf">
                            <h5 className="footer-title">The App</h5>
                            <ul className="footer-links-li">
                                <li>
                                    <a href="#">All Features</a>
                                </li>
                                <li>
                                    <a href="#">Download for iOS</a>
                                </li>
                                <li>
                                    <a href="#">Download for Andriod</a>
                                </li>
                                <li>
                                    <a href="#">AiroMoni</a>
                                </li>
                                <li>
                                    <a href="#">AiroBiz</a>
                                </li>
                                <li>
                                    <a href="#">Loan Rates</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ddf">
                            <h5 className="footer-title">Join Us</h5>
                            <ul className="footer-links-li">
                                <li>
                                    <a href="#">Virtual Account Officers</a>
                                </li>
                                <li>
                                    <a href="#">Become an Airopreneur</a>
                                </li>
                                <li>
                                    <a href="#">Become a Marchant</a>
                                </li>
                                <li>
                                    <a href="#">Become an Agent</a>
                                </li>
                                <li>
                                    <a href="#">Join Our Workforce</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ddf">
                            <h5 className="footer-title">Contact</h5>
                            <ul className="footer-links-li">
                                <li>
                                    <a href="tel:+2348185870000">+234 (0) 818 587 0000</a>
                                </li>
                                <li>
                                    <a href="mailto:support@airopay">support@airopay</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ddf">
                            {/* <h5 className="footer-title">Social</h5> */}
                            <ul className="footer-links-li social-footer-links">
                                <li>
                                    <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-link">
                                        <img src={require("../images/instagram.svg").default} alt="instagram" className="hover-scale" />
                                    </a>
                                    <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="social-link">
                                        <img src={require("../images/facebook.svg").default} alt="facebook" className="hover-scale" />
                                    </a>
                                    <a href="https://linkedin.com/company/" target="_blank" rel="noreferrer" className="social-link">
                                        <img src={require("../images/linkedin.svg").default} alt="linkedin" className="hover-scale" />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-link">
                                        <img src={require("../images/twitter.svg").default} alt="twitter" className="hover-scale" />
                                    </a>
                                </li>
                                <li>
                                    <button className="app-store hover-scale">
                                        <img src={require("../images/google-btn-blue.svg").default} alt="google store" />
                                    </button>
                                </li>
                                <li>
                                    <button className="app-store hover-scale">
                                        <img src={require("../images/apple-btn-blue.svg").default} alt="apple store" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col s12 pad0-xs footer-hr-div">
                        <hr />
                    </div>
                    <div className="cookies-notice col pad0-xs s12">
                        <div className="p-div text-justify">
                            <div>
                                Airopay Limited is a company registered in Nigeria (RC. 1203139). All rights reserved. Airopay is licensed by the
                                Central Bank of Nigeria. “Airopay” and “Bankless World” are trademarks of Airopay Ltd Lekki, Lagos. Nigeria.
                            </div>
                            <div>
                                This website uses <a href="#" target="_blank" rel="noopener noreferrer"><b className="pry-color">Cookies ↗</b></a> We use cookies to personalise content and ads, to provide social media features and to
                                analyse our traffic. We also share information about your use of our site with our social media, advertising and
                                analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from
                                your use of their services. Check <a href="#" target="_blank" rel="noopener noreferrer"><b className="pry-color">Privacy Policy ↗</b></a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 pad0-xs copyright-div">
                        <p>
                            © Airopay Ltd. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;