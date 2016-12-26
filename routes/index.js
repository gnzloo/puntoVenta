'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const api = express.Router()

//obtener lista de productos
api.get('/product',ProductCtrl.getProducts);

//obtener un producto
api.get('/product/:productId', ProductCtrl.getProduct)

//post a producto
api.post('/product', ProductCtrl.saveProduct)
//put a un producto
api.put('/product/:productId', ProductCtrl.updateProduct)

//delete producto
api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api