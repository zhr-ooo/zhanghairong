var http = require("http");
var fs = require("fs");
var art = require("art-template")
http.createServer((req,res)=>{
    if(req.url == '/favicon.ico'){
        return
    }
    fs.readFile("./status/index.art",(err,data)=>{
 
      // 获取art-template模板
    var template = data.toString()//buffer
    // render  第一个模板   第二个数据
    var list = ['tom','jack','ros']
   var htmlData = art.render(template,{a:list})
  
    res.end(htmlData)
})
}).listen(3000)