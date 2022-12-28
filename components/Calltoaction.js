import Image from 'next/image';

import ctaMobile from "../public/assets/CTA-phone.png"

function Calltoaction() {
    return (
        <div className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="column-no-padding centered3">
                        <Image
                            src={ctaMobile}
                            width={533}
                            height={505}
                            alt="Get in touch with PixelByPixel"
                        />
                    </div>
                    <div className="column centered4">
                        <h3 className="big-h3 black-font">Let's start the conversation.</h3>
                        <button className="call-to-action-button">Contact Us Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calltoaction;