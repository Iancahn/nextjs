// import Functionality
import Image from 'next/image';

// import Animation
// import { motion } from "framer-motion";
// import components

// import images
import homeIntro from '../public/assets/Intro-Website-design-services.jpg';

function HomeIntro() {
    return (
        <section className="gray-section-line">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2 className="big-h2">THINK<br /><span className="yellow">BIG.</span></h2>
                        <p className="large-text">Web Design Company in Polokwane</p>
                        <br />
                        <p>At Pixel By Pixel, our team of website developers and digital marketers bring the skills above and beyond the ordinary to every project. Our web design and development team is involved in professional Business-to-Business and Business-To-Client web design and development.</p>
                    </div>
                    <div className="column">
                        <Image
                            src={homeIntro}
                            width={600}
                            height={441}
                            alt="Website design services to help you grow online."
                            className="column-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro;