var express = require("express")
var app = express();
var session = require("express-session")
// 使用session中间件
app.use(session({
    secret:'safe',  //加密字符串
    name:"safe",   //获取客户端的id
    cookie:{maxAge:90000,httpOnly:true},
    resave:true,  //强制初始化
    saveUninitialized:true,  //保存未初始化的session

}))
// 获取session
// 如何清除session?
app.get("/",(req,res)=>{
    if(req.session.username){
        res.send('欢迎'+req.session.username+'回来')
    }else{
        res.send('未保存session')
    }
})
// 设置session
app.get('/send',(req,res)=>{
    var obj = req.query.username
    req.session.username=obj
    console.log(req.session.username)
    res.send("")
})
app.get("/out", (req, res) => {
    req.session.destroy();
    // res.redirect('/');
    res.send("注销成功")
})
app.listen(3000)