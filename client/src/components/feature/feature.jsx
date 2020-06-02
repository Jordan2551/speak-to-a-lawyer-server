import React from 'react';
import './feature.scss';

const Feature = (props) => {
    const { 
        titleDesktop, titleMobile, titleHighlight, img, alt, content } = props;
    return (
        <div className="feature">
            <img src={img} alt={alt}/>
            <h3 className="desktop-view">{titleDesktop} <span>{titleHighlight}</span></h3>
            <h3 className="mobile-view">{titleMobile}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Feature;