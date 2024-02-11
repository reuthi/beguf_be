const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    type: {
        type: String,
        enum: ['text', 'audio'],
        required: true
    },
    headline: {
        type: String
    },
    subheadline: {
        type: String
    },
    time: {
        type: String
    },
    link: {
        type: String
    },
    content: {
        type: String
    },
});

module.exports = mongoose.model('Item', itemSchema);