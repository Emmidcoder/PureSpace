import React from "react";
import ServicesItem from "./ServicesItem";
import iconShield from "../../img/icon-shield.svg";
import iconSetting from "../../img/icon-settings.svg";
import iconhand from "../../img/icon-hand.svg";



const Services = () => {

    return (
        <section className="services">
            <h2 className="heading2 text-center">Why Choose Us?</h2>

            <div className="services__items">
                <ServicesItem
                    className="service__quality"
                    src={iconShield}
                    heading="Quality"
                    text="Our products are made from high-quality materials and crafted with attention to detail to ensure longevity and durability."
                />
                <ServicesItem
                    className="service__functionality"
                    src={iconSetting}
                    heading="Functionality"
                    text="Our minimalist designs are not only aesthetically pleasing, but also functional and practical, making your life easier and more efficient."
                />
                <ServicesItem
                    className="service__sustainability"
                    src={iconhand}
                    heading="Sustainability"
                    text="We are committed to minimizing our environmental impact by using eco-friendly and sustainable materials and practices."
                />
            </div>
        </section>
    )
}

export default Services