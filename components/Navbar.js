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
                    src="/assets/PBP-2022-Logo-white.png"
                    height={100}
                    width={429}
                    alt="The main PixelByPixel logo"
                    className="main-logo"
                />
            </Link>
            <nav>
                <ul class="main-nav">
                    <li><Link className="nav-link" href="/">
                        Home
                    </Link></li>
                    {/* <li className='dropdown'>Our Services <FontAwesomeIcon icon={faCaretDown} /> */}
                    <li className='dropdown'>Our Services
                        <div className='dropdown-content'>
                            <Link className="nav-link" href="/MonthToMonth">
                                Month to Month
                            </Link>
                            <Link className="nav-link" href="/WebDesign">
                                Website Design
                            </Link>
                            <Link className="nav-link" href="/GraphicDesign">
                                Graphic Design
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