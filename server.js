const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV != 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log("Server running on port " + port);
});

app.post('/payment', (req, res) =>{
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'cad'
    };

    stripe.charges.create(body, (stripeError, stripeRes) =>{
        if(stripeError){
            res.status(500).send({ 
                message: 
                {
                    header: 'Payment not Submitted!',
                    text: 'Please check your details and try again later or call us at 647-550-2918',
                    variant: 'danger'
                }
            });
        }
        else{
            res.status(200).send({ 
                message: 
                {
                    header: 'Payment Successful!',
                    text: 'Thank you for choosing Speak to a Lawyer! An expert in your area of choice will be in touch with you soon!',
                    variant: 'success'
                }
            });        
        }
    });
});

app.post('/contact', (req, res) =>{
    const { practiceArea, name, email, phone, caseDetails } = req.body;
    const output = `
        <p>You have a new contact request </p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone Number: ${phone}</li>
            <li>Practice Area: ${practiceArea}</li>
        </ul>
        <h3>Case Details</h3>
        <p>${caseDetails}</p>
    `;
    //TODO CHANGE OT SECURE:TRUE, ENV CREDENTIALS
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "requests.speaktoalawayer@gmail.com",
            pass: "t0the1awyerweshallspeak"
        }
    });

    let mailOptions = {
        from: '"Speak to a Lawyer Contact" <jordan1158@gmail.com>',
        to: 'falador@my.yorku.ca',
        subject: 'Speak to a Lawyer Contact Request',
        test: "Hello world",
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            res.status(500).send({ 
                message: 
                {
                    header: 'Form not Submitted',
                    text: 'Please try again later or call us at 647-550-2918',
                    variant: 'danger'
                }
            });
        }
        res.status(200).send({ 
            message: 
            {
                header: 'Form Submitted Successfully',
                text: "Thanks for filling in your details! Please press the 'pay now' button below to pay for your first 15 minutes of conversation with a lawyer.",
                variant: 'success'
        }});
    })});
