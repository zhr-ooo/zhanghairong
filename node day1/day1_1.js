// 解决乱码
var http = require("http")
http.createServer((req,res)=>{
    //  设置请求响应头   content-type 文本类型   text/html   text/plain文本   image/jepg图片
res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
res.end("中国")  //必须写在最后面

}).listen(3000)