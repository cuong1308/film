const dbRouter = require("./dashboard")
const movieRouter = require("././movies");
const userRouter = require("././users");


function route(app) {
    app.use('/dashboard', dbRouter)
    app.use('/movies', movieRouter) 
    app.use('/users', userRouter) 

}

module.exports = route;