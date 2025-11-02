const newRouter = require('./new');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newRouter);
    // Routes
    app.use('/', siteRouter);
}
module.exports = route;
