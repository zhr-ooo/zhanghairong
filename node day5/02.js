var path = require("path");
var express = require("express")
var app = express()


var cookie = require("cookie-parser")
app.use(cookie())
var static = path.resolve(__dirname,"public")
app.use(express.static(static))
app.get('/',(req,res)=>{
    // console.log('首页中获取:'+req.cookies)
    res.send({'data':'login中的cookie为:'+req.cookies})
})
app.get('/login',(req,res)=>{
    var obj = req.query.username;
    res.cookie("username",obj,{maxAge:90000,httpOnly:true})
    res.send({'data':obj})
  
    // console.log(req)
})
app.get('/list',(req,res)=>{
    // console.log(req.cookies.cookiename)
    res.send()
})
app.listen(3000)