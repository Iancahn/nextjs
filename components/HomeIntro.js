// import Functionality
import Image from 'next/image';

// import Animation
// import { motion } from "framer-motion";
// import components

function HomeIntro() {
    return (
        <section className="blue-section-line">
            <div className="container">
                <div className="row">
                    {/* <div className="column"> */}
                    {/* <h2 className="big-h2">THINK<br /><span className="yellow">BIGGER.</span></h2> */}
                    {/* <p className="large-text">a Web Design Company in South Africa</p> */}
                    <br />
                    <p className="home-intro-text">Pixel By Pixel is a website design company, based in sunny South Africa, focused on growing businesses online. We accomplish this with our <span className="yellow-span">*almost*</span> decade's worth of digital marketing experience, powered by the latest technology such as AI and large amounts of strong coffee.</p>
                    {/* </div> */}
                    {/* <div className="column">
                        <Image
                            src={homeIntro}
                            width={600}
                            height={441}
                            alt="Website design services to help you grow online."
                            className="column-img" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HomeIntro;