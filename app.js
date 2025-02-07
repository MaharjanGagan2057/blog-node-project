//this code is mandatory in every project
const express=require('express');
const app=express();

//fixing port constant to 3000
const port=3000;
app.listen(3000),()=>{
    console.log(`nodejs project is running on port $(port)`);
}


// telling node.js to set its view engine to ejs
app.set('view engine','ejs')

//Home page
app.get("/",(req,res)=>{
    res.render("home")
})

//about page
app.get("/about",(req,res)=>{
    res.render("about")
})
