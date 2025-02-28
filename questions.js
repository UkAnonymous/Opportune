const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const questionsSchema= new Schema ({
    skill: {type: String },
    questions:{

    q :{ type: String }, 
    a :{  type: String }

   
    }
});
const questions= mongoose.model("questons", questionsSchema,);
module.exports ={questions}