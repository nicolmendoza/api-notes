const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'molinera4',
    database: 'notesappcompany'
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