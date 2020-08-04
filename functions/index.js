const functions = require('firebase-functions');

const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
}));

// Sends an email confirmation when a user registeres.
exports.sendEmailConfirmation = functions.database.ref('/epoxy-registrants/{uid}').onWrite((change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Arittgray. <noreplyinfo@arittgray.com>',
    to: val.email,
    subject: `Welcome, ${val.epoxy_training_fullname} to Arittgray` ,
    html: `<div style="font-size:1rem;display:flex; justify-content:center; align-items:center; min-width:50%; box-shadow:1px 1px 4px rgba(0,0,0,0.2); background"#fff">
    <h1>Welcome to Epoxy Pratical Training</h1>
    <hr/>
    <p>Hello, ${val.epoxy_training_fullname}; your application epoxy training has been received, further communcations will be forwarded to you</p>
    <h6>Welcome on board!</h6>
    </div>`
  };



  return mailTransport.sendMail(mailOptions)
    .then(() => console.log(`New Registrant confirmation email sent to:`,
        val.epoxy_training_email))
    .catch((error) => console.error('There was an error while sending the email:', error));
});