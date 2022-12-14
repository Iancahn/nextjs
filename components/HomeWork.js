// import functionality
import Image from 'next/image';

// import Animation
// import { motion } from "framer-motion";
// import { filterProps } from 'framer-motion';
// import components

// import images
import newEraHealth from '../public/assets/new-era-health-portfolio.jpg';
import greenCo from '../public/assets/greenco-portfolio.jpg';
import steakshop from '../public/assets/steakshop-portfolio.jpg';
import fresca from '../public/assets/fresca-farm-portfolio.jpg';
import cycad from '../public/assets/cycad-estate-portfolio.jpg';

function HomeServices() {
    return (
        <div>
            <section className="medium--top whiteBack">
                <div className="container--75 small--bot">
                    <h3 className="section-title black-font">Recent Projects</h3>
                </div>
            </section>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${newEraHealth.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">New Era Health Hospital</p>
                                <p class="project-inbox-text">Redesigned their website to reflect their new brand.</p>
                                <p className="project-inbox-tech">Wordpress Elementor Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${greenCo.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">GreenCo Solar</p>
                                <p class="project-inbox-text">Redesigned their website to reflect their new brand.</p>
                                <p className="project-inbox-tech">Wordpress Oxygen3 Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${steakshop.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">Steakshop Butchery</p>
                                <p class="project-inbox-text">Built an E-Commerce Website to generate sales online.</p>
                                <p className="project-inbox-tech">Wordpress Oxygen3 Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${fresca.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">Fresca Farms</p>
                                <p class="project-inbox-text">Built and exciting new brand identity with package design.</p>
                                <p className="project-inbox-tech">Brand & Graphic Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${cycad.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">Cycad Estate Polokwane</p>
                                <p class="project-inbox-text">Built a new member-only website for Cycad Estate</p>
                                <p className="project-inbox-tech">Wordpress Oxygen3 Website Design</p>
                            </div>
                        </div>
                    </div>

                    {/* same slides (doubled) */}

                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${newEraHealth.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">New Era Health Hospital</p>
                                <p class="project-inbox-text">Redesigned their website to reflect their new brand.</p>
                                <p className="project-inbox-tech">Wordpress Elementor Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${greenCo.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">GreenCo Solar</p>
                                <p class="project-inbox-text">Redesigned their website to reflect their new brand.</p>
                                <p className="project-inbox-tech">Wordpress Oxygen3 Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${steakshop.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <p className="project-inbox-header">Steakshop Butchery</p>
                                <p class="project-inbox-text">Built an E-Commerce Website Design to generate sales online.</p>
                                <p className="project-inbox-tech">Wordpress Oxygen3 Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${fresca.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <div className="project-inbox">
                                <h3>Hello Testing2</h3>
                                <h5>Redesigned their old website to reflect their new brand.</h5>
                                <p className="project-inbox-text">Wordpress Elementor Website Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="project-outbox"
                            style={{
                                backgroundImage: `url(${cycad.src})`,
                                height: '400px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }} >
                            <div className="project-inbox">
                                <p className="project-inbox-header">Cycad Estate Polokwane</p>
                                <p class="project-inbox-text">Built a new member-only website for Cycad Estate</p>
                                <p className="project-inbox-tech">Wordpress Oxygen3 Website Design</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        </div>
    )
}

export default HomeServices;