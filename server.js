var express = require('express');
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport")
var app = express();
//var config = require('./config.js');
var path = require('path');



var PORT = process.env.PORT || 8000;



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/public/index.html'));
	});


//nodeMailer 
var transporter = nodemailer.createTransport(
    smtpTransport('smtps://avelardo93%40gmail.com:password@smtp.gmail.com')
);


app.get('/send', function (req, res) {

	var transporter = nodemailer.createTransport(options);

    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.name + "<br>" +
        		"Phone Number: " + req.query.phone + "<br>" +
               "Email: " + req.query.email + "<br>" +
               "Message: " + req.query.message 
    }

    transporter.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})	                                                               

