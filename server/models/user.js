var mongoose = require('mongoose')
//每个schema会映射到mongodb中的一个collection，它不具备操作数据库的能力
var userSchema = new mongoose.Schema({
  "userId":String,
  "userName":String,
  "userPwd":String,
  "orderList":Array,
  "cartList":[
    {"productId":String,
      "productName":String,
      "salePrice":String,
      "productImage":String,
      "checked":String,
      "productNum":String
    }
  ],
  "addressList":[
    {
      "addressId": String,
      "userName": String,
      "streetName": String,
      "postCode": Number,
      "tel": Number,
      "isDefault": Boolean
    }
  ]
});
//model是由schema生成的模型，可以对数据库的操作
module.exports = mongoose.model("User",userSchema);//第三个参数指定数据库中的集合的名字，若不加的，则抹默认取‘第一个参数s’的集合

