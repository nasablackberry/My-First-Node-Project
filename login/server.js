const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT||3000;

app.set('view engine','ejs')

//load static assets
app.use('/static',express.static(path.join(__dirname,'public')))

//home route
app.get('/',(req,res)=>{
    res.render('base',{title:'Login Page'});
})

app.listen(port,()=>{console.log("Listening to the server on http://localhost.3000")})