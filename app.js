const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

let arr = [];
var example = "working";
app.get("/",function(req,res){
    res.render("list",{task:arr});
})

app.post("/",function(req,res){
    const task = req.body.task;
    if(task!=""){
        arr.push(task);
    }
    res.redirect("/")
})

const port = process.env.PORT || 3000;

app.listen(port,function(req,res){
    console.log("Server Started");
})