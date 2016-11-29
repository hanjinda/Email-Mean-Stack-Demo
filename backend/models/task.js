var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: String,
    time: String,
    content: String
});

module.exports = mongoose.model('Task', TaskSchema);
