const { json } = require('express');
const Book = require('../models/Book')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {

    //[GET]/me/stored/books
    storedBooks(req, res, next) {
            Promise.all([Book.find({})])
                .then(([books, deleteCount]) =>
                    res.render('me/stored-books', {
                        deleteCount,
                        books: mutipleMongooseToObject(books)
                    })
                ).catch(next)
        }
        //[GET]/me/trast/Books
    trashBooks(req, res, next) {
        Book.findDeleted({})
            .then(books => res.render('me/trash-books', {
                books: mutipleMongooseToObject(books)
            }))
            .catch(next)
    }
}
module.exports = new MeController();