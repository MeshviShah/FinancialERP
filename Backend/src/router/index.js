const UserRouter = require("./user.router")



const router  = (app) => {
    app.use('/user',UserRouter)
}

module.exports = router