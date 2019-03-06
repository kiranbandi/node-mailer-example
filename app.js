const express = require('express');
var app = express();
const mailer = require('./mailer');

// Start the server on Port 8443 
app.listen(8443, function() { console.log("Server Live on Port 8443") })

app.get('/notify', function(req, res) {
    // Setting response headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    const { name, email, message } = req.query;

    mailer.sendMail(email, name, message)
        .then((response) => { res.end(response); })
        .catch(err => {
            console.log(err);
            res.status(404).send("Congratulations you broke the Internet");
        });

})