const route= require('express').Router()

route.use('/users',require('./users'))
route.use('/product',require('./product'))

 exports=module.exports={
     route
 }