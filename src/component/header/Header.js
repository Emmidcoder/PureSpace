import React from "react"
import NavBar from "./NavBar"
import HeroSection from "./HeroSection"


const Header = () => {

    return (
        <header className="header">
            <NavBar />
            <HeroSection/>
        </header>
    )
}

export default Header