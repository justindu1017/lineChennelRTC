var express = require("express");
var line = require("@line/bot-sdk");
var cfenv = require("cfenv");

var app = express();

var config = {
  channelAccessToken:
    "qhvAHo0cYBwhR/KUpSonpm+GpjqBce57CAbU6iuqQVVfhuka4WtyMXRHNK+dQHz7fjZ3oTDi9wmq1GJ+pBsH+4C3kU6uH2zRAU6pU1cF9eMVkL483UotrmtvvI751BiiZf585d+C5sS1lq2LtEykcQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "da34878ed4190585033bc66ce6ba1bc5",
};

var client = new line.Client(config);
app.get("/", (req, res) => {
  // res.json(req);
  console.log(req.body);
});
app.post("/callback", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: "text", text: JSON.stringify(event) };
  // const echo = { type: "text", text: JSON.stringify(event) };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

var appEnv = cfenv.getAppEnv();

app.listen(appEnv.port, "0.0.0.0", function () {
  console.log("server starting on " + appEnv.url);
});
