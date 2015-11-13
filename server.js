var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

var port = process.env.PORT || 3030;
var router = express.Router();

mongoose.connect('mongodb://dbadmin:dbpassword@ds054288.mongolab.com:54288/mstest', function (err){
	if(err) {
		console.log(err);
	}
});

var pollCtrl = require('./api/controllers/poll');

//poll    
router.route('/api/poll/:id')
	.get(pollCtrl.getPoll)

router.route('/api/poll')
	.post(pollCtrl.postVote);

router.get('*', function(req, res){
	//console.log(req);
	res.sendfile('./public/index.html');
});

app.use('/', router);

app.listen(port);
console.log('Listening on port 3030');
