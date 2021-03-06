import React from "react";

import Footer from "../shared/footer/Footer";
import ProfileContainer from "./containers/ProfileContainer";
import AboutMeNav from "./nav/AboutMeNav";

const AboutMe = () => (
    <div>
        <AboutMeNav />
        <ProfileContainer />
        <Footer />
    </div>
);

export default AboutMe;
