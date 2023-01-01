import Image from 'next/image';

// import components
import Calltoaction from '../components/Calltoaction';

// import images
import websiteDevelopment from '../public/assets/website-development-services.jpg';
import creativeProcess from '../public/assets/our-webdesign-creative-process.jpg';
import usp1 from '../public/assets/website-fact1.jpg';
import usp2 from '../public/assets/website-fact2.jpg';
import usp3 from '../public/assets/website-fact3.jpg';
import monthtomonth from '../public/assets/month-to-month-website-design.jpg';
import wordPressWebsites from '../public/assets/wordpress-website-design.jpg';
import eCommerceWebsites from '../public/assets/e-commerce-website-design.jpg';
import customWebsiteDevelopment from '../public/assets/custom-website-development-services.jpg';
import newEraHealth from '../public/assets/new-era-health-portfolio.jpg';
import greenCo from '../public/assets/greenco-portfolio.jpg';
import steakshop from '../public/assets/steakshop-portfolio.jpg';

function WebsiteDesign() {
    return (
        <div>
            <section className='service-hero'>
                <div className="container--65">
                    <h1 className="service-h1"><span className="gray-font2">Website Design</span><br />We build websites<br />that helps you grow<span className="blue">.</span></h1>
                </div>
            </section >
            <div className="container--85 small--bot">
                <Image
                    src={websiteDevelopment}
                    width={1600}
                    height={1000}
                    alt="Website Design for big and small companies"
                />
            </div>
            <section className="medium--top">
                <div className="container--75">
                    <div className="row">
                        <br />
                        <p className="home-intro-text black-font">From a solo entrepreneur with a dream, all the way up to large corporations with hundreds of employees, we build web solutions to drive sales and grow your business online.</p>
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
            <section className="medium--padding whiteBack">
                <div className="container--75">
                    <h3 className="section-title black-font">Our Website Design Services</h3>
                    <div className="row small--bot">
                        <div className="column">
                            <h4>Month to Month Website Package</h4>
                            <p>Our month to month web design product is our latest web product aimed towards new businesses that are just starting out in their entrepreneurial journey.</p>
                            <br /><p>This website package is ideal for clients that don't want to spend a large amount of money when starting a brand new business with limited funds.</p>
                            <br /><p>Instead this package allows you to rent a website for a monthly fee that includes a 5 page website, 1 hour of monthly maintenance and even domain hosting.</p>
                            <p className="price-from">Starting from R499 per month</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={monthtomonth}
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
                                    src={wordPressWebsites}
                                    width={667}
                                    height={567}
                                    alt=""
                                    className='borderRadius25'
                                />
                            </div>
                        </div>
                        <div className="column">
                            <h4>WordPress Website Design</h4>
                            <p>For our WordPress website designs, we offer our clients the choice of two different WordPress frameworks, each with their own unique benefits.</p>
                            <br /><p>The first framework that most people will be familiar with, is Elementor. Elementor is the ideal framework for template websites that don't need a lot of customization. Elementor websites are ideal for small business clients that just needs the "online brochure" type of website. An Elementor template website is typically a lot faster to build, resulting in a lower pricepoint, but also has the drawbacks of being a less performance based website.</p>
                            <br /><p>This is where our other framework, called Oxygen3, comes into the picture. Oxygen3 is one of the fastest WordPress framework, as it's code is optimized for better website speed and overall performance in turn of additional features. However, Oxygen3 requires more development time, as each website is custom built (but still a WordPress website design). Using this framework typically results in about a 30% boost in website speed.</p>
                            <p className="price-from">Ranges from R5 000 to R25 000</p>
                        </div>

                    </div>
                    <div className="row small--bot">
                        <div className="column">
                            <h4>E-Commerce Website Design</h4>
                            <p>An E-Commerce website offers companies the most convenient and cost-effective way to reach their potential clients online. E-Commerce websites can also help you expand your reach beyond your local area and increase sales.</p>
                            <br /><p>Showcase your products to a wider audience, letting customers easily browse, compare and purchase products from the comfort of their own home.</p>
                            <br /><p>Additionally, E-Commerce websites offers excellent data collection, such as browsing or purchasing habits. This data can be used to improve the customer's experience, increase conversion rates and help with website optimization.</p><br />
                            <br /><p>Another overlooked fact of E-Commerce websites, is the ability to easily process and track orders, manage inventory and even handle shipping and returns. This allows the business owner to save time and focus on other aspects of their running their business.</p>
                            <p className="price-from">Ranges from R16 000 to R35 000</p>
                        </div>
                        <div className="column">
                            <div>
                                <Image
                                    src={eCommerceWebsites}
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
                                    src={customWebsiteDevelopment}
                                    width={667}
                                    height={567}
                                    alt=""
                                    className='borderRadius25'
                                />
                            </div>
                        </div>
                        <div className="column">
                            <h4>Custom Website Design</h4>
                            <p>A custom website is a website that is tailored specifally to a company's unique needs and goals. Developed from scratch, instead of using a pre-designed template or platform such as WordPress.</p>
                            <br /><p>Our custom website designs allows a company to stand out from their competitors and differentiate themselves from larger competitors. These websites can be designed and developed to include specific features and functionality needed by the company and even their target audience.</p>
                            <br /><p>One of the main convincing points of custom website development, is that every company wants to be seen as unique. Imagine the feeling of utter disgust if you were to find out that your website and a competitor uses the same WordPress theme. Now just imagine a client pointing that out.</p>
                            <br /><p> Our technology language stack consists of HTML5, CSS3, NextJs13, React and ofcourse normal JavaScript. For any databases, we mostly use MySQL.</p>
                            <p className="price-from">Ranges from R25 000 to R50 000</p>
                        </div>
                    </div>
                </div>
            </section >
            <section className="medium--top blackBack">
                <div className="container--75">
                    <h3 className="section-title white-font">Our Creative Process</h3>
                    <div className="row small--padding">
                        <div>
                            <Image
                                src={creativeProcess}
                                width={1600}
                                height={540}
                                alt="The creative process we use when designing websites."
                                className="borderRadius25"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="medium--bot blackBack">
                <div className="container--85">
                    <div className="row centered">
                        <div className="column-four">
                            <p className="creative-title">Discovery and Research</p>
                            <p className="creative-text">The discovery phase is an important part of the project planning process. It involves a thorough analysis of the project goals, target audience, and competition, as well as a review of any existing branding elements or marketing materials or assets that may be relevant to the project.</p>
                        </div>
                        <div className="column-four">
                            <p className="creative-title">Design and Revisions</p>
                            <p className="creative-text">The purpose of our design phase is to complete the creative process based on the information and ideas gathered during the discovery phase. Once we have a good idea of the design direction, we design the website and then start with the revision rounds to ensure the clients are happy.</p>
                        </div>
                        <div className="column-four">
                            <p className="creative-title">Development and SEO</p>
                            <p className="creative-text">Once the design phase has been signed off, the very exciting part of actually building the website can start. During this phase we use your chosen web technology to design your new website with the latest web design best practices, onsite SEO as well as WCAG web standards.</p>
                        </div>
                        <div className="column-four">
                            <p className="creative-title">Project Launch</p>
                            <p className="creative-text">The big day is finally here, the day we can actually launch your fancy new website to the world wide web. Once your website has been uploaded, we impliment Google Indexing, double check that all the pages and links work aswell as go through a small bug fixing round.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="medium--padding whiteBack">
                <div className="container--75">
                    <h3 className="section-title black-font">Latest Projects</h3>
                    <div className="row">
                        <div className="column-three">
                            <Image
                                src={steakshop}
                                width={450}
                                height={300}
                                alt="An E-Commerce website we recently designed for the Steakshop butchery"
                                className="borderRadius25"
                            />
                            <h3>The Steakshop</h3>
                            <p>WooCommerce WordPress</p>
                        </div>
                        <div className="column-three">
                            <Image
                                src={newEraHealth}
                                width={450}
                                height={300}
                                alt="An Elementor WordPress website we recently designed for New Era Health Day Hospital"
                                className="borderRadius25"
                            />
                            <h3>NewEraHealth Hospital</h3>
                            <p>Elementor WordPress</p>
                        </div>
                        <div className="column-three">
                            <Image
                                src={greenCo}
                                width={450}
                                height={300}
                                alt="An Oxygen3 WordPress website we recently designed for GreenCo Solar Energy"
                                className="borderRadius25"
                            />
                            <h3>GreenCo Solar</h3>
                            <p>Oxygen3 WordPress</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="medium--padding grayBack">
                <div className="container--75">
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

export default WebsiteDesign;