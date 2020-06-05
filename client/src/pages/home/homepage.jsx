import React from 'react';
import './homepage.scss';

import Hero from '../../components/hero/hero';
import SectionHeader from '../../components/section-header/section-header';
import ContentBoxContainer from '../../components/content-box/content-box-container/content-box-container';
import ContactForm from '../../components/contact-form/contact-form';


import { STEP_CONTENT } from './step-content';
import { SERVICE_CONTENT } from './service-content';
import { useState } from 'react';
import StepsContext from '../../contexts/steps/steps';
import { useRef } from 'react';
import PaymentForm from '../../components/payment-form/payment-form';
import Banner from '../../components/banner/banner';


const Homepage = () => {

    const [step2, setStep2] = useState({show: false, practiceArea: ''});
    const [step3, setStep3] = useState({show: false});

    const paymentRef = useRef();

    const showStep = (stepNum, practiceArea) =>{
        if(stepNum === 2)
            setStep2({show: true, practiceArea: practiceArea});
        else{
            setStep3({show: true});
            window.scrollTo(0, paymentRef.current.offsetTop);
        }
    } 

    return (
        <section id="home">
            <Hero/>
            <Banner>
                <h3>
                    Looking to quickly speak to a lawyer? Fill out our <a href="#step2" onClick={() => showStep(2)}>contact form</a> to get in touch with an expert fast!
                </h3>
            </Banner>
            <section id="how-it-works">
                <SectionHeader title="How Does it Work?" variation="section-header"/>
                <ContentBoxContainer content={STEP_CONTENT} variant={'step-box'}/>
            </section>
            <section id="step1">
                <SectionHeader title="Choose your Service" subtitle="Step 1 - Click the service you need help with" variation="section-header"/>
                <StepsContext.Provider value={{step2, step3, showStep}}>
                    <ContentBoxContainer content={SERVICE_CONTENT} variant={'service-box'} />
                </StepsContext.Provider>
            </section>
            {step2.show ? 
                <section id="step2" className="margin-lg">
                    <SectionHeader title="Let's set up your Call!" subtitle="Step 2 - Fill out a few details and payment information to get legal advice from a lawyer specializing in the service you need." variation="section-header"/>
                    <ContactForm showStep={showStep} practiceArea={step2.practiceArea}/>
                </section>
                : ''
            }
            {step3.show ?
                <section id="step3" className="margin-lg">
                    <SectionHeader title="Let’s get your Payment Finalized" subtitle="Step 3 - pay for the first 15 minutes of conversation with a lawyer so we can start fighting for your best interest!" variation="section-header"/>
                    <div ref={paymentRef}>
                        <PaymentForm price={15} />                    
                    </div>
                </section>
                : ''
            }
        </section>

    );
}

export default Homepage;