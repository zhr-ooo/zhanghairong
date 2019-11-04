// 监控日志 readline (读取的监听日志)
var fs = require("fs");
var readline = require("readline");
var readStream = fs.createReadStream("./1.txt")

// console.log(readline)
// data  监听输入数据
// end   完成数据读取
// line  监听日志事件
var rl = readline.createInterface({
    // 监听输入数据
    input:readStream
})
// line  日志执行事件
rl.on("line",(linenum)=>{
    console.log(linenum)
    console.log(new Date()+'linenum执行')
})
// close 日志读取完成关闭
rl.on("close",()=>{
    console.log("监听数据完毕")
})