import React from "react";
import Hero from "../components/Hero";
import {
    IdealVenueSection,
    LocalBannerAdsSection,
} from "../components/HomeSections";
import CardLogueo from "../components/CardLogueo";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <CardLogueo option="register"/>
                <Hero />
                <IdealVenueSection />
                <LocalBannerAdsSection />
            </>
        );
    }
}
