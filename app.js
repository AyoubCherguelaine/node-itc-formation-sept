
// *************************************************************
//this is welcome

/*
 var http = require('http');

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
 }).listen(8080);
*/
//************************************************************** */







/******************************************************************/
//about Modules



// const fun = require('./Function');

// fun.fun()
/*******************************************************************/



/* **********************************************************************************
file system 


Read files
Create files
Update files
Delete files
Rename files

*/ 

/*
 var http = require('http');
 var fs = require('fs');
 http.createServer(function (req, res) {
   fs.readFile('index.html', function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
     return res.end();
   });
 }).listen(8080);
*/
/************************************************************************************* */






/* *********************************************************************************
 routing using node
var http = require('http');
http.createServer(function (req, res) {
    if(req.url=="/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("you are in /");
        return res.end();
    }else{
        if(req.url=="/login"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("you are in login");
            return res.end();
        }
    }
}).listen(8080);

********************************************************************************
*/ 



/*

*********************************************************************************
express js welcome to hell

npm install express




const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("hello ");
})

app.get('login',(req,res)=>{
    res.send("you are in login man ")
})

app.listen(3000,()=>{
    console.log('connect in :3000/')
})



*******************************************************************
*/ 


/**
 * routing in express
 * 
 * 
 *  "npm install ejs"
 * 
 



 const express = require('express')
 const app = express()
 app.set('view engine', 'ejs');
 
 app.get('/',(req,res)=>{
     res.render("index")
 })
 
 app.get('/login',(req,res)=>{
    res.render("login")
 })
 */

 /**
     *  "npm install body-parser"
     * 
     * after post 
     * 
     * 
     */

 /*

  var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())


 app.post('/login',(req,res)=>{
    console.log(req.body)
    //res.end()

   
    res.redirect('/')
 })
 
 app.listen(3000,()=>{
     console.log('connect in :3000/')
 })
*/





/*

const express = require('express')
const app = express()
var bodyParser = require('body-parser')
   

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/login',(req,res)=>{
   res.render("login")
})



 app.post('/login',(req,res)=>{
    console.log(req.body)
    //res.end()

   
    res.redirect('/')
 })
 
 app.listen(3000,()=>{
     console.log('connect in :3000/')
 })

*/


 var session = require('express-session');
 const express = require('express')
const app = express()
var bodyParser = require('body-parser')


app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'keyboard cat'
  }));


  app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/login',(req,res)=>{
   res.render("login")
})



 app.post('/login',(req,res)=>{
    console.log(req.body)
    //res.end()

   
    res.redirect('/')
 })
 
 app.listen(3000,()=>{
     console.log('connect in :3000/')
 })
   