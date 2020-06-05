import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Logo from '../../assets/images/stripe-logo.png';


const StripeButton = (props) => {
    const { price, onToken } = props;
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DmzfNEXApId3SDWKD37NWEJQ00lhcnZ97S';

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Speak to a Lawyer'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );   
}

export default StripeButton;