//获取文件路径
var path = require("path");
// console.log(path.resolve('D:\红HB\jsv\阶段4\node day1',"./aa")); // 解析成正确的路径
// console.log(path.normalize('D:\红HB\jsv\阶段4\node day1'))    将路径规范化
// console.log(path.isAbsolute('D:\红HB\jsv\阶段4\node day1'))    判断是否是绝对路径
// console.log(path.join('/aa','/sss','/vv','//bb'))  按照特定的标点分隔符进行路径的拼接从而形成正确的路径
console.log(path.dirname('D:\红HB\jsv\阶段4\node day1'))  //返回目录名称
// console.log(path.basename('D:\红HB\jsv\阶段4\node day1'))  返回当前目录
// console.log(path.extname('D:\红HB\jsv\阶段4\node day1/2.txt'))  获取文件后缀名