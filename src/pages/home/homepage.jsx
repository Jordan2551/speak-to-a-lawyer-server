import React from 'react';
import './homepage.scss';

import Hero from '../../components/hero/hero';
import SectionHeader from '../../components/section-header/section-header';
import Banner from '../../components/banner/banner';
import ContentBoxContainer from '../../components/content-box/content-box-container/content-box-container';

const Homepage = () => {
    return (
        <>
            <Hero/>
            <Banner>
                <h3 className="desktop-view">
                    Just looking to contact a lawyer? <a href="#contact">Fill out</a> our contact form to speak to a lawyer fast!
                </h3>
                <h3 className="mobile-view">
                    <a href="#contact">Fill out</a> our contact form to speak to a lawyer fast!
                </h3>
            </Banner>
            <SectionHeader title="How Does it Work?" variation="section-header"/>
            <ContentBoxContainer/>
        </>
    );
}

export default Homepage;