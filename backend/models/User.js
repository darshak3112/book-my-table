const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    Name : {
        type : String,
        require : true
    },
    Email : {
        type : String,
        require : true,
        unique : true
    },
    Password : {
        type : String,
        require : true
    },
    Mobile_no:{
        type:String,
        require : true,
        unique:true
    },
    Date : {
        type : Date,
        default : Date.now
    }
  });

  const User = mongoose.model('user',UserSchema);
  module.exports=User;