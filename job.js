const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const jobSchema= new Schema ({
    title :{ type: String},
    salary: {type:Number},
    location : { type: String},
    rating : {type:Number}


});
const jobs = mongoose.model("Job", jobSchema,);
module.exports ={ jobs }


