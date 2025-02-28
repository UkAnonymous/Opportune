
// jobsData.js

const jobListings = [
    // Engineering & Tech
    { title: "Software Engineer", salary: 120000, location: "San Francisco, CA", rating: 4.5 },
    { title: "Data Scientist", salary: 115000, location: "New York, NY", rating: 4.6 },
    { title: "Product Manager", salary: 150000, location: "Seattle, WA", rating: 4.4 },
    { title: "Frontend Developer", salary: 110000, location: "Austin, TX", rating: 4.3 },
    { title: "Backend Developer", salary: 125000, location: "Chicago, IL", rating: 4.7 },
    { title: "DevOps Engineer", salary: 130000, location: "Los Angeles, CA", rating: 4.6 },
    { title: "Full Stack Developer", salary: 135000, location: "Los Angeles, CA", rating: 4.7 },
    { title: "Machine Learning Engineer", salary: 145000, location: "Palo Alto, CA", rating: 4.8 },
    { title: "Cloud Engineer", salary: 125000, location: "Austin, TX", rating: 4.5 },
    { title: "Cybersecurity Specialist", salary: 140000, location: "Washington, DC", rating: 4.8 },
    
    // Business & Management
    { title: "Project Manager", salary: 140000, location: "Boston, MA", rating: 4.2 },
    { title: "Sales Manager", salary: 120000, location: "Houston, TX", rating: 4.3 },
    { title: "HR Manager", salary: 105000, location: "Dallas, TX", rating: 4.2 },
    { title: "Operations Manager", salary: 130000, location: "Chicago, IL", rating: 4.4 },
    { title: "Marketing Director", salary: 160000, location: "New York, NY", rating: 4.7 },
    { title: "Business Analyst", salary: 95000, location: "Remote", rating: 4.1 },
    { title: "Financial Analyst", salary: 100000, location: "New York, NY", rating: 4.1 },
    { title: "Supply Chain Manager", salary: 110000, location: "Atlanta, GA", rating: 4.3 },
    { title: "Product Owner", salary: 125000, location: "Remote", rating: 4.4 },
    { title: "Strategic Consultant", salary: 150000, location: "Chicago, IL", rating: 4.6 },

    // Healthcare & Medicine
    { title: "Registered Nurse", salary: 85000, location: "Los Angeles, CA", rating: 4.2 },
    { title: "Physician Assistant", salary: 110000, location: "Dallas, TX", rating: 4.5 },
    { title: "Clinical Research Coordinator", salary: 95000, location: "San Francisco, CA", rating: 4.4 },
    { title: "Healthcare Administrator", salary: 120000, location: "Chicago, IL", rating: 4.3 },
    { title: "Medical Scientist", salary: 130000, location: "Boston, MA", rating: 4.6 },
    { title: "Dentist", salary: 150000, location: "Houston, TX", rating: 4.8 },
    { title: "Physical Therapist", salary: 90000, location: "New York, NY", rating: 4.2 },
    { title: "Pharmacist", salary: 125000, location: "Chicago, IL", rating: 4.4 },
    { title: "Nurse Practitioner", salary: 100000, location: "Seattle, WA", rating: 4.3 },
    { title: "Medical Coder", salary: 75000, location: "Remote", rating: 3.9 },

    // Creative & Design
    { title: "UX/UI Designer", salary: 100000, location: "San Francisco, CA", rating: 4.1 },
    { title: "Graphic Designer", salary: 80000, location: "Austin, TX", rating: 3.9 },
    { title: "Web Designer", salary: 90000, location: "Los Angeles, CA", rating: 4.2 },
    { title: "Animator", salary: 95000, location: "Chicago, IL", rating: 4.0 },
    { title: "Creative Director", salary: 140000, location: "New York, NY", rating: 4.5 },
    { title: "Brand Strategist", salary: 110000, location: "Los Angeles, CA", rating: 4.3 },
    { title: "Art Director", salary: 115000, location: "San Francisco, CA", rating: 4.4 },
    { title: "Fashion Designer", salary: 100000, location: "New York, NY", rating: 4.2 },
    { title: "Illustrator", salary: 85000, location: "Remote", rating: 3.8 },
    { title: "Video Editor", salary: 80000, location: "Miami, FL", rating: 3.9 },

    // Finance & Accounting
    { title: "Investment Banker", salary: 160000, location: "New York, NY", rating: 4.7 },
    { title: "Accountant", salary: 80000, location: "Chicago, IL", rating: 3.8 },
    { title: "Tax Consultant", salary: 100000, location: "Los Angeles, CA", rating: 4.3 },
    { title: "Auditor", salary: 95000, location: "Dallas, TX", rating: 4.0 },
    { title: "Financial Planner", salary: 120000, location: "San Francisco, CA", rating: 4.5 },
    { title: "Credit Analyst", salary: 85000, location: "Houston, TX", rating: 4.1 },
    { title: "Actuary", salary: 135000, location: "Chicago, IL", rating: 4.6 },
    { title: "Financial Controller", salary: 140000, location: "New York, NY", rating: 4.7 },
    { title: "Investment Analyst", salary: 110000, location: "Palo Alto, CA", rating: 4.3 },
    { title: "Risk Manager", salary: 125000, location: "Dallas, TX", rating: 4.4 },

    // Legal & Compliance
    { title: "Corporate Lawyer", salary: 200000, location: "New York, NY", rating: 4.8 },
    { title: "Compliance Officer", salary: 115000, location: "Chicago, IL", rating: 4.2 },
    { title: "Criminal Lawyer", salary: 140000, location: "Los Angeles, CA", rating: 4.5 },
    { title: "Intellectual Property Lawyer", salary: 180000, location: "San Francisco, CA", rating: 4.7 },
    { title: "Paralegal", salary: 75000, location: "Boston, MA", rating: 3.9 },
    { title: "Legal Consultant", salary: 130000, location: "Washington, DC", rating: 4.6 },
    { title: "Real Estate Attorney", salary: 150000, location: "Miami, FL", rating: 4.4 },
    { title: "Labor Lawyer", salary: 140000, location: "Chicago, IL", rating: 4.3 },
    { title: "Tax Lawyer", salary: 170000, location: "Los Angeles, CA", rating: 4.5 },
    { title: "Family Lawyer", salary: 120000, location: "Seattle, WA", rating: 4.1 },

    // Education & Teaching
    { title: "University Professor", salary: 90000, location: "Cambridge, MA", rating: 4.3 },
    { title: "High School Teacher", salary: 60000, location: "Los Angeles, CA", rating: 3.8 },
    { title: "ESL Teacher", salary: 50000, location: "Remote", rating: 3.7 },
    { title: "School Counselor", salary: 70000, location: "Chicago, IL", rating: 4.0 },
    { title: "Instructional Designer", salary: 80000, location: "Boston, MA", rating: 4.1 },
    { title: "Education Administrator", salary: 95000, location: "New York, NY", rating: 4.2 },
    { title: "Curriculum Developer", salary: 85000, location: "Austin, TX", rating: 4.0 },
    { title: "Librarian", salary: 60000, location: "San Francisco, CA", rating: 3.9 },
    { title: "Tutoring Coordinator", salary: 55000, location: "Remote", rating: 4.1 },
    { title: "Art Teacher", salary: 70000, location: "Seattle, WA", rating: 4.0 }
];
module.exports ={ data: jobListings}

