const Movie = require('../models/Movie');
const cookie = require('cookie');
const jwt = require("jsonwebtoken");
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class MovieController {

    async detail(req, res, next) {

        try {
            const cookies = cookie.parse(req.headers.cookie || '')
            const token = cookies.token;
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
            const user = decoded.name;
            //console.log(decoded)
    
            const movie = await Movie.findOne({});
                
            res.render('movies/detail', {
                movie: mongooseToObject(movie),
                user: user,
            })
    
           } catch (error) {
            console.log(error);
             if (error.message === 'jwt must be provided') {
                const movie = await Movie.findOne({});
                res.render('movies/detail', {
                    movie: mongooseToObject(movie),
                })
             }
             if (error.message === 'jwt expired') {
    
                res.clearCookie("token");
             }
           }

        // Movie.findOne({ _id: req.params.id })
        //     .then(movie => {
        //         res.render('movies/detail', { movie: mongooseToObject(movie) })
        //     })
        //     .catch(next)
    }

    async watch(req, res, next) {

        try {
            const cookies = cookie.parse(req.headers.cookie || '')
            const token = cookies.token;
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
            const user = decoded.name;
            //console.log(decoded)
                
            res.render('movies/detail', {
                user: user,
            })
    
           } catch (error) {
            console.log(error);
             if (error.message === 'jwt must be provided') {
                res.render('movies/watch')
             }
             if (error.message === 'jwt expired') {
    
                res.clearCookie("token");
             }
           }


        //res.render('movies/watch')
    }

    collection(req, res, next) {
        res.render('movies/collection')
    }
}

module.exports = new MovieController;

