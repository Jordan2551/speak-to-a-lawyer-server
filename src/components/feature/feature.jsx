import React from 'react';
import './feature.scss';

const Feature = (props) => {
    const { title, titleHighlight, img, alt, content } = props;
    return (
        <div className="feature">
            <img src={img} alt={alt}/>
            <h3>{title} <span>{titleHighlight}</span></h3>
            <p>{content}</p>
        </div>
    );
}

export default Feature;