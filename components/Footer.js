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
                        <div className="column-three">
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
                        <div className="column-three quick-links">
                            <div>
                                <h4><span style={{ textDecoration: "underline" }}>Quick Links</span></h4>
                                <li><Link className="footer-links" href="/">Home</Link></li>
                                <li><Link className="footer-links" href="/monthtomonth">Month To Month</Link></li>
                                <li><Link className="footer-links" href="/webdesign">Website Design</Link></li>
                                <li><Link className="footer-links" href="/graphicdesign">Graphic Design</Link></li>
                                <li><Link className="footer-links" href="/aboutus">About Us</Link></li>
                                <li><Link className="footer-links" href="/contact">Contact Us</Link></li>
                            </div>
                        </div>
                        <div className="column-three">
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