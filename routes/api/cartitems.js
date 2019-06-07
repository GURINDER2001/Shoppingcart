const Cart= require('../../db').Cart
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    Cart.findAll()
        .then((items) => {
            res.status(200).send(items)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve cart item"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    // Add a new product
    Cart.create({
        name: req.body.name,
        price: parseFloat(req.body.price)
    }).then((cart) => {
        res.status(201).send(cart)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})
exports = module.exports = route
// route.delete('/',(req,res)=>{
//     Cart.destroy({
//         where: {
//           name: 'Yeezy700'
//         }
//       }).then(() => {
//         console.log("Done");
//       })
// })
