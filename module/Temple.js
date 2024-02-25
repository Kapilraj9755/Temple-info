const mongoose = require('mongoose');

 const TempleData = new mongoose.Schema({

    name:{
       required : true,
       type : String,
       trim : true
    },
    img : {
        type: String,
        trim: true, 
    },
    Address : {
      trim: true,
      type: String
    },

    about : {
         trim : true,
         type : String 
    },
    

 })
 const Temple = mongoose.model('Temple', TempleData)
 module.exports = Temple;