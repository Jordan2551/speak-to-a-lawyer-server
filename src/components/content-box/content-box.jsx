import React from 'react';
import CustomButton from '../custom-button/custom-button';

import './content-box.scss';

const ContentBox = (props) => {
    const { text, content, backgroundColor, buttonText, dest, showButton, variant, image } = props;
    
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
                    text={buttonText} 
                    variation="hero-button1" 
                    dest={dest}
                    bob
                /> : ''
             }
        </div>
    );
}

export default ContentBox;