//this code is mandatory in every project
const express=require('express');
const { blogs } = require('./model/index');
const app=express();

//fixing port constant to 3000
const port=3000;
app.listen(3000),()=>{
    console.log(`nodejs project is running on port $(port)`);
}

// insertink or linking backend sql ,sequalize file of index.js to the main file app.js
require("./model/index")

// telling node.js to set its view engine to ejs
app.set('view engine','ejs')

// telling nodejs that data is comming form backend
app.use(express.urlencoded({extended : true}))
// app.use(express.json())

//Home page
app.get("/",(req,res)=>{
    res.render("home")
})

//about page
app.get("/about",(req,res)=>{
    res.render("about")
})

//contact page(inserting contact page)
app.get("/contact",(req,res)=>{
    res.render("contact")
})

// add blog page
app.get("/addBlog",(req,res)=>{
    res.render("addBlog")
})

// adding action on form from database
app.post("/addblog",async(req,res)=>{
    console.log(req.body)
    
// object desctucrting using ejs function
 const{title,subtitle,description} = req.body
    
 
 // inserting into blogs table  on backend need to await infront to run
 await blogs.create({
     title : title,
     subtitle: subtitle,
     description: description
    })
    res.send("Blog added sucessfully")
    
})