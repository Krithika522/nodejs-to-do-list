
import express from "express";
import bodyParser from "body-parser";
import { latestDate } from "./date.js";
import { workHeading } from "./date.js";


const app = express();
const portNum = 3000;

const items = ["Buy Car","Study node js"];
const workItems = ["Buy Groceries"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

 app.get("/", (req, res) => {
  let currentDay = latestDate();
  res.render("list.ejs", {listTitle: currentDay, taskList: items });
});

app.post("/", (req, res) =>{
   console.log(req.body);

  let taskEntered =  req.body["taskName"];

   if(req.body.list === "Work"){
    workItems.push(taskEntered);
    res.redirect("/work");
   }else{
      items.push(taskEntered);
      res.redirect("/")
   }

});

app.get("/work", (req, res) => {
 let titles = workHeading();
  res.render("list.ejs", {listTitle: titles, taskList: workItems});
});





app.listen(portNum, () => {
    console.log(`Server started on port ${portNum}`);
});




