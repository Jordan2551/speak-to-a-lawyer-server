import React from 'react';
import './banner.scss';

const Banner = (props) => {
    return (
        <div className="banner">
            {props.children}
        </div>
    );
}

export default Banner;

