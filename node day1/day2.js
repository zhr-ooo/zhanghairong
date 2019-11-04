//fs file system  文件系统
//require 加载
var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
    // 读文件
    fs.readFile('./1.txt',(err,data)=>{
        console.log(data.toString())
        res.end()
    })

}).listen(3000)