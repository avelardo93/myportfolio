var express = require('express');
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport")
var app = express();
var PORT = process.env.PORT || 8000;


var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/public/index.html'));
	});


//nodeMailer 
/*
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "tonyv089@hotmail.com",
        pass: "yanks32393"
    }
});


app.get('/send',function(req,res){
// setup e-mail data with unicode symbols
var mailOptions = {
	name : req.query.name,
    phone : req.query.phone,
    email : req.query.email,
    message : req.query.message
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
});
*/

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})	                                                               

