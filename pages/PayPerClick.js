import Image from 'next/image';

// import components
import Calltoaction from '../components/Calltoaction';

// import images
import websiteDevelopment from '../public/assets/website-development-services.jpg';
import usp1 from '../public/assets/website-fact1.jpg';
import usp2 from '../public/assets/website-fact2.jpg';
import usp3 from '../public/assets/website-fact3.jpg';
import monthtomonth from '../public/assets/month-to-month-website-design.jpg';

function PPC() {
    return (
        <div>
            <section className='service-hero'>
                <div className="container2">
                    <h1 className="service-h1"><span className="gray-font2">Pay Per Click</span><br />We build websites<br />that helps you grow<span className="blue">.</span></h1>
                </div>
            </section >
            <div className="fullsize-section">
                <Image
                    src={websiteDevelopment}
                    width={1600}
                    height={1000}
                    alt="Website Design for big and small companies"
                />
            </div>
            <section className="white-section">
                <div className="container">
                    <div className="row">
                        <br />
                        <p className="home-intro-text black-font">From a solo entrepreneur with a dream, all the way up to large corporations with hundreds of employees, we build web solutions to drive sales and grow your business online.</p>
                    </div>
                </div>
            </section>
            <section className="white-section">
                <div className="container80">
                    <div className="row centered">
                        <div className='column-three'>
                            <div className="spacing-two">
                                <Image
                                    src={usp1}
                                    width={125}
                                    height={75}
                                    alt="97 percent of all new customers find a business online by first searching online."
                                />
                                <p>Almost 97% of all potential new customers learn about a business online. If you dont have a website, you are potentially losing out on a majority of new clients.</p>
                            </div>
                        </div>
                        <div className='column-three'>
                            <div className="spacing-two">
                                <Image
                                    src={usp2}
                                    width={125}
                                    height={75}
                                    alt="62% of customers will ignore a business if they dont have a web presence."
                                />
                                <p>62% of customers will ignore a business if they don't have a web presence. This also applies if the company's website is badly designed or not mobile friendly.</p>
                            </div>
                        </div>
                        <div className='column-three'>
                            <div className="spacing-two">
                                <Image
                                    src={usp3}
                                    width={125}
                                    height={75}
                                    alt="97 percent of all new customers find a business online by first searching online."
                                />
                                <p>Nearly half of all Google searches are for local businesses. If a business ignores digital marketing, they are not even competing for HALF of all customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="white-section">
                <div className="container">
                    <h3 className="section-title black-font">Our Services</h3>
                    <div className="row">
                        <div className="column">
                            <h4>MOnth to Month</h4>
                            <p>Since we first started designing websites way back in early 2014,
                                we understood that a company's website represents much more than just being some online banner.
                                It's the very first interaction potential customers has with your company, and should be handled with a certain level of gravitas.</p><br />
                            <p>With this fact in mind, we have dedicated the past 8 years to master website design, graphic design, SEO and various other digital marketing services.
                                These valuable skills helps us design websites that not only looks great, but also drives real results for our customers.</p><br />
                            <p>From our humble beginnings, we have grown to become probably the number one website design agency in Limpopo, based on raw skill and our relentless unwillingness to accept mediocre as good enough.</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={monthtomonth}
                                    width={594}
                                    height={488}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h4>WordPress Websites(Elementor and O3)</h4>
                            <p>Since we first started designing websites way back in early 2014,
                                we understood that a company's website represents much more than just being some online banner.
                                It's the very first interaction potential customers has with your company, and should be handled with a certain level of gravitas.</p><br />
                            <p>With this fact in mind, we have dedicated the past 8 years to master website design, graphic design, SEO and various other digital marketing services.
                                These valuable skills helps us design websites that not only looks great, but also drives real results for our customers.</p><br />
                            <p>From our humble beginnings, we have grown to become probably the number one website design agency in Limpopo, based on raw skill and our relentless unwillingness to accept mediocre as good enough.</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={monthtomonth}
                                    width={594}
                                    height={488}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h4>E-Commerce Websites</h4>
                            <p>Since we first started designing websites way back in early 2014,
                                we understood that a company's website represents much more than just being some online banner.
                                It's the very first interaction potential customers has with your company, and should be handled with a certain level of gravitas.</p><br />
                            <p>With this fact in mind, we have dedicated the past 8 years to master website design, graphic design, SEO and various other digital marketing services.
                                These valuable skills helps us design websites that not only looks great, but also drives real results for our customers.</p><br />
                            <p>From our humble beginnings, we have grown to become probably the number one website design agency in Limpopo, based on raw skill and our relentless unwillingness to accept mediocre as good enough.</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={monthtomonth}
                                    width={594}
                                    height={488}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h4>Custom Websites.</h4>
                            <p>Since we first started designing websites way back in early 2014,
                                we understood that a company's website represents much more than just being some online banner.
                                It's the very first interaction potential customers has with your company, and should be handled with a certain level of gravitas.</p><br />
                            <p>With this fact in mind, we have dedicated the past 8 years to master website design, graphic design, SEO and various other digital marketing services.
                                These valuable skills helps us design websites that not only looks great, but also drives real results for our customers.</p><br />
                            <p>From our humble beginnings, we have grown to become probably the number one website design agency in Limpopo, based on raw skill and our relentless unwillingness to accept mediocre as good enough.</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={monthtomonth}
                                    width={594}
                                    height={488}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="black-section">
                <div className="row centered">
                    <div>

                        <h3>Our Process</h3>
                        <Image
                            src={monthtomonth}
                            width={594}
                            height={488}
                            alt=""
                        />

                    </div>
                </div>
                <div className="row">
                    <div className="column-four">
                        <p>Title Test</p>
                        <p>Process Text</p>
                    </div>
                    <div className="column-four">
                        <p>Title Test</p>
                        <p>Process Text</p>
                    </div>
                    <div className="column-four">
                        <p>Title Test</p>
                        <p>Process Text</p>
                    </div>
                    <div className="column-four">
                        <p>Title Test</p>
                        <p>Process Text</p>
                    </div>
                </div>
            </section>
            <section className="white-section">
                <div className="container">
                    <h3 className="section-title black-font">Latest Projects</h3>
                    <div className="row">
                        <div className="column-three">
                            <h3>CAC/NEH/GreenCo</h3>
                            <p>Image Here</p>
                            <p>Tech Used</p>
                        </div>
                        <div className="column-three">
                            <h3>CAC/NEH/GreenCo</h3>
                            <p>Image Here</p>
                            <p>Tech Used</p>
                        </div>
                        <div className="column-three">
                            <h3>CAC/NEH/GreenCo</h3>
                            <p>Image Here</p>
                            <p>Tech Used</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gray-section">
                <div className="container">
                    <h3 className="section-title black-font">Benefits of our website design</h3>
                    <div className="row">
                        <p>The high mile club</p>
                        <p>No, not that club, just our guarantee that your website will have a 90% or above rating on Google's Lighthouse audits*</p>
                        <p>Terms that apply here are the hosting environment, media files and plugins</p>
                    </div>
                </div>
            </section>
            <Calltoaction />
        </div >
    )
}

export default PPC;