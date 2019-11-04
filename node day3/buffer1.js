// buffer  二进制数据  缓存区  (把数据进行一个缓存)
/*
1、什么是buffer？
从类型上来说，就是一个类数组
从内存上来说，就是开辟的新内存空间
2、作用：
处理二进制数据  (目的是 解决数据传输过大)
3、案例：文件流（fs）   事件流    Tcp
4、buffer别名：缓存区（等待区）
5、什么是二进制数据？(以0b开头)   八进制（0）  十六进制（0x）
返回0和1
6、创建buffer：
new buffer()  已经废弃了
因为buffer是一个全局对象，所以它不需要通过require加载
buffer可以传输的类型？
string,Buffer,ArrayBuffer,Array,or Array-like Object
buffer下面的方法？
toJSON toString   slice  concat   length
字节  bit  byte
buffer的编码类型
utf8  base64(上传图片的时候用到  因为它安全，数据量比较轻)  hex  Ascii  unicode

buffer（缓存区）和cache（缓存）的区别？
buffer相当于临时居住地 而cache永久的家（需要自己手动清理掉）
*/

// 第一种定义buffer的方式
// Buffer.from（常用）  把字符串转buffer
// var buf = Buffer.from("node");
//<Buffer 6e 6f 64 65>
// console.log(buf)


// Buffer.alloc（常用）  返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf = Buffer.alloc(10)  //定义一个长度为10的数据的缓存区
// console.log(buf)

// Buffer.allocUnsafe 不安全，不推荐使用   未被初始化的buffer
// var buf = Buffer.allocUnsafe(10)
// console.log(buf)

// console.log(buf.toString("base64"))


// var buf1 = Buffer.alloc(10)
// var buf2 = Buffer.alloc(14)
// var buf3 = Buffer.alloc(18)
// console.log(Buffer.concat([buf1, buf2, buf3]))


var buf = Buffer.from("node");
console.log(buf.toJSON())