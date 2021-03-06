var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Post = require('./models/post');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//关闭同源策略(开放跨与共享)
var cors = require('cors');
app.use(cors());//使用中间键

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

app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
      res.json({posts:posts})
  })
})

app.get('/post/:id',function(req,res){
  Post.findOne({_id:req.params.id},function(err,doc){
    if (err) return res.send('出错了');
    res.json({post: doc})
  })
})

//此路由不是用来返回页面,只是用来进行数据库保存的
app.post('/posts',function(req,res){
  var post = new Post({
    title:req.body.title,
    category:req.body.category,
    content:req.body.content
  })
  // 异步操作,所有耗时的都执行异步操作
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  })
  res.json({ message:"成功!" })
})

// ------------------test------------------
test.post('/tests',function(req,res){
  var test = new Test({
    title:req.body.title,
    content:req.body.content
  })
  // 异步操作,所有耗时的都执行异步操作
  post.save(function(err){
    if(err) return console.log(err);
    console.log('test data saved!');
  })
  res.json({ message:"成功!" })
})

// --------------------end test-----------------------

app.listen(3000,function(){
  console.log('running on port 3000...')
})
