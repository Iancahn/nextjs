import Image from 'next/image';

// import components
import Calltoaction from '../components/Calltoaction';

// import images
import brandDevelopment from '../public/assets/brand-design-services-header.jpg';
import usp1 from '../public/assets/graphic-design-fact1.jpg';
import usp2 from '../public/assets/graphic-design-fact2.jpg';
import usp3 from '../public/assets/graphic-design-fact3.jpg';
import logoDesign from '../public/assets/logo-design-services.jpg';
import graphicDesign from '../public/assets/graphic-design-services.jpg';
import videoEditing from '../public/assets/video-editing-services.jpg';
import checkmark from '../public/assets/check-marks.png';

function GraphicDesign() {
    return (
        <div>
            <section className='service-hero'>
                <div className="container--65">
                    <h1 className="service-h1"><span className="gray-font2">Brand Design</span><br />Building great brands<br />for great companies<span className="blue">.</span></h1>
                </div>
            </section >
            <div className="container--85 small--bot">
                <Image
                    src={brandDevelopment}
                    width={1600}
                    height={1000}
                    alt="Website Design for big and small companies"
                />
            </div>
            <section className="medium--top">
                <div className="container--75">
                    <div className="row">
                        <br />
                        {/* <p className="home-intro-text black-font">From a solo entrepreneur with a dream, all the way up to large corporations with hundreds of employees, we build web solutions to drive sales and grow your business online.</p> */}
                        <p className="home-intro-text black-font">We help clients stand out from their competitors by developing professional brands that builds trust with customers and works well on all types of media and signage.</p>
                    </div>
                </div>
            </section>
            <section className="container--80">
                <div className="medium--top">
                    <div className="row centered">
                        <div className='column-three'>
                            <div className="spacing-two">
                                <Image
                                    src={usp1}
                                    width={125}
                                    height={75}
                                    alt="Companies with strong brand identity experienced a 50% increase in annual revenue compared to companies with plain or weak visual branding."
                                />
                                <p>Companies with strong brand identity experienced a 50% increase in annual revenue compared to companies with plain or weak visual branding.</p>
                            </div>
                        </div>
                        <div className='column-three'>
                            <div className="spacing-two">
                                <Image
                                    src={usp2}
                                    width={125}
                                    height={75}
                                    alt="Research has shown that 55% of consumers are more likely to purchase a product or service from a company that has a professional brand identity."
                                />
                                <p>Research has shown that 55% of consumers are more likely to purchase a product or service from a company that has a professional brand identity.</p>
                            </div>
                        </div>
                        <div className='column-three'>
                            <div className="spacing-two">
                                <Image
                                    src={usp3}
                                    width={125}
                                    height={75}
                                    alt="Research shows that 60% of all consumers will actually avoid a company with a brand/logo that they find odd, ugly, or just plain unappealing."
                                />
                                <p>Research shows that 60% of all consumers will actually avoid a company with a brand/logo that they find odd, ugly, or just plain unappealing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="medium--padding whiteBack">
                <div className="container--75">
                    <h3 className="section-title black-font">Our Graphic Design Services</h3>
                    <div className="row small--bot">
                        <div className="column">
                            <h4>Logo Design</h4>
                            <p>Our month to month web design product is our latest web product aimed towards new businesses that are just starting out in their entrepreneurial journey.</p>
                            <br /><p>This website package is ideal for clients that don't want to spend a large amount of money when starting a brand new business with limited funds.</p>
                            <br /><p>Instead this package allows you to rent a website for a monthly fee that includes a 5 page website, 1 hour of monthly maintenance and even domain hosting.</p>
                            <p className="price-from">Starting from R499 per month</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={logoDesign}
                                    width={667}
                                    height={567}
                                    alt=""
                                    className='borderRadius25'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row small--bot">
                        <div className="column">
                            <div>
                                <Image
                                    src={graphicDesign}
                                    width={667}
                                    height={567}
                                    alt=""
                                    className='borderRadius25'
                                />
                            </div>
                        </div>
                        <div className="column">
                            <h4>Graphic Design</h4>
                            <p>For our WordPress website designs, we offer our clients the choice of two different WordPress frameworks, each with their own unique benefits.</p>
                            <br /><p>The first framework that most people will be familiar with, is Elementor. Elementor is the ideal framework for template websites that don't need a lot of customization. Elementor websites are ideal for small business clients that just needs the "online brochure" type of website. An Elementor template website is typically a lot faster to build, resulting in a lower pricepoint, but also has the drawbacks of being a less performance based website.</p>
                            <br /><p>This is where our other framework, called Oxygen3, comes into the picture. Oxygen3 is one of the fastest WordPress framework, as it's code is optimized for better website speed and overall performance in turn of additional features. However, Oxygen3 requires more development time, as each website is custom built (but still a WordPress website design). Using this framework typically results in about a 30% boost in website speed.</p>
                            <p className="price-from">Ranges from R5 000 to R25 000</p>
                        </div>

                    </div>
                    <div className="row small--bot">
                        <div className="column">
                            <h4>Video Editing & Animation</h4>
                            <p>An E-Commerce website offers companies the most convenient and cost-effective way to reach their potential clients online. E-Commerce websites can also help you expand your reach beyond your local area and increase sales.</p>
                            <br /><p>Showcase your products to a wider audience, letting customers easily browse, compare and purchase products from the comfort of their own home.</p>
                            <br /><p>Additionally, E-Commerce websites offers excellent data collection, such as browsing or purchasing habits. This data can be used to improve the customer's experience, increase conversion rates and help with website optimization.</p><br />
                            <br /><p>Another overlooked fact of E-Commerce websites, is the ability to easily process and track orders, manage inventory and even handle shipping and returns. This allows the business owner to save time and focus on other aspects of their running their business.</p>
                            <p className="price-from">Ranges from R16 000 to R35 000</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={videoEditing}
                                    width={667}
                                    height={567}
                                    alt=""
                                    className='borderRadius25'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="medium--padding grayBack">
                <div className="container--75">
                    <h3 className="section-title black-font">Benefits of our website design</h3>
                    <h4 className="sub-section black-font">Reasons why our web development is simply better</h4>
                    <div className="row">
                        <ul className="usp-list">
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />
                                Clear Messaging</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Pixel Perfect Design</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Photoshop Experts</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Illustrator Experts</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />DaVinci Experts</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Detailed Design Process</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Continuous Improvements</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />High Quality Images</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Licensed Typography</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Creative Designs</li>
                            <li><Image
                                src={checkmark}
                                width={30}
                                height={19}
                                alt=""
                                className="checkmark-image"
                            />Memorable Logos</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Calltoaction />
        </div >
    )
}

export default GraphicDesign;