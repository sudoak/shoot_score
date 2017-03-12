var express = require('express')
var rootRouter = express.Router()
    var route = function() {
        var rc = require('../controllers/root.controller.js')()
        rootRouter.route('/').get(rc.getIndex)
        
    return rootRouter
    };
module.exports = route