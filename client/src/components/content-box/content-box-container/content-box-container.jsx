import React from 'react';
import './content-box-container.scss';

import ContentBox from '../content-box';

const ContentBoxContainer = (props) => {
    const { content, variant } = props;
    return (
        <div className="content-box-container">
            {
                content.map(({text, buttonText, backgroundColor, content, showButton, image}, i) => (
                    <ContentBox
                        key={i}
                        text={text}
                        buttonText={buttonText}
                        backgroundColor={backgroundColor}
                        content={content}
                        showButton={showButton}
                        image={image}
                        variant={variant}
                    />
                ))
            }
        </div>
    );
}

export default ContentBoxContainer;