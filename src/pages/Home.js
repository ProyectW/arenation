import React from "react";
import Hero from "../components/Hero";
import {
    IdealVenueSection,
    LocalBannerAdsSection,
} from "../components/HomeSections";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <IdealVenueSection />
                <LocalBannerAdsSection />
            </>
        );
    }
}
