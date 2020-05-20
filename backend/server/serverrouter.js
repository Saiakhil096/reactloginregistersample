const express= require('express')
const app= express()
const ServerPortRouter = express.Router()

const ServerPort =require('./app')

ServerPortRouter.route('/signup').post(function(req,res){
    const serverport =new ServerPort(req.body)
    serverport.save().then(serverport=>{
        res.json('Product added Successfully')
    })
    .catch(err=>{
        res.status(400).send("unable to save to database")
    })
})
ServerPortRouter.route('/contacts').get(function(req,res){
    ServerPort.find(function(err,serverports){
        if(err){
            console.log(err)
        } else{
            res.json(serverports)
        }
    })
})

ServerPortRouter.route('/login').get(function(req,res){
    ServerPort.find(function(err,serverports){
        if(err){
            console.log(err)
        } else{
            res.json(serverports)
        }
    })
})
module.exports= ServerPortRouter