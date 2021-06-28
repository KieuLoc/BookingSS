const { json } = require('express');
const Customer = require('../models/Customer')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
class CustomerController {
    //[GET] /customers/:slug
    show(req, res, next) {
        Customer.findOne({ slug: req.params.slug })
            .then((customers) => {
                res.render('customers/show', { customers: mongooseToObject(customers) });
            })
            .catch(next);
    }

    create(req, res) {
        res.render('customers/create')
    }

    //[GET]/news/:detail
    search(req, res) {
            res.render('search');
        }
        //POST
    store(req, res, next) {
        const formData = req.body;
        const customer = new Customer(formData);
        customer.save()
            .then(() => res.redirect(`/`))
            .catch(error => {

            })
    }
}
module.exports = new CustomerController();