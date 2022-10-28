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
                            <img src={ex10dor} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={galaxydoors} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={greenco} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={property} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={wildjasmine} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={steakshop} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-padding">
                        <div className="column-six">
                            <img src={dubai} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={effectivemarketing} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={litzkee} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={midas} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={worx} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                        <div className="column-six">
                            <img src={sepro} alt="companies we have worked with" className="portfolio-logos" />
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default HomeClients;