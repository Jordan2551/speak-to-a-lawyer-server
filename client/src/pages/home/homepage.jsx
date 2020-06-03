import React from 'react';
import './homepage.scss';

import Hero from '../../components/hero/hero';
import SectionHeader from '../../components/section-header/section-header';
import Banner from '../../components/banner/banner';
import ContentBoxContainer from '../../components/content-box/content-box-container/content-box-container';
import ContactForm from '../../components/contact-form/contact-form';

import { STEP_CONTENT } from './step-content';
import { SERVICE_CONTENT } from './service-content';
import { useState } from 'react';
import StepsContext from '../../contexts/steps/steps';
import { useRef } from 'react';
import StripeButton from '../../components/stripe-button/stripe-button';


const Homepage = () => {

    const [step2, setStep2] = useState({show: false, practiceArea: ''});
    const [step3, setStep3] = useState({show: false});

    const serviceBoxes = useRef(<ContentBoxContainer content={SERVICE_CONTENT} variant={'service-box'}/>);

    const showStep = (stepNum, practiceArea) =>{
        if(stepNum === 2)
            setStep2({show: true, practiceArea: practiceArea});
        else
            setStep3({show: true});
        console.log("BOXES",serviceBoxes);

        //FIGURE OUT HOW TO SCROLL DOWN
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
                <StepsContext.Provider value={{step2, step3, showStep}}>
                    {serviceBoxes.current}
                </StepsContext.Provider>
            </section>
            {step2.show ? 
                <section id="step2">
                    <SectionHeader title="Let's set up your Call!" subtitle="Step 2 - Fill out a few details and payment information to get legal advice from a lawyer specializing in the service you need." variation="section-header"/>
                    <ContactForm showStep={showStep} practiceArea={step2.practiceArea}/>
                </section>
                : ''
            }
            {step3.show ?
                <section id="step2">
                    <StripeButton price={15} />
                </section>
                : ''
            }

        </section>

    );
}

export default Homepage;