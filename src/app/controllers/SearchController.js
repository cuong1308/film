const Movie = require('../models/Movie');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SearchController {

    async index (req, res, next) {
        
        // Movie.find({})
        //      .then(movies =>{
        //         res.render('search', {
        //             movies: mutipleMongooseToObject(movies)
        //         })
        //      } )
        //      .catch(next)

        try {
            const cookies = cookie.parse(req.headers.cookie || '')
            const token = cookies.token;
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
            const user = decoded.name;
            //console.log(decoded)
                
            res.render('search', {
                user: user,
            })
    
           } catch (error) {
            console.log(error);
             if (error.message === 'jwt must be provided') {
                res.render('search')
             }
             if (error.message === 'jwt expired') {
    
                res.clearCookie("token");
             }
           }

    }
}

module.exports = new SearchController;

