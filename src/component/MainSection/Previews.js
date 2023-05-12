import React from "react";
import logo from "../../img/icon-mission.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";


const Previews = () => {
    return (
        <section>
            <div>
                <LazyLoadImage src={logo} />
                <h2>Our Mission</h2>

                <p>At Pure Space, our mission is to create beautiful, functional, and sustainable home decor and furniture that inspire a simpler and more mindful way of living. We believe that less is more, and that a minimalist home can enhance your well-being and creativity.</p>
            </div>

        </section>
    )
}

export default Previews