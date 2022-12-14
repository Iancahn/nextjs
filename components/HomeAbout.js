import Image from 'next/image';

import AboutUs from '../public/assets/about-pixelbypixel.jpg';

function HomeAbout() {
    return (
        <div>
            <section className="medium--padding whiteBack">
                <div className="container--75">
                    <h3 className="section-title black-font">About Us</h3>
                    <div className="row">
                        <div className="column">
                            <h4>More about the team behind our success.</h4>
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
                                    src={AboutUs}
                                    width={594}
                                    height={488}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default HomeAbout;