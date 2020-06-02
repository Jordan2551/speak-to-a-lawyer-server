import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import Logo from '../../assets/images/stripe-logo.png';


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DmzfNEXApId3SDWKD37NWEJQ00lhcnZ97S';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert('Payment succesful!!!')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment info!');
        });
    };

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