var express = require('express');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({ secret: 'chandrima' }));
app.use(passport.initialize());
app.use(passport.session());

//require ("./test/app.js")(app);

//var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.PORT || 3002;


app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

var assignment = require("./assignment/app.js");
assignment(app);

app.listen(port);