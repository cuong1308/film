const User = require('../models/User');
const cookie = require('cookie');
const jwt = require("jsonwebtoken");
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class UserController {

    async info(req, res, next) {
        try {
            const cookies = cookie.parse(req.headers.cookie || '')
            const token = cookies.token;
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
            const user1 = decoded;

            console.log(decoded)
    
            const user = await User.findOne({});
                
            res.render('users/info', {
                user: mongooseToObject(user),
                user: user1,
            })
    
           } catch (error) {
            console.log(error);
             if (error.message === 'jwt must be provided') {
                const user = await User.findOne({});
                res.render('users/info', {
                    user: mongooseToObject(user),
                })
             }
             if (error.message === 'jwt expired') {
    
                res.clearCookie("token");
             }
           }
    
    }
    edit(req, res, next) {
        Movie.findById( req.params.id )
            .then(movie => res.render('movies/edit', {
                movie: mongooseToObject(movie)
            }))
            .catch(next)
    }

    update(req, res, next) {
        Movie.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('show'))
            .catch(next)
    }
}

module.exports = new UserController;