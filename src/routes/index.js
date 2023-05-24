const homeRouter = require("./home")
const searchRouter = require("./search")
const movieRouter = require("./movie")
const tvRouter = require("./tv")
const userRouter = require("./user")
const authRouter = require("./auth")



function route(app) {
    app.use('/user', userRouter) 
    app.use('/auth', authRouter)
    app.use('/tv', tvRouter)
    app.use('/movies', movieRouter)
    app.use('/search', searchRouter)
    app.use('/', homeRouter) 
}

module.exports = route;