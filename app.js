const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Containerized REST API is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Nandini" },
    { id: 2, name: "DevOps API" }
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});