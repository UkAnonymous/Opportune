const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const webinarSchema= new Schema ({
    title :{ type: String},
    info: {type:String},
    location : { type: String},
    date : {type: String},
    registrationLink: { type: String},
    imageLink: {type:String}



});
const webinar= mongoose.model("Webinar", webinarSchema,);
module.exports ={ webinar}