import React from 'react';
import './section-header.scss';

const SectionHeader = (props) => {
    const { title, variation } = props;
    return (
        <div className={variation}>
            <h3>{title}</h3>
        </div>
    );
}

export default SectionHeader;