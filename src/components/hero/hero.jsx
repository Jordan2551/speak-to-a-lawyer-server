import React from 'react';
import './hero.scss';

import Comment from '../../assets/images/comment.png';
import Video from '../../assets/images/video.png';
import Shield from '../../assets/images/shield.png';
import DownArrow from '../../assets/images/down-arrow.png';
import Law from '../../assets/images/law.png';

import Feature from '../feature/feature';
import CustomButton from '../custom-button/custom-button';

const Hero = () => {
    return (
        <div className="hero-bg">
            <div className="title">
                <h1>Real, Licensed</h1> 
                <h1>Speak to a Lawyer, <span>Online!</span></h1>
            </div>
            <div className="features">
                <Feature 
                    title="Instant Messaging"
                    img={Comment}
                    alt="Instant Messaging"
                    content=""
                />
                <Feature 
                    title="Video Confrencing"
                    img={Video}
                    alt="Video Confrencing"
                    content=""
                />
                <Feature 
                    title="Safe, Secure and"
                    titleHighlight="Legally Valid"
                    img={Shield}
                    alt="Shield"
                    content=""
                />
            </div>
            <div className="hero-buttons">
                <CustomButton text="Speak to a Lawyer Now" variation="hero-button2" img={Law} bob/>
                <CustomButton text="Learn More" variation="hero-button1" bob/>
            </div>
            
            <a href="#" className="down-arrow hvr-sink">
                <img src={DownArrow} alt="Down Arrow"/>
            </a>
        </div>
    );
}

export default Hero;