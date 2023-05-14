import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const ServicesItem = (props) => {

    return (
        <div className={props.className}>
            <div>
                <LazyLoadImage
                    className="w-full"
                    src={props.src}
                    alt="icon"
                    effect="blur"
                />
            </div>

            <h4 className="text-xl font-semibold">{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default ServicesItem