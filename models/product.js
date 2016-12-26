'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    marca: String,
    codigo: String,
    descripcion: String,
    picture: String,
    price: {type:Number, default: 0},
})

module.exports = mongoose.model('Product', productSchema)