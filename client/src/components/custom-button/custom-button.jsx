import React from 'react';
import './custom-button.scss';

const CustomButton = (props) => {
    const { text, dest, img, variation, bob, click } = props;
    const classes = `${variation} ${bob ? 'hvr-bob' : ''}`;
    return (
        <a href={dest} className={classes} onClick={click} >
            {text}
            {img ? <img src={img} alt=""/> : ''}
        </a>
    );
}

export default CustomButton;