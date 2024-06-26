const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username:{type:String, required:true, min:4, unique:true},
    email:{type:String, requireed:true, unique:true},
    password:{type:String, requireed:true},
    selectedTopics: {type:[String]}
});
 
const UserModel = model('User',UserSchema);

module.exports = UserModel;