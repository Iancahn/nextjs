// import functionality
import Image from 'next/image';

// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import ex10dor from '../public/assets/ex10dor-logo.png';
import galaxydoors from '../public/assets/galaxydoors-logo.png';
import greenco from '../public/assets/greenco-energy-logo.png';
import property from '../public/assets/property-connect-logo.png';
import steakshop from '../public/assets/steakshop-logo.png';
import dubai from '../public/assets/dubai-oils-logo.png';
import effectivemarketing from '../public/assets/effective-marketing-logo.png';
import litzkee from '../public/assets/litzkee-logo.png';
import midas from '../public/assets/midas-logo.png';
import worx from '../public/assets/188worx-logo.png';
import sepro from '../public/assets/sepro-logo.png';
import wildjasmine from '../public/assets/wild-jasmine-logo.png';


function HomeClients() {
    return (
        <section className="gray-section">
            <div className="container">
                <div className="row">
                    <div className="centered">
                        <h3 className="section-title-white"><span>Some of our Clients</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-padding">
                        <div className="column-six">
                            <Image
                                src={ex10dor}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image
                                src={galaxydoors}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image
                                src={greenco}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={property}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={wildjasmine}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={steakshop}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-padding">
                        <div className="column-six">
                            <Image src={dubai}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={effectivemarketing}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={litzkee}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={midas}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={worx}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <Image src={sepro}
                                width={175}
                                height={87}
                                alt="companies we have worked with"
                                className="portfolio-logos" />
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default HomeClients;