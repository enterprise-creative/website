const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rom-tool", (req, res) => {
  res.render("rom-tool");
});

app.get("/survey-tool", (req, res) => {
  res.render("survey-tool");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
