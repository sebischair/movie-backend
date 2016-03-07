var mongoose = require('mongoose');

mongoose.model('Actor', new mongoose.Schema(
    {
        _id: String,
        name: String,
        birthdate: Date
    }));