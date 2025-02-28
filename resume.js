const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
    FullName: String,
    Email: String,
    Skills: String,
    Experience: String,
    Education : String,
    
    resumeFile: String, // File path
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Resume", ResumeSchema);