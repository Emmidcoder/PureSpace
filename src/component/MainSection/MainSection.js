import React from "react";
import Previews from "./Previews";
import Services from "./Services";
import Products from "./Products";
import Review from "./Review";


const MainSection = () => {
    return (
        <main>
            <Previews />
            <Services />
            <Products />
            <Review/>
        </main>
    )
}

export default MainSection