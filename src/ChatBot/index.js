const { IntlProvider, addLocaleData } = require("react-intl");
const { NlpManager } = require("node-nlp");
const express = require("express");
const manager = new NlpManager({ languages: ["en"] });
const app = express();
//add documents
manager.addDocument("en", "hello", "greeting");
manager.addDocument("en", "hi", "greeting");
manager.addDocument("en", "hey you", "greeting");
manager.addDocument("en", "yo", "greeting");
manager.addDocument("en", "bye", "greeting.bye");
manager.addDocument("en", "Catch you later", "greeting.bye");
manager.addDocument("en", "family issues", "family.law");
manager.addDocument("en", "personal Injury ", "injury.law");
manager.addDocument("en", "met an accident ", "injury.law");
manager.addDocument("en", "criminal attack", "criminal.law");
manager.addDocument("en", "business cheat", "business.law");
manager.addDocument("en", "education problem", "education.law");
manager.addDocument("en", "real estate agreement", "real.law");
manager.addDocument("en", "Thank you", "thank");
//add answers
manager.addAnswer("en", "greeting", "Hey");
manager.addAnswer("en", "greeting", "Hey there");
manager.addAnswer("en", "greeting", "Hi");
manager.addAnswer("en", "greeting", "yo whatsup?");
manager.addAnswer("en", "greeting.bye", "see you soon!");
manager.addAnswer("en", "thank", "You are Welcome!");
manager.addAnswer(
  "en",
  "family.law",
  "please navigate to family law page from practices for more details"
);
manager.addAnswer(
  "en",
  "injury.law",
  "please navigate to personal Injury Details law page from practices for more details"
);
manager.addAnswer(
  "en",
  "criminal.law",
  "please navigate to criminal law page from practices for more details"
);
manager.addAnswer(
  "en",
  "business.law",
  "please navigate to business law page from practices for more details"
);
manager.addAnswer(
  "en",
  "education.law",
  "please navigate to education law page from practices for more details"
);
manager.addAnswer(
  "en",
  "real.law",
  "please navigate to real estate law page from practices for more details"
);
//train model
manager.train().then(async () => {
  manager.save();
  //route and handler
  let response = await manager.process("en", "met an accident");
  console.log(response);
});
// manager.train().then(async () => {
//   manager.save();
//   //route and handler
//   app.get("/bot", async (req, res) => {
//     let response = await manager.process("en", req.query.message);
//     res.send(response.answer || "Please Rephrase");
//   });

//   app.listen(3034);
// });
