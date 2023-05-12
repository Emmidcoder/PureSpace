import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../img/icon-sofa-log 1.svg"
import 'react-lazy-load-image-component/src/effects/blur.css';



const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <LazyLoadImage src={logo} />
                <span className="text-xl font-logo">PureSpace</span>
            </div>

            <div className="navigations">
                <ul className="navigation">
                    <li>SHOP</li>
                    <li>COLLECTIONS</li>
                    <li>ABOUT US</li>
                    <li>BLOG</li>
                </ul>

                <div className="cta__btn">
                    <button className="btn-buy">Buy now</button>
                    <button className="btn-contact">Contact us</button>
                </div>
            </div>

        </nav>

    )
}

export default NavBar;