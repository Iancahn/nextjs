import Image from 'next/image';

import rightArrow from '../public/assets/right-arrow.jpg';
import brandDesign from '../public/assets/brand-design-services.jpg';
import websiteDesign from '../public/assets/website-design-services.jpg';
import digitalMarketing from '../public/assets/digital-marketing-services.jpg';
import searchEngineMarketing from '../public/assets/search-engine-optimization-services.jpg';
import googleAdsMarketing from '../public/assets/google-ads-services.jpg';
import socialMediaServices from '../public/assets/social-media-marketing-services.jpg';
// import Animation
// import { motion } from "framer-motion";
// import components

function HomeServices() {
    return (
        <section className="medium--top whiteBack">
            <div className="container--75">
                <h3 className="section-title black-font">Our Services</h3>
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
                            <div className="service-item-list">
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Graphic Design</li>
                                    <li>Brand Development</li>
                                </ul>
                            </div>
                            <div className="service-links">
                                <button className="service-plans-button">See Plans</button>
                                <Image
                                    src={rightArrow}
                                    width={25}
                                    height={19}
                                    alt="An arrow pointing towards the right"
                                    className="link-arrow"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="work-block">
                        <Image
                            src={websiteDesign}
                            width={450}
                            height={350}
                            alt="We offer web design services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Website Development</h4>
                            <p>Your company's website is the very first impression potential clients get of your company. Get your website professionally designed using the latest web technologies and mobile friendly and responsive design styles.</p>
                            <div className="service-item-list">
                                <ul>
                                    <li>Wordpress Websites</li>
                                    <li>E-Commerce Websites</li>
                                    <li>Custom Websites</li>
                                </ul>
                            </div>
                            <div className="service-links">
                                <button className="service-plans-button">See Plans</button>
                                <Image
                                    src={rightArrow}
                                    width={25}
                                    height={19}
                                    alt="An arrow pointing towards the right"
                                    className="link-arrow"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="work-block">
                        <Image
                            src={digitalMarketing}
                            width={450}
                            height={350}
                            alt="We offer digital marketing services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Digital Marketing</h4>
                            <p>Once your new brand and website has been designed, its time to get it infront of potential customers. We use our wide range of digital marketing to generate leads and convert online visitors into customers for our clients.</p>
                            <div className="service-item-list">
                                <ul>
                                    <li>Conversion Rate Optimization</li>
                                    <li>Email Marketing</li>
                                    <li>Content Blogging</li>
                                </ul>
                            </div>
                            <div className="service-links">
                                <button className="service-plans-button">See Plans</button>
                                <Image
                                    src={rightArrow}
                                    width={25}
                                    height={19}
                                    alt="An arrow pointing towards the right"
                                    className="link-arrow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <div className="work-block">
                        <Image
                            src={searchEngineMarketing}
                            width={450}
                            height={350}
                            alt="We offer search engine optimization services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Search Engine Optimization</h4>
                            <p>Search Engine Optimization(SEO for short) is the technical jargon for saying we can help your website rank better on search engines like Google and Bing. Higher rankings leads to more online visitors and sales online.</p>
                            <div className="service-item-list">
                                <ul>
                                    <li>Website Optimization</li>
                                    <li>Local Search Optimization</li>
                                    <li>Google My Business Optimization</li>
                                </ul>
                            </div>
                            <div className="service-links">
                                <button className="service-plans-button">See Plans</button>
                                <Image
                                    src={rightArrow}
                                    width={25}
                                    height={19}
                                    alt="An arrow pointing towards the right"
                                    className="link-arrow"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="work-block">
                        <Image
                            src={googleAdsMarketing}
                            width={450}
                            height={350}
                            alt="We offer Google Ads services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Paid Ads Marketing</h4>
                            <p>Think of Pay Per Click Marketing as the turbo button for generating more leads online. Get your company infront of audiences actively looking your products or services with this intent model marketing strategy.</p>
                            <div className="service-item-list">
                                <ul>
                                    <li>Google Search Ads</li>
                                    <li>Google Display Ads</li>
                                    <li>Google Local Ads</li>
                                </ul>
                            </div>
                            <div className="service-links">
                                <button className="service-plans-button">See Plans</button>
                                <Image
                                    src={rightArrow}
                                    width={25}
                                    height={19}
                                    alt="An arrow pointing towards the right"
                                    className="link-arrow"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="work-block">
                        <Image
                            src={socialMediaServices}
                            width={450}
                            height={350}
                            alt="We offer social media marketing services at Pixel By Pixel"
                            className="our-services-images"
                        />
                        <div className="work-block-text">
                            <h4 className="service-name">Social Media Marketing</h4>
                            <p>Connect and engage with your loyal followers on their favourite social media platforms such as Facebook and TikTok. These social media platforms are ideal for generating brand awareness and product interest.</p>
                            <div className="service-item-list">
                                <ul>
                                    <li>Facebook Marketing</li>
                                    <li>Instagram Marketing</li>
                                    <li>TikTok Marketing</li>
                                </ul>
                            </div>
                            <div className="service-links">
                                <button className="service-plans-button">See Plans</button>
                                <Image
                                    src={rightArrow}
                                    width={25}
                                    height={19}
                                    alt="An arrow pointing towards the right"
                                    className="link-arrow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices;