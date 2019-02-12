var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var Nhomsanpham = new Schema({
  ten_nhom 			:  String,
  ma_nhom	: String
},{collection : 'NHOM_SAN_PHAM'});

module.exports = mongoose.model('NHOM_SAN_PHAM', Nhomsanpham);
