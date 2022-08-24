import express from "express";
import fetch from "node-fetch";

const app = express();
app.get("/", async (req, res) => {
  const response = await fetch("http://example.com/");
  const text = await response.text();
  res.send(text);
});
app.listen(8080);
