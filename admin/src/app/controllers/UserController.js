const User = require('../models/User');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');


class UserController {
    show(req, res, next) {
        User.find({})
        .then(users =>{
           res.render('users/show', {
               users: mutipleMongooseToObject(users)
           })
        } )
        .catch(next)
    }

    // create(req, res, next) {
    //     res.render('movies/create');
    // }

    // store(req, res, next) {
    //     const formData = req.body;
    //     const movie = new Movie(formData)
    //     movie.save()
    //         .then(() => res.redirect('show'))
    //         .catch(next)
    // }

    // edit(req, res, next) {
    //     Movie.findById( req.params.id )
    //         .then(movie => res.render('movies/edit', {
    //             movie: mongooseToObject(movie)
    //         }))
    //         .catch(next)
    // }

    // update(req, res, next) {
    //     Movie.updateOne({ _id: req.params.id }, req.body)
    //         .then(() => res.redirect('show'))
    //         .catch(next)
    // }

    // delete(req, res, next) {
    //     Movie.deleteOne({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next)
    // }
}

module.exports = new UserController();