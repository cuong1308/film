const Movie = require('../models/Movie');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class TvController {

    detail(req, res, next) {
        // Movie.findOne({ _id: req.params.id })
        //     .then(movie => {
        //         res.render('movies/detail', { movie: mongooseToObject(movie) })
        //     })
        //     .catch(next)

            res.render('tv/detail')
    }

    watch(req, res, next) {
        res.render('tv/watch')
    }
}

module.exports = new TvController;

