import React from 'react';

import { Form, Container, Button, Alert } from 'react-bootstrap';
import './contact-form.scss';
import PRACTICE_AREAS from './practice-areas-content';
import axios from 'axios';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            practiceArea: PRACTICE_AREAS[0],
            name: '',
            email: '',
            moreInfo: ''
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
            
            //SUCCESS POPUP
        }).catch(error => {
            console.log('Form error:', JSON.parse(error));
            //WARNING POPUP
        });
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Alert key={2} variant='success'>
                    This is a 'succuess' alert with{' '}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                    like.
                </Alert>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="practiceArea">
                    <Form.Label>Which practice area do you need help with?</Form.Label>
                    <Form.Control id="practiceArea" as="select" value={this.state.practiceArea} onChange={this.handleOnChange}>
                        {
                            PRACTICE_AREAS.map(practiceArea => (
                                <option>{practiceArea}</option>
                            ))
                        }
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control id="name" type="text" placeholder="Your Full Name" value={this.state.name} onChange={this.handleOnChange} required />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" type="email" placeholder="Your Email Address" value={this.state.email} onChange={this.handleOnChange} required />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tell us more about your case</Form.Label>
                        <Form.Control id="moreInfo" as="textarea" rows="7" value={this.state.moreInfo} onChange={this.handleOnChange} />
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