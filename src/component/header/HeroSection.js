import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import flower1 from "../../img/icon-flower1.svg"
// import flower2 from "../../img/flower2.svg"


const HeroSection = () => {

    return (
        <section className="hero-section">
            <div className="header__heading">
                <h1 className="heading1">Redefining Style with <span className="text-primary-400 italic">Minimalist</span> Home Decor & Furniture</h1>
                <p>Transform your home into a haven of elegance and simplicity</p>
            </div>

            <div className="header__sofa">
                <div className="img-flower1">
                    <LazyLoadImage
                        className="w-full"
                        src={flower1}
                        alt="flower"
                        effect="blur"
                    />
                </div>

                <div className="z-10">
                    <LazyLoadImage
                        className="w-full"
                        src={require('../../img/chair1.png')}
                        placeholderSrc={require('../../img/chair1-small.png')}
                        alt="Sofa"
                        effect="blur"
                    />
                </div>
            </div>

            <div className="header__cta">
                <LazyLoadImage
                    className="h-full"
                    src={require('../../img/Group 427319277.png')}
                    placeholderSrc={require('../../img/Group 427319277-small.png')}
                    alt="Sofa"
                    effect="blur"
                />
            </div>

            <div className="header__dinning">
                <LazyLoadImage
                    className="h-full"
                    src={require('../../img/dining1.png')}
                    placeholderSrc={require('../../img/dining1-small.png')}
                    alt="Sofa"
                    effect="blur"
                />
            </div>

            <div className="header__bed">
                <LazyLoadImage
                    className="w-full"
                    src={require('../../img/bed1.png')}
                    placeholderSrc={require('../../img/bed1-small.png')}
                    alt="Sofa"
                    effect="blur"
                />
            </div>
        </section>
    )
}

export default HeroSection