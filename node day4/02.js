var express = require("express")
var app = express()
// get指代get请求
app.get('/get',(req,res)=>{
   res.send({'success':'ok','data':[{'name':'tom','age':12}]}) //接受字符转和对象  不能接受数字
})
app.post('/list',(req,res)=>{
   res.send({'success':'ok','data':[{'name':'tom','age':12}]})
})
// all代表的是所有
// 什么情况下会使用app.all   解答：控制全局的功能时需要使用all
app.all('/',(req,res)=>{
    res.send({'data':'请求数据'})
})
app.listen(3000)