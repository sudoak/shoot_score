var passport = require('passport'),
User = require('../modals/user.schema.js')
module.exports = function (app) {
    
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user.user_id);
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({ user_id : id},(err,dat)=>{
            done(err,dat)
        })
    });

    require('./stratergies/local.stratergy.js')()

};