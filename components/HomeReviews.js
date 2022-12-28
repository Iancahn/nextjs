import Image from 'next/image';

import FourpointFive from "../public/assets/four-half-star.png";
import FiveStar from "../public/assets/five-star.png";


function HomeReviews() {
    return (
        <div>
            <section className="gray-section">
                <div className="container">
                    <h3 className="section-title black-font">Some happy clients</h3>
                    <div className="row">
                        <div className="column">
                            <div className="customer-review-block">
                                <div className="review-block-top">
                                    <p className="review-name">Esther Boersma</p>
                                    <Image
                                        src={FiveStar}
                                        width={188}
                                        height={33}
                                        alt="customer rating review"
                                    />
                                </div>
                                <p className="review-text">My website design exceeded my expectations. SEO rankings also improved drastically. Thank you again Ian for covering every design detail.</p>
                            </div>
                            <div className="customer-review-block">
                                <div className="review-block-top">
                                    <p className="review-name">Justine Lategan</p>
                                    <Image
                                        src={FiveStar}
                                        width={188}
                                        height={33}
                                        alt="customer rating review"
                                    />
                                </div>
                                <p className="review-text">Best designer we've ever worked with. Pixel By Pixel listens to the company's needs and acts accordingly with their website designs.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="customer-review-block">
                                <div className="review-block-top">
                                    <p className="review-name">Joe Van Der Walt</p>
                                    <Image
                                        src={FiveStar}
                                        width={188}
                                        height={33}
                                        alt="customer rating review"
                                    />
                                </div>
                                <p className="review-text">It was an absolute pleasure doing business with Ian from Pixel By Pixel. They are very professional and up to date with the latest market trends.</p>
                            </div>
                            <div className="customer-review-block">
                                <div className="review-block-top">
                                    <p className="review-name">Takie Muditambi</p>
                                    <Image
                                        src={FourpointFive}
                                        width={188}
                                        height={33}
                                        alt="customer rating review"
                                    />
                                </div>
                                <p className="review-text">Positive, professional Website Design Expert. Their work ethic and output exceed customer expectations. Would glady recommend.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default HomeReviews;