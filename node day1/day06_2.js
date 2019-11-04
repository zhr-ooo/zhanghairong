var http = require("http");
var url = require("url");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    // url.parse().query可以处理get请求
    // var result = 'http://localhost:5000/?username=zhr&password=123456'
    // var obj = url.parse(result,true)
    // console.log(obj)
    //  res.end()
//     var obj = url.parse(result);
//     var obj = url.format({
//         protocol: 'http:',
//         slashes: true,
//         auth: null,
//         host: 'localhost:5000',
//         port: '5000',
//         hostname: 'localhost',
//         hash: null,
//         search: '?username=zhr&password=123456',
//         query: [Object: null prototype] { username: 'zhr', password: '123456' },
//         pathname: '/',
//         path: '/?username=zhr&password=123456',
//         href: 'http://localhost:5000/?username=zhr&password=123456'

// })
var obj = url.resolve("http://localhost:5000","aa")//只能拼接一个
console,log(obj)
res.end()
}).listen(5000)