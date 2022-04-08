var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'testingrealcoderz360@gmail.com',
        pass:"Shivam@99"
    }

});
var mailOptions={
    from:'testingrealcoderz@gmail.com',
    to:'chaubey17.shivam@gmail.com,chaubey1517.shivam@gmail.com',
    subject:'hello testing',
    text:'hello test'
}

transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('email sent',info.response)
    }
})