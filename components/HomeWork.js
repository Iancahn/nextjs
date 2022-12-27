// import functionality
import Image from 'next/image';

import WorkProject from './WorkProject';
// import Animation
// import { motion } from "framer-motion";
// import { filterProps } from 'framer-motion';
// import components

// import images
import newEraHealth from '../public/assets/new-era-health-portfolio.jpg';
import steakshop from '../public/assets/steakshop-butchery.jpg';
import jaco from '../public/assets/jaco-design.jpg';
import huweliksfokus from '../public/assets/huweliksfokus-consulting.jpg';
import cycad from '../public/assets/cycad-estate.jpg';


function HomeServices() {
    return (
        <div>
            <section className="white-section">
                <div className="container">
                    <h3 className="section-title black-font">Recent Projects</h3>
                    {/* <div className="grid-out-container">
                    <div class="grid-container">
                        <div class="grid-item">
                            <a href="https://www.google.com" target="_blank">
                                <div className="grid-item-background"
                                    style={{
                                        backgroundImage: `url(${fresca.src})`,
                                        height: '280px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}>
                                    <WorkProject
                                        title="Designing a new exciting brand identity for Fresca Farms"
                                        projectDescription="Graphic and Brand Design"
                                    />
                                </div>
                            </a>
                        </div>
                        <div class="grid-item">
                            <a href="https://www.google.com" target="_blank">
                                <div className="grid-item-background"
                                    style={{
                                        backgroundImage: `url(${steakshop.src})`,
                                        height: '280px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}>
                                    <WorkProject
                                        title="Built a E-Commerce website for Steakshop to sell more online"
                                        projectDescription="Wordpress WooCommerce Design"
                                    />
                                </div>
                            </a>
                        </div>
                        <div class="grid-item">
                            <a href="https://www.google.com" target="_blank">
                                <div className="grid-item-background"
                                    style={{
                                        backgroundImage: `url(${jaco.src})`,
                                        height: '280px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}>
                                    <WorkProject
                                        title="Builing a digital presence for a great graphic designer"
                                        projectDescription="Wordpress Month to Month"
                                    />
                                </div>
                            </a>
                        </div>

                        <div class="grid-item">
                            <a href="https://www.google.com" target="_blank">
                                <div className="grid-item-background"
                                    style={{
                                        backgroundImage: `url(${huweliksfokus.src})`,
                                        height: '280px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}>
                                    <WorkProject
                                        title="Helping Huweliksfokus reach married couples in need of help"
                                        projectDescription="Wordpress WooCommerce Design"
                                    />
                                </div>
                            </a>
                        </div>
                        <div class="grid-item">
                            <a href="https://www.google.com" target="_blank">
                                <div className="grid-item-background"
                                    style={{
                                        backgroundImage: `url(${cycad.src})`,
                                        height: '280px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}>
                                    <WorkProject
                                        title="Built a new member-only website for Cycad Estate"
                                        projectDescription="Wordpress Oxygen3 Design"
                                    />
                                </div>
                            </a>
                        </div>
                        <div class="grid-item">
                            <a href="https://www.google.com" target="_blank">
                                <div className="grid-item-background"
                                    style={{
                                        backgroundImage: `url(${nty.src})`,
                                        height: '280px',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}>
                                    <WorkProject
                                        title="Redesigning a old website for NTY Steelworks Polokwane"
                                        projectDescription="Wordpress Elementor Design"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div> */}
                </div>
            </section>

            {/* test slider */}
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <div className="slide-test"
                            style={{
                                backgroundImage: `url(${newEraHealth.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            {/* <Image
                                className="slider-image"
                                src={newEraHealth}
                                alt=""
                                width={500}
                                height={400}
                            /> */}
                            <div className="hover-box"><h3>Hello Testing</h3></div>
                        </div>
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={steakshop}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={jaco}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={huweliksfokus}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={cycad}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>

                    {/* same slides (doubled) */}

                    <div className="slide">
                        <div className="slide-test"
                            style={{
                                backgroundImage: `url(${newEraHealth.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            {/* <Image
                                className="slider-image"
                                src={newEraHealth}
                                alt=""
                                width={500}
                                height={400}
                            /> */}
                            <div className="hover-box"><h3>Hello Testing</h3></div>
                        </div>
                        {/* <Image
                            className="slider-image"
                            src={newEraHealth}
                            alt=""
                            width={500}
                            height={400}
                        /> */}
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={steakshop}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={jaco}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={huweliksfokus}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="slide">
                        <Image
                            className="slider-image"
                            src={cycad}
                            alt=""
                            width={500}
                            height={400}
                        />
                    </div>

                </div>
            </div>



            {/* // end slider */}

        </div>

    )
}

export default HomeServices;