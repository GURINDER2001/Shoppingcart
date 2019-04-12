const Product=require('../../db').product
const route= require('express').Router()

route.get('/', (req,res) =>{

    product.findAll()
    .then((products)=>{
        res.status(200).send(products) 
    }).catch((err)=>{
        res.status(500).send({
            error:"could not retrieve the product."
        })
    })
})

route.post('/',(req,res)=>{
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "price is not a valid no "
        })
    }
    
    product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not add a new product."
        })
    })
})
exports=module.exports=route