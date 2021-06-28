const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Customer = new Schema({
    name: { type: String, maxLength: 255, require: true },
    address: { type: String, maxLength: 255, require: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    slug: { type: String, slug: 'name', unique: true }

}, {
    timestamps: true
});
module.exports = mongoose.model('Customer', Customer)