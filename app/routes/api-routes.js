var path 	= require('path');
var nodemailer 	= require('nodemailer');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){


	app.post('/', function (req, res) {
		console.log(req.body);
	    var smtpTransport = nodemailer.createTransport('SMTP', {
	      service: 'Gmail',
	      auth: {
	        user: 'avelardocode@gmail.com',
	        pass: 'coding9(3#'
	      }
	    });

	    smtpTransport.sendMail({
	       from: req.body.email, // sender address
	       to: 'avelardo93@gmail.com', // comma separated list of receivers
	       subject: 'portfolio email from ' + req.body.name, // Subject line
	       text: 'New message from: ' + req.body.email + ' : ' + req.body.mess + ' : ' + req.body.phone // plaintext body
	    }, function(error, response){
	       if(error){
	           console.log(error);
	       }else{
	           console.log("Message sent: " + response.message);
	       }
	    });
	});

}
