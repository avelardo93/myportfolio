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
	        pass: 'code3#9(3#'
	      }
	    });

	    smtpTransport.sendMail({
	       from: req.body.email, // sender address
	       to: 'avelardo93@gmail.com', // comma separated list of receivers
	       subject: 'portfolio email from ' + req.body.email, // Subject line
	       text: 'New message from: ' + req.body.name + ' : ' 
	       + req.body.telephone + ' : ' + 
	       req.body.message // plaintext body
	    }, function(error, response){
	       if(error){
	           console.log(error);
	       }else{
	           console.log("Message sent: " + response.message);
	       }
	    });
	    res.redirect( '/' );
	});

}
