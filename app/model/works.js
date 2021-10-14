const mongoose = require('mongoose');

const works = new mongoose.Schema({
    _id:{},
    typeWork:{type:String,},
    subject_cod:{type:String,},
    subject_name:{type:String,},
    name_work:{type:String,},
    numbOfPage:{type:String,},
    wasDone:{type:String,},
    originality:{type:String,},
    whenSold:{type:String,},
    numbOfSources:{type:String,},
    plan:{type:String,}
    
})

module.exports= mongoose.model("works",works);