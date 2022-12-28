// import Functionality
import Link from 'next/link';
import Image from 'next/image';

import ScrollTop from './ScrollTop';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import footerLogo from '../public/assets/PBP-Footer-logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-container-content">
                    <div className='row'>
                        <div className="column-four quick-links">
                            <div>
                                <h4 className="footer-headers">Quick Links</h4>
                                <li><Link className="footer-links" href="/">Home</Link></li>
                                <li><Link className="footer-links" href="/AboutUs">About Us</Link></li>
                                <li><Link className="footer-links" href="/ContactUs">Our News</Link></li>
                                <li><Link className="footer-links" href="/ContactUs">Contact Us</Link></li>
                            </div>
                        </div>
                        <div className="column-four quick-links">
                            <div>
                                <h4 className="footer-headers">Our Services</h4>
                                <li><Link className="footer-links" href="/MonthToMonth">Brand Design</Link></li>
                                <li><Link className="footer-links" href="/WebsiteDesign">Website Development</Link></li>
                                <li><Link className="footer-links" href="/GraphicDesign">Digital Marketing</Link></li>
                                <li><Link className="footer-links" href="/GraphicDesign">SEO Services</Link></li>
                                <li><Link className="footer-links" href="/GraphicDesign">PPC Marketing</Link></li>
                                <li><Link className="footer-links" href="/GraphicDesign">Social Media Marketing</Link></li>
                            </div>
                        </div>
                        <div className="column-four quick-links">
                            <div>
                                <h4 className="footer-headers">Boring Admin</h4>
                                <li><Link className="footer-links" href="/">Domain Hosting</Link></li>
                                <li><Link className="footer-links" href="/AboutUs">Privacy Policy</Link></li>
                                <li><Link className="footer-links" href="/ContactUs">Terms and Conditions</Link></li>
                            </div>
                        </div>
                        <div className="column-four">
                            <div className="footer-up">
                                <p className="footer-promo-text">Pixel By Pixel is a digital marketing agency that specializes in professional website design and custom web app development.</p>
                                <Image
                                    src={footerLogo}
                                    alt="pixelbypixel footer logo"
                                    id="footer-logo"
                                    width={275}
                                    height={49}
                                />
                                <p className="copyright">© Copyright 2023 | All Rights Reserved</p>

                                {/* <button onClick={ScrollTop} className="footer-btn">BACK TO TOP </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-line">
            </div>
        </footer >

    )
}

export default Footer;