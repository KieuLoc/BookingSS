const { json } = require('express');
const Book = require('../models/Book')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
class BookController {
    //[GET] /books/:slug
    show(req, res, next) {
        Book.findOne({ slug: req.params.slug })
            .then((books) => {
                res.render('books/show', { books: mongooseToObject(books) });
            })
            .catch(next);
    }

    create(req, res) {
        res.render('books/create')
    }

    //[GET]/news/:detail
    search(req, res) {
            res.render('search');
        }
        //POST
    store(req, res, next) {
        const formData = req.body;
        const book = new Book(formData);
        book.save()
            .then(() => res.redirect(`/me/stored/books`))
            .catch(error => {

            })
    }
    edit(req, res, next) {
        Book.findById(req.params.id)
            .then(book => res.render('books/edit', {
                book: mongooseToObject(book)
            }))
            .catch(next);

    }
    update(req, res, next) {
        Book.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/books'))
            .catch(next)
    }
    destroy(req, res, next) {
        Book.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new BookController();