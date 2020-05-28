import React from 'react';
import CustomButton from '../custom-button/custom-button';

import './content-box.scss';

const ContentBox = (props) => {
    const { text, content, backgroundColor, buttonText, dest } = props;
    return (
        <div className="content-box" style={{backgroundColor: backgroundColor}}>
            <h3 className="margin-md">{text}</h3>
            <p className="margin-lg">{content}</p>
            <CustomButton 
                text={buttonText} 
                variation="hero-button1" 
                dest={dest}
                bob
            />
        </div>
    );
}

export default ContentBox;