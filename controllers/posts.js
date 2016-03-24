var db = require('../config/db');

exports.list = function(req, res){
  var collection = db.get().collection('posts');
  collection.find({}).toArray(function(err, documents){
    res.render('posts/list', {posts: documents});
  });
};
exports.show = function(req, res) {
    var collection = db.get().collection('posts');

    collection.find({"link": req.params.id}).limit(1).toArray(function(err, results) {
        res.render('posts/show', {posts: results[0]});
    });
};
exports.update = function(req, res) {
    var collection = db.get().collection('posts');

    //note about xss and sanitization
    collection.updateOne(
        {link: req.params.id},
        {
            $set: {
              name: req.body.name ,
              author: req.body.author ,
              category: req.body.category ,
              content: req.body.content ,
              image: req.body.image ,
              date: req.body.date ,
              link: req.body.link
            }
        }
    );

    res.redirect('/posts');
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
    date: req.body.date ,
    link: req.body.link
  });
  res.redirect('/posts');
};
exports.remove = function(req, res) {
    var collection = db.get().collection('posts');

    //note about xss and sanitization
    collection.removeOne({
        link: req.params.id
    });

    return res.redirect('/posts');
};
exports.display = function(req, res){
  var collection = db.get().collection('posts');

  collection.find({"link": req.params.id}).limit(1).toArray(function(err, results) {
      res.render('posts/display', {posts: results[0]});
  });
};

exports.categories = function(req, res){
  collection.find({"category": req.params.id}).toArray(function(err, results){
    res.render('posts/list', {posts: results});
  });
};
