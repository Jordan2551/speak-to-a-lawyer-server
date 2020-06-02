import React from 'react';

import { Alert } from 'react-bootstrap';

const DynamicAlert = (props) => {
    const {header, text, variant} = props;
    return (
         text ? 
            <Alert variant={variant}>
                <Alert.Heading>{header}</Alert.Heading>
                <p>
                    {text}
                </p>
            </Alert>
            : ''
    );
}

export default DynamicAlert;