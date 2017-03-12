var rootController = function () {
    var rs = require('../services/root.service.js')()
    var middleware = function (req, res, next) {
        /*if(!req.isAuthenticated()){
            res.redirect('/')
        }*/
        next()
    }
    var getIndex = function (req, res) {
        /*rs.getData(null,(err,dat)=>{
            res.json(dat)
        })*/
        res.render('xcv')
    }
    return { getIndex: getIndex}
}
module.exports = rootController