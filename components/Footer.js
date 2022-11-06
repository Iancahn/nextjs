// import Functionality
import Link from 'next/link';
import Image from 'next/image';

import ScrollTop from './ScrollTop';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import footerLogo from '../public/assets/pbp-2023-footerlogo.png';
import footerBackground from '../public/assets/footer-background.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="footer-container" style={{
                backgroundImage: `url(${footerBackground})`,
                height: '60vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <div className="container">

                    <div className='row'>
                        <div className="column-four">
                            <div>
                                <Image
                                    src={footerLogo}
                                    alt="pixelbypixel footer logo"
                                    id="footer-logo"
                                    width={263}
                                    height={62}
                                />
                                <p>Pixel By Pixel is a digital marketing agency that specializes in professional website design and custom web app development.</p>
                            </div>
                            <div>
                                <p className="copyright">© Copyright 2022 | All Rights Reserved | PixelByPixel</p>
                            </div>
                        </div>
                        <div className="column-four quick-links">
                            <div>
                                <h4><span style={{ textDecoration: "underline" }}>Our Services</span></h4>
                                <li><Link className="footer-links" href="/MonthToMonth">Month To Month</Link></li>
                                <li><Link className="footer-links" href="/WebsiteDesign">Website Design</Link></li>
                                <li><Link className="footer-links" href="/GraphicDesign">Graphic Design</Link></li>
                            </div>
                        </div>
                        <div className="column-four quick-links">
                            <div>
                                <h4><span style={{ textDecoration: "underline" }}>Quick Links</span></h4>
                                <li><Link className="footer-links" href="/">Home</Link></li>
                                <li><Link className="footer-links" href="/AboutUs">About Us</Link></li>
                                <li><Link className="footer-links" href="/ContactUs">Contact Us</Link></li>
                            </div>
                        </div>
                        <div className="column-four">
                            <div className="footer-up">
                                <button onClick={ScrollTop} className="footer-btn">BACK TO TOP <FontAwesomeIcon icon={faAngleUp} /> </button>
                                {/* <button onClick={ScrollTop} className="footer-btn">BACK TO TOP </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;