import Image from 'next/image';


import brandDesign from '../public/assets/brand-design-services.jpg';
// import Animation
// import { motion } from "framer-motion";
// import components

function HomeServices() {
    return (
        <section className="home-services">
            <div className="container">
                <h3 className="section-title black-font"><span>Our Services</span></h3>
                <div className="work-container">
                    <div className="work-block">
                        <Image
                            src={brandDesign}
                            width={450}
                            height={350}
                            alt="We offer brand design services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Brand Design</h4>
                            <p>Every great company starts with a brilliant brand design. A professional brand design works across all the touchpoints of your brand. These include logo design, branding elements and so much more.</p>
                            <button className="black-btn2">View Service</button>
                        </div>
                    </div>
                    <div className="work-block">
                        <Image
                            src={brandDesign}
                            width={450}
                            height={350}
                            alt="We offer brand design services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Website Design</h4>
                            <p>Your company's website is the very first impression potential clients get of your company. Get your website professionally designed using the latest web technologies and mobile friendly and responsive design styles.</p>
                            <button className="black-btn2">View Service</button>
                        </div>
                    </div>
                    <div className="work-block">
                        <Image
                            src={brandDesign}
                            width={450}
                            height={350}
                            alt="We offer brand design services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Digital Marketing</h4>
                            <p>Once your new brand and website has been designed, its time to get it infront of potential customers. We use our wide range of digital marketing to generate leads and convert online visitors into customers for our clients.</p>
                            <button className="black-btn2">View Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices;