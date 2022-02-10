import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { initialflagsState } from "./initialflagsState";
import { createFlag, getClientConfig } from "./utils";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let flagsState = { ...initialflagsState };

app.post("/config", (req, res) => {
  const attributes = req.body;

  res.json(getClientConfig(flagsState, attributes));
});

app.get("/back-office-config", (req, res) => {
  res.json(flagsState);
});

app.patch("/:id/:attribute/:boolean", (req, res) => {
  const { id, attribute } = req.params;
  const boolean = req.params.boolean === "true";

  if (attribute === "globally") {
    flagsState = {
      ...flagsState,
      [id]: { ...flagsState[id], globally: boolean },
    };
  }

  console.log(`${id} changed to ${boolean}`);

  res.json(flagsState);
});

app.post("/create/:id", (req, res) => {
  const { id } = req.params;
  flagsState = { ...flagsState, [id]: createFlag() };

  console.log(`${id} created`);

  res.json(flagsState);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  delete flagsState[id];
  res.json(flagsState);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
