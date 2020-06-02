import React from 'react';

import { Form, Container, Button, Alert } from 'react-bootstrap';
import './contact-form.scss';
import PRACTICE_AREAS from './practice-areas-content';
import axios from 'axios';
import DynamicAlert from '../dynamic-alert/dynamic-alert';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            practiceArea: PRACTICE_AREAS[0],
            name: '',
            email: '',
            moreInfo: '',
            alert: { header: '', text: '', variant: ''}
         };
    }

     handleOnChange = (event) => {
         const {value, id} = event.target;
         this.setState({[id]: value});
     }

     handleOnSubmit = (event) =>{
        const { practiceArea, name, email, moreInfo } = this.state;
        axios({
           url: 'contact',
           method: 'post',
           data:{
               practiceArea,
               name,
               email,
               moreInfo
           }
        }).then(res =>{
            this.setState({
                alert: 
                    {
                        header: 'Form Submitted Successfully',
                        text: "Thanks for filling in your details! Please press the 'pay now' button below to pay for your first 15 minutes of conversation with a lawyer.",
                        variant: 'success'
                    }
            })
        }).catch(error => {
            this.setState({
                alert: 
                    {
                        header: 'Form not Submitted Please check the Error Below!',
                        text: JSON.parse(error),
                        variant: 'danger'
                    }
            })
        });
        event.preventDefault();
    }

    render() {
        const { header, text, variant } = this.state.alert;
        return (
            <Container>
                <DynamicAlert header={header} text={text} variant={variant} />
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                    <Form.Label>Which practice area do you need help with?</Form.Label>
                    <Form.Control id="practiceArea" as="select" value={this.state.practiceArea} onChange={this.handleOnChange}>
                        {
                            PRACTICE_AREAS.map((practiceArea, i) => (
                                <option key={i}>{practiceArea}</option>
                            ))
                        }
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control id="name" type="text" placeholder="Your Full Name" value={this.state.name} onChange={this.handleOnChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" type="email" placeholder="Your Email Address" value={this.state.email} onChange={this.handleOnChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tell us more about your case</Form.Label>
                        <Form.Control id="moreInfo" as="textarea" rows="5" value={this.state.moreInfo} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}


export default ContactForm;