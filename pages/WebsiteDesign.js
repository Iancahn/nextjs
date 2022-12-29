import Image from 'next/image';

// import components
import Calltoaction from '../components/Calltoaction';

// import images
import websiteDevelopment from '../public/assets/website-development-services.jpg';
import usp1 from '../public/assets/website-fact1.jpg';
import usp2 from '../public/assets/website-fact2.jpg';
import usp3 from '../public/assets/website-fact3.jpg';

function WebsiteDesign() {
    return (
        <div>
            <section className='service-hero'>
                <div className="container2">
                    {/* <ServiceHeader title="Bringing your ideas to life with great website design." /> */}
                    <h1 className="service-h1"><span className="gray-font2">Website Design</span><br />We build websites<br />that helps you grow<span className="blue">.</span></h1>
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
            {/* <div className=''></div> */}
            <Calltoaction />
        </div >
    )
}

export default WebsiteDesign;