var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    userid: String,
    messageid: String,
    title: String,
    time: String,
    content: String
});

module.exports = mongoose.model('Task', TaskSchema);
