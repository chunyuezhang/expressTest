// 这里写专门和mongoose相关的代码
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title:String
  }
)



// 这里的Post的P一定要大写,随后自动变成post,然后再加s,即posts.model相当于杯子,PostSchema定义杯子的形状
module.exports = mongoose.model('Post',PostSchema);
