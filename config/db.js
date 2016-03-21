//Config file for MongoDB
var MongoClient = require('mongodb').MongoClient;

var state = {
  db: null
};

exports.connect = function(url, callback){
  MongoClient.connect(url, function(err, db){
    state.db = db;
    callback();
  });
};

exports.get = function(){
  return state.db;
}
exports.close = function(){
  state.db.close(function(err, result){
    state.db = null;
    callback();
  });
}
