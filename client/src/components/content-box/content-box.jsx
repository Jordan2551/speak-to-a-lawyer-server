import React from 'react';
import CustomButton from '../custom-button/custom-button';

import './content-box.scss';
import { useContext } from 'react';
import StepsContext from '../../contexts/steps/steps';

const ContentBox = (props) => {
    const { text, content, backgroundColor, buttonText, showButton, buttonDest, variant, image } = props;
    const stepsContext = useContext(StepsContext);

    return (
        <div className={variant} style={{backgroundColor: backgroundColor}}>
            {
                image ?
                    <img src={image} alt={text}/>
                : ''
            }
            <h3 className="margin-md">{text}</h3>
            <p className="margin-lg">{content}</p>
            {
             showButton ?
                <CustomButton 
                    click = {() => stepsContext.showStep(2, text)}
                    text={buttonText} 
                    variation="hero-button1" 
                    dest={buttonDest}
                    bob
                /> : ''
             }
        </div>
    );
}

export default ContentBox;