var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Post = require('./models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/chunyuedb');

var db = mongoose.connection;
// 报错
db.on('error', function() {
  console.log('error!')
});
// 报成功
db.once('open', function() {
  console.log('success!')
});

// 接收(响应)请求,而不是发出请求,浏览器(客户端)发出请求.
// 读取所有文章
app.get('/write',function(req,res){
  var page ="<form method='post' action='/posts2'>"+
            "<input type='text' name='title'/>"+
            "<input type='submit'>"+
            "</form>"
  res.send(page)
// res.redirect('http://baidu.com')
})
// 这是应该让用户看到的页面,一条路由只对应一个响应,那么问题来了...重定向
app.get('/posts/',function(req,res){
  // res.send('<h1>show this page</h1>')
  // res.redireact('http://baidu.com')
})

//此路由不是用来返回页面,只是用来进行数据库保存的
app.post('/posts2/',function(req,res){
  res.send('The Blog title is'+': ' + req.body.title)
  console.log("GET/posts222")
  var post = new Post({
    title:req.body.title
  })
  // 异步操作,所有耗时的都执行异步操作
  post.save(function(){
    console.log('saved!');
  })
})


app.listen(3000,function(){
  console.log('running on port 3000...')
})
