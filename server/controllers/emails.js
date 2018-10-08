module.exports = {
    sendEmail: function (req, res) {
        console.log(req.body);
        'use strict';

        const nodemailer = require('nodemailer');
        const fs = require('fs');

        let raw = fs.readFileSync('portfolio-218418-439166de65f3.json');
        let creds = JSON.parse(raw);
        console.log(creds);

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user: creds.client_email,
              serviceClient: creds.client_id,
              privateKey: creds.private_key
            }
        });
              

        console.log('Credentials obtained, sending message...');

        // Message object
        let message = {
            // Comma separated list of recipients
            to: 'Mandy Mericle <mandmericle@gmail.com>',

            from: req.body.Name + " " + req.body.Email,

            // Subject of the message
            subject: req.body.Subject,

            // plaintext body
            text: `Message posted on portfolio from ${req.body.Name} (${req.body.Email}): ${req.body.Body}`,

            // HTML body
            html:
                `<h4>Message posted on portfolio from ${req.body.Name} (${req.body.Email}): ${req.body.Body}</h4>` +
                '<p>' + req.body.Body + '</p>'
        };
        console.log(message);

        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log('Error occurred');
                console.log(error.message);
                return process.exit(1);
            }

            console.log('Message sent successfully!');
            console.log(nodemailer.getTestMessageUrl(info));

            // only needed when using pooled connections
            return { message: "Success" };
        });
    }
}