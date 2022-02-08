const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const config = { "new.logo": false };

app.get("/config", (req, res) => {
  console.log(`Sending config...`);
  res.json(config);
});

app.post("/:id/:boolean", (req, res) => {
  const id = req.params.id;
  const boolean = req.params.boolean === "true";
  config[id] = boolean;
  console.log(`${id} changed to ${boolean}`);
  res.json(config);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
