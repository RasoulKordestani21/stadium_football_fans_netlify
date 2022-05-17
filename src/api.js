const express = require("express");
const { route } = require("express/lib/application");
const serverless = require("serverless-http");
const se= require("")

const app = express();

const router = express.Router();

route.get("/", (req, res) => {
  res.json({
    hello: "hi"
  });
});

app.use("/.netlify/functions/api", router);

// module.exports;
module.exports.handler = serverless(app);
