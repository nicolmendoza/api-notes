const express = require('express')
const router = express.Router()


const mysqlConnection = require('../database')




router.get(('/'), (req, res) => {
    mysqlConnection.query('select*from notes', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})




module.exports = router













// const express = require('express')
// const router = express.Router()

// //creará un opbjeto para definir rutas del servidor
// const mysqlConnection = require('../database')

// router.get('/', (req, res) => {
//     mysqlConnection.query('SELECT * FROM notes', (err, rows, fields) => {
//         if (!err) {
//             res.json(rows)
//         } else {
//             console.log(rows)
//         }
//     })
//     // res.json('hi')
// })

// router.get('/:id', (req, res) => {
//     const { id } = req.params;

//     mysqlConnection.query('SELECT * FROM notes WHERE id=?', [id], (err, rows, fields) => {
//         if (!err) {
//             res.json(rows)
//         } else {

//             console.log(err)
//         }
//     })
// })

// router.post('/', (req, res) => {
//     const { id, title, description, type } = req.body;
//     const query = `

//     call addOrEditNote(?,?,?,?)`
//     mysqlConnection.query(query, [id, title, description, type], (err, rows, fields) => {
//         if (!err) {
//             console.log('created')
//         } else {
//             console.log(err)
//         }
//     })
// })

// router.put('/:id', (req, res) => {
//     const { id } = req.params
//     const { title, description, type } = req.body
//     const query = 'call addOrEditNote(?,?,?,?)'
//     mysqlConnection.query(query, [id, title, description, type], (err, rows, fields) => {
//         if (!err) {
//             res.json('updated')
//         } else {
//             console.log(err)
//         }
//     })
// })

// router.delete('/:id', (req, res) => {
//     const { id } = req.params
//     mysqlConnection.query('delete from notes where id=?', [id], (err, rows, fields) => {
//         if (!err) {
//             res.json('deleted')
//         } else {
//             console.log(err)
//         }
//     })
// })

// module.exports = router