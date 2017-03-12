var rootService = function () {

    var getData = function (dat=null,cb) {
        cb(null,dat)
    }
    return { getData: getData}
}
module.exports = rootService