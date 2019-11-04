/*
流的类型？ 4种
readable stream  可读流   writeable  stream 可写流
duplex   双工流（可读可写）  Transform stream 转换流
数据的压缩 zlib

*/

var fs = require("fs");
// 压缩模块  zlib
var zlib = require("zlib");
var readStream = fs.createReadStream("./1.txt");
var writeStream = fs.createWriteStream("./1.txt.gz");
// 流支持链式操作  zlib.createGzip()创建压缩包
// 先创建压缩然后再把文件放进去
readStream.pipe(zlib.createGzip()).pipe(writeStream)