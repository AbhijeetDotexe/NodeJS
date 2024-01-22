const mongoose = require('mongoose');
// import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/abhijeet");
const userSchema = mongoose.Schema({
    username: String,
    Age: Number,
    categories:{
        type:Array,
        default:[]
    },
    dateCreated:{
        type: Date,
        default:Date.now()
    }
    
});
module.exports = mongoose.model("userModel",userSchema);
// const userModel = mongoose.model("userModel", userSchema);

// export default userModel;