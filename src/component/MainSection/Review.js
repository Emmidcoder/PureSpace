import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import flower3 from "../../img/flower3.svg"
import flower4 from "../../img/flower4.svg"


const Review = () => {

    return (
        <section className="review">
            <div className=" text-center">
                <h2 className="heading2 ">What Our Customers Are Saying</h2>
                <p>Hear from satisfied clients who've transformedtheir homes with PureSpaces</p>
            </div>

            <div className="img-flower3">
                <LazyLoadImage
                    className="w-full"
                    src={flower3}
                    alt="flower"
                    effect="blur"
                />
            </div>

            <blockquote className="my-10 flex justify-center text-txtcl">
                <div className="h-96">
                    <LazyLoadImage
                        className="w-full h-96"
                        src={require("../../img/review-img.png")}
                        placeholderSrc={"../../img/review-small.png"}
                        alt="a man and a woman"
                        effect="blur"
                    />
                </div>

                <div className="px-16 bg-white flex items-center rounded-e-xl">
                    <div className="max-w-sm">
                        <h4 className=" text-2xl font-semibold">John Henry</h4> 
                        <span>Amid Gamer</span>
                        <p className="text-lg font-medium">"I've been an avid gamer for years, but virtual reality gaming has taken my experience to a whole new level. The immersive graphics and realistic environments make me feel like I'm really in the game. I highly recommend this platform to any gamer looking for an unforgettable gaming experience.</p>
                    </div>
                </div>
            </blockquote>

            <div className="">
                <div className="review__scrollbar">
                    <div className="review__scrollbar--fill">&nbsp;</div>&nbsp;
                </div>

            </div>

            <div className="img-flower4">
                <LazyLoadImage
                    className="w-full"
                    src={flower4}
                    alt="flower"
                    effect="blur"
                />
            </div>
        </section>
    )
}
export default Review