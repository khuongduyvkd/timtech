var http = require("http"); // import thư viện http
var exp = require("express"); // inport thư viên express
var config = require("./config"); // import config
var mongoose = require('mongoose');

var app=exp();
var server = http.createServer(app);
app.use(exp.static("public")); // set thư mục public là thư mục dùng chung
app.set("view engine","ejs"); // set định dạng file view mặc định là đuôi .ejs
app.set("views","./views"); // set thư mục view có đường dẫn ...

var index = require('./routes/index');

// khởi tạo server với port lấy trong config
server.listen(config.webport,function (err) {
  if(err)
  {
    console.log(err);
    return;
  }
  console.log("Server running with port:"+config.webport);
})
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

app.use('/', index);
