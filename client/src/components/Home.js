import React from "react";

import Navbar from "./shared/Navbar";
import Landing from "./home/Landing";
import HowItWorks from "./home/HowItWorks";
import SocialProof from "./home/SocialProof";
import Footer from "./home/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <HowItWorks />
            <SocialProof />
            <Footer />
        </>
    );
};

export default Home;
