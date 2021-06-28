const newRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const booksRouter = require('./books')
const customersRouter = require('./customer')

function route(app) {
    //action -> dispatcher -> function handler(callback function)
    //    app.get('/news', (req, res) => {
    //      res.render('news');
    //    })
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/books', booksRouter);
    app.use('/', siteRouter);
    app.use('/', customersRouter);

}

module.exports = route;