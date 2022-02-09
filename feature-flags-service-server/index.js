const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

let config = { "new.logo": false, "new.button": false };

app.get("/config", (req, res) => {
  console.log(`Sending config...`);
  res.json(config);
});

app.post("/create/:id", (req, res) => {
  const { id } = req.params;
  config = { ...config, [id]: false };

  console.log(`${id} created`);

  res.json(config);
});

app.patch("/:id/:boolean", (req, res) => {
  const { id } = req.params;
  const boolean = req.params.boolean === "true";
  config = { ...config, [id]: boolean };

  console.log(`${id} changed to ${boolean}`);

  res.json(config);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  delete config[id];
  res.json(config);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
