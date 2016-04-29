var express = require('express');
var cloudinary = require('cloudinary');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.post('/', function(req, res) {
    response.send(JSON.stringify(request))
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


cloudinary.config({cloud_name: 'dqkznq6ix',api_key: '557366327443484',api_secret: 'oXkowgZov8g5pa-YXirUpoFqdRI'});

cloudinary.uploader.upload("test.jpg", function(result) { console.log(result)});


