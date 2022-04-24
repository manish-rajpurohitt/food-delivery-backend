const nodemailer = require('nodemailer');

const sendEmail = (options) =>{
    console.log(options.to, options.text)

    const transpoter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    }

    transpoter.sendMail(mailOptions, function(err, info){
        if(err) console.log(err);
        else console.log(info);
    })
}

module.exports = sendEmail; 