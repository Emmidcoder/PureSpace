import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Products = () => {

    return (
        <section className="products">
            <div className="mx-auto max-w-xs">
                <h2 className="heading2 text-center">Featured Products</h2>
                <p>Browse our handpicked selection of minimalist essentials for your home</p>
            </div>

            <div className="product__items">

                <div>
                    <div>
                        <LazyLoadImage
                            className="w-[80%] mx-auto"
                            src={require("../../img/sofa2.png")}
                            placeholderSrc={"../../img/sofa2-small.png"}
                            alt="flower"
                            effect="blur"
                        />
                    </div>
                    <div className="product__item--pricing">
                        <span>sofa</span>
                        <p className="font-bold">₦100,000</p>
                    </div>
                </div>
                
                <div>
                    <div>
                        <LazyLoadImage
                            className="w-[80%] mx-auto"
                            src={require("../../img/Armchair2.png")}
                            placeholderSrc={"../../img/Armchair2-small.png"}
                            alt="flower"
                            effect="blur"
                        />
                    </div>

                    <div className="product__item--pricing">
                        <span>Armchair</span>
                        <p className="font-bold">₦100,000</p>
                    </div>
                </div>

                <div>
                    <div>
                        <LazyLoadImage
                            className="w-[80%] mx-auto"
                            src={require("../../img/Armchair3.png")}
                            placeholderSrc={"../../img/Armchair3-small.png"}
                            alt="flower"
                            effect="blur"
                        />
                    </div>

                    <div className="product__item--pricing">
                        <span>Armchair</span>
                        <p className="font-bold">₦100,000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products