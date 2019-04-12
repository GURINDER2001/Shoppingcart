const Sequelize=require('sequelize')

const db= new Sequelize('cartdb','cartuser','cartpass',{
    host:'localhost',
    dialect:'sqlite',
    pool:{
        min:0,
        max:5,
    }
})

const User= db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
})

const product=db.define('products',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
    }
})

db.sync()
.then(()=>{
    console.log("database is synced");
    }).catch((err )=>{
        console.log("error creating database");
        })

exports=module.exports={
    User, product
}
