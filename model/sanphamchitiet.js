var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var Sanphamchitiet = new Schema({
  name 			:  String,
  nameKhongDau	: String,
  img 			: String,
  cateId 		: String,
  des 			: String,
  price 		: Number,
  st 			: Number


},{collection : 'CHI_TIET_SAN_PHAM'});

module.exports = mongoose.model('CHI_TIET_SAN_PHAM', Sanphamchitiet);
