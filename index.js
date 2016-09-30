var express = require('express');
var app = express();


// 接收(响应)请求,而不是发出请求,浏览器(客户端)发出请求.
// 读取所有文章
app.get('/posts',function(req,res){
  res.send('GET/posts'+'\n')
  console.log("GET/posts2")
})
//更新一篇文章
app.put('/posts/:id',function(req,res){
  res.send('PUT/posts/:id'+'\n')
  console.log("PUT/posts/:id")
})

//发布一篇文章
app.post('/posts/',function(req,res){
  res.send('POST/posts'+'\n')
  console.log("POST/posts")
})

//删除一篇文章
app.delete('/posts/:id',function(req,res){
  res.send('DELETE/posts/:id'+'\n')
  console.log("DELETE/posts/:id")
})


app.listen(3000,function(){
  console.log('running on port 3000...')
})
