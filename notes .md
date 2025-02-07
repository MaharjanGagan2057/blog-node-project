## To start project:
1.create an folder an open in vs code
2.open cmd and command nmp init
3.create a new folder inside and name app.js and wiite this mandetory code:

const express=require('express');
const app=express();

const port=3000;
app.listen(3000),()=>{
    console.log(`nodejs project is running on port $(port)`);
}
4.npm install express /npm i express (after install check in package.json file  ) 
5.npm install nodemoon (after install check in package.json file )
6.npm start and see live changes in server and cmd of  currentproject
7. write in package.json file inside script : "start": "nodemon app.js"
8. npm install ejs (after install check in package.json file )
9.create a new 'views'  folder name all of letter in small letter must be this.






## Templating Enging(for dynamic content)
ejs.js

##semetric versioning (verson of any applications like node ,ejs games ets )  asken in interview
"major.minor.patch"= example = "3.1.2"(3 is major the first place ,1 is minor in second place,2 is patch in third place)

## Tips and Hacks
1.Auto Refresh page:
 <!-- to auto refresh page the time you want  set inside content inside head tag -->
    <meta http-equiv="refresh" content="0.2">

2.