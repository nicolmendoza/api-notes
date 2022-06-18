const express=require('express')
const app=express()


app.set('port', process.env.PORT || 3000)

app.use(express.json())

app.use(require('./routes/employees'))

app.listen(app.get('port'),()=>{
    console.log('hiii')
})
















// const express=require('express')

// const app=express()


// //settings
// app.set('port', process.env.PORT || 3000)

// //middlewares
// app.use(express.json());

// //routes
// app.use(require('./routes/employees'))



// //start server
// app.listen(app.get('port'),()=>{
//     console.log('server on port', app.get('port'))
// })

