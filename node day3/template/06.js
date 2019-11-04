var http = require("http");
var ejs = require("ejs");
var fs = require("fs")
http.createServer((req,res)=>{

// 主要：： render  渲染  第一个参数代表的是模板  第二个参数代表的是数据
// compile 编译    模板str  第二个参数是数据
// template  模板
// 标签
/*
<%%>流程控制标签
<%=%>输出
<%#%>注释
<%_ %>去除前面的空格
<% _%>去除后面的空格 
<%-%>语句解析  作用：转译结构到模板
<include /> 包含

*/
fs.readFile('./view/index.ejs',(err,data)=>{
    var template = data.toString();
    var list = ["vue","react","node"]
    var result = ejs.render(template,{list:list})
    // response响应前端请求
    res.end(result)
})
// var data = ejs.render("./view/index.ejs",list)

}).listen(3000)