const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const multer = require("multer");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");

const Listing = require("./models/listing.js");
const Resume = require("./models/resume.js");
const { jobs } = require("./models/job.js");
const { webinar } = require("./models/webinar.js");

// MongoDB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB Connection Error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// ✅ Session Middleware
app.use(session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// ✅ Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const storage = multer.diskStorage({
    destination: "public/uploads/",
    filename: (req, file, cb) => {
        cb(null, "${file.fieldname}-${Date.now()}${path.extname(file.originalname)}");
    }
});


app.get('/', (req, res) => res.render("home"));

const upload = multer({ storage });

function requireLogin(req, res, next) {
    if (!req.session.user) return res.redirect("/home");
    next();
}
app.get("/exasignup", (req, res) => res.render("exasignup"));
app.get("/exasignin", (req, res) => res.render("exasignin"));

app.post("/exasignin", passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.redirect("/exasignin");
    req.logIn(user, err => {
        if (err) return res.status(500).send(err);
        return res.redirect("/home");
    });
}));

app.post("/exasignup", passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.redirect("/exasignup");
    req.logIn(user, err => {
        if (err) return res.status(500).send(err);
        return res.redirect("/home");
    });
}));

app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/set-session', (req, res) => {
    if (req.body.uid) {
        req.session.loggedIn = true;
        req.session.user = { 
            uid: req.body.uid,
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo
        };
        res.send("Session Set Successfully!");
    } else {
        res.status(400).send("User ID Missing!");
    }
});

app.get('/home', (req, res) => {
    res.render("home", { user: req.session.user });
});

app.post('/logout', (req, res) => {
    req.session.destroy(() => res.send("Logged Out Successfully!"));
});

app.get("/logout", (req, res) => {
    req.logout(() => res.redirect("/exasignin"));
});

app.get("/helpandsupport", requireLogin, (req, res) => res.render("helpandsupport"));

app.get("/listings", requireLogin, async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).send("Error fetching listings.");
    }
});

app.get("/CareerEventsWebinar", requireLogin, async (req, res) => {
    try {
        const webinars = await webinar.find();
        res.render("careerevents.ejs", { webinars });
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).send("Error fetching listings.");
    }
});

app.get("/topemployers", requireLogin, async (req, res) => {
    try {
        const jobListings = await jobs.find({});
        res.render("listings/topemployers.ejs", { jobListings });
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).send("Error fetching listings.");
    }
});

app.get("/quickactions", requireLogin, (req, res) => res.render("quickactions"));
app.get("/Mocktest", requireLogin, (req, res) => res.render("Mocktest"));
app.get("/analyse", requireLogin, (req, res) => res.render("analyse"));

app.use(bodyParser.json());

app.get("/autoresume", requireLogin, (req, res) => {
    res.render("autoresume");
});

app.post("/generate", upload.single("profilePhoto"), (req, res) => {
    const resumeData = {
        name: req.body.name || "",
        title: req.body.experienceTitle || "",
        email: req.body.email || "",
        phone: req.body.phone || "",
        location: req.body.location || "",
        summary: req.body.summary || "",
        experienceTitle: req.body.experienceTitle || "",
        company: req.body.company || "",
        responsibilities: req.body.responsibilities ? req.body.responsibilities.split(",").map(r => r.trim()) : [],
        degree: req.body.degree || "",
        university: req.body.university || "",
        year: req.body.year || "",
        skills: req.body.skills ? req.body.skills.split(",").map(skill => skill.trim()) : [],
        photo: req.file ? req.file.filename : null
    };

    // DEBUGGING - Log the data to see if it's correctly received
    console.log("Resume Data Received:", resumeData);

    res.render("generate", { resumeData });
});
app.get("/exasignin", (req, res) => res.render("exasignin"));

app.post("/upload", upload.single("resumeFile"), async (req, res) => {
    try {
        const resume = new Resume({
            resumeFile: "/uploads/${req.file.filename}"
        });
        await resume.save();
        res.send("Resume Uploaded Successfully!");
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).send("Failed to upload resume.");
    }
});




app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Ensure CSS loads properly

const jobData = {
    "Software Engineer": {
        salary: 100000,
        skills: "JavaScript, Python, Java, Problem-Solving",
        future: "High demand due to AI and software advancements",
        demand: "Increasing, especially in AI, cloud computing, and cybersecurity"
    },
    "Data Scientist": {
        salary: 120000,
        skills: "Python, R, Machine Learning, SQL, Data Visualization",
        future: "Huge demand due to data-driven decision-making in industries",
        demand: "Rapidly increasing, top-paying field"
    },
    "Mechanical Engineer": {
        salary: 80000,
        skills: "CAD, SolidWorks, Thermodynamics, Manufacturing Processes",
        future: "Stable, with automation and robotics creating new opportunities",
        demand: "Moderate, varies by industry (automobile, aerospace, energy)"
    },
    "Civil Engineer": {
        salary: 75000,
        skills: "Structural Analysis, AutoCAD, Construction Management",
        future: "Growing due to smart city projects and infrastructure development",
        demand: "High in developing countries, stable in developed countries"
    }
};

app.post("/compare-jobs", (req, res) => {
    const { job1, job2 } = req.body;

    const job1Details = jobData[job1] || {};
    const job2Details = jobData[job2] || {};

    let salaryDifference = "N/A";
    if (!isNaN(job1Details.salary) && !isNaN(job2Details.salary)) {
        salaryDifference = Math.abs(job1Details.salary - job2Details.salary);
    }

    res.json({
        job1Salary: job1Details.salary,
        job1Skills: job1Details.skills,
        job1Future: job1Details.future,
        job1Demand: job1Details.demand,

        job2Salary: job2Details.salary,
        job2Skills: job2Details.skills,
        job2Future: job2Details.future,
        job2Demand: job2Details.demand,

        salaryDifference
    });
});



app.get("/compare-jobs",requireLogin, (req, res) => res.render("compare-jobs"))





app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
