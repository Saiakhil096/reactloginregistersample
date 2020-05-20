const mongoose= require('mongoose')
const Schema= mongoose.Schema;

const ServerPort = new Schema({
   Firstname:{type: String},
   Lastname:{type: String},
   Email:{type: String},
   password:{type: String}
},{
    collection: 'project'
})

module.exports= mongoose.model('ServerPort', ServerPort)

