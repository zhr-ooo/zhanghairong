var http = require("http")
var fs = require("fs")
var form = require("formidable")
var path = require("path")
var sd = require("silly-datetime")
http.createServer((req, res) => {
    if (req.url == "/dopost") {
        var fm = form.IncomingForm()
console.log(fm)
        fm.uploadDir = "./uploads"
        fm.parse(req, function (err, fields, files) {
            var low = files.pic.path
            var extname = path.extname(files.pic.name)
            console.log(extname)
            var time = sd.format(new Date(), "YYYYMMDDHHmmss")
            var fanishon = "./uploads/" + time + extname
            fs.rename(low, fanishon, (err) => {
                if (err) throw err
            })
            res.end("success")
        })
    }
}).listen(3000)