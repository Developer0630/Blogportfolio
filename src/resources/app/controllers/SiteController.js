const Course = require('../models/Course');
class SiteController {
    // [GET] /home
    async index(req, res, next) {
        res.render('home');
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (error) {
        //     next(error);
        // }
    }
        

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
