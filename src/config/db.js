var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
require('mongoose-double')(mongoose)
var SchemaTypes = mongoose.Schema.Types
var figlet = require('figlet');
var moment = require('moment-timezone');

figlet(process.env.db, function(err, data) {
    if (err) {
        console.log('CEPS...');
        console.dir(err);
        return;
    }
    console.log(data)
});

mongoose.connect('mongodb://localhost/'+process.env.db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("MONGODB Connected " + moment().tz("Asia/Kolkata").format().toString());
});

