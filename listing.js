const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title : { type:String},
    description :{type:String},
    company:{type:String},
    location:{type:String},
    imageURL:{
        type:String,
        

    },
    URL: {
        type:String,
         set : (v) => v=== ""
    }
    
    
    
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

