import Image from 'next/image';


function HomeReviews() {
    return (
        <div>
            <section className="gray-section">
                <div className="container">
                    <h3 className="section-title black-font">What our clients say</h3>
                    <div className="row">
                        <div className="column">
                            <div className="customer-review-block">
                                <h2>Esther Boersma</h2>
                                <p>My website design exceeded my expectations. Search engine rankings also improved drastically. Thank you again Ian for covering every design detail.</p>
                            </div>
                            <div className="customer-review-block">
                                <h2>Justine Lategan</h2>
                                <p>Best designer we've ever worked with. Pixel by pixel listens to the company's needs and acts accordingly.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="customer-review-block">
                                <h2>Joe Van Der Walt</h2>
                                <p>It was an absolute pleasure doing business with Ian from Pixel By Pixel. They are very professional and up to date with the latest market trends.</p>
                            </div>
                            <div className="customer-review-block">
                                <h2>Takie Muditambi</h2>
                                <p>Positive, professional Website Design Expert. Their work ethic and output exceed customer expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default HomeReviews;