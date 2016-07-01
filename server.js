var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 8080;



app.use(express.static(path.join(__dirname, '/app/public')));


//ROUTES
require('./app/routes/api-routes.js')(app); 
require('./app/routes/html-routes.js')(app);

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})	                                                               

