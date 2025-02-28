
  const sampleListings = [
    
      {
        title: "Senior Software Engineer",
        description: "Develop and implement software solutions to enhnace payment platforms",
        company:"Mastercard",
        location: "Pune, India ",
        imageURL: "https://cdn.phenompeople.com/CareerConnectResources/MASRUS/images/Header-1650989573515.png",
        URL: "https://www.mastercard.com/careers",
      
      },
      {
        title: "Business Analyst",
        description: "Analyze business data to provide strategic insights for clients",
        company:"McKinsey & Company",
        location: "Mumbai , India ",
        imageURL: "https://th.bing.com/th?id=OIP.SAkdjTS6wJQoUHkhW5-oZQHaD4&w=345&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        URL: "https://www.mckinsey.com/careers",
     
      },
      {
        title: "Product Manager ",
        description: " Oversee product lifecycle for payment solutions ",
        company:"PayPal",
        location: "Hyderabad, India ",
        imageURL: "https://th.bing.com/th?id=OIP.tK9_1s9dclQIDMlPxc5QuwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        URL: "https://www.paypal.com/careers",
     
      }, {
        title: "Data Scientist",
        description: " Utilize data analytics to drive business decisions and strategies.",
        company:"Accenture",
        location: "Bengaluru , India ",
        imageURL: "data:image/jpeg;base64,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",
        URL: "https://www.accenture.com/careers",
     
      }, {
        title: "Supply chain Analyst ",
        description: "Optimize supply chain operations for e-commerce logistics.",
        company:"Flipkart",
        location: "Eluri , India ",
        imageURL: "http://ts3.mm.bing.net/th?id=OIP.rx3j8u1JcuRqsOaN2as7qAHaE7&pid=15.1",
        URL: "https://www.flipkartcareers.com/#!/logistics-and-supply-chain",
     
      }, {
        title: "Tax Consultant ",
        description: "Provide tax advisory services to clients",
        company:"EY",
        location: "Chennai , India ",
        imageURL: "https://th.bing.com/th?id=OIP.1Zb8g68I8GATMC6_1mFgUAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        URL: "https://www.ey.com/careers",
     
      }, {
        title: "System Engineer ",
        description: "Develop and maintain IT systems for clients",
        company:"TCS",
        location: "Hyderabad, India ",
        imageURL: "https://th.bing.com/th?id=OIP.7Agm4XDs3_QKCFEE6hNw2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        URL: "https://www.tcs.com/careers",
     
      }, {
        title: "Warehouse Asociate ",
        description: "Manage warehouse operations and inventory",
        company:"Amazon",
        location: "Pune, India ",
        imageURL: "https://th.bing.com/th?id=OIP.79_eSmtryNnRA9hi-tN8BgHaDS&w=349&h=155&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        URL: "https://www.amazon.jobs/careers",
     
      }, {
        title: "Network Engineer",
        description: "Design and maintain network infrastructure.",
        company:"Airtel",
        location:"Gurgaon, India ",
        imageURL: "https://th.bing.com/th?id=OIP.tEVjSftyeFFwL0mgE75WowHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        URL: "https://www.airtel.in/careers",
     
      }, {
        title: "Relationship Manager",
        description: "Manage client relationships and provide tailored financial solutions",
        company:"HSBC",
        location: "New Delhi, India ",
        imageURL: "https://th.bing.com/th?id=OIP.AjU4UDhQvwPk2PtlOkXS6AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        URL: "https://www.hsbc.com/careers",
     
      },
    ];
    
  

module.exports = { data: sampleListings };




