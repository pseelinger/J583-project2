// Set up the express server for ejs
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./config/db');
var posts = require('./controllers/posts')
var url = process.env.MONGOLAB_URI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//Posts List Page
app.get( '/', posts.list);
app.get('/posts/categories/:id', posts.categories);
//Post Creation Page
app.get('/post/new', posts.form)
app.post('/posts', posts.create);
//Post's Update Page
app.post('/posts/edit/:id', posts.update);
app.get('/posts/edit/:id', posts.show);
app.get('/posts/delete/:id', posts.remove);
//Post's Page on Site
app.get('/posts/:id', posts.display);
// Connect to the MongoDB database
db.connect(url, function(){
  console.log("MongoDB Connected");
  app.listen(process.env.PORT || 8080, function(){
    console.log("Express server started");
  });
});
