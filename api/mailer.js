// import nodemailer from 'nodemailer';
// import smtpTransport from "nodemailer-smtp-transport";

// export async function mailer(props){
//     const mailer = nodemailer.createTransport(smtpTransport({
//         service: "gmail",
//         host: "smtp.gmail.com",
//         auth: {
    
//           user: process.env.MAILER.toString(), // gmail created just for testing purposes
//           pass: process.env.SECRET.toString() // for testing purposes
//         }
//       }));

//       const mailOptions = {

//         from: "<arittgray@gmail.com>",
//         to: props.receiver,
//         subject: props.subject,
//         text: props.text,
//         html: ``
//       };
    
//       // NOTE!!!
//       //  this is for any developer in the future, info is the second parameter of the callback
//       //  after error, i had to remove it since i wasnt using it currently to fix some codacy issue
//       await mailer.sendMail(mailOptions, (error) => {
//         // console.log(mailOptions, info);
//         if (error) {
//           throw error;
//           // console.log(error);
//         }
//         return "Mail sent";
//       });
//      return mailer; 
//     };
    

