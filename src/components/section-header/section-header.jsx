import React from 'react';
import './section-header.scss';

const SectionHeader = (props) => {
    const { title, subtitle, variation } = props;
    return (
        <div className={variation}>
            <h3>{title}</h3>
            {subtitle ? <p>{subtitle}</p> : ''}
        </div>
    );
}

export default SectionHeader;