import '../CSS/Footer.css'
export default function Footer() {
    return (
        <section className="footers">
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="footer-list">
                            <ul>
                                <li><b>ABOUT ZOMATO</b></li>
                                <li>Who We Are</li>
                                <li>Blog</li>
                                <li>Work With Us</li>
                                <li>Investor Relations</li>
                                <li>Report Fraud</li>
                                <li>Press Kit</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="footer-list">
                            <ul>
                                <li><b>ZOMAVERSE</b></li>
                                <li>Zomato</li>
                                <li>Blinkit</li>
                                <li>Feeding India</li>
                                <li>Hyperpure</li>
                                <li>Zomaland</li>
                                <li>Weather Union</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="footer-list">
                            <ul>
                                <li><b>FOR RESTAURANTS</b></li>
                                <li>Partner With Us</li>

                                <li>Apps For You</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="footer-list">
                            <ul>
                                <li><b>LEARN MORE</b></li>
                                <li>Privacy</li>
                                <li>Security</li>
                                <li>Terms</li>
                                <li>Sitemap</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-7">
                        <div className="footer-list">
                            <ul className='mb-3'>
                                <li><b>SOCIAL LINKS</b></li>
                            </ul>
                            <div className="icons mb-2">
                                <i className="fa-brands icon fa-facebook mx-1"></i>
                                <i className="fa-brands icon fa-instagram mx-1"></i>
                                <i className="fa-brands icon fa-linkedin mx-1"></i>
                                <i className="fa-brands icon fa-twitter mx-1"></i>
                                <i className="fa-brands icon fa-youtube mx-1"></i>
                            </div>
                            <div className="footer-logo">
                                <div>
                                    <img className='logo_1' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                                </div>
                                <div>
                                    <img className='logo_1' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_des mt-4">
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}