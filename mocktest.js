function generateTest() {
    const skill = document.getElementById('skillInput').value.trim();

    // Define questions for both categories
    const questions = {
        "Software Engineer": [
            "What is the difference between Java and JavaScript?",
            "Explain the concept of OOP with examples.",
            "What are RESTful APIs?",
            "How does garbage collection work in Java?",
            "What are common design patterns used in software engineering?",
            "Explain the SOLID principles in software development.",
            "What is a microservices architecture?",
            "Describe the Agile development methodology.",
            "What is the difference between SQL and NoSQL databases?",
            "Explain multithreading in Java and its advantages.",
            "What are the differences between GET and POST HTTP methods?",
            "How do you handle exceptions in Python?",
            "What is DevOps, and why is it important?",
            "Describe the difference between unit testing and integration testing.",
            "What is Docker, and how does it work?",
            "What are the key differences between functional and object-oriented programming?",
            "Explain the MVC architecture in web development.",
            "What is version control, and why is Git commonly used?",
            "Describe the difference between synchronous and asynchronous programming."
        ],
        "Data Analytics": [
            "What is the difference between supervised and unsupervised learning?",
            "Explain the importance of data cleaning in analytics.",
            "What is a confusion matrix, and how is it used?",
            "Describe the key differences between regression and classification models.",
            "What are common statistical measures used in data analysis?",
            "What is feature engineering, and why is it important?",
            "How does a decision tree algorithm work?",
            "What are outliers, and how do you handle them in a dataset?",
            "Explain the concept of A/B testing.",
            "What is a p-value, and why is it significant?",
            "Describe the differences between R and Python for data analysis.",
            "What is the purpose of Principal Component Analysis (PCA)?",
            "How do you deal with missing values in a dataset?",
            "What is the difference between precision and recall?",
            "Explain the concept of time series analysis.",
            "What is overfitting, and how can you prevent it?",
            "How do you measure the performance of a machine learning model?",
            "Describe the role of SQL in data analytics.",
            "What is Big Data, and how is it different from traditional databases?"
        ]
    };

    const testOutput = document.getElementById('testOutput');

    if (questions[skill]) {
        let outputHTML = '<h3>Mock Test for ${skill}</h3><ol>';
        questions[skill].forEach((question, index) => {
            outputHTML += '<li>${question}</li>';
        });
        outputHTML += '</ol>';
        testOutput.innerHTML = outputHTML;
    } else {
        testOutput.innerHTML = "<p style='color:red;'>Invalid Skill! Please enter 'Software Engineer' or 'Data Analytics'.</p>";
    }
}
