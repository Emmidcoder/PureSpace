import React from "react";
import logo from "../../img/icon-mission.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Previews = () => {
    return (
        <section className="preview">
            <div className="flex items-center gap-6">
                <div className="preview__scrollbar">
                    <div className="preview__scrollbar--fill">&nbsp;</div>&nbsp;
                </div>

                <span className="w-20">Scroll down to explore</span>
            </div>

            <div className="preview__details">
                <div className="preview__details--text">
                    <div>
                        <LazyLoadImage src={logo} />
                        <h2 className="heading2 mt-2 mb-2">Our Mission</h2>

                        <p>At Pure Space, our mission is to create beautiful, functional, and sustainable home decor and furniture that inspire a simpler and more mindful way of living. We believe that less is more, and that a minimalist home can enhance your well-being and creativity.</p>
                    </div>
                </div>

                <div className="preview__details--img">
                    <LazyLoadImage
                        className=""
                        src={require("../../img/armchair.png")}
                        placeholderSrc={require("../../img/armchair-small.png")}
                        effect="blur"
                    />
                </div>
            </div>
        </section>
    )
}

export default Previews