var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var PollModel = new mongoose.Schema({
	_id: ObjectId,
	title: String,
	total: Number,
	options: Array
}, { collection: 'poll' });

module.exports = mongoose.model('Poll', PollModel);