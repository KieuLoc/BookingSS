const { json } = require('express');
const Book = require('../models/Book')
const Customer = require('../models/Customer')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET]
    index(req, res, next) {
        Book.find({})
            .then(books => {
                //books là 1 mảng, book sẽ chuyển thành object
                res.render('home', {
                    books: mutipleMongooseToObject(books)
                });
            })
            .catch(next)
            // res.render('home');
        Customer.find({})
            .then(customers => {
                //customers là 1 mảng, book sẽ chuyển thành object
                res.render('home', {
                    customers: mutipleMongooseToObject(customers)
                });
            })
            .catch(next)
            // res.render('home');
    }

    //[GET]/news/:detail
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();