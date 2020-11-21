const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    user: String,
    password: String,
    name: String,
    lastname1: String,
    lastname2: String,
    age: Number,
    sex: String,
    country: String,
    lang_desired: [{ name : String, level : String}],
    lang_teach:[{ name : String, level : String}],
    hobbies: [{ name : String}],
    contact:[{ name : String}],

});

//First parameter corresponds to collection
module.exports = mongoose.model('Model', User, 'users');