'use strict' //usar ES6

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err,res) => {
    if(err) {
        return console.log(`Conexión a la base con error: ${err}`)
    }
    console.log('Conexión a la base OK')
    
    app.listen(config.port, () => {
        console.log(`API REST INICIADA EN PUERTO ${config.port}`)
    })
})
