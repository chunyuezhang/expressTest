var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/posts',function(req,res){
  console.log(req.body);
})

app.listen(3000,function(){
  console.log('running on port 3000...');
})
