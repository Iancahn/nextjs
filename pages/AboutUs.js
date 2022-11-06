// import components
import ServiceHeader from '../components/ServiceHeader';
import Calltoaction from '../components/Calltoaction';
// import Animation
// import { motion } from "framer-motion";
// import components

// import images


function AboutUs() {
    return (
        <div>
            <div className="about-us-header">
                <div className="container2">
                    <ServiceHeader title="Learn more about our great team" type="LEARN EVEN MORE ABOUT US" />
                </div>
            </div>
            <section>
                <div className="container2">
                    <div className="blackbox">
                        <h2>Hello</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, corrupti? Id nulla reprehenderit quibusdam, officia veniam nemo amet obcaecati animi vel laborum provident quidem tenetur! Quos odio, numquam eveniet quidem a unde placeat, minus dolores dignissimos non praesentium facere sit architecto, ullam error pariatur atque at cupiditate sint debitis! Molestias?</p>
                    </div>
                </div>
            </section>
            <div className="container2">
                Test
            </div>
            <section>
                <div className="container2">
                    <div>Test</div>
                </div>
            </section>
            <div className='testdiv'>
                <Calltoaction />
            </div>
        </div>
    )
}

export default AboutUs;