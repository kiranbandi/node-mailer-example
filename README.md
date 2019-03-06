# Node REST API Emailer

This is a prototype to show how node JS can be used as a backend server
that notifies a user through Email after a Form Submission on a UI.

The application exposes a GET REST end point [notify](http://localhost:8443/notify) on port 8443.

It expects the request to have the following parameters **name** , **email** and **message**
Also there is no validation happening in the back and so it should be handled 
at the UI before making the call.

### Configuration for the Mailer

To send an email via SMTP you need to provide the details of the EmailID from which 
you would like to receive the mail.

For this create a file called **config.js** at the root level , it should export the 
email ID and the password for the maidl ID like this - 
```
module.exports = {
    "PASSWORD": 'password',
    "EMAIL": 'emailID'
}
```

The mail service is set to **gmail** in the mailer.js file but can be changed 
depending on your mail host , to do this set the host variable while creating the 
transport layer

Also for this to work you must configure your gmail here so you can use it using a simple username password combination. [Less Secure Apps](https://myaccount.google.com/lesssecureapps ) 


Nodemailer is used with minimum configurations , but for more complex scenarios go here [NodeMailer](https://nodemailer.com/about/)

** It goes without saying use a throwaway email account while testing , but then again its your email account so go nuts for all I care :joy: **

#### Run the following commands to have the application up and running -

* `npm install`
* `npm run start`

#### The first command install the node dependencies while the second one starts the express server





