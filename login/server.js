const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT||3000;
app.use(bodyparser.json())
app.use(bodyParser.urlencoded({extended:true}))
//  app.use(session({
//     secret:'secret',
//     resave:"false",
//     saveUnitialized: true
//  }))
app.set('view engine','ejs')

//load static assets
app.use('/static',express.static(path.join(__dirname,'public')))

//home route
app.get('/',(req,res)=>{
    res.render('base',{title:'Login Page'});
})

app.listen(port,()=>{console.log("Listening to the server on http://localhost.3000")})
 