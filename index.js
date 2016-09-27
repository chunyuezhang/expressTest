// console.log("Hello Express")
var express = require('express');
var app = express();

// 说明：localhost:3000/ 后输入什么浏览器就出现对应的res.send里的语句，命令行就输入console.log里的语句。
// app.get('/peter',function(req,res){
//   res.send('Hello Express')
//   console.log("Hello peter")
// })
// app.get('/ppp',function(req,res){
//   res.send('Hello ppppp')
//   console.log("Hello ppp")
// })

// 说明：localhost:3000/ 后输入什么就出现对应的信息，如localhost:3000/index.html ,浏览器就会出现Index.html
// app.get('/index.html',function(req,res){
//   var page = "<html>"+"<body>"+"<h1>Index.Index</h1>"+"</body>"+"</html>"
//   res.send(page)
// })
// app.get('/about.html',function(req,res){
//   var page = "<html>"+"<body>"+"<h1>About.html</h1>"+"</body>"+"</html>"
//   res.send(page)
// })

// 说明：localhost:3000/后输入任意值，浏览器就会显示这个值+的购物车，如：localhost:3000/chunyue,浏览器出现：chunyue的购物车
// app.get('/:name',function(req,res){
//   var username = req.params.name;
//   var page =
//   "<html>"+
//   "<body>"+
//   "<h1>"+username+ "的购物车" +"</h1>"+
//   "</body>"+
//   "</html>"
//   res.send(page)
// })

// 说明：post请求，命令行出现a POST request received +name,如：localhost:3000/chunyue111  命令行显示 a POST request received chunyue111
app.post('/:name',function(req,res){
  res.send("a POST request received"+' '+req.params.name+'\n')
})





app.listen(3000,function(){
  console.log('running on port 3000...')
})
