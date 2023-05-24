const Movie = require('../models/Movie');
const User = require('../models/User');
const cookie = require('cookie');
const jwt = require("jsonwebtoken");
const { mutipleMongooseToObject } = require('../../util/mongoose');

class HomeController {

    async index (req, res, next) {
        //console.log(req.cookies.token)
        // Tim user
       try {
        const cookies = cookie.parse(req.headers.cookie || '')
        const token = cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = decoded.name;
        //console.log(decoded)

        const movies = await Movie.find({});
            
        res.render('home', {
            movies: mutipleMongooseToObject(movies),
            user: user,
        })

       } catch (error) {
        console.log(error);
         if (error.message === 'jwt must be provided') {
            const movies = await Movie.find({});
            res.render('home', {
                movies: mutipleMongooseToObject(movies),
            })
         }
         if (error.message === 'jwt expired') {

            res.clearCookie("token");
         }
       }
       
       
        // Movie.find({})
        //      .then(movies =>{
        //         res.render('home', {
        //             movies: mutipleMongooseToObject(movies),
        //             user: user,
        //         })
        //      } )
        //      .catch(next)
    
    }
}

module.exports = new HomeController;

