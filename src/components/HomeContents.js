import $ from 'jquery'

const HomeContents = () => {
    return ( 
        <div className="contents">
            {/* --==== Home Section  ====-- */}
            <section id="home" className="scrollspy">
                <div className="row rel full-height">
                    <div className="container">
                        <div className="col s12 l6" id="home-txt-side">
                            <div className="home-minor-title pry-color type-effect">Bank on the Go &#8212;</div>
                            <h1 className="home-title type-effect">Welcome to your Bankless World </h1>
                            <p className="home-desc-txt pry-color hidden-xs-sm* type-effect">
                                Banking transactions from your phone at super fast speed in 
                                a secure manner with no hidden charges.
                            </p>
                            <div className="app-stores-wrapper hidden-xs-sm*">
                                <div>
                                    <button className="app-store google-store hover-scale">
                                        <img src={require("../images/google-btn.svg").default} alt="play store" />
                                    </button>
                                </div>
                                <div>
                                    <button className="app-store apple-store hover-scale">
                                        <img src={require("../images/apple-btn.svg").default} alt="apple store" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="col s12 m9 offset-m1 l5 offset-l1 pad0 rel" id="home-img-side">
                        <img src={require("../images/hand-phone-2.png").default} alt="phone in hand" className="full-width" />
                        <div className="small-floating-images">
                            <div className="floating-image fi-1">
                                <img src={require("../images/facial-recog.png").default} alt="Facial Recognition" className="f-img" />
                                <img src={require("../images/facial-recog-msg.png").default} alt="Facial Recognition message" className="f-img-msg" />
                            </div>
                            <div className="floating-image fi-2">
                                <img src={require("../images/gift.png").default} alt="Referal" className="f-img" />
                                <img src={require("../images/gift-msg.png").default} alt="Referal message" className="f-img-msg" />
                            </div>
                            <div className="floating-image fi-3">
                                <img src={require("../images/flash.png").default} alt="Fast Transactions" className="f-img" />
                                <img src={require("../images/flash-msg.png").default} alt="Fast Transactions message" className="f-img-msg" />
                            </div>
                            <div className="floating-image fi-4">
                                <img src={require("../images/fingerprint.png").default} alt="Fingerprint" className="f-img" />
                                <img src={require("../images/fingerprint-msg.png").default} alt="Fingerprint message" className="f-img-msg" />
                            </div>
                        </div>
                    </div>
            
                    {/* <div className="col s12 visible-xs-sm">
                        <div className="container">
                            <p className="home-desc-txt pry-color">
                                Banking transactions from your phone at super fast speed in
                                a secure manner with no hidden charges.
                            </p>
                            <div className="app-stores-wrapper flex-div">
                                <div>
                                    <button className="app-store google-store">
                                        <img src="images/google-btn.svg" alt="play store">
                                    </button>
                                </div>
                                <div>
                                    <button className="app-store apple-store">
                                        <img src="images/apple-btn.svg" alt="apple store">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            {/* --==== end of Home Section  ====-- */}

            {/* --==== Steps Section  ====-- */}
            <section id="steps-section">
                <div className="row">
                    <div className="container">
                        <div className="title-wrapper center">
                            <h4 className="sect-title bold-txt">Get Started in 3 Easy Steps</h4>
                            <span className="sub-title">
                                Send and receive money on the go. Get started for free in 2 minutes.
                            </span>
                        </div>
                        <div className="steps-block-wrapper">
                            <div className="steps-block step-1">
                                <div>
                                    <img src={require("../images/step-1.png").default} alt="step icon" />
                                    <h5 className="bold-txt">Download & Register</h5>
                                    <p>
                                        Download the app from <a href="#">AppStore</a> or <a href="#">Google Play</a>. 
                                        Register to get your Account Number instantly.
                                    </p>
                                    <div className="gs-link-div">
                                        <a href="#">Get Started <span className="next-arr">&#10095;</span></a>
                                    </div>
                                </div>
                                <img src={require("../images/step-pattern-1.svg").default} alt="patterns" className="step-pattern" />
                            </div>
                            <div className="steps-block step-2">
                                <div>
                                    <img src={require("../images/step-2.png").default} alt="step icon" />
                                    <h5 className="bold-txt">Fund your Account</h5>
                                    <p>
                                        Send money into your Airopay account via Bank Transferes, USSD or Card Debit.
                                    </p>
                                    <div className="gs-link-div">
                                        <a href="#">Get Started <span className="next-arr">&#10095;</span></a>
                                    </div>
                                </div>
                                <img src={require("../images/step-pattern-2.svg").default} alt="patterns" className="step-pattern" />
                            </div>
                            <div className="steps-block step-3">
                                <div>
                                    <img src={require("../images/step-3.png").default} alt="step icon" />
                                    <h5 className="bold-txt">Pay. Buy. Transact.</h5>
                                    <p>
                                        Pay for services in a secure, fast and easy manner.
                                    </p>
                                    <div className="gs-link-div">
                                        <a href="#">Get Started <span className="next-arr">&#10095;</span></a>
                                    </div>
                                </div>
                                <img src={require("../images/step-pattern-3.svg").default} alt="patterns" className="step-pattern" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--==== end of Steps Section  ====-- */}

            {/* --==== Benefits Section  ====-- */}
            <section id="benefits-section">
                <div className="row">
                    <div className="title-wrapper center">
                        <h4 className="sect-title bold-txt">Have a feel of your Bankless World.</h4>
                        <span className="sub-title">
                            We’ve designed Airopay so that anyone can bank easily. We got you covered
                        </span>
                    </div>
                     {/*-- Block for Desktop and Tablets --*/}
                    <div id="scrollHorizontalWrapper" className="hidden-xs-sm">
                        <div className="benefits-block-wrapper container" id="scrollHorizontal">
                            <div className="benefits-block benefits-1">
                                <div className="benefits-txt-div rel">
                                    <div className="container">
                                        <h5 className="benefits-title bold-txt">Automated Bill Payment</h5>
                                        <p className="benefits-desc">
                                            Automated bill payment is a feature on Airopay app, that give users a push
                                            notification and reminder on reoccuring bills like your Dstv subscriptions etc.
                                        </p>
                                        <div className="gs-link-div">
                                            <a href="#">Learn More <span className="next-arr">&#187;</span></a>
                                        </div>
                                    </div>
                                    <img src={require("../images/step-pattern-1.svg").default} alt="patterns" className="step-pattern" />
                                </div>
                                <div className="rel benefits-img-div">
                                    <img src={require("../images/user-1a.png").default} alt="user" className="benefits-user" />
                                    <img src={require("../images/user-notify-1.png").default} alt="notify" className="benefits-user-notify" />
                                </div>
                            </div>
                            <div className="benefits-block benefits-2">
                                <div className="benefits-txt-div rel">
                                    <div className="container">
                                        <h5 className="benefits-title bold-txt">Contactless Transactions</h5>
                                        <p className="benefits-desc">
                                            As an Airpay user, you get to make contactless transactions by scanning QR Codes at different
                                            marchant store
                                            for their
                                            menu and completing your payment(s) when convinced about your order(s)
                                        </p>
                                        <div className="gs-link-div">
                                            <a href="#">Learn More <span className="next-arr">&#187;</span></a>
                                        </div>
                                    </div>
                                    <img src={require("../images/step-pattern-3.svg").default} alt="patterns" className="step-pattern" />
                                </div>
                                <div className="rel benefits-img-div">
                                    <img src={require("../images/user-2a.png").default} alt="user" className="benefits-user" />
                                    <img src={require("../images/user-notify-2.png").default} alt="notify" className="benefits-user-notify" />
                                </div>
                            </div>
                            <div className="benefits-block benefits-3">
                                <div className="benefits-txt-div rel">
                                    <div className="container">
                                        <h5 className="benefits-title bold-txt">Remote Cashout</h5>
                                        <p className="benefits-desc">
                                            You can always goto our agent near your location for your deposit and withdrawal. All you need to do
                                            is scan
                                            the QR code
                                            from agents to withdraw your cash. We aim to make banking easy for you.
                                        </p>
                                        <div className="gs-link-div">
                                            <a href="#">Learn More <span className="next-arr">&#187;</span></a>
                                        </div>
                                    </div>
                                    <img src={require("../images/step-pattern-1.svg").default} alt="patterns" className="step-pattern" />
                                </div>
                                <div className="rel benefits-img-div">
                                    <img src={require("../images/user-3a.png").default} alt="user" className="benefits-user" />
                                    <img src={require("../images/user-notify-3.png").default} alt="notify" className="benefits-user-notify" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -- Block for Phones -- */}
                    <div className="benefits-mobile visible-xs-sm">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s4">
                                    <a className="active" href="#automated">Automated</a>
                                </li>
                                <li className="tab col s4">
                                    <a href="#contactless">Contactless</a>
                                </li>
                                <li className="tab col s4">
                                    <a href="#remote">Remote</a>
                                </li>
                            </ul>
                        </div>
                        <div id="automated" className="col s12">
                            <div className="benefits-block benefits-1">
                                <div className="rel benefits-img-div">
                                    <img src={require("../images/user-1.png").default} alt="user" className="benefits-user" />
                                    <img src={require("../images/user-notify-1.png").default} alt="notify" className="benefits-user-notify" />
                                </div>
                                <div className="benefits-txt-div rel">
                                    <div className="container">
                                        <h5 className="benefits-title bold-txt">Automated Bill Payment</h5>
                                        <p className="benefits-desc">
                                            Automated bill payment is a feature on Airopay app, that give users a push
                                            notification and reminder on reoccuring bills like your Dstv subscriptions etc.
                                        </p>
                                        <div className="gs-link-div">
                                            <a href="#">Learn More <span className="next-arr">&#187;</span></a>
                                        </div>
                                    </div>
                                    <img src={require("../images/step-pattern-1.svg").default} alt="patterns" className="step-pattern" />
                                </div>
                            </div>
                        </div>
                        <div id="contactless" className="col s12">
                            <div className="benefits-block benefits-2">
                                <div className="rel benefits-img-div">
                                    <img src={require("../images/user-2.png").default} alt="user" className="benefits-user" />
                                    <img src={require("../images/user-notify-2.png").default} alt="notify" className="benefits-user-notify" />
                                </div>
                                <div className="benefits-txt-div rel">
                                    <div className="container">
                                        <h5 className="benefits-title bold-txt">Contactless Transactions</h5>
                                        <p className="benefits-desc">
                                            As an Airpay user, you get to make contactless transactions by scanning QR Codes at different marchant
                                            store for their
                                            menu and completing your payment(s) when convinced about your order(s)
                                        </p>
                                        <div className="gs-link-div">
                                            <a href="#">Learn More <span className="next-arr">&#187;</span></a>
                                        </div>
                                    </div>
                                    <img src={require("../images/step-pattern-3.svg").default} alt="patterns" className="step-pattern" />
                                </div>
                            </div>
                        </div>
                        <div id="remote" className="col s12">
                            <div className="benefits-block benefits-3">
                                <div className="rel benefits-img-div">
                                    <img src={require("../images/user-3.png").default} alt="user" className="benefits-user" />
                                    <img src={require("../images/user-notify-3.png").default} alt="notify" className="benefits-user-notify" />
                                </div>
                                <div className="benefits-txt-div rel">
                                    <div className="container">
                                        <h5 className="benefits-title bold-txt">Remote Cashout</h5>
                                        <p className="benefits-desc">
                                            You can always goto our agent near your location for your deposit and withdrawal. All you need to do is
                                            scan the QR code
                                            from agents to withdraw your cash. We aim to make banking easy for you.
                                        </p>
                                        <div className="gs-link-div">
                                            <a href="#">Learn More <span className="next-arr">&#187;</span></a>
                                        </div>
                                    </div>
                                    <img src={require("../images/step-pattern-1.svg").default} alt="patterns" className="step-pattern" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --==== end of Benefits Section  ====-- */}

            {/* --==== Testimonies Section  ====-- */}
            <section id="testimonies-section">
                <div className="row">
                    <div className="title-wrapper center">
                        <h4 className="sect-title bold-txt">Don’t just take our word for it</h4>
                    </div>
                    <div className="testimonies-wrapper">
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    Quick response⚡⚡ app, super fast for transfers and electricity bill payment. I enjoy 💙 using this
                                    Airopay App.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/christiana.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Christiana Olaotan</h5>
                                        <span className="testifier-job">Nutritionist & Weight Loss Coach</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    This is a 💪🏽 great App, very easy, fast ⚡ and reliable to use. I mistakenly transferred some money 💰
                                    into a wrong
                                    account and I was refunded within less than 24 hours. I really love 💙 the app and will surely continue
                                    to use it.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/imoleoluwa.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Imoleoluwa Akindele</h5>
                                        <span className="testifier-job">Liquid Gas Distributor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    The app is 🥰 wonderful, is easy to use, I got my referral bonus instantly, 🤩 doesn’t take time to load
                                    and has
                                    everything one would require a banking app. I get an instant receipt sent to my mail after every
                                    transaction, which I
                                    can fall back to.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/chinwendu.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Chinwendu Uba</h5>
                                        <span className="testifier-job">Evagold Resources</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    The app has enough security 🔐 already to warrant having multiple accounts on both IOS and Android
                                    mobile devices💪🏽.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/imoleoluwa.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Bolaji Akinfenwa</h5>
                                        <span className="testifier-job">Baba Ijebu S/W Zonal Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    Quick response⚡⚡ app, super fast for transfers and electricity bill payment. I enjoy 💙 using this
                                    Airopay App.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/christiana.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Christiana Olaotan</h5>
                                        <span className="testifier-job">Nutritionist & Weight Loss Coach</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    This is a 💪🏽 great App, very easy, fast ⚡ and reliable to use. I mistakenly transferred some money 💰
                                    into
                                    a wrong
                                    account and I was refunded within less than 24 hours. I really love 💙 the app and will surely continue
                                    to
                                    use it.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/imoleoluwa.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Imoleoluwa Akindele</h5>
                                        <span className="testifier-job">Liquid Gas Distributor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    The app is 🥰 wonderful, is easy to use, I got my referral bonus instantly, 🤩 doesn’t take time to load
                                    and
                                    has
                                    everything one would require a banking app. I get an instant receipt sent to my mail after every
                                    transaction, which I
                                    can fall back to.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/chinwendu.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Chinwendu Uba</h5>
                                        <span className="testifier-job">Evagold Resources</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimony-block">
                            <div className="container">
                                <div className="testimony-txt">
                                    The app has enough security 🔐 already to warrant having multiple accounts on both IOS and Android
                                    mobile
                                    devices💪🏽.
                                </div>
                                <div className="testifier-details">
                                    <img src={require("../images/bolaji.png").default} alt="Testifier" className="testifier-img" />
                                    <div className="testifier-name-job">
                                        <h5 className="testifier-name">Bolaji Akinfenwa</h5>
                                        <span className="testifier-job">Baba Ijebu S/W Zonal Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --==== end of Testimonies Section  ====-- */}
        </div>
    );
}
 
export default HomeContents;