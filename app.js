//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
console.log(date);
const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

var items = [];
var workItem = [];


app.get("/", function(req, res) {
  let day=date.getDate();
  res.render("list", {
    day: day,
    newItem: items
  });
});


app.post("/addTodo", (req, res) => {
  let item = req.body.addItem;
  if (req.body.Add === "Work") {
    workItem.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", {
    day: "Work list",
    newItem: workItem
  });
});

app.post("/work", (req, res) => {
  let item = rq.body.addItem;
  workItem.push(item);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, function() {
  console.log("port number 3000");
});
