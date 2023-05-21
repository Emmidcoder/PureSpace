import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../img/icon-logo-black.svg"
import facebook from "../img/icon-facebook.svg"
import twitter from "../img/icon-twitter.svg"
import instagram from "../img/icon-instagram.svg"


const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-logo">
                <LazyLoadImage
                    className="w-full"
                    src={logo}
                    alt="logo"
                    effect="blur"
                />
            </div>

            <div className="mt-5 flex justify-between">
                <div className="max-w-[26.5rem] flex flex-wrap  gap-x-12 gap-y-4 ">
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>
                    <p>Our Story</p>
                    <p>Benefits</p>
                    <p>Team</p>
                    <p>Careers &nbsp;</p>
                    <p>FAQ</p>
                </div>

                <div className="flex gap-6">
                    <div className="facebook">
                        <LazyLoadImage
                            className="w-full"
                            src={facebook}
                            alt="facebook-logo"
                            effect="blur"
                        />
                    </div>
                    <div className="twitter">
                        <LazyLoadImage
                            className="w-full"
                            src={twitter}
                            alt="twitter-logo"
                            effect="blur"
                        />
                    </div>
                    <div className="instagram">
                        <LazyLoadImage
                            className="w-full"
                            src={instagram}
                            alt="instagram-logo"
                            effect="blur"
                        />
                    </div>

                </div>
            </div>

            <div className="mt-5 pb-8 flex justify-between">
                <div>
                    <p className="font-extralight text-[#7d7d7d] font-e">Copyright © 2020. Pure Space. All rights reserved.</p>
                </div>
                
                <div className="flex gap-6">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer