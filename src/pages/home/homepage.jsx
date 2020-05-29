import React from 'react';
import './homepage.scss';

import Hero from '../../components/hero/hero';
import SectionHeader from '../../components/section-header/section-header';
import Banner from '../../components/banner/banner';
import ContentBoxContainer from '../../components/content-box/content-box-container/content-box-container';

import { STEP_CONTENT } from './step-content';
import { SERVICE_CONTENT } from './service-content';
import { useState } from 'react';
import StepsContext from '../../contexts/steps/steps';
import Dropdown from 'react-bootstrap/Dropdown';
import { useRef } from 'react';


const Homepage = () => {

    const [showStep2, setShowStep2] = useState(false);
    const [showStep3, setShowStep3] = useState(false);

    const serviceBoxes = useRef(<ContentBoxContainer content={SERVICE_CONTENT} variant={'service-box'}/>);

    const showStep = (stepNum, practiceArea) =>{
        if(stepNum === 2)
            setShowStep2(true);
        else
            setShowStep3(true);
        console.log("BOXES",serviceBoxes);
        // window.scrollTo(150, serviceBoxes.current.offsetTop);
        // Dropdown.select(practiceArea);
    } 

    return (
        <section id="home">
            <Hero/>
            <Banner>
                <h3 className="desktop-view">
                    Just looking to contact a lawyer? <a href="#contact">Fill out</a> our contact form to speak to a lawyer fast!
                </h3>
                <h3 className="mobile-view">
                    <a href="#contact">Fill out</a> our contact form to speak to a lawyer fast!
                </h3>
            </Banner>
            <section id="how-it-works">
                <SectionHeader title="How Does it Work?" variation="section-header"/>
                <ContentBoxContainer content={STEP_CONTENT} variant={'step-box'}/>
            </section>
            <section id="step1">
                <SectionHeader title="Choose your Service" subtitle="Step 1 - Click the service you need help with" variation="section-header"/>
                <StepsContext.Provider value={{showStep2, showStep3, showStep}}>
                    {serviceBoxes.current}
                </StepsContext.Provider>
            </section>
            {showStep2 ? 
                <section id="step2">
                    <SectionHeader title="Tell us About your Case" subtitle="Step 2 - Fill out your details and payment information" variation="section-header"/>
                </section>
                : ''
            }
            
        </section>
    );
}

export default Homepage;