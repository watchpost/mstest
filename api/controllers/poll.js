var Poll = require('../models/pollModel');

exports.postVote = function (req, res) {
	Poll.update(
		{_id: req.body.id, "options.name" : req.body.name}, 
		{$inc : {"total" : 1, "options.$.votes" : 1 } },
		{upsert: true}, 
		function(err, poll){
			res.json(poll);
			console.log("err:" + err);
			console.log("poll: " + poll);
		}
	);
}

exports.getPoll = function(req, res){
	Poll.findOne({_id: req.params.id}, function (err, things) {
		if(err) throw err;
		res.json(things);
	});
}