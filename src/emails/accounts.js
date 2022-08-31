const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email,name)=>{
sgMail.send({
    to: email, 
    from: 'safyfp@gmail.com', 
    subject: 'Thanks for joining us!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
})
}

const sendCancelEmail = (email,name)=>{
    sgMail.send({
        to: email, 
        from: 'safyfp@gmail.com', 
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}. Your account has been succesfully deleted, wish you all the best!`
    })
    }


module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}