const express = require("express");
const path = require("path");
const app = express();
const todoController = require("./controller/todoController");
//setting view engine i.e ejs, pug,handlebar
app.set("view engine", "ejs");
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//serving static files
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact", { data: req.query });
});
app.post("/contact", (req, res) => {
  console.log(`req.body`, req.body);
  res.json(req.body);
  // res.redirect();
  // res.render("contact", { data: req.query });
});
app.get("/user/:name", (req, res) => {
  res.status(200).send(`<h3>Hi,${req.params.name} </h3>`);
});
app.get("/profile", (req, res) => {
  console.log(`req.query`, req.query);
  const data = req.query;
  res.render("profile", { data });
});
app.get("/readme", (req, res) => {
  res.sendFile(__dirname + "/readme.html");
});
todoController(app);
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
