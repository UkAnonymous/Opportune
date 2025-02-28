const mongoose = require("mongoose");
const { data: jobListings } = require("./init/jobdata"); // Import job data
const { jobs } = require("./models/job"); // Import the job model

// MongoDB Connection URL
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Function to initialize the database
async function initDB() {
    try {
        // Clear existing data
        //await jobs.deleteMany({});
        //console.log("Cleared existing job data");

        // Insert job listings
        await jobs.insertMany(jobListings);
        console.log("Database initialized with job data");
    } catch (err) {
        console.error("Error initializing the database:", err);
        throw err;
   }
}

// Connect to the database and initialize
async function main() {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB!");

        await initDB(); // Call the initDB function
    } catch (err) {
        console.error("Error:", err);
    } finally {
        mongoose.disconnect();
    }
}

// Start the script
main();