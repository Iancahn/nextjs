// Import Functions
import Link from 'next/link';
import Image from 'next/image';

// import FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        < header >
            {/* Add lottie animation logo at later stage */}
            <Link className="nav-link" href="/">
                <Image
                    src="/assets/PixelByPixel-web-white-logo.png"
                    height={70}
                    width={394}
                    alt="The main PixelByPixel logo"
                    className="main-logo"
                />
            </Link>
            <nav>
                <ul className="main-nav">
                    <li><Link className="nav-link" href="/">
                        Home
                    </Link></li>
                    {/* <li className='dropdown'>Our Services <FontAwesomeIcon icon={faCaretDown} /> */}
                    <li className='dropdown'>Our Services
                        <div className='dropdown-content'>
                            <Link className="nav-link" href="/GraphicDesign">
                                Brand Design
                            </Link>
                            <Link className="nav-link" href="/WebsiteDesign">
                                Website Design
                            </Link>
                            <Link className="nav-link" href="/DigitalMarketing">
                                Digital Marketing
                            </Link>
                            <Link className="nav-link" href="/SearchEngineOptimization">
                                SEO Services
                            </Link>
                            <Link className="nav-link" href="/PayPerClick">
                                Pay Per Click
                            </Link>
                            <Link className="nav-link" href="/SocialMediaMarketing">
                                Social Media Services
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/AboutUs">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/ContactUs">
                            <button className="contact-us-btn">Contact Us</button>
                        </Link>
                    </li>
                </ul>
            </nav >
        </header >
    )
}

export default Navbar;