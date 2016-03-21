var db = require('../config/db');

exports.list = function(req, res){
  var collection = db.get().collection('posts');
  collection.find({}).toArray(function(err, documents){
    res.render('posts/list', {posts: documents});
  });
};
exports.form = function(req, res){
  res.render('posts/form');
};
exports.create = function(req, res){
  var collection = db.get().collection('posts');
  collection.insert({
    name: req.body.name ,
    author: req.body.author ,
    category: req.body.category ,
    content: req.body.content ,
    image: req.body.image ,
    date: req.body.date
  });
  res.redirect('/posts');
};
