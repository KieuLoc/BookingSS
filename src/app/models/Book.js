const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Book = new Schema({
    name: { type: String, maxLength: 255, require: true },
    author: { type: String, maxLength: 255, require: true },
    description: { type: String, maxLength: 600 },
    price: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    slug: { type: String, slug: 'name', unique: true }

}, {
    timestamps: true
});
module.exports = mongoose.model('Book', Book)