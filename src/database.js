const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'bsozqtcwp71w75kshcvf-mysql.services.clever-cloud.com',
    user: 'untifwtys306x7qz',
    password: 'AnJ0aX6lmoxtS9HvLzO8',
    database: 'bsozqtcwp71w75kshcvf'
})


mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err)
        return
    } else {
        console.log('db is connected')
    }
})


module.exports=mysqlConnection

// const mysql = require('mysql')

// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'molinera4',
//     database: 'notesapp'
// })

// mysqlConnection.connect(function(err) {
//     if (err) {
//         console.log(err)
//         return
//     } else {
//         console.log('db is connected')
//     }
// })

// module.exports=mysqlConnection