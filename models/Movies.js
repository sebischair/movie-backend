var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('Movie', new mongoose.Schema(
    {
        _id: String,
        title: String,
        description: String,
        year: Number,
        actors : [{ type: ObjectId, ref: 'Actor' }]
    }));