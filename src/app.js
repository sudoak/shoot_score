var express = require('express')
var bscrypt = require('bcrypt-nodejs')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var passport = require('passport')
var favicon = require('serve-favicon')
var session = require('express-session')
var path = require('path')
var logger = require('morgan')
var helmet = require('helmet')
var compression = require('compression')
var id = require('shortid')
//User Modal
var User  = require('./modals/user.schema.js')

//APP
var app = express()

//EXT files
require('./config/env.js')
require('./config/db.js')
require('./config/passport')(app);

//APP req
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')))
app.use(favicon(__dirname + '/public/favicon.ico'))

app.use(session({
    secret: 'soSecret(*&^&^%$%$#ftatdju2907nm88)',
    resave: true,
    saveUninitialized: true
    //cookie: { secure: true }

}));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(logger('dev'))
app.use(helmet.noCache())
app.use(compression())

//route
var rr = require('./routes/rootRouter.js')()
app.use('/',rr)

app.listen(process.env.port, function () {
  console.log(`App listening on port ${process.env.port}!`)
})