// 查询字符串
var querystring = require('querystring')
// var obj = querystring.parse('name=tom&sex=0')
// var obj = querystring.stringify({name: 'tom', sex: '0'})
// var obj = querystring.escape("name = 李威威")
var  obj = querystring.unescape('name%20%3D%20%E6%9D%8E%E5%A8%81%E5%A8%81')
console.log(obj)