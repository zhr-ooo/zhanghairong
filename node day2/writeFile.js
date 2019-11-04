var fs = require("fs")
var http = require("http")
http.createServer((req,res)=>{
    // 读文件 异步读取
    // fs.readFile('./1.txt',(err,data)=>{
    //     res.end(data)
    // })
    // 读文件 同步读取
    // var a = fs.readFileSync('./1.txt')
    // res.end(a)
// 写文件  writeFile  有文件是写入 没有文件是创建文件并写入
    // fs.writeFile('./1.txt','dsdstrtfd',(err)=>{
    //     if(err){
    //         throw err   //throw 只能抛出错误
    //     }
    //     res.writeHead(200,{'Content-type':"text/html;charest=utf-8"})
    //     res.end("写入成功")
    // })
    // 追加内容   {flag:a}  a==append
    // fs.appendFile('./2.txt','追加的内容',(err)=>{
    //     if(err)  throw err;
    //     res.end("append success")
    // })
    // 创建目录  mkdir    
    // fs.mkdir('./aa',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    // 创建文件 
    // fs.writeFile('./2.txt','newcontext',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    // 删除文件
    // fs.unlink('./2,txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    // 删除目录
    // fs.rmdir('./aa',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('successss')
    // })
    // 判断文件状态
    fs.stat('./static',(err,stats)=>{
        console.log(stats.isDirectory())  //查看目录(文件夹)
        // console.log(stats.isFile())    //查看文件（html，js，css）
         res.end('successss')
    })

//     fs.rename('./1.txt','./2.txt',(err)=>{  重命名
// if(err)  throw err
//     })
    // res.end("change name success")

    // 复制文件  fs.copyFileSync
    // 打开文件  fs.open
    // 关闭文件   fs.close
    // 1.判断当前目录（static）里面的内容是文件的是目录
    // 2.如果是目录，则把目录输出
}).listen(3000)