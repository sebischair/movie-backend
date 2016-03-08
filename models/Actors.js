var mongoose = require('mongoose');

mongoose.model('Actor', new mongoose.Schema(
    {
        name: String,
        _id: String,
        character:[]
    }
));