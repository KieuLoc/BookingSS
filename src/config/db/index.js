const mongoose = require('mongoose');
async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/book_tsdv', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect sucessfully!!!')
    } catch {
        console.log('Connect failure!!!')
    }

}
module.exports = { connect };