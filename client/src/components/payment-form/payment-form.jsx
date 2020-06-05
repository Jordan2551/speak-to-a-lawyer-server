import React, { useState } from 'react';

import './payment-form.scss';
import Cards from '../../assets/images/cards.png';

import axios from 'axios';

import StripeButton from '../stripe-button/stripe-button';
import DynamicAlert from '../dynamic-alert/dynamic-alert';


const PaymentForm = (props) => {

    const [alert, setAlert] = useState({ header: '', text: '', variant: ''});
    const {price} = props;

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: price * 100,
                token
            }
        }).then(res =>{
            const {message} = res.data;
            setAlert(message);
        })
        .catch(res => {
            const {message} = res.response.data;
            setAlert(message);
        });
    };

    return (
        <>
            <div className="payment-form">
                <DynamicAlert header={alert.header} text={alert.text} variant={alert.variant} />
                <h3>speaktoalawyer.ca</h3>
                <hr/>
                <div className="breakdown">
                    <p>15 minute conversation with a lawyer</p>
                </div>
                <hr/>
                <div className="total">
                    <p>Total</p>
                    <p>${price}</p>
                </div>
                <div className="payment">
                    <StripeButton price={price} onToken={onToken} />
                    <img src={Cards} alt="visa, mastercard, discover, amex"/>
                </div>

            </div>
        </>
    );
}

export default PaymentForm;