const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Invoice = new Schema({
    CustomerName: { type: String, maxLength: 255, require: true },
    BookName: { type: String, maxLength: 255, require: true },
    Number: { type: String },
    TotalPrice: { type: String },
    slug: { type: String, slug: 'name', unique: true }

}, {
    timestamps: true
});
module.exports = mongoose.model('Invoice', Invoice)