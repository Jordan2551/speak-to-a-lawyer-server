import React from 'react';
import './content-box-container.scss';

import ContentBox from '../content-box';

const ContentBoxContainer = (props) => {
    const content = props.content;
    return (
        <div className="content-box-container">
            <ContentBox 
            text="Step 1" 
            buttonText="Choose your Service"
            backgroundColor="#36A769"
            content="Select the service you are interested in from our wide variety of legal services. If you can’t figure it out then we will make sure to help you!"
            />
            <ContentBox 
            text="Step 2" 
            buttonText="Choose your Service"
            backgroundColor="#263059"
            content="Select the service you are interested in from our wide variety of legal services. If you can’t figure it out then we will make sure to help you!"
            />
            <ContentBox 
            text="Step 3" 
            buttonText="Choose your Service"
            backgroundColor="#4B505C"
            content="Select the service you are interested in from our wide variety of legal services. If you can’t figure it out then we will make sure to help you!"
            />
        </div>

    );
}

export default ContentBoxContainer;