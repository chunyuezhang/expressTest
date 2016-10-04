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
app.get('/aa',function(req,res){
  var page ="<form method='post' action='/posts'>"+
            "<input type='text' name='title'/>"+
            "<input type='submit'>"+
            "</form>"
  res.send(page)
})
// 这是应该让用户看到的页面,一条路由只对应一个响应,那么问题来了...重定向
app.get('/posts', function(req, res) {
  Post.find().sort().exec(function(err, posts) {
      res.send(posts)
  });
})


//此路由不是用来返回页面,只是用来进行数据库保存的
app.post('/posts/',function(req,res){
  var post = new Post({
    title:req.body.title
  })
  // 异步操作,所有耗时的都执行异步操作
  post.save(function(){
    console.log('saved!');
  })
  res.redirect('/posts')
})


app.listen(3000,function(){
  console.log('running on port 3000...')
})
