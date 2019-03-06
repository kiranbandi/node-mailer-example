const nodemailer = require('nodemailer');
const config = require('./config');

// Configure Mail Client 
var mailer = {};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.EMAIL,
        pass: config.PASSWORD
    },
    secure: false,
    tls: {
        rejectUnauthorized: false
    }
});

mailer.sendMail = function(senderEmail, senderName, senderMessage) {

    senderEmail = 'bvenkatkiran@gmail.com';
    senderName = 'test';
    senderMessage = 'asdasd asd asdsa sad asd dasd asd asd ';

    const mailOptions = {
        from: config.EMAIL,
        to: 'bvenkatkiran@gmail.com',
        subject: 'Cloneswarm Project Report',
        text: 'Hello,\n' + senderName +
            ' sent you the following message :\n' +
            senderMessage + "\n\n Drop him a mail at " + senderEmail
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                reject(error);
            } else {
                resolve('Email sent to ' + senderEmail);
            }
        });
    });

}

module.exports = mailer;