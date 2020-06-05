import React from 'react';

import { Form, Container, Button } from 'react-bootstrap';
import './contact-form.scss';
import PRACTICE_AREAS from './practice-areas-content';
import axios from 'axios';
import DynamicAlert from '../dynamic-alert/dynamic-alert';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            phone: '',
            caseDetails: '',
            alert: { header: '', text: '', variant: ''}
         };
    }

     handleOnChange = (event) => {
         const {value, id} = event.target;
         this.setState({[id]: value});
     }

     handleOnSubmit = (event) =>{
        const { name, email, phone, caseDetails } = this.state;
        axios({
           url: 'contact',
           method: 'post',
           data:{
               practiceArea: this.props.practiceArea,
               name,
               email,
               phone,
               caseDetails
           }
        }).then(res =>{
            const {message} = res.data;
            this.setState({alert: message});
            this.props.showStep(3);
        })
        .catch(res => {
            const {message} = res.response.data;
            this.setState({alert: message});
        });
        event.preventDefault();
    }

    render() {
        const { header, text, variant } = this.state.alert;
        return (
            <Container className="margin-t-lg">
                <DynamicAlert header={header} text={text} variant={variant} />
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                    <Form.Label>Which practice area do you need help with?</Form.Label>
                    <Form.Control id="practiceArea" defaultValue={this.props.practiceArea} as="select" value={this.state.practiceArea} onChange={this.handleOnChange}>
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
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control id="phone" type="tel" placeholder="Your Phone Number" value={this.state.phone} onChange={this.handleOnChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tell us more about your case</Form.Label>
                        <Form.Control id="caseDetails" as="textarea" rows="5" value={this.state.caseDetails} onChange={this.handleOnChange} />
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