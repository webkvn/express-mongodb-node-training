const mongoose = require('mongoose')
const heroSchema = mongoose.Schema({
    name:String,
    age:String,
    sex:String,
    address:String,
    dowhat:String,
    imgArr:[],
    favourite:String,
    explain:String
},{collection:'myhero'})
const Hero = module.exports = mongoose.model('hero',heroSchema);