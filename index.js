var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// 接收(响应)请求,而不是发出请求,浏览器(客户端)发出请求.
// 读取所有文章
app.get('/write',function(req,res){
  var page ="<form method='post' action='/posts2'>"+
            "<input type='text' name='title'/>"+
            "<input type='text' name='content'/>"+
            "<input type='submit'>"+
            "</form>"
  res.send(page)
  console.log("GET/posts2")
})

//发布一篇文章
app.post('/posts2/',function(req,res){
  //请注意:send 只能send一次.执行上面的这条
  res.send('The Blog content is'+': ' + req.body.content)
  res.send('The Blog title is'+': ' + req.body.title)
  console.log("POST/posts")
})


app.listen(3000,function(){
  console.log('running on port 3000...')
})
