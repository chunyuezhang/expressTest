



var mongoose = require('mongoose');
// 指定数据库chunyuedb，每个项目有一个数据库
mongoose.connect('mongodb://localhost:27017/chunyuedb');


var db = mongoose.connection;
// db.on('  error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   var catSchema = mongoose.Schema({
//     name: String
//   });
//   var cat = mongoose.model('cat',catSchema);
//   var kitty = new cat({ name: 'HelloKitty'});
//   console.log(kitty.name);
//   kitty.save()
//
// });


db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    password:Number,
    age:Number
  });
  var User = mongoose.model('User',userSchema);
  var userone = new user({ name: 'zhangsan',password:111,age:12});
  var usertwo = new user({ name: 'lisi',password:222,age:20});
  var userthree = new User({ name: 'wangwu',password:333,age:17});

// 改
userthree.name = "wanger";
userthree.name = "wanger2";
userthree.name = "wanger3";
userthree.name = "wanger4";
userthree.save();

User.findById({_id: '57ecbcdf4d95146106254fe0'}, function(err, user) {
    user.name = 'rrrrr';
    user.save(function(err){
      console.log('更新了！')
    });
  });

// 删除 remove
User.findById({_id: '57eccac35e7e320f937214c1'}, function(err, user) {
    user.remove(function(err){
      console.log('删除了！')
      User.find().exec(function(err, users) {
        异步执行
        console.log(users);
      });
    });
  });


console.log("我先出来了")


// 这个不行
// User.findOne({password:444}, function(err, user)


  console.log(user.find());

  // 异步执行
  user.find().exec(function(err,users){
    console.log(users);
  })

});
