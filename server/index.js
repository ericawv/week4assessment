const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

}); 

  app.get("/api/fortune", (req, res) => {
    const fortunes = ["Your travels in the coming years will bring serendipity!",
             "Your positive attitude will improve your present state!",
             "Victory is just around the corner!",
             "A new relationship is about to blossom!",
             "A long-time friend will bring wise advice in the coming week!",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  
});

app.get("/api/feedback", (req, res) => {
  let instFeedback = ["Thank you!",
           "Appreciate your help and time!",
           "Your knowledge is great!",
  ];

  // choose random feedback for instructor
  let randomIndex = Math.floor(Math.random() * instFeedback.length);
  let randomFeedback = instFeedback[randomIndex];

  res.status(200).send(randomFeedback);

});

app.post("/api/feedback", (req, res) => {
  console.log(req.body)
 
    let { post } = req.body
    res.status(200).send(`Thank you, ${post}`)   

}) 

app.listen(4000, () => console.log("Server running on 4000"));

